'use client';

import { useRouter } from 'next/navigation';

type Props = {
  id: number;
};

const del = (id: number) => {
  return fetch(`/api/todo/delete`, {
    method: 'DELETE',
    body: JSON.stringify({ id }),
  });
};

export const TodoDetailActions = (props: Props) => {
  const router = useRouter();

  const handleUpdate = () => {
    router.push(`/update/${props.id}`);
  };

  const handleDelete = async () => {
    await del(props.id);
    router.push('/list');
    router.refresh();
  };

  return (
    <div>
      <button onClick={handleUpdate}>update</button>{' '}
      <button onClick={handleDelete}>delete</button>
    </div>
  );
};
