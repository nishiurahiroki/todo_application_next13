'use client';

import { FieldValues, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export const TodoForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);

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
