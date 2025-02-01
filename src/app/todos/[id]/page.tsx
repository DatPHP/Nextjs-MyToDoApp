import React from "react";
import TodoDetailsContent from "@components/Todo/TodoDetailsContent";
import { NextPage } from "next";

interface ITodoDetails {
  params: { id: string };
}

const TodoDetails: NextPage<ITodoDetails> = async ({ params }) => {
  const { id } = params;

  return <TodoDetailsContent id={id} />;
};

export default TodoDetails;
