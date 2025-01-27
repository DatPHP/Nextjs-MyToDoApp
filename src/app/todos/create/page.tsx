import React from "react";
import CreateTodoContent from "@components/Todo/CreateTodoContent";

export default function CreateTodo() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
    <div className="w-[450px] bg-gray-50 p-6 rounded-2xl shadow-md">
        <CreateTodoContent />
      </div>
    </div>
  );
}
