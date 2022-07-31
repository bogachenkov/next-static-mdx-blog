import React from 'react';
import { StyledStickyBar } from './styled';

interface IStickyBarProps {
  children?: React.ReactNode;
}

const StickyBar:React.FC<IStickyBarProps> = (props) => {
  return (
    <StyledStickyBar />
  );
}

export default StickyBar;
