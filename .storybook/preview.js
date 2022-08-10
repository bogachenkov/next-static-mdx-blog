import GlobalStyle from '../styles/global';
import { useEffect } from 'react';
import addons from '@storybook/addons';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { RouterContext } from 'next/dist/shared/lib/router-context';

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const app_color_themes = {
  light: {
    body: '#FFFFFF',
    text: '#444444',
    heading: '#50507F',
    header: '#E7F5FF',
    icon: 'hsl(210 10% 30%)',
    'icon-hover': '#444444', 
    primary: '#22B8CF',
    secondary: '#E3FAFC',
    black: '#444444',
    gray: '#868E96',
    'gray-light': '#F1F3F5',
    white: '#FFFFFF',
  },
  dark: {
    body: '#0E141B',
    text: '#FFFFFF',
    heading: '#50507F',
    header: '#182635',
    icon: 'hsl(210 10% 70%)',
    'icon-hover': '#FFFFFF',
    primary: '#22B8CF',
    secondary: '#E3FAFC',
    black: '#444444',
    gray: '#868E96',
    'gray-light': '#F1F3F5',
    white: '#FFFFFF',
  }
}

const channel = addons.getChannel();

const ThemeWrapper = (props) => {
  const updateTheme = (isDark) => {
    const theme = isDark ? 'dark' : 'light';
    for (let styleKey in app_color_themes[theme]) {
      document.querySelector('html').style.setProperty('--color-' + styleKey, app_color_themes[theme][styleKey]);
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