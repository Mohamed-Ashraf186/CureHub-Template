"use client";

import { useState, useRef, useEffect } from "react";
import { Calendar, Edit, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../../components/ui/button";
import styled from "styled-components";

const MiniCalendarOverlay = styled.div`
  background: rgba(255, 255, 255, 0.8);
`;

export default function DoctorScheduleCalendar() {
  const [month, setMonth] = useState("November");
  const [year, setYear] = useState(2024);
  const [selectedDate, setSelectedDate] = useState(7);
  const [showMiniCalendar, setShowMiniCalendar] = useState(false);

  const miniCalendarRef = useRef(null);
  const calendarButtonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        miniCalendarRef.current &&
        !miniCalendarRef.current.contains(event.target) &&
        calendarButtonRef.current &&
        !calendarButtonRef.current.contains(event.target)
      ) {
        setShowMiniCalendar(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const appointments = [
    {
      day: "Sunday",
      time: "10:00-12:00 PM",
      doctor: "Dr. John",
      specialty: "Dentist",
      bgColor: "bg-[#ffe5cc]",
      textColor: "text-[#f7912c]",
    },
    {
      day: "Sunday",
      time: "7:00-9:00 PM",
      doctor: "Dr. John",
      specialty: "GP",
      bgColor: "bg-[#fef3c6]",
      textColor: "text-[#b99400]",
    },
    {
      day: "Monday",
      time: "2:00-4:00 PM",
      doctor: "Dr. John",
      specialty: "GP",
      bgColor: "bg-[#fef3c6]",
      textColor: "text-[#b99400]",
    },
    {
      day: "Monday",
      time: "9:00-11:00 PM",
      doctor: "Dr. John",
      specialty: "GIT",
      bgColor: "bg-[#a8f9ff]",
      textColor: "text-primary",
    },
    {
      day: "Tuesday",
      time: "1:00-3:00 PM",
      doctor: "Dr. John",
      specialty: "GP",
      bgColor: "bg-[#d1fbe7]",
      textColor: "text-[#1a9c49]",
    },
    {
      day: "Wednesday",
      time: "5:00-7:00 PM",
      doctor: "Dr. John",
      specialty: "GP",
      bgColor: "bg-[#d1fbe7]",
      textColor: "text-[#1a9c49]",
    },
    {
      day: "Wednesday",
      time: "10:00-12:00 AM",
      doctor: "Dr. John",
      specialty: "ENT",
      bgColor: "bg-[#e2e3ff]",
      textColor: "text-[#9747ff]",
    },
    {
      day: "Thursday",
      time: "10:00-12:00 PM",
      doctor: "Dr. John",
      specialty: "GIT",
      bgColor: "bg-[#a8f9ff]",
      textColor: "text-primary",
    },
    {
      day: "Thursday",
      time: "3:00-5:00 PM",
      doctor: "Dr. John",
      specialty: "Dentist",
      bgColor: "bg-[#ffe5cc]",
      textColor: "text-[#f7912c]",
    },
    {
      day: "Friday",
      time: "1:00-3:00 PM",
      doctor: "Dr. John",
      specialty: "ENT",
      bgColor: "bg-[#e2e3ff]",
      textColor: "text-[#9747ff]",
    },
    {
      day: "Saturday",
      time: "5:00-7:00 PM",
      doctor: "Dr. John",
      specialty: "Dentist",
      bgColor: "bg-[#ffe5cc]",
      textColor: "text-[#f7912c]",
    },
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayAbbreviations = ["Sa", "Su", "Mo", "Tu", "We", "Th", "Fr"];

  const timeSlots = [
    "10:00-12:00 PM",
    "1:00-3:00 PM",
    "2:00-4:00 PM",
    "3:00-5:00 PM",
    "5:00-7:00 PM",
    "7:00-9:00 PM",
    "9:00-11:00 PM",
    "10:00-12:00 AM",
  ];

  const getAppointment = (day, time) => {
    return appointments.find((app) => app.day === day && app.time === time);
  };

  const calendarData = [
    [null, null, null, null, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31],
  ];

  const highlightedRows = [0, 1, 2, 3];
  const highlightedDates = Array.from({ length: 25 }, (_, i) => i + 1);

  const toggleMiniCalendar = () => {
    setShowMiniCalendar(!showMiniCalendar);
  };

  return (
    <div className="w-full mx-auto ">
      <div className="flex gap-2 items-center mb-4 relative z-20">
        <Button
          variant="default"
          className="bg-primary cursor-pointer text-white flex items-center gap-2 font-primary"
          onClick={toggleMiniCalendar}
          ref={calendarButtonRef}
        >
          {month}
          <Calendar className="h-4 w-4" />
        </Button>

        {showMiniCalendar && (
          <div
            ref={miniCalendarRef}
            className="absolute top-full left-0 mt-[15pxabsolute top-full] rounded-md shadow-lg z-30 w-fit animate-in fade-in-50 zoom-in-95 duration-100"
          >
            <div className="bg-white border  border-[#00a8b5] rounded-sm">
              <div className="flex justify-between items-center px-4 py-2">
                <ChevronLeft className="h-4 w-4  cursor-pointer" />
                <span className=" font-medium text-primary">
                  {month} {year}
                </span>
                <ChevronRight className="h-4 w-4  cursor-pointer" />
              </div>
            </div>

            <div className="p-4 mt-2 bg-white rounded-sm border  border-[#00a8b5] ">
              <div className="grid grid-cols-7 text-center mb-4">
                {dayAbbreviations.map((day, index) => (
                  <div key={index} className="font-primary text-basic">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid gap-2">
                {calendarData.map((week, weekIndex) => {
                  if (weekIndex === 0) {
                    const firstDayIndex = week.findIndex((day) => day === 1);

                    return (
                      <div
                        key={weekIndex}
                        className="grid grid-cols-7 gap-4 text-center relative"
                      >
                        <div
                          className="absolute bg-primary rounded-[8px] h-10 z-0"
                          style={{
                            left: `${(firstDayIndex / 7) * 100}%`,
                            width: `${((7 - firstDayIndex) / 7) * 100}%`,
                            top: "-4px",
                          }}
                        />

                        {week.map((date, dateIndex) => (
                          <div
                            key={`${weekIndex}-${dateIndex}`}
                            className={`
                              h-8 w-8 flex items-center justify-center mx-auto z-10 relative font-medium
                              ${date === null ? "invisible" : ""}
                              ${
                                highlightedDates.includes(date)
                                  ? "text-white"
                                  : "text-[#666]"
                              }
                            `}
                          >
                            {date}
                          </div>
                        ))}
                      </div>
                    );
                  } else if (highlightedRows.includes(weekIndex)) {
                    return (
                      <div
                        key={weekIndex}
                        className="grid grid-cols-7 text-center bg-primary rounded-[8px] py-1"
                      >
                        {week.map((date, dateIndex) => (
                          <div
                            key={`${weekIndex}-${dateIndex}`}
                            className={`
                              h-8 w-8 flex items-center justify-center mx-auto font-medium
                              ${date === null ? "invisible" : ""}
                              ${
                                highlightedDates.includes(date)
                                  ? "text-white"
                                  : "text-[#666]"
                              }
                            `}
                          >
                            {date}
                          </div>
                        ))}
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={weekIndex}
                        className="grid grid-cols-7 text-center"
                      >
                        {week.map((date, dateIndex) => (
                          <div
                            key={`${weekIndex}-${dateIndex}`}
                            className="h-8 w-8 flex items-center justify-center mx-auto text-[#666] font-[Inter]"
                          >
                            {date}
                          </div>
                        ))}
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        )}

        <Button
          variant="outline"
          className="border-gray-300 text-gray-700 flex items-center gap-2 cursor-pointer font-primary"
        >
          <Edit className="h-4 w-4" />
          Edit
        </Button>
      </div>

      <div className="border border-[#999a9d] rounded-md overflow-hidden relative">
        {showMiniCalendar && (
          <MiniCalendarOverlay
            className="absolute inset-0 z-10 animate-in fade-in-0 duration-100"
            onClick={() => setShowMiniCalendar(false)}
          />
        )}

        <div
          className="grid grid-cols-7 border-b relative bg-white"
          style={{ borderColor: "#999a9d" }}
        >
          {days.map((day, index) => (
            <div
              key={index}
              className="py-3 px-4 text-center border-r border-[#999a9d] last:border-r-0 text-primary font-primary"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="relative">
          {timeSlots.map((time, timeIndex) => (
            <div
              key={timeIndex}
              className="grid grid-cols-7 border-b last:border-b-0"
              style={{ borderColor: "#999a9d" }}
            >
              {days.map((day, dayIndex) => {
                const appointment = getAppointment(day, time);
                return (
                  <div
                    key={`${timeIndex}-${dayIndex}`}
                    className={`min-h-[100px] p-4 border-r last:border-r-0 ${
                      appointment ? appointment.bgColor : "bg-white"
                    }`}
                    style={{ borderColor: "#999a9d" }}
                  >
                    {appointment && (
                      <div className="flex flex-col h-full">
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-transparent border-[#999a9d]  flex items-center justify-center mr-2">
                            <img src="/doc-pfp.svg" alt="doc-pfp" />
                          </div>
                        </div>
                        <div className="mt-1">
                          <p
                            className={`text-sm font-primary  ${
                              appointment ? appointment.textColor : "text-black"
                            }`}
                          >
                            {appointment.time}
                          </p>
                          <p
                            className={`text-sm font-primary font-medium  ${
                              appointment ? appointment.textColor : "text-black"
                            }`}
                          >
                            {appointment.doctor}{" "}
                            <span
                              className={`text-sm font-primary  font-medium ${
                                appointment
                                  ? appointment.textColor
                                  : "text-black"
                              }`}
                            >
                              ({appointment.specialty})
                            </span>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
