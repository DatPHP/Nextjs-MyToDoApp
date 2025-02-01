import React from "react";
import TodoDetailsContent from "@components/Todo/TodoDetailsContent";

export default async function TodoDetails({ params }: { params: { id: string } }) {
  // Ensure params is explicitly an object
  const resolvedParams = typeof params === "object" ? params : await params;

  return <TodoDetailsContent id={resolvedParams.id} />;
}
