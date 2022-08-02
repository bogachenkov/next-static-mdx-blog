import Title from '@ui/Title';
import Link from 'next/link';
import React from 'react';
import { GoHomeLink, StyledNotFoundWrap } from './styled';

interface INotFoundProps {
  children?: React.ReactNode;
}

const NotFound:React.FC<INotFoundProps> = (props) => {
  return (
    <StyledNotFoundWrap>
      <Title level={1} size={94}><span>404</span></Title>
      <Title size={36}>Page Not Found</Title>
      <Link href={'/'} passHref>
        <GoHomeLink>
          Go Back Home
        </GoHomeLink>
      </Link>
    </StyledNotFoundWrap>
  );
}

export default NotFound;
