"use client";

import { useState } from "react";
import { IconButton, Typography, Box } from "@mui/material";
import dayjs from "dayjs";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function DateHeader() {
  const today: any = dayjs(); // Current date
  const helloToday = dayjs().format("dddd, MMM D");
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const toggleCalendar = () => {
    setCalendarOpen((prev) => !prev);
  };

  const currentDay = selectedDate ? dayjs(selectedDate) : today;
  const startOfWeek = currentDay.startOf("week"); // Get Sunday of this week
  const daysOfWeek = Array.from({ length: 7 }, (_, i) =>
    startOfWeek.add(i, "day"),
  ); // Full week

  return (
    <Box className="bg-gray-50 pt-10 shadow-md relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 px-6">
        <div className="mx-2">
          <Typography
            variant="h6"
            className="text-gray-400 text-sm tracking-wide uppercase font-semibold"
          >
            {helloToday}
          </Typography>
          <Typography variant="h4" fontWeight="bold">
            To-Do List
          </Typography>
        </div>
        <div className="mr-4">
        <IconButton
          className="text-gray-500"
          onClick={toggleCalendar}
          aria-label="Open calendar"
        >
          <CalendarTodayIcon fontSize="medium" />
        </IconButton>
        </div>
      </div>
      {/* Calendar Popup */}
      {calendarOpen && (
        <Box
          className="absolute top-15 right-8 bg-gray-50 shadow-lg rounded-lg z-10 p-2"
          style={{ width: "300px" }}
        >
          <Calendar
            value={selectedDate}
            onChange={(date) => {
              setSelectedDate(date as Date);
              setCalendarOpen(false); // Close calendar after selecting a date
            }}
          />
        </Box>
      )}

      {/* Week Date Range */}
      <div className="mt-10 mb-5 flex justify-between items-center px-2">
        {daysOfWeek.map((day, index) => (
          <Box
            key={index}
            className={`flex flex-col items-center ${
              currentDay.isSame(day, "date")
                ? "text-black border-b-4 border-black px-5 py-3"
                : ""
            }
          `}
          >
            <Typography
              variant="body2"
              className={`front-weight-bold
            ${
              currentDay.isSame(day, "date")
                ? "text-black font-bold"
                : "text-gray-300"
            }`}
            >
              {day.format("dd").split("")[0]}{" "}
              {/*Short day name   example :su : s mo: m tu : t */}
            </Typography>
            <Typography
              variant="h6"
              className={`mt-1 
                ${
                  currentDay.isSame(day, "date")
                    ? "text-black  font-bold"
                    : "text-gray-300"
                }`}
            >
              {day.format("D")}
            </Typography>
          </Box>
        ))}
      </div>
    </Box>
  );
}
