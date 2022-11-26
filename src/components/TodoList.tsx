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
    <div>
      {todos.map((todo: Todo, index) => (
        <Link href={`/detail/${todo.id}`} key={index}>
          <div>
            <p>{todo.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
