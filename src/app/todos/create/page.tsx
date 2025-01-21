"use client";

import TodoForm from '../../../components/TodoForm';
import { useRouter } from 'next/navigation';

export default function CreateTodo() {
  const router = useRouter();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create Todo</h1>
      <TodoForm onSuccess={() => router.push('/')} />
    </div>
  );
}
