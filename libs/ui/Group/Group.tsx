import React from 'react';
import { StyledGroup } from './styled';

const Align = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  base: 'baseline',
  default: 'stretch'
} as const;

const Justify = {
  default: 'flex-start',
  start: 'flex-start',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around'
} as const;

interface IGroupProps {
  children?: React.ReactNode;
  align?: keyof typeof Align;
  justify?: keyof typeof Justify;
  gap?: number;
}

const Group:React.FC<IGroupProps> = ({ align = 'default', justify = 'default', gap = 0, children }) => {
  return (
    <StyledGroup align={Align[align]} justify={Justify[justify]} gap={gap}>
      {children}
    </StyledGroup>
  );
}

export default Group;
