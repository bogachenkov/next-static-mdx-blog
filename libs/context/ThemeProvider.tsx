import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
interface IProps {
  children?: React.ReactNode;
}

export type ColorTheme = 'dark' | 'light';
interface IThemeContext {
  theme: ColorTheme;
  switchTheme: VoidFunction;
}

interface ITheme {
  body: string;
  text: string;
  header: string;
  heading: string;
  icon: string;
  'icon-hover': string;
}

interface IThemes {
  light: ITheme,
  dark: ITheme
}

export const ThemeContext = createContext<IThemeContext>({
  theme: 'light',
  switchTheme: () => {}
});

const ThemeProvider:React.FC<IProps> = ({ children }) => {
  const [colorTheme, setColorTheme] = useState<ColorTheme>('light');

  const toggleColorScheme = useCallback(() => {
    setColorTheme((currentMode) => {
      const updatedMode = currentMode === 'dark' ? 'light' : 'dark';
      window.localStorage.setItem('prefered-theme', updatedMode);

      // @ts-ignore
      const themes: IThemes = window.app_color_themes;
      const colors = themes[updatedMode];
      for (let styleKey in colors) {
        // @ts-ignore
        document.querySelector('html')!.style.setProperty('--color-' + styleKey, colors[styleKey]);
      }
      return updatedMode;
    });
  }, []);

  const contextValue = useMemo(() => ({
    theme: colorTheme,
    switchTheme: toggleColorScheme
  }), [colorTheme]);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('prefered-theme') as ColorTheme;
    if (storedTheme) setColorTheme(storedTheme);
  }, []);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
};

export default ThemeProvider;