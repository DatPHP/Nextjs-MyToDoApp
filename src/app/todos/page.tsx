import React from "react";
import TodoList from "@components/TodoList";

export default function TodosPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Todos</h1>
      <TodoList />
    </div>
  );
}
