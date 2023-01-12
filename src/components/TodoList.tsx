import { Todo } from '@prisma/client';
import Link from 'next/link';
import { fetchTodoList } from '../fetcher/TodoFetcher';

type Props = {
  searchCondition?: {
    searchWord: string;
  };
};

export const TodoList = async (props: Props) => {
  const todos: Todo[] = await fetchTodoList(props.searchCondition);

  return (
    <>
      {todos.map((todo: Todo, index) => (
        <Link href={`/detail/${todo.id}`} key={index}>
          <p>{todo.title}</p>
        </Link>
      ))}
    </>
  );
};
