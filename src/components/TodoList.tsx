import { Todo } from '@prisma/client';
import Link from 'next/link';
import { fetchTodoList } from '../fetcher/TodoFetcher';

type Props = {
  todoTitle?: string;
};

export const TodoList = async (props: Props) => {
  const todos: Todo[] = await fetchTodoList({ searchWord: props.todoTitle });

  return (
    <div>
      {todos.map((todo: Todo, index) => (
        <Link href={`/update/${todo.id}`} key={index}>
          <div>
            <p>{todo.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
