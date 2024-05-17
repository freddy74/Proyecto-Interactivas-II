import myImage from "../../assets/imgs/course-placeholder.png";
import "../../index.css";
import "cally";
import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export function Calendar() {
  return (
    <>
      <div className="p-6 font-main rounded-lg bg-white">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
      </div>
    </>
  );
}
