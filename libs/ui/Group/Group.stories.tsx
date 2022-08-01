import Group from './Group';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'ui/Group',
  component: Group,
} as ComponentMeta<typeof Group>;

const Template:ComponentStory<typeof Group> = ({ children, ...args }) => (
  <Group {...args}>
    <div style={{ background: 'var(--color-header)', padding: '2em 3em' }}>1</div>
    <div style={{ background: 'var(--color-header)', padding: '2.5em 3em' }}>2</div>
    <div style={{ background: 'var(--color-header)', padding: '3em' }}>3</div>
  </Group>
);

export const Default = Template.bind({});
Default.args = {
  gap: 15
}
