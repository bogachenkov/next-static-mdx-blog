import Badge from './Badge';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'ui/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template:ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args={
  children: 'Default'
}