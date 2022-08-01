import Header from './Header';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'modules/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template:ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});