import React from "react";
import TodoDetailsContent from "@components/Todo/TodoDetailsContent";

interface ITodoDetails {
  params: { id: string };
}

export default async function TodoDetails({ params }: ITodoDetails) {
  const { id } = await params; // params is now resolved properly

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
    <div className="w-[450px] bg-gray-50 p-6 rounded-2xl shadow-md">
      <TodoDetailsContent id={id} />
       </div>
    </div>
  );
}
