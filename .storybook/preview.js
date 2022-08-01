import GlobalStyle from '../styles/global';
import { useEffect, useState } from 'react';
import addons from '@storybook/addons';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const THEME_COLORS = {
  light: {
    body: '#FFFFFF',
    text: '#444444',
    // header: '#FFFFFF90',
    heading: '#50507F',
    header: '#E7F5FF',
    icon: 'hsl(210 10% 30%)',
    'icon-hover': '#444444',
  },
  dark: {
    body: '#0E141B',
    text: '#FFFFFF',
    // header: '0E141B90',
    heading: '#50507F',
    header: '#182635',
    icon: 'hsl(210 10% 70%)',
    'icon-hover': '#FFFFFF'
  }
};

const channel = addons.getChannel();

const ThemeWrapper = (props) => {
  const updateTheme = (isDark) => {
    const theme = isDark ? 'dark' : 'light';
    for (let styleKey in THEME_COLORS[theme]) {
      document.querySelector('html').style.setProperty('--color-' + styleKey, THEME_COLORS[theme][styleKey]);
    }
  }
  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, updateTheme);
    return () => channel.off(DARK_MODE_EVENT_NAME, updateTheme);
  }, [channel]);

  return props.children;
}


export const decorators = [
  (Story) => {
    return (
      <ThemeWrapper>
        <GlobalStyle />
        <Story />
      </ThemeWrapper>
    )
  }
]