import Badge from '@ui/Badge';
import Title from '@ui/Title';
import Link from 'next/link';
import React from 'react';
import { ArrowRight } from 'tabler-icons-react';
import { Article } from 'types/article';
import { StyledArticleExcerpt, StyledArticleReadMore, StyledArticlePreview } from './styled';

interface IArticlePreviewProps {
  article: Article;
}

const ArticlePreview:React.FC<IArticlePreviewProps> = ({
  article: {
    slug,
    title,
    excerpt
  }
}) => {
  return (
    <StyledArticlePreview>
      <Badge>NEW</Badge>
      <Title level={3}>{title}</Title>
      <StyledArticleExcerpt>
        {excerpt}
      </StyledArticleExcerpt>
      <Link href={`/articles/${slug}`} passHref>
        <StyledArticleReadMore>
          Read more <ArrowRight size={14} />
        </StyledArticleReadMore>
      </Link>
    </StyledArticlePreview>
  );
}

export default ArticlePreview;
