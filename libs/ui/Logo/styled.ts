import styled from 'styled-components';

export const StyledLogo = styled.a`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  text-decoration: none;

  @media screen and (min-width: 768px) {
    font-size: 2.4rem;
  }

  & > span {
    color: var(--color-primary)
  }
`;