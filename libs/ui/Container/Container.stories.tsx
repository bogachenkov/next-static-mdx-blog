import Container from './Container';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Container',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template:ComponentStory<typeof Container> = (args) => <Container {...args} />;
