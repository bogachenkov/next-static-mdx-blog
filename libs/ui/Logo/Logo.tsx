import Link from 'next/link';
import React from 'react';
import { StyledLogo } from './styled';

interface ILogoProps {
  children?: React.ReactNode;
}

const Logo:React.FC<ILogoProps> = (props) => {
  return (
    <Link href={'/'} passHref>
      <StyledLogo>
        we<span>b</span>log<span>.</span>
      </StyledLogo>
    </Link>
  );
}

export default Logo;
