import React from 'react';
import { StyledMediaWrapper } from './styled';

interface IMediaWrapperProps {
  children?: React.ReactNode;
}

const MediaWrapper:React.FC<IMediaWrapperProps> = (props) => {
  return (
    <StyledMediaWrapper>
      {props.children}
    </StyledMediaWrapper>
  );
}

export default MediaWrapper;
