import Group from './Group';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Group',
  component: Group,
} as ComponentMeta<typeof Group>;

const Template:ComponentStory<typeof Group> = (args) => <Group {...args} />;
