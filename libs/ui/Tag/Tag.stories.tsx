import Tag from './Tag';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'ui/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template:ComponentStory<typeof Tag> = (args) => (
  <div style={{ padding: '1em' }}>
    <Tag {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Tag Label'
}