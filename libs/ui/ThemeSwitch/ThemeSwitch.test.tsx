import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ThemeSwitch from './ThemeSwitch';
import { ColorTheme, ThemeContext } from 'libs/context/ThemeProvider';

describe('<ThemeSwitch />', () => {
  let theme:ColorTheme = 'dark';
  const switchTheme = jest.fn();

  beforeEach(() => {
    render(
      <ThemeContext.Provider value={{ theme, switchTheme }}>
        <ThemeSwitch />
      </ThemeContext.Provider>
    );
  });

  it('renders correctly', () => {
    expect(screen.getByTestId('switch-button')).toBeInTheDocument();
  });
  it('renders correctly based on color theme', () => {
    expect(screen.getByTestId('switch-button')).toHaveAttribute('data-theme', theme)
  });
  it('switches color theme on click', () => {
    fireEvent.click(screen.getByTestId('switch-button'));
    expect(switchTheme).toHaveBeenCalledTimes(1);
  });
});
