import React, { useState } from "react";
import { message } from "antd";
import "../styles/Principal/contenido.css";

const TablaReservas = () => {
  const [reservas, setReservas] = useState(
    Array.from({ length: 20 }, (_, index) => ({
      id: index + 1,
      salon: `A2-40${index + 1}`,
      nombreSolicitante: `Solicitante ${index + 1}`,
      aforo: `5${index + 1}`,
      fecha: "08/09/2023",
      entrada: "09:00 AM",
      salida: "11:00 AM",
      profesorACargo: "Rafael Monterroza",
      codigo: `ABC${index + 1}`,
      estado: "Pendiente",
      descripcion:
        "Me gustaría reservar este salón para estudiar cálculo durante varias horas. Necesito un espacio tranquilo y bien iluminado para concentrarme en mis estudios. Además, planeo repasar varios temas y realizar algunas prácticas. Agradezco la oportunidad de utilizar este espacio y estoy comprometido a mantenerlo en condiciones óptimas. ¡Gracias!",
    }))
  );

  const getStatusColor = (estado) => {
    switch (estado) {
      case "Pendiente":
        return "#efb810";
      case "Rechazada":
        return "#cb3234";
      case "Aprobada":
        return "green";
      default:
        return "black";
    }
  };

  const CollapsibleTable = () => {
    const [expandedRow, setExpandedRow] = useState(null);

    const manejoAcordion = (rowId) => {
      setExpandedRow(expandedRow === rowId ? null : rowId);
    };

    const aprobarReserva = (id) => {
      setReservas((prevReservas) =>
        prevReservas.map((reserva) =>
          reserva.id === id ? { ...reserva, estado: "Aprobada" } : reserva
        )
      );
      message.success("Reserva aprobada");
      manejoAcordion(null);
    };

    const rechazarReserva = (id) => {
      setReservas((prevReservas) =>
        prevReservas.map((reserva) =>
          reserva.id === id ? { ...reserva, estado: "Rechazada" } : reserva
        )
      );
      message.error("Reserva rechazada");
      manejoAcordion(null);
    };

    return (
      <table className="tbl-reservas">
        <thead>
          <tr>
            <th>#</th>
            <th>Salón</th>
            <th>Nombre Solicitante</th>
            <th>Aforo</th>
            <th>Fecha</th>
            <th>Entrada</th>
            <th>Salida</th>
            <th>Académico</th>
            <th>Código</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva) => (
            <React.Fragment key={reserva.id}>
              <tr
                onClick={() => manejoAcordion(reserva.id)}
                className={expandedRow === reserva.id ? "active-row" : ""}
              >
                <td>{reserva.id}</td>
                <td>{reserva.salon}</td>
                <td>{reserva.nombreSolicitante}</td>
                <td>{reserva.aforo}</td>
                <td>{reserva.fecha}</td>
                <td>{reserva.entrada}</td>
                <td>{reserva.salida}</td>
                <td>{reserva.profesorACargo}</td>
                <td>{reserva.codigo}</td>
                <td
                  style={{
                    fontWeight: "bold",
                    color: getStatusColor(reserva.estado),
                  }}
                >
                  {expandedRow === reserva.id ? (
                    <span>{reserva.estado}</span>
                  ) : (
                    reserva.estado
                  )}
                </td>
              </tr>
              {expandedRow === reserva.id && (
                <tr>
                  <td colSpan="11">
                    <div className="collapsible-content">
                      <p>
                        <span className="tag-rs">
                          Pendiente de confirmacion
                        </span>{" "}
                        <span className="tag-rs">Fecha proxima</span>
                      </p>
                      <h5>
                        {" "}
                        <span>Solicitud</span> <br />
                        {reserva.descripcion}
                      </h5>
                      <div className="cnt-btn-reservas">
                        <button
                          className="btn-aprobar-reservas"
                          onClick={() => aprobarReserva(reserva.id)}
                        >
                          Aprobar
                        </button>
                        <button
                          className="btn-eliminar-reservas"
                          onClick={() => rechazarReserva(reserva.id)}
                        >
                          Rechazar
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    );
  };

  return <CollapsibleTable />;
};

export default TablaReservas;
