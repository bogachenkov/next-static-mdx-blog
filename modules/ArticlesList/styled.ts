import { StyledArticleWrapLink } from '@ui/ArticleWrapLink/styled';
import { StyledTitle } from '@ui/Title/styled';
import styled from 'styled-components';

export const StyledArticlesList = styled.div`
  & > ${StyledTitle} {
    text-transform: capitalize;
    margin: 0;
  }

  ${StyledArticleWrapLink} {
    margin-top: 40px
  }
`;