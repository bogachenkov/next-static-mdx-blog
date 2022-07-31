import React from 'react';
import MediaWrapper from '../MediaWrapper';
import { StyledMdxImage } from './styled';

interface IMdxImageProps {
  children?: React.ReactNode;
}

const MdxImage:React.FC<IMdxImageProps> = (props) => {
  return (
    <MediaWrapper>
      <StyledMdxImage {...props} />
    </MediaWrapper>
  );
}

export default MdxImage;
