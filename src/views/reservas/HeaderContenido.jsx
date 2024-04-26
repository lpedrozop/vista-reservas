import React from "react";
import "../../styles/reservas/Principal/headerPrincipal.css";
import logo_utb from "../../assets/logo_utb.png";
import { BiSearch } from "react-icons/bi";
import { obtenerIniciales } from "../../utils/initials";

function HeaderContenido({ userData, loading }) {
  const userInitials = userData ? obtenerIniciales(userData.name) : "";
  

  return (
    <div className="head-cnt-page">
      <div className="search-head">
        <BiSearch /> <input type="text" placeholder="Iniciar búsqueda..." />
      </div>
      <div>
        <img src={logo_utb} alt="utb" className="logo-utb" />
      </div>
      <div className="user-head">
        <div className="user-initials">
          <div className="user-avatar-head">{userInitials}</div>
          {loading ? <p>Cargando...</p> : userData && <p>{userData.name}</p>}
        </div>
      </div>
    </div>
  );
}

export default HeaderContenido;
