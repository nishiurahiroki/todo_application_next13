import { fetchTodoFindById } from '../fetcher/TodoFetcher';

type Props = {
  id: number;
};

export const TodoDetail = async (props: Props) => {
  const todo = await fetchTodoFindById(Number(props.id));

  return (
    <div>
      <div>id : {props.id}</div>
      <div>title : {todo?.title}</div>
      <div>description : {todo?.description}</div>
    </div>
  );
};
