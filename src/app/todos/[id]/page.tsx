import React from "react";
import TodoDetailsContent from "@components/Todo/TodoDetailsContent";

interface PageProps {
  params: { id: string };
}

export default function TodoDetails({ params }: PageProps) {
  return <TodoDetailsContent id={params.id} />;
}
