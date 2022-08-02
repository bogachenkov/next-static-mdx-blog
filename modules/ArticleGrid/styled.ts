import styled from 'styled-components';

export const StyledArticleGrid = styled.div`
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 30px;
  }
`;