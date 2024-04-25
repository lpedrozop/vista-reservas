import React, { useState, useEffect } from "react";
import "../../../styles/reservas/asignar/auxiliares.css";
import AuxPicker from "./AuxPicker";
import AuxAssign from "./AuxAssign";

function Auxiliares() {
  const [selectedAux, setSelectedAux] = useState(null);

  const auxData = [];
  for (let i = 1; i <= 20; i++) {
    auxData.push({
      id: i,
      imageUrl:
        "https://www.asirox.com/wp-content/uploads/2022/07/pngtree-user-vector-avatar-png-image_1541962.jpeg",
      name: "Jose Mendoza",
      bloques: 2,
      asignaciones: 40,
      horas: 27.5,
      estado: "1",
    });
  }

  useEffect(() => {
    if (auxData.length > 0 && !selectedAux) {
      setSelectedAux(auxData[0]);
    }
  }, []);

  const manejoSeleccionAux = (id) => {
    setSelectedAux(auxData.find((aux) => aux.id === id));
  };

  const obtenerEstadoTextoYColor = (estado) => {
    if (estado === "1") {
      return { texto: "Confirmado", color: "var(--green-color)" };
    } else {
      return { texto: "Pendiente", color: "red" };
    }
  };

  return (
    <div className="auxiliares">
      <div className="aux-list">
        <h5>Lista Auxiliares</h5>
        {auxData.map((aux) => {
          const { texto, color } = obtenerEstadoTextoYColor(aux.estado);
          return (
            <div
              key={aux.id}
              className={`aux-card ${aux.id === selectedAux ? "selected" : ""}`}
              onClick={() => manejoSeleccionAux(aux.id)}
            >
              <div className="aux-image">
                <img src={aux.imageUrl} alt={aux.name} />
              </div>
              <div className="aux-details">
                <p className="aux-name">{aux.name}</p>
                <p className="aux-state" style={{ color }}>
                  {texto}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="aux-picker">
        {selectedAux && <AuxPicker auxData={selectedAux} />}
      </div>
      <div className="aux-assign">
        {selectedAux && <AuxAssign auxData={selectedAux} />}
      </div>
    </div>
  );
}

export default Auxiliares;
