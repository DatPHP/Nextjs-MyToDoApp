"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTodoById } from "@services/todosService";
import { useRouter } from "next/navigation";
import TodoForm from "../TodoForm";
import "@styles/main.css";
interface ITodoDetailsContent {
  id: string;
}

const TodoDetailsContent: React.FC<ITodoDetailsContent> = ({ id }) => {
  const {
    data: todo,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todo", id],
    queryFn: () => fetchTodoById(Number(id)),
  });

  const todoData: any = todo || undefined;

  const router = useRouter();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading todo details!</p>;

  return (
    <div className="min-h-screen todoBackground flex justify-center items-center">
      <div className="w-[450px] todoContent py-6 rounded-2xl shadow-lg">
        <TodoForm
          todo={todoData || undefined}
          onSuccess={() => router.push("/")}
        />
      </div>
    </div>
  );
};

export default TodoDetailsContent;
