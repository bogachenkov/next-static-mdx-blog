import BackgroundWave from '@ui/BackgroundWave';
import Container from '@ui/Container';
import StickyBar from '@ui/StickyBar';
import React from 'react';
import { StyledHero } from './styled';

interface IHomeHeroProps {
  children?: React.ReactNode;
}

const HomeHero:React.FC<IHomeHeroProps> = (props) => {
  return (
    <>
      <StyledHero>
        <Container>
          {props.children}
        </Container>
      </StyledHero>
      <BackgroundWave />
      <StickyBar />
    </>
  );
}

export default HomeHero;
