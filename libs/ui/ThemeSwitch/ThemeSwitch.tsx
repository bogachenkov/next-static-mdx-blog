import { ColorTheme, ThemeContext } from 'libs/context/ThemeProvider';
import React, { useContext } from 'react';
import { StyledSwitchButton, StyledSwitchIcon } from './styled';

interface IThemeSwitchProps {
  children?: React.ReactNode;
  colorTheme?: ColorTheme;
}

const ThemeSwitch:React.FC<IThemeSwitchProps> = ({ colorTheme }) => {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <StyledSwitchButton onClick={switchTheme} title='Switch Theme' aria-label='auto' aria-live='polite' data-testid="switch-button" data-theme={colorTheme ?? theme }>
      <StyledSwitchIcon aria-hidden width={24} height={24} viewBox="0 0 24 24">
        <circle id="switch-sun" cx={12} cy={12} r={6} mask={'url(#switch-moon)'} fill="currentColor" />
        <g id="switch-beams" stroke="currentColor">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
        <mask id="switch-moon">
          <rect x={0} y={0} width="100%" height="100%" fill="white" />
          <circle cx={24} cy={10} r={6} fill="rgb(0, 0, 0)" />
        </mask>
      </StyledSwitchIcon>
    </StyledSwitchButton>
  );
}

export default ThemeSwitch;
