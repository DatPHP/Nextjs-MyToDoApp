"use client";

import TodoList from '../components/TodoList';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <Link href="/todos/create">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
          Create New Todo
        </button>
      </Link>
      <TodoList />
    </div>
  );
}
