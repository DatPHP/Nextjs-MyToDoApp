"use client";

import React from "react";
import TodoList from "@components/TodoList";
import AddTodoButton from "./AddTodoButton";
import DateHeader from "@components/DateHeader";
import "@styles/main.css";

export default function MainContent() {
  return (
    <div className="min-h-screen todoBackground flex justify-center items-center">
      <div className="w-[450px] todoContent padding-4 mt-4 rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
        <DateHeader />
        <main className="p-4">
          <div className="space-y-4">
            <TodoList />
          </div>
          <div className="mr-8 mb-2">
            <AddTodoButton />
          </div>
        </main>
      </div>
    </div>
  );
}
