import "../../../styles/reservas/asignar/auxassign.css";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

function AuxAssign({ auxData }) {
  const [assignments, setAssignments] = useState([
    { block: "A3", time: "6:00AM - 8:00AM" },
    { block: "A2", time: "9:00AM - 10:00AM" },
    { block: "A1", time: "10:00AM - 13:00PM" },
    { block: "A3", time: "6:00AM - 8:00AM" },
    { block: "A3", time: "6:00AM - 8:00AM" },
    { block: "A2", time: "9:00AM - 10:00AM" },
    { block: "A1", time: "10:00AM - 13:00PM" },
    { block: "A3", time: "6:00AM - 8:00AM" },
  ]);

  return (
    <div className="assign-cnt">
      <h5>Asignar</h5>
      <div className="assignment-container">
        <div className="assignment-inputs">
          <div className="top-inputs">
            <select>
              {assignments.map((assignment, index) => (
                <option key={index} value={assignment.block}>
                  Bloque {assignment.block}
                </option>
              ))}
            </select>
            <input type="date" value="2024-04-24" onChange={() => {}} />
          </div>
          <div className="bottom-inputs">
            <input type="time" value="13:00" onChange={() => {}} />
            <input type="time" value="15:00" onChange={() => {}} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <a className="btn-assign-aux">
              Agregar asignación <IoMdAdd />
            </a>
          </div>
        </div>
        <div className="established-assignments">
          <h5>Asignaciones establecidas</h5>
          <div className="blocks">
            {assignments.map((assignment, index) => (
              <div key={index} className="block">
                <div className="head-assigment-time">
                  <h6>{assignment.block} </h6>
                  <p>Bloque</p>
                </div>
                <div className="foot-assigment-time">{assignment.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuxAssign;
