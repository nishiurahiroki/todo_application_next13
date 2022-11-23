import { Suspense } from 'react';
import TodoUpdateForm from '../../../components/TodoUpdateForm';
import { fetchTodoFindById } from '../../../fetcher/TodoFetcher';

type Props = {
  params: { id: number };
};

export default async function TodoUpdatePage({ params }: Props) {
  const todo = await fetchTodoFindById(Number(params.id));

  return (
    <div>
      <Suspense fallback={<>loading...</>}>
        {/* @ts-expect-error Server Component */}
        <TodoUpdateForm todo={todo} />
      </Suspense>
    </div>
  );
}
