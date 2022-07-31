import ArticleCard from './ArticleCard';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'ArticleCard',
  component: ArticleCard,
} as ComponentMeta<typeof ArticleCard>;

const Template:ComponentStory<typeof ArticleCard> = (args) => <ArticleCard {...args} />;
