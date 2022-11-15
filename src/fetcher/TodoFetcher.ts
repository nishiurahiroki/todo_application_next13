import { db } from '../lib/firebaseClient';
import { Todo } from '../types/Todo';

type FetchTodoProps = {
  key : string;
}

export const fetchTodoList : (props : FetchTodoProps) => Promise<Todo[]>  = async (props) => {
  const ref = db.collection('todos').doc(props.key)
  const snapshot = await ref.get()
  const doc = snapshot.data()
  return doc ? doc.list : []
};
