import styled from 'styled-components';

export const StyledHero = styled.header`
  // background-color: #E7F5FF;
  background-color: var(--color-header);
  padding: calc(60px + var(--header-height)) 0 90px;
  margin-top: -80px;
  transition: background-color var(--theme-transition-duration);
`;