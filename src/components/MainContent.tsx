"use client";

import React from "react";
import TodoList from "../components/TodoList";
import AddTodoButton from "./AddTodoButton";
import DateHeader from "@components/DateHeader";

export default function MainContent() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-[450px] bg-gray-50 padding-4 mt-4 rounded-2xl border border-gray-200 overflow-hidden shadow-md">
        <DateHeader />
        <main className="p-4">
          <div className="space-y-4">
            <TodoList />
          </div>
          <AddTodoButton />
        </main>
      </div>
    </div>
  );
}
