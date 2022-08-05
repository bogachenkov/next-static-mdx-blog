import Badge from '@ui/Badge';
import Title from '@ui/Title';
import Link from 'next/link';
import React from 'react';
import { ArrowRight } from 'tabler-icons-react';
import { Article } from 'types/article';
import { StyledArticleExcerpt, StyledArticleReadMore, StyledNewestArticle } from './styled';

interface INewestArticleProps {
  article: Partial<Article>;
}

const NewestArticle:React.FC<INewestArticleProps> = ({
  article: {
    slug,
    title,
    excerpt
  }
}) => {
  return (
    <StyledNewestArticle>
      <Badge>NEW</Badge>
      <Title level={3}>{title}</Title>
      <StyledArticleExcerpt data-testid='article-excerpt'>
        {excerpt}
      </StyledArticleExcerpt>
      <Link href={`/articles/${slug}`} passHref>
        <StyledArticleReadMore>
          Read more <ArrowRight size={14} />
        </StyledArticleReadMore>
      </Link>
    </StyledNewestArticle>
  );
}

export default NewestArticle;
