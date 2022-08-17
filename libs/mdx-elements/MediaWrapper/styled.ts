import styled from 'styled-components';

export const StyledMediaWrapper = styled.span`
  display: block;
  position: relative;
  width: 100%;
  max-width: 860px;
  margin: 5rem auto;
  border-radius: 10px;
  aspect-ratio: 16 / 9;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 90%;
  }
`