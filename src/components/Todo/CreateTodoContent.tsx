"use client";

import React from "react";
import TodoForm from "../TodoForm";
import { useRouter } from "next/navigation";

const CreateTodoContent: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <TodoForm onSuccess={() => router.push("/")} />
    </div>
  );
};

export default CreateTodoContent;
