import styled from 'styled-components';

export const StyledWave = styled.div`
  position: relative;
  height: 50px;

  & > svg {
    position: absolute;
    width: 100%;
    top: -6px;

    > path {
      fill: var(--color-header);
      transition: fill var(--theme-transition-duration);
    }
  }
`;