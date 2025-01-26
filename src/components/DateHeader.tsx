"use client";

import { useState } from "react";
import { IconButton, Button, Typography, Box } from "@mui/material";
import dayjs from "dayjs";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function DateHeader() {
  const today: any = dayjs(); // Current date
  const helloToday = dayjs().format("dddd, MMM D");

  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log(selectedDate);
  const toggleCalendar = () => {
    setCalendarOpen((prev) => !prev);
  };

  const currentDay = selectedDate ? dayjs(selectedDate) : today;

  console.log(today);
  const startOfWeek = currentDay.startOf("week"); // Get Sunday of this week
  console.log(startOfWeek);
  const daysOfWeek = Array.from({ length: 7 }, (_, i) =>
    startOfWeek.add(i, "day"),
  ); // Full week
  console.log(daysOfWeek);

  return (
    <Box className="bg-white p-6 shadow-md rounded-xl">
      {/* Header */}
      {/* <div className="flex justify-between items-center">
        <div>
          <Typography variant="body2" color="textSecondary">
             {today.format("dddd, MMMM D, YYYY")} 
            {helloToday}
          </Typography>
          <Typography variant="h4" fontWeight="bold">
            To-Do List
          </Typography>
        </div>
      </div> */}

      <div className="flex justify-between items-center">
        <div>
          <Typography variant="body2" color="textSecondary">
            {helloToday}
          </Typography>
          <Typography variant="h4" fontWeight="bold">
            To-Do List
          </Typography>
        </div>
        <IconButton
          className="text-gray-500"
          onClick={toggleCalendar}
          aria-label="Open calendar"
        >
          <CalendarTodayIcon fontSize="medium" />
        </IconButton>
      </div>
      {/* Calendar Popup */}
      {calendarOpen && (
        <Box
          className="absolute top-15 right-8 bg-white shadow-lg rounded-lg z-10 p-2"
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
      <div className="mt-6 flex justify-between items-center">
        {daysOfWeek.map((day, index) => (
          <Box
            key={index}
            className={`flex flex-col items-center ${
              currentDay.isSame(day, "date")
                ? "text-white bg-gray-300 rounded-lg px-3 py-2"
                : ""
            }
          
            ${
              today.isSame(day, "date")
                ? "text-white bg-blue-300 rounded-lg px-3 py-2"
                : ""
            }`}
          >
            <Typography variant="body2" className="text-gray-800">
              {day.format("dd").split("")[0]}{" "}
              {/*Short day name   example :su : s mo: m tu : t */}
            </Typography>
            <Typography
              variant="h6"
              className={`mt-1 

                ${today.isSame(day, "date") ? "font-bold" : "text-gray-700"}
                
                ${
                  currentDay.isSame(day, "date") ? "font-bold" : "text-gray-700"
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
