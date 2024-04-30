import React, { useState, useEffect } from "react";
import MenuLateral from "./MenuLateral";
import HeaderContenido from "./HeaderContenido";
import Contenido from "../reservas/inicio/Contenido";
import CntCalendario from "../reservas/calendario/CntCalendario";
import CntAsignar from "../reservas/asignar/CntAsignar";
import { useLoader } from "../../utils/Loader";
import { fetchTokenInfo } from "../../utils/fetchTokenInfo";
import "../../styles/reservas/dashboard.css";

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [contenido, setContenido] = useState("inicio");
  const { loading, showLoader, hideLoader } = useLoader();

  const manejoEstadoContenido = (itemEstado) => {
    setContenido(itemEstado);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        showLoader();
        const data = await fetchTokenInfo();
        setUserData(data);
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      } finally {
        hideLoader();
      }
    };

    fetchData();
  }, []);

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
        <HeaderContenido userData={userData} loading={loading} />{" "}
        {renderContenido()}
      </div>
    </div>
  );
}

export default Dashboard;
