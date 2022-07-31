import { StyledArticleWrapLink } from '@ui/ArticleWrapLink/styled';
import { StyledTitle } from '@ui/Title/styled';
import styled from 'styled-components';

export const StyledArticleCard = styled.article`
  width: 100%;

  * {
    line-height: 1.5em;
  }

  ${StyledTitle} {
    font-size: 2rem;
    font-weight: 600;
    margin: 0 0 .75em 0;
  }

  ${StyledArticleWrapLink} > & {
    cursor: pointer;
  }

  ${StyledArticleWrapLink}:is(:hover, :focus-visible) > & > h3 {
      color: var(--color-primary);
    }
`;

export const StyledArticleExcerpt = styled.p`
  font-size: 1.5rem;
  margin: 0;
  overflow-wrap: break-word;
  -webkit-font-smoothing: antialiased;
`;

export const StyledArticleDate = styled.p`
  font-size: 1.1rem;
  margin: 0;
  font-weight: 300;
`;