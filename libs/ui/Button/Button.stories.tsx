import Button from './Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' }
  }
} as ComponentMeta<typeof Button>;

const Template:ComponentStory<typeof Button> = (args) => {

  return (
    <Button {...args} />

  )
};

export const Primary = Template.bind({});