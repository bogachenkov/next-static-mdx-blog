import ArticlePreview from './ArticlePreview';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'ui/ArticlePreview',
  component: ArticlePreview,
} as ComponentMeta<typeof ArticlePreview>;

const Template:ComponentStory<typeof ArticlePreview> = (args) => <ArticlePreview {...args} />;

export const Default = Template.bind({});
Default.args = {
  article: {
    date: '2000-01-01',
    excerpt: 'Laboris voluptate amet consectetur minim tempor nostrud.',
    title: 'Some Article Title',
  }
};
