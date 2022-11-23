import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { TodoForm } from './TodoForm';

export default {
  title: 'TodoForm',
  component: TodoForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TodoForm>;

const Template: ComponentStory<typeof TodoForm> = (args) => (
  <TodoForm {...args} />
);

export const Create = Template.bind({});
Create.args = {
  onSubmit: action('submit'),
};

export const Update = Template.bind({});
Update.args = {
  title: 'Update title',
  description: 'Update description',
  onSubmit: action('submit'),
};
