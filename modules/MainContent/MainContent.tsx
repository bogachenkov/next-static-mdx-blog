import React from 'react';
import { StyledMainContent } from './styled';

interface IMainContentProps {
  children?: React.ReactNode;
}
const MainContent:React.FC<IMainContentProps> = (props) => {
  return (
    <StyledMainContent>
      {props.children}
    </StyledMainContent>
  );
}

export default MainContent;
