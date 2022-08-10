import Container from '@ui/Container';
import GithubIcon from '@ui/GithubIcon';
import Group from '@ui/Group';
import Logo from '@ui/Logo';
import ThemeSwitch from '@ui/ThemeSwitch';
import React from 'react';
import { StyledHeader } from './styled';
import ScrollProgress from "@bogachenkov/react-scrolling-progress";
import { useRouter } from 'next/router';

interface IHeaderProps {
  children?: React.ReactNode;
}

const Header:React.FC<IHeaderProps> = (props) => {
  const router = useRouter();
  
  return (
    <StyledHeader>
      {
        router.route === '/articles/[slug]' && (
          <ScrollProgress styles={{ 
            backgroundColor: 'var(--color-header)', 
            showBarShadow: false, 
            colors: ['var(--color-primary)'],
          }} />
        )
      }
      
      <Container>
        <Group align={'center'} justify={'between'}>
          <Logo />
          <Group align={'center'} gap={16}>
            <ThemeSwitch />
            <a href='https://github.com/bogachenkov/next-static-mdx-blog' target={'_blank'}>
              <GithubIcon size={28} />
            </a>
          </Group>
        </Group>
      </Container>
    </StyledHeader>
  );
}

export default Header;
