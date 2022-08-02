import styled from 'styled-components';

export const StyledHero = styled.header`
  // background-color: #E7F5FF;
  background-color: var(--color-header);
  padding: calc(30px + var(--header-height)) 0 30px;
  margin-top: -80px;
  transition: background-color var(--theme-transition-duration);

  @media screen and (min-width: 768px) { 
    padding: calc(45px + var(--header-height)) 0 60px;
  }

  @media screen and (min-width: 1024px) { 
    padding: calc(60px + var(--header-height)) 0 90px;
  }
`;