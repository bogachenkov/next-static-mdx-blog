import React from 'react';
import { Article } from 'types/article';
import { StyledArticleCard, StyledArticleDate, StyledArticleExcerpt } from './styled';
import dayjs from 'dayjs';
import Title from '@ui/Title';

const ArticleCard:React.FC<Partial<Article>> = ({
  title,
  date,
  excerpt
}) => {
  return (
    <StyledArticleCard>
      <StyledArticleDate data-testid="article-date">{dayjs(date).format('DD MMMM YYYY')}</StyledArticleDate>
      <Title level={3}>{title}</Title>
      <StyledArticleExcerpt data-testid='article-excerpt'>
        {excerpt}
      </StyledArticleExcerpt>
    </StyledArticleCard>
  );
}

export default ArticleCard;
