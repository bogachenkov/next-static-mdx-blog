import Tag from './Tag';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template:ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
