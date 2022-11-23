'use client';

import { Todo } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { InputTodo, TodoForm } from './TodoForm';

type Props = {
  todo: Todo;
};

const update = (todo: InputTodo & { id: number }) => {
  return fetch(`/api/todo/update`, {
    method: 'POST',
    body: JSON.stringify(todo),
  });
};

export default function TodoUpdateForm({ todo }: Props) {
  const router = useRouter();

  const handleSubmit = async (data: InputTodo) => {
    await update({ ...data, id: todo.id });

    router.push('/list');
  };

  return (
    <div>
      <TodoForm
        title={todo?.title}
        description={todo?.description || ''}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
