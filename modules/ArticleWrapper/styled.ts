import styled from 'styled-components';

export const StyledArticleWrapper = styled.article`
  font-size: 1.6rem;
  overflow-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  line-height: 1.5em;

  & > *:first-child {
    margin-top: 0
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 2.5em 0 1.25em;
    &::first-letter {
      color: var(--color-primary);
    }
  }
`;