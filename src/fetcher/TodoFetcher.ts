import { db } from '../lib/firebaseClient';

export const fetchTodoList = async () => {
  const col = db.collection('todos');
  const doc = await col.get();

  return doc.docs.map((todo) => ({
    id: todo.id,
    todos: todo.data().list,
  }));
};
