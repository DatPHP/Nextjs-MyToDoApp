"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTodoById } from "@services/todosService";
import { useRouter } from "next/navigation";
import TodoForm from "../TodoForm";
import { TextField, Button, IconButton } from "@mui/material";

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
    <div>
      <TodoForm
        todo={todoData || undefined}
        onSuccess={() => router.push("/")}
      />
    </div>
  );
};

export default TodoDetailsContent;
