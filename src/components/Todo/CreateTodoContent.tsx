"use client";

import React from "react";
import TodoForm from "../TodoForm";
import { useRouter } from "next/navigation";

const CreateTodoContent: React.FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-[450px] bg-gray-50 p-6 rounded-2xl shadow-md">
        <TodoForm onSuccess={() => router.push("/")} />
      </div>
    </div>
  );
};

export default CreateTodoContent;
