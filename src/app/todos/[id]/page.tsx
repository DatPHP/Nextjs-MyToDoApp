import React from "react";
import TodoDetailsContent from "@components/Todo/TodoDetailsContent";

interface ITodoDetails {
  params: { id: string };
}

export default async function TodoDetails({ params }: ITodoDetails) {
  const { id } = await params; 

  return <TodoDetailsContent id={id} />;
}
