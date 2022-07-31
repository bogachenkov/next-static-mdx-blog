import Header from '@modules/Header';
import React from 'react';

interface IMainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout:React.FC<IMainLayoutProps> = (props) => {
  return (
    <>
      <Header />
      { props.children }
    </>
  );
}

export default MainLayout;
