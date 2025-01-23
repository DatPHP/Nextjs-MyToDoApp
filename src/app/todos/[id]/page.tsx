import React from "react";
import TodoDetailsContent from "@components/Todo/TodoDetailsContent";

interface ITodoDetails {
  params: { id: string };
}

export default function TodoDetails({ params }: ITodoDetails) {
  const { id } = params;

  return (
    <div>
      <TodoDetailsContent id={id} />
    </div>
  );
}