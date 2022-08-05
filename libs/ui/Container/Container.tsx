import React from 'react';
import { StyledContainer } from './styled';

interface IContainerProps {
  children?: React.ReactNode;
  size?: number;
}

const Container:React.FC<IContainerProps> = ({ size, children }) => {
  return (
    <StyledContainer data-testid="container" style={{
      ...size && {['--container-size' as string]: `${size}px`}
    }}>
      {children}
    </StyledContainer>
  );
}

export default Container;
