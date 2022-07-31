import { StyledArticleWrapLink } from '@ui/ArticleWrapLink/styled';
import { StyledTitle } from '@ui/Title/styled';
import styled from 'styled-components';

export const StyledArticlePreview = styled.article`
  width: 100%;
  max-width: 640px;

  * {
    line-height: 1.5em;
  }

  ${StyledTitle} {
    font-size: 2.4rem;
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
  font-size: 1.6rem;
  margin: 0;
  overflow-wrap: break-word;
  -webkit-font-smoothing: antialiased;
`;

export const StyledArticleReadMore= styled.button`
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 1em;
  color: var(--color-text);
  text-decoration: none;
`;
