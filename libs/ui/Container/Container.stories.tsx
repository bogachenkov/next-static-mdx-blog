import Container from './Container';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'ui/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template:ComponentStory<typeof Container> = ({ size, children }) => (
  <Container size={size}>
    {children || <div style={{ height: 30, backgroundColor: 'var(--color-header)' }}>{size}px</div>}
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  size: 500
}