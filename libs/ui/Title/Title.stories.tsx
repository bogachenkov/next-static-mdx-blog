import Title from './Title';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template:ComponentStory<typeof Title> = (args) => <Title {...args} />;
