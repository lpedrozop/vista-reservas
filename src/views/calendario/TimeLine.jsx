import React, { useState, useEffect } from "react";
import "../../styles/calendario/timeline.css";

const events = [
  {
    user: 1,
    title: "A1 301",
    start: { hours: 23, minutes: 0 },
    end: { hours: 23, minutes: 59 },
  },
  {
    user: 2,
    title: "A1 401",
    start: { hours: 10, minutes: 0 },
    end: { hours: 15, minutes: 0 },
  },
  {
    user: 3,
    title: "A2 502",
    start: { hours: 0, minutes: 0 },
    end: { hours: 1, minutes: 0 },
  },
  {
    user: 3,
    title: "A4 204",
    start: { hours: 2, minutes: 0 },
    end: { hours: 4, minutes: 0 },
  },
  {
    user: 1,
    title: "A2 302",
    start: { hours: 2, minutes: 0 },
    end: { hours: 4, minutes: 0 },
  },
];

const colorAleatorio = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const TimeLine = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [eventColors, setEventColors] = useState([]);

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return { hours, minutes };
  }

  useEffect(() => {
    const colors = events.map(() => colorAleatorio());
    setEventColors(colors);
  }, []);

  setInterval(() => {
    setCurrentTime(getCurrentTime());
  }, 60000);

  const crearEventos = () => {
    const columns = [[], [], []];
    events.forEach((event, index) => {
      const { hours: startHours, minutes: startMinutes } = event.start;
      const userPosition = event.user - 1;

      const topPercent =
        ((startHours * 60 + startMinutes) / (24 * 60)) * 100 +
        (userPosition * 33 * 100) / 99;

      columns[userPosition].push(
        <div
          key={event.title}
          className="event"
          style={{
            position: "relative",
            top: `${topPercent}%`,
            backgroundColor: eventColors[index],
            color: "#fff",
            padding: "5px",
            width: "60%",
            height: "80px",
          }}
        >
          {event.title}
        </div>
      );
    });

    return columns.map((column, index) => (
      <div key={index} className="events-container">
        {column}
      </div>
    ));
  };

  return (
    <div className="day-calendar">
      <div className="timeline">
        {[...Array(24).keys()].map((hour) => (
          <div key={hour} className="hour-marker">
            {`${hour}:00`}
          </div>
        ))}
      </div>
      <div
        className="time-marker"
        style={{
          top: `${
            ((currentTime.hours * 60 + currentTime.minutes) / (24 * 60)) * 100
          }%`,
        }}
      >
        {" "}
      </div>
      {crearEventos()}
    </div>
  );
};

export default TimeLine;
