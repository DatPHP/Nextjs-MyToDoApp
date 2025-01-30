"use client";

import React from "react";
import Link from "next/link";

export default function AddTodoButton() {
  return (
    <div className="flex justify-end mt-10">
      <Link
        href="/todos/create"
        className="border-black border-4 rounded-lg flex items-center justify-center"
        style={{ borderWidth: 12 }}
      >
        <div className="flex items-center justify-center">
          <svg
            fill="#000000"
            height="25px"
            width="25px"
            version="1.1"
            viewBox="0 0 330 330"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M315,0H15C6.716,0,0,6.716,0,15v300c0,8.284,6.716,15,15,15h300c8.284,0,15-6.716,15-15V15
              C330,6.716,323.284,0,315,0z M255,180h-75v75c0,8.284-6.716,15-15,15s-15-6.716-15-15v-75H75c-8.284,0-15-6.716-15-15
              s6.716-15,15-15h75V75c0-8.284,6.716-15,15-15s15,6.716,15,15v75h75c8.284,0,15,6.716,15,15S263.284,180,255,180z"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
}
