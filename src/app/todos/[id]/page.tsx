import React from "react";
import TodoDetailsContent from "@components/Todo/TodoDetailsContent";

interface PageProps {
  params: { id: string };
}

export default async function TodoDetails({ params }: PageProps) {
  const awaitedParams = await params; // Explicitly await params (if required by Next.js)

  return <TodoDetailsContent id={awaitedParams.id} />;
}
