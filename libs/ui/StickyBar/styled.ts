import styled from 'styled-components';

export const StyledStickyBar = styled.div`
  height: calc(var(--header-height) + 1px);
  position: sticky;
  top: -1px;
  z-index: 1;
  background-color: var(--color-body);
  transition: background-color var(--theme-transition-duration);
`;