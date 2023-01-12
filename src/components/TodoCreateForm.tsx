'use client';

import { useRouter } from 'next/navigation';
import { InputTodo, TodoForm } from './TodoForm';

const create = (data: InputTodo) => {
  return fetch('/api/todo/create', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

export const TodoCreateForm = () => {
  const router = useRouter();

  const handleSubmit = async (data: InputTodo) => {
    await create(data);
    router.push('/list');
    router.refresh();
  };

  return <TodoForm onSubmit={handleSubmit} />;
};
