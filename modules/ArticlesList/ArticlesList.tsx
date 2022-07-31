import ArticleCard from '@ui/ArticleCard';
import ArticleWrapLink from '@ui/ArticleWrapLink';
import Title from '@ui/Title';
import React from 'react';
import { Article } from 'types/article';
import { StyledArticlesList } from './styled';

interface IArticlesListProps {
  articles: Article[];
  noTitle?: boolean;
}

const ArticlesList:React.FC<IArticlesListProps> = ({ articles, noTitle = false }) => {
  return (
    <StyledArticlesList>
      { !noTitle && <Title><span>L</span>atest<span>.</span></Title> }
      {
        articles.map(a => (
          <ArticleWrapLink key={a.slug} slug={a.slug}>
            <ArticleCard {...a} />
          </ArticleWrapLink>
        ))
      }
    </StyledArticlesList>
  );
}

export default ArticlesList;
