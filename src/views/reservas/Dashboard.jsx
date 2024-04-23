import React, { useState } from "react";
import MenuLateral from "./MenuLateral";
import HeaderContenido from "./HeaderContenido";
import Contenido from "../reservas/inicio/Contenido";
import CntCalendario from "../reservas/calendario/CntCalendario";
import CntAsignar from "../reservas/asignar/CntAsignar";
import "../../styles/reservas/dashboard.css";

function Dashboard() {
  const [contenido, setContenido] = useState("inicio");

  const manejoEstadoContenido = (itemEstado) => {
    setContenido(itemEstado);
  };

  const renderContenido = () => {
    switch (contenido) {
      case "inicio":
        return <Contenido />;
      case "calendario":
        return <CntCalendario />;
      case "asignar":
        return <CntAsignar />;
      default:
        return <Contenido />;
    }
  };

  return (
    <div className="cnt-panel">
      <MenuLateral onItemClick={manejoEstadoContenido} />
      <div className="cnt-dashboard">
        <HeaderContenido />
        {renderContenido()}
      </div>
    </div>
  );
}

export default Dashboard;
