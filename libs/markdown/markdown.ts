import { bundleMDX } from 'mdx-bundler';
import { getArticlePathBySlug } from 'libs/articles';

export const renderMarkdown = (
  markdownContent: string
) => {
  return bundleMDX({
    source: markdownContent || ''
  });
}

export const getParsedFileContentBySlug = (
  slug: string
) => {

  const postFilePath = getArticlePathBySlug(slug);

  return bundleMDX({
    file: postFilePath
  });
};

export const getParsedFileByPath = (
  path: string
) => {
  return bundleMDX({
    file: path
  });
}