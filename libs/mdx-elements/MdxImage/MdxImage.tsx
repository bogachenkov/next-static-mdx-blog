import { ImageProps } from 'next/future/image';
import React from 'react';
import MediaWrapper from '../MediaWrapper';
import { StyledMdxImage } from './styled';

interface IMdxImageProps extends ImageProps {
  children?: React.ReactNode;
}

const MdxImage:React.FC<IMdxImageProps> = (props) => {
  return (
    <MediaWrapper>
      <StyledMdxImage loading='eager' {...props} />
    </MediaWrapper>
  );
}

export default MdxImage;
