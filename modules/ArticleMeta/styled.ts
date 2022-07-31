import styled from 'styled-components';

export const StyledArticleMeta = styled.aside`
  
  & > *:first-child {
    margin-top: 0;
  }
`;

export const StyledArticleDate = styled.p`
  font-size: 1.2rem;
  font-weight: 400;

  & > b {
    font-weight: 500;
    line-height: 2em;

    &:first-of-type {
      color: var(--color-primary);
    }
  }
`;

export const StyledArticleBreadcrumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  padding-bottom: 1.5em;
  border-bottom: 1px solid var(--color-grayLight);
  margin-bottom: 1.5em;

  & a {
    font-size: 1.2rem;
    line-height: 1.5;
    text-decoration: none;
    color: var(--color-text);
    font-weight: 500;

    &:hover {
      color: var(--color-primary);
    }
  }
`;