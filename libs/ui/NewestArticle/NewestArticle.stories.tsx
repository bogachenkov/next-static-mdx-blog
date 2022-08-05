import NewestArticle from './NewestArticle';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'ui/NewestArticle',
  component: NewestArticle,
} as ComponentMeta<typeof NewestArticle>;

const Template:ComponentStory<typeof NewestArticle> = (args) => <NewestArticle {...args} />;

export const Default = Template.bind({});
Default.args = {
  article: {
    date: '2000-01-01',
    excerpt: 'Laboris voluptate amet consectetur minim tempor nostrud.',
    title: 'Some Article Title',
  }
};
