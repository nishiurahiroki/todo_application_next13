import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TodoForm } from './TodoForm';

export default {
  title: 'TodoForm',
  component: TodoForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TodoForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TodoForm> = (args) => <TodoForm />;

export const Default = Template.bind({});
Default.args = {
  primary: false,
  label: 'TodoForm',
};
