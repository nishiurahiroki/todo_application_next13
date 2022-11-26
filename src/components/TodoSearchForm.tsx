'use client';

import { FieldValues, useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';

export const TodoSearchForm = () => {
  const { register, handleSubmit } = useForm();

  const router = useRouter();

  const onSubmit = (data: FieldValues) => {
    router.push(`/list?searchWord=${data.title}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      Search : <input type="text" {...register('title')} />
      <button type="submit">search</button>
    </form>
  );
};
