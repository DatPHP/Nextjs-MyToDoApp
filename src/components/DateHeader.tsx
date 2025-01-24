"use client";

import dayjs from "dayjs";
import { IconButton } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function DateHeader() {
  const today = dayjs().format("dddd, MMM D");
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-lg font-semibold text-blue-500">{today}</h1>
      <IconButton>
        <CalendarTodayIcon />
      </IconButton>
    </div>
  );
}
