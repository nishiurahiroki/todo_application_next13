import { TodoDetail } from '../../../components/TodoDetail';
import { TodoDetailActions } from '../../../components/TodoDetailActions';

type Props = {
  params: { id: number };
};

export default function TodoDetailPage(props: Props) {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <TodoDetail id={props.params.id} />
      <TodoDetailActions id={props.params.id} />
    </div>
  );
}
