import React from 'react';
import { StyledBadge } from './styled';

interface IBadgeProps {
  children?: React.ReactNode;
}

const Badge:React.FC<IBadgeProps> = (props) => {
  return (
    <StyledBadge>
      {props.children}
    </StyledBadge>
  );
}

export default Badge;
