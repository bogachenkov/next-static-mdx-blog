import { StyledTitle } from '@ui/Title/styled';
import styled from 'styled-components';

export const StyledNotFoundWrap = styled.div`
  min-height: calc(100vh - var(--header-height) - var(--body-padding));
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > ${StyledTitle} {
    margin: 0;
    line-height: 1.4;
  }
`;

export const GoHomeLink = styled.a`
  font-size: 2.4rem;
  font-weight: 500;
  color: var(--color-primary);
  margin-top: 2em;
`;