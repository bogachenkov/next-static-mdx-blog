import ArticlePreview from './ArticlePreview';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'ArticlePreview',
  component: ArticlePreview,
} as ComponentMeta<typeof ArticlePreview>;

const Template:ComponentStory<typeof ArticlePreview> = (args) => <ArticlePreview {...args} />;
