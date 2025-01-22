"use client";

import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { fetchTodoById } from '../../../services/todosService';
import { useRouter } from 'next/navigation';
import TodoForm from '../../../components/TodoForm';
import { Todo } from '@/types/todos';

export default function TodoDetails({ params }: { params: Promise<{ id: string }> }) {
  const [unwrappedParams, setUnwrappedParams] = React.useState<{ id: string } | null>(null);

  React.useEffect(() => {
    params.then(resolvedParams => setUnwrappedParams(resolvedParams));
  }, [params]);

  const { data: todo, isLoading, error } = useQuery({
    queryKey: ['todo', unwrappedParams?.id],
    queryFn: () => fetchTodoById(Number(unwrappedParams?.id)),
    enabled: !!unwrappedParams,
  });

  const todoData :any = todo || undefined
  const router = useRouter();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading todo details!</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Todo</h1>
      <TodoForm todo={todoData || undefined} onSuccess={() => router.push('/')} />
    </div>
  );
}