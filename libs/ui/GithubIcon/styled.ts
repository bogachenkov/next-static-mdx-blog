import styled from 'styled-components';

export const StyledGithubIcon = styled.svg`
  & path {
    fill: var(--color-icon);
  }

  button, a > & {
    cursor: pointer;
  }

  button:is(:hover, :focus-visible) > & path,
  a:is(:hover, :focus-visible) > & path {
    fill: var(--color-icon-hover);
  }
`;