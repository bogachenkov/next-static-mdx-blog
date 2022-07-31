import React from 'react';
import { StyledButton } from './styled';

interface IButtonProps {
  children?: React.ReactNode;
}

const Button:React.FC<IButtonProps> = (props) => {
  return (
    <StyledButton {...props} data-testid="button">
      Hey!!!
    </StyledButton>
  );
}

export default Button;
