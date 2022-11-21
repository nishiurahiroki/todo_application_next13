'use client';

import { FieldValues, useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';

export const TodoSearchForm = () => {
  const { register, handleSubmit } = useForm();

  const router = useRouter();

  const onSubmit = (data: FieldValues) => {
    router.push(`/list?searchTitle=${data.searchTitle}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      Search : <input type="text" {...register('searchTitle')} />
      <button type="submit">search</button>
    </form>
  );
};
