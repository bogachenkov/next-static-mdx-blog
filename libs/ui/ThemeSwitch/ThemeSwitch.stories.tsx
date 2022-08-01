import ThemeSwitch from './ThemeSwitch';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode'
import { StyledSwitchButton, StyledSwitchIcon } from './styled';

export default {
  title: 'ui/ThemeSwitch',
  component: ThemeSwitch,
  argTypes: { onClick: { action: 'Theme Switched!' } }
} as ComponentMeta<typeof ThemeSwitch>;

const Template:ComponentStory<typeof ThemeSwitch> = (args) => {
  const theme = useDarkMode() ? 'dark' : 'light';
  return (
    <ThemeSwitch colorTheme={theme} />
  )
};

export const Default = Template.bind({});