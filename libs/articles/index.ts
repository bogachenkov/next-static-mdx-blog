import { join } from "path";
import fs from 'fs';
import { getParsedFileByPath } from "@markdown";
import { Article } from "types/article";
import { Category } from "types/category";

const POSTS_PATH = join(process.cwd(), process.env.articleMarkdownPath as string);

export const getArticlePathBySlug = (slug: string) => {
  return join(POSTS_PATH, `${slug}.mdx`);
}

export const getAllArticlesSlugs = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.mdx?$/, ''))
}

export const getAllArticles = async ():Promise<Article[]> => {
  const slugs = getAllArticlesSlugs()
    .map(slug => ({
      path: getArticlePathBySlug(slug),
      slug
    })
  );

  const data = await Promise.all(
    slugs.map(async ({ path, slug }) => ({
      ...await getParsedFileByPath(path),
      slug
    }))
  );

  return data.map(({ code, frontmatter, slug }) => {
    return ({
      slug,
      date: frontmatter.date as string,
      title: frontmatter.title,
      excerpt: frontmatter.excerpt,
      category: frontmatter.category,
      categoryUri: frontmatter.categoryUri,
      content: code
    })
  });
}

export const getAllCategories = async (articles?: Article[]):Promise<Category[]> => {
  const articlesList = articles ?? await getAllArticles();
  const categoriesList = articlesList.map(({ category, categoryUri }) => ({
    label: category,
    uri: categoryUri
  }));
  return Array.from(categoriesList.reduce((map, obj) => map.set(obj.uri, obj), new Map()).values());
}

export const getArticlesByCategoryUri = async (catUri: string) => {
  const articles = getAllArticles();
  return (await articles).filter(a => a.categoryUri === catUri);
}