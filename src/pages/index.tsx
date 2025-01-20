// src/pages/index.tsx
import React from 'react';
import TodoList from '../components/TodoList';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div>
      <Link href="/todos/create">
        Create New Todo
      </Link>
      </div>
      <TodoList />
    </div>
  );
};

export default Home;
