import ArticleCard from './ArticleCard';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'ui/ArticleCard',
  component: ArticleCard,
} as ComponentMeta<typeof ArticleCard>;

const Template:ComponentStory<typeof ArticleCard> = (args) => <ArticleCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  date: '2000-01-01',
  excerpt: 'Laboris voluptate amet consectetur minim tempor nostrud.',
  title: 'Some Article Title',
};