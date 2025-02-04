import React from "react";
import TodoDetailsContent from "@components/Todo/TodoDetailsContent";

export default async function TodoDetails({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  return <TodoDetailsContent id={id} />;
}
