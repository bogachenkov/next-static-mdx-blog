import Link, { LinkProps } from 'next/link';
import React from 'react';
import { LinkWrap } from './styled';

interface IMdxLinkProps extends LinkProps {
  children?: React.ReactNode;
}

const MdxLink:React.FC<IMdxLinkProps> = ({ children, ...props }) => {
  return (
    <Link {...props} passHref>
      <LinkWrap>{children}</LinkWrap>
    </Link>
  );
}

export default MdxLink;
