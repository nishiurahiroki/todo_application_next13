'use client';

import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  title: z.string().min(1, { message: 'Required.' }),
  description: z.string().optional(),
});

type Props = {
  title?: string;
  description?: string;
  onSubmit: (todo: InputTodo) => void;
};

export type InputTodo = {
  title: string;
  description: string;
};

export const TodoForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputTodo>({
    defaultValues: {
      title: props.title,
      description: props.description,
    },
    resolver: zodResolver(schema),
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
        {errors.title?.message && <span>{errors.title.message}</span>}
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
