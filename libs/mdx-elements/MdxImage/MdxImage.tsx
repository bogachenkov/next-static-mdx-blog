import { ImageProps } from 'next/image';
import React from 'react';
import MediaWrapper from '../MediaWrapper';
import { StyledMdxImage } from './styled';

interface IMdxImageProps extends ImageProps {
  children?: React.ReactNode;
}

const MdxImage:React.FC<IMdxImageProps> = (props) => {
  return (
    <MediaWrapper>
      <StyledMdxImage loading='eager' layout='fill' objectFit='cover' {...props} />
    </MediaWrapper>
  );
}

export default MdxImage;
