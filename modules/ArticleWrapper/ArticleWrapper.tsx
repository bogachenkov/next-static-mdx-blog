import React from 'react';
import { StyledArticleWrapper } from './styled';

interface IArticleWrapperProps {
  children?: React.ReactNode;
}

const ArticleWrapper:React.FC<IArticleWrapperProps> = (props) => {
  return (
    <StyledArticleWrapper>
      {props.children}
    </StyledArticleWrapper>
  );
}

export default ArticleWrapper;
