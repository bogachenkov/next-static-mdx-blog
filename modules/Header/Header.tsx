import Container from '@ui/Container';
import GithubIcon from '@ui/GithubIcon';
import Group from '@ui/Group';
import Logo from '@ui/Logo';
import ThemeSwitch from '@ui/ThemeSwitch';
import React from 'react';
import { StyledHeader } from './styled';

interface IHeaderProps {
  children?: React.ReactNode;
}

const Header:React.FC<IHeaderProps> = (props) => {


  return (
    <StyledHeader>
      <Container>
        <Group align={'center'} justify={'between'}>
          <Logo />
          <Group align={'center'} gap={16}>
            <ThemeSwitch />
            <a href='https://github.com/bogachenkov' target={'_blank'}>
              <GithubIcon size={28} />
            </a>
          </Group>
        </Group>
      </Container>
    </StyledHeader>
  );
}

export default Header;
