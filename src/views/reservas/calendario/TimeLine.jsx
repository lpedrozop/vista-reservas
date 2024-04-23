import React, { useState, useEffect } from "react";
import "../../../styles/reservas/calendario/timeline.css";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs, { locale } from "dayjs";
import { CiCalendar } from "react-icons/ci";
import { LuCalendarCheck } from "react-icons/lu";
import { FaChevronLeft, FaChevronRight, FaCalendarAlt } from "react-icons/fa";
import "dayjs/locale/es";

dayjs(locale("es"));

const TimeLine = () => {
  const localizer = dayjsLocalizer(dayjs);
  // const reservas = [];
  // for (let i = 0; i < 8; i++) {
  //   const reserva = {
  //     start: dayjs("2024-02-19T21:00:00").toDate(),
  //     end: dayjs("2024-02-19T23:59:00").toDate(),
  //     title: `A2-502-${i + 1}`,
  //     nameUser: `Usuario${i + 1}`,
  //   };

  //   reservas.push(reserva);
  // }

  const reservas = [
    {
      start: dayjs("2024-03-01T20:00:00").toDate(),
      end: dayjs("2024-03-01T22:00:00").toDate(),
      title: "A2-502",
      nameUser: "Jose Mendoza",
    },

    {
      start: dayjs("2024-03-06T8:00:00").toDate(),
      end: dayjs("2024-03-06T10:00:00").toDate(),
      title: "A1-401",
      nameUser: "Jose Mendoza",
    },
    {
      start: dayjs("2024-03-07T7:00:00").toDate(),
      end: dayjs("2024-03-06T7:00:00").toDate(),
      title: "A2-502",
      nameUser: "Jose Mendoza",
    },
    {
      start: dayjs("2024-03-04T10:00:00").toDate(),
      end: dayjs("2024-03-04T12:00:00").toDate(),
      title: "A1-401",
      nameUser: "Jose Mendoza",
    },
    {
      start: dayjs("2024-03-05T10:00:00").toDate(),
      end: dayjs("2024-03-05T12:00:00").toDate(),
      title: "A4-303",
      nameUser: "Jose Mendoza",
    },
    {
      start: dayjs("2024-02-16T10:00:00").toDate(),
      end: dayjs("2024-02-16T12:00:00").toDate(),
      title: "A1-202",
      nameUser: "Jose Mendoza",
    },
  ];

  let formats = {
    timeGutterFormat: "HH:mm",
  };

  const components = {
    event: (event) => {
      const horaActual = dayjs();

      if (
        event &&
        event.event &&
        event.event.end instanceof Date &&
        horaActual.isAfter(event.event.end)
      ) {
        return (
          <div className="event-closed">
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {event.title}
              <LuCalendarCheck
                style={{ marginLeft: "10px", fontSize: "20px" }}
              />
            </div>{" "}
            <div
              className="avatar-event"
              style={{
                backgroundImage: `url(${"https://i.redd.it/ypire7te8rc71.jpg"})`,
              }}
            ></div>
          </div>
        );
      } else {
        return (
          <div className="event-open">
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {event.title}
              <LuCalendarCheck
                style={{ marginLeft: "10px", fontSize: "20px" }}
              />
            </div>{" "}
            <div
              className="avatar-event"
              style={{
                backgroundImage: `url(${"https://i.redd.it/ypire7te8rc71.jpg"})`,
              }}
            ></div>
          </div>
        );
      }
    },
  };

  const CustomToolbar = ({ date, onNavigate, view, onView }) => {
    const manejoCambio = (action) => {
      onNavigate(action);
    };

    const cambioVista = (nuevaVista) => {
      if (nuevaVista !== view) {
        onView(nuevaVista);
      }
    };

    return (
      <div className="toolbar-calendar">
        <div className="calendar-buttons">
          <button
            className="btn-calendar-label btn-back-calendar"
            onClick={() => manejoCambio("PREV")}
          >
            <FaChevronLeft />
          </button>
          <label className="date-label">
            {date.toLocaleString("default", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </label>
          <button
            className="btn-calendar-label btn-next-calendar"
            onClick={() => manejoCambio("NEXT")}
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="container-filter">
          <button
            className={`bg-filter-${view === "day" ? "on" : "off"}`}
            onClick={() => cambioVista("day")}
          >
            <span className={`label-filter-${view === "day" ? "on" : "off"}`}>
              Dia
            </span>
          </button>
          <button
            className={`bg-filter-${view === "week" ? "on" : "off"}`}
            onClick={() => cambioVista("week")}
          >
            <span className={`label-filter-${view === "week" ? "on" : "off"}`}>
              Semana
            </span>
          </button>
          <button
            className={`bg-filter-${view === "month" ? "on" : "off"}`}
            onClick={() => cambioVista("month")}
          >
            <span className={`label-filter-${view === "month" ? "on" : "off"}`}>
              Mes
            </span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="day-calendar">
      <Calendar
        localizer={localizer}
        events={reservas}
        views={["month", "week", "day"]}
        defaultView="month"
        showAllEvents={true}
        formats={formats}
        min={dayjs("2024-02-19T7:00:00").toDate()}
        max={dayjs("2024-02-19T23:59:00").toDate()}
        components={{
          event: components.event,
          toolbar: CustomToolbar,
        }}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

export default TimeLine;
