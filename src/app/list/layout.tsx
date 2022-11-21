'use client';

import { TodoSearchForm } from '../../components/TodoSearchForm';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <h2>一覧</h2>
        <TodoSearchForm />
      </header>
      <main>{children}</main>
    </>
  );
}
