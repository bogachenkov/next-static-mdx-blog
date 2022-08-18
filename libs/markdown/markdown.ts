import { bundleMDX } from 'mdx-bundler';
import { getArticlePathBySlug } from 'libs/articles';
import imageMetadata from './image';

const mdxOptions = (options: any) => {
  options.rehypePlugins = [...(options.rehypePlugins ?? []), imageMetadata];
  return options;
}

export const renderMarkdown = (
  markdownContent: string
) => {
  return bundleMDX({
    source: markdownContent || '',
    mdxOptions
  });
}

export const getParsedFileContentBySlug = (
  slug: string
) => {

  const postFilePath = getArticlePathBySlug(slug);

  return bundleMDX({
    file: postFilePath,
    mdxOptions
  });
};

export const getParsedFileByPath = (
  path: string
) => {
  return bundleMDX({
    file: path,
    mdxOptions
  });
}