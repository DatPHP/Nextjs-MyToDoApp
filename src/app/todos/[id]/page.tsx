import React from "react";
import TodoDetailsContent from "@components/Todo/TodoDetailsContent";


export default function TodoDetails({ params }: { params: { id: string } }) {
  return <TodoDetailsContent id={params?.id} />;
}
