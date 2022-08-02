import styled from 'styled-components';

export const StyledHomePageGrid = styled.div`
  @media screen and (min-width: 1024px) {
    display: grid;
    gap: 40px;
    grid-template-columns: 3fr 1fr;
  }
`;