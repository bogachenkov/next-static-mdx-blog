import React from 'react';
import { StyledTitle } from './styled';

interface ITitleProps {
  size?: number;
  level?: number;
  children?: React.ReactNode;
}

const Title:React.FC<ITitleProps> = ({ size = 24, level = 2, children, ...props }) => {
  const tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <StyledTitle as={tag} style={{
      ['--title-size' as string]: `${size}px`
    }} {...props}>
      {children}
    </StyledTitle>
  );
}

export default Title;
