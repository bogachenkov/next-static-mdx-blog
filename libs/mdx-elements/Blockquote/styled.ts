import styled from 'styled-components';
import { Quote } from 'tabler-icons-react';

export const StyledBlockquote = styled.blockquote`
  border-left: 4px solid var(--color-primary);
  border-radius: 5px;
  background-color: var(--color-header);
  margin-left: 0;
  margin-right: 0;
  padding: 1.25em 3em;
  position: relative;
`;

export const StyledQuote = styled(Quote)`
  color: var(--color-primary);
  opacity: .7;
  position: absolute;
  top: 1.25em;
  right: 1.25em;
`