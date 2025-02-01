"use client";

import React from "react";
import TodoForm from "../TodoForm";
import { useRouter } from "next/navigation";
import "@styles/main.css";

const CreateTodoContent: React.FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen todoBackground flex justify-center items-center">
      <div className="w-[450px] todoContent py-6 rounded-2xl shadow-lg">
        <TodoForm onSuccess={() => router.push("/")} />
      </div>
    </div>
  );
};

export default CreateTodoContent;
