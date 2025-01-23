"use client";

import React from "react";
import TodoForm from "../TodoForm";
import { useRouter } from "next/navigation";

const CreateTodoContent: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create Todo</h1>
      <TodoForm onSuccess={() => router.push("/")} />
    </div>
  );
};

export default CreateTodoContent;
