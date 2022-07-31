import React, { useEffect } from 'react';
import { StyledPreBlock } from './styled';
import Prism from "prismjs";

interface IPreBlockProps {
  children?: React.ReactNode;
}

const PreBlock:React.FC<IPreBlockProps> = (props) => {
  // @ts-ignore
  const languageClassName = props.children?.props?.className ?? '';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, []);

  return (
    <StyledPreBlock className={languageClassName} tabIndex={0}>
      {props.children}
    </StyledPreBlock>
  );
}

export default PreBlock;
