import React from 'react';
import { StyledArticleGrid } from './styled';

interface IArticleGridProps {
  children?: React.ReactNode;
}

const ArticleGrid:React.FC<IArticleGridProps> = (props) => {
  return (
    <StyledArticleGrid>
      { props.children }
    </StyledArticleGrid>
  );
}

export default ArticleGrid;
