import React from 'react';
import { Quote, QuoteOff } from 'tabler-icons-react';
import { StyledBlockquote, StyledQuote } from './styled';

interface IBlockquoteProps {
  children?: React.ReactNode;
}

const Blockquote:React.FC<IBlockquoteProps> = (props) => {
  return (
    <StyledBlockquote {...props}>
      <StyledQuote />
      {props.children}
    </StyledBlockquote>
  );
}

export default Blockquote;
