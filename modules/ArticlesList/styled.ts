import { StyledArticleWrapLink } from '@ui/ArticleWrapLink/styled';
import { StyledTitle } from '@ui/Title/styled';
import styled from 'styled-components';

export const StyledArticlesList = styled.div`
  margin-bottom: 60px;
  
  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
  }

  & > ${StyledTitle} {
    text-transform: capitalize;
    margin: 0;
  }

  ${StyledArticleWrapLink} {
    margin-top: 40px
  }
`;