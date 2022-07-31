import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { getParsedFileContentBySlug, MarkdownRenderingResult } from "@markdown";
import { mdxElements } from "@mdx-elements";
import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from "react";
import Container from "@ui/Container";
import { getAllArticlesSlugs } from "libs/articles";
import HomeHero from "@modules/HomeHero";
import Title from "@ui/Title";
import Head from "next/head";
import ArticleWrapper from "@modules/ArticleWrapper";
import ArticleGrid from "@modules/ArticleGrid";
import ArticleMeta from "@modules/ArticleMeta";
export interface UrlParams extends ParsedUrlQuery {
  slug?: string;
};

export function Article({ frontMatter, code }: MarkdownRenderingResult) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  const articleCategory = {
    label: frontMatter.category,
    uri: frontMatter.categoryUri
  };

  return (
    <div>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <HomeHero>
        <Title level={1} size={32}>
          {frontMatter.title}
        </Title>
      </HomeHero>
      <Container>
        <ArticleGrid>
          <ArticleMeta category={articleCategory} date={frontMatter.date} />
          <ArticleWrapper>
            {/* @ts-ignore */}
            <Component components={mdxElements} />
          </ArticleWrapper>
        </ArticleGrid>
      </Container>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths<UrlParams> = async () => {

  const articles = getAllArticlesSlugs();
  const paths = articles.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false
  }
};

export const getStaticProps: GetStaticProps = async ({
  params
}: {
  params?: UrlParams;
}) => {
  if (!params?.slug) return {
    redirect: {
      statusCode: 404,
      destination: '/',
      permanent: false
    }
  };

  const { code, frontmatter } = await getParsedFileContentBySlug(
    params?.slug || ''
  );

  return {
    props: {
      frontMatter: frontmatter,
      code
    } as MarkdownRenderingResult
  }
}

export default Article;
