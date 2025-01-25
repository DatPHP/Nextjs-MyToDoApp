import DateHeader from "@components/DateHeader";
import TodoList from "../components/TodoList";
import Link from "next/link";
import { IconButton } from "@mui/material";
import { AddBoxRounded } from "@mui/icons-material";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-[800px] bg-white padding-4 mt-4 rounded-md border border-gray-200">
        <DateHeader />
        <main className="p-4">
          <div className="space-y-4">
            <TodoList />
          </div>
          <div className="flex justify-end mt-10">
            <Link href="/todos/create">
              <IconButton className=" w-15 h-15 rounded-lg flex items-center justify-center shadow-lg">
                <AddBoxRounded fontSize="large" />
              </IconButton>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
