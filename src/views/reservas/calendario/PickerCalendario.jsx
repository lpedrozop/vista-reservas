import { useState } from "react";
import "../../../styles/reservas/calendario/picker.css";

function PickerCalendario() {
  const [bloques, setBloques] = useState([
    { block: "A3", time: "6:00AM - 8:00AM" },
    { block: "A2", time: "9:00AM - 10:00AM" },
  ]);

  const [aulas, setAulas] = useState([{ aula: "A3-101" }, { aula: "A2-202" }]);

  return (
    <div className="body-left">
      <div className="header-body-left">
        <h5>Restringir salones</h5>
      </div>
      <div className="content-body-left">
        <div className="top-body-cnt">
          <div>
            <select>
              {bloques.map((assignment, index) => (
                <option key={index} value={assignment.block}>
                  Bloque {assignment.block}
                </option>
              ))}
            </select>
            <select>
              {aulas.map((aulas, index) => (
                <option key={index} value={aulas.aula}>
                  {aulas.aula}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input type="date" value="2024-04-24" onChange={() => {}} />
            <select>
              <option key="id" value="reunion">
                Reunion
              </option>
            </select>
          </div>
          <div>
            <input type="time" value="13:00" onChange={() => {}} />
            <input type="time" value="15:00" onChange={() => {}} />
          </div>
          <a className="bnt-bloquear">Bloquear</a>
        </div>
        <div className="bottom-body-cnt">
          <h5>Salones restringidos</h5>
          <div className="cnt-salones-restringidos">
            <div className="card-salones-restringidos">
              <h6>Bloque A4</h6>
              <p>Aula A4-204</p>
              <p>27/04/2024</p>
              <p>1:00 pm - 3:00 pm</p>
              <p>Conferencia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PickerCalendario;
