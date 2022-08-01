import Title from './Title';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'ui/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template:ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Title'
}

export const WithSpanChild = Template.bind({});
WithSpanChild.args = {
  children: (
    <>
      <span>WithSpanChild</span> Title
    </>
  )
}