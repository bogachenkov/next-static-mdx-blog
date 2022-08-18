import React from 'react';
import MediaWrapper from '../MediaWrapper';
import { StyledIframe } from './styled';

interface IYoutubeProps {
  children?: React.ReactNode;
  title: string;
  uid: string;
}

const Youtube:React.FC<IYoutubeProps> = (props) => {
  return (
    <MediaWrapper>
      <StyledIframe 
        src={`https://www.youtube.com/embed/${props.uid}`}
        loading='lazy'
        title={props.title}
      />
    </MediaWrapper>
  );
}

export default Youtube;
