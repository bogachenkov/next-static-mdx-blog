import { StyledGithubIcon } from '@ui/GithubIcon/styled';
import styled from 'styled-components';

export const StyledHeader = styled.nav`
  height: var(--header-height);
  background-color: transparent;
  backdrop-filter: blur(6px);
  position: sticky;
  z-index: 99;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &  ${StyledGithubIcon} {
    
    height: 28px;
    width: 28px;

    @media (hover: none) {
      height: 22px;
      width: 22px;
    }
  }
`;