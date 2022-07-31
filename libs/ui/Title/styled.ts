import styled from 'styled-components';

export const StyledTitle = styled.h6`
  font-size: var(--title-size);
  font-weight: 700;
  color: var(--color-text);
  transition: color var(--theme-transition-duration);

  & > span {
    color: var(--color-primary);
  }
`;