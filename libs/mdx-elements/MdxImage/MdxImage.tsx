
import { ImageProps } from 'next/future/image';
import React, { useState } from 'react';
import MediaWrapper from '../MediaWrapper';
import { StyledMdxImage } from './styled';

interface IMdxImageProps extends ImageProps {
  children?: React.ReactNode;
}

const MdxImage:React.FC<IMdxImageProps> = (props) => {
  const [blur, setBlur] = useState(true);
  return (
    <MediaWrapper>
      <StyledMdxImage 
        style={{ ['--image-blur' as string]: blur ? '20px' : 0 }} 
        loading='lazy' 
        onLoadingComplete={() => setBlur(false)} 
        {...props}
      />
    </MediaWrapper>
  );
}

export default MdxImage;
