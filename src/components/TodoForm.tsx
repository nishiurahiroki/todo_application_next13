'use client';

import { FieldValues, useForm } from 'react-hook-form';

type Props = {
  title: string;
  description: string;
  onSubmit: (todo: InputTodo) => void;
};

export type InputTodo = {
  title: string;
  description: string;
};

export const TodoForm = (props: Props) => {
  const { register, handleSubmit } = useForm<InputTodo>({
    defaultValues: {
      title: props.title,
      description: props.description,
    },
  });

  const onSubmit = (data: FieldValues) =>
    props.onSubmit({
      title: data.title,
      description: data.description,
    });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        title : <input type="text" {...register('title')} />
      </div>
      <div>
        description : <input type="text" {...register('description')} />
      </div>
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};
