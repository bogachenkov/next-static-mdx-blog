import Link from 'next/link';
import React from 'react';
import { StyledArticleWrapLink } from './styled';

interface IArticleWrapLinkProps {
  children?: React.ReactNode;
  slug: string;
}

const ArticleWrapLink:React.FC<IArticleWrapLinkProps> = ({ slug, children }) => {
  return (
    <Link href={`/articles/${slug}`} passHref>
      <StyledArticleWrapLink>
        {children}
      </StyledArticleWrapLink>
    </Link>
  );
}

export default ArticleWrapLink;
