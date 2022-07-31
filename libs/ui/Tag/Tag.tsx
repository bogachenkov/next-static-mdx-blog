import React from 'react';
import { StyledTag, StyledTagHoverable } from './styled';

interface ITagProps  {
  children?: React.ReactNode;
}

const Tag:React.FC<ITagProps> = (props) => {
  return (
    <StyledTag>
      {props.children}
      <StyledTagHoverable />
    </StyledTag>
  );
}

export default Tag;
