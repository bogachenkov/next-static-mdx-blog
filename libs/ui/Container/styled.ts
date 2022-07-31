import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  max-width: calc(var(----container-size, 1102px) + (var(--container-padding) * 2));
  margin: 0 auto;
  padding: 0 var(--container-padding);
`;