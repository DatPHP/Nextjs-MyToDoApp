import DateHeader from "@components/DateHeader";
import TodoList from "../components/TodoList";
import Link from "next/link";
import { IconButton } from "@mui/material";
import { AddBoxRounded } from "@mui/icons-material";

export default function Home() {
  return (
    <div className="min-h-fit bg-gray-100 flex justify-center">
      <div className="w-[450px] bg-gray-50 padding-4 mt-4 rounded-2xl border border-gray-200 overflow-hidden shadow-md">
        <DateHeader />
        <main className="p-4">
          <div className="space-y-4">
            <TodoList />
          </div>
          <div className="flex justify-end mt-10">
            <Link href="/todos/create" className="border-gray-950 border-2 rounded-lg">
              <svg fill="#000000" height="42px" width="42px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 330 330" xmlSpace="preserve">
              <path id="XMLID_23_" d="M315,0H15C6.716,0,0,6.716,0,15v300c0,8.284,6.716,15,15,15h300c8.284,0,15-6.716,15-15V15
                C330,6.716,323.284,0,315,0z M255,180h-75v75c0,8.284-6.716,15-15,15s-15-6.716-15-15v-75H75c-8.284,0-15-6.716-15-15
                s6.716-15,15-15h75V75c0-8.284,6.716-15,15-15s15,6.716,15,15v75h75c8.284,0,15,6.716,15,15S263.284,180,255,180z"/>
              </svg>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
