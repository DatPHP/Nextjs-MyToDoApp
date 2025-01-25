"use client";

import { useState } from "react";
import { IconButton, Button, Typography, Box } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import dayjs from "dayjs";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function DateHeader() {
  const today = dayjs().format("dddd, MMM D");
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const toggleCalendar = () => {
    setCalendarOpen((prev) => !prev);
  };

  return (
    <Box className="bg-white p-4 shadow-md rounded-xl relative">
      <div className="flex justify-between items-center">
        <div>
          <Typography variant="body2" color="textSecondary">
            {today}
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
          className="absolute top-12 right-4 bg-white shadow-lg rounded-lg z-10 p-2"
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

      {/* Horizontal Date Picker */}
      <div className="mt-4 flex justify-between border-b border-gray-200 pb-2">
        {["7", "8", "9", "10", "11", "12", "13"].map((day, index) => (
          <Button
            key={index}
            className={`w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-300 ${
              day === "12" ? "bg-gray-100 text-white" : ""
            }`}
          >
            {day}
          </Button>
        ))}
      </div>
    </Box>
  );
}
