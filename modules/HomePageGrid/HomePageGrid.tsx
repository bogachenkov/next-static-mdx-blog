import React from 'react';
import { StyledHomePageGrid } from './styled';

interface IHomePageGridProps {
  children?: React.ReactNode;
}

const HomePageGrid:React.FC<IHomePageGridProps> = (props) => {
  return (
    <StyledHomePageGrid>
      {props.children}
    </StyledHomePageGrid>
  );
}

export default HomePageGrid;
