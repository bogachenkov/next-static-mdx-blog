import styled from 'styled-components';

export const StyledTag = styled.div`
  display: inline-block;
  position: relative;
  color: var(--color-primary);
  font-size: 1.2rem;
  font-weight: 500;
  padding: .6em .9em;
  cursor: pointer;
  /* text-transform: capitalize; */
`;

export const StyledTagHoverable = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-header);
  border-radius: .5em;
  transition: background-color var(--theme-transition-duration), transform .3s;
  transform: scale(.95);
  transform-origin: center center;

  ${StyledTag}:is(:hover, :focus-visible) > & {
    transform: scale(1.05);
  }
`;