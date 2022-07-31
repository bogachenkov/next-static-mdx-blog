import React from 'react';
import { StyledWave } from './styled';

interface IBackgroundWaveProps {
  children?: React.ReactNode;
}

const BackgroundWave:React.FC<IBackgroundWaveProps> = () => {
  return (
    <StyledWave>
      <svg 
        preserveAspectRatio='none' 
        viewBox="0 0 900 50" 
        width="900" 
        height="50" 
        xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 40L16.7 36.3C33.3 32.7 66.7 25.3 100 19.7C133.3 14 166.7 10 200 8.7C233.3 7.3 266.7 8.7 300 14.8C333.3 21 366.7 32 400 34C433.3 36 466.7 29 500 28C533.3 27 566.7 32 600 34.5C633.3 37 666.7 37 700 32.7C733.3 28.3 766.7 19.7 800 21.3C833.3 23 866.7 35 883.3 41L900 47L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z" 
            strokeLinecap="round" 
            strokeLinejoin="miter"
          ></path>
      </svg>
    </StyledWave>
  );
}

export default BackgroundWave;
