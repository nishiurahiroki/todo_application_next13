'server only';

import { db } from '../lib/db';

import { Todo } from '@prisma/client';

type FetchTodoProps = {
  searchWord?: string;
};

export const fetchTodoList = async (props?: FetchTodoProps) => {
  const searchCondition = props?.searchWord
    ? {
        where: {
          title: {
            contains: props?.searchWord,
          },
        },
      }
    : undefined;

  const todos: Todo[] = await db.todo.findMany(searchCondition);
  return todos;
};

export const fetchTodoFindById = async (id: number) => {
  const todo: Todo | null = await db.todo.findUnique({
    where: {
      id,
    },
  });

  return todo;
};
