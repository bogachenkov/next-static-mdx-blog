import styled from 'styled-components';

interface StyledProps {
  align: string;
  justify: string;
  gap: number;
}

export const StyledGroup = styled.div<StyledProps>`
  display: flex;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  gap: ${({ gap }) => `${gap}px`};
`;