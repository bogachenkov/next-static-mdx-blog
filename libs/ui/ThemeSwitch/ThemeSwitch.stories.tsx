import ThemeSwitch from './ThemeSwitch';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'ThemeSwitch',
  component: ThemeSwitch,
} as ComponentMeta<typeof ThemeSwitch>;

const Template:ComponentStory<typeof ThemeSwitch> = (args) => <ThemeSwitch {...args} />;


