import { Todo } from '@prisma/client';
import { fetchTodoList } from '../fetcher/TodoFetcher';

type Props = {
  todoTitle?: string;
};

export const TodoList = async (props: Props) => {
  const todos: Todo[] = await fetchTodoList({ searchWord: props.todoTitle });

  return (
    <div>
      {todos.map((todo: Todo, index) => (
        <div key={index}>
          <p>{todo.title}</p>
        </div>
      ))}
    </div>
  );
};
