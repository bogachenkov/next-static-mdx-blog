import BackgroundWave from './BackgroundWave';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'BackgroundWave',
  component: BackgroundWave,
} as ComponentMeta<typeof BackgroundWave>;

const Template:ComponentStory<typeof BackgroundWave> = (args) => <BackgroundWave {...args} />;
