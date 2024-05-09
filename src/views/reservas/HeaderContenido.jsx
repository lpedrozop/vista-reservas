import React, { useState, useEffect } from "react";
import "../../styles/reservas/Principal/headerPrincipal.css";
import logo_utb from "../../assets/logo_utb.png";
import { BiSearch } from "react-icons/bi";
import { obtenerIniciales } from "../../utils/initials";
import { Drawer } from "antd";
import { BiExit, BiHomeAlt2, BiCalendarAlt, BiUser } from "react-icons/bi";
import { FaWpforms } from "react-icons/fa";
import { redireccionar } from "../../utils/redireccionarRutas";
import { signOut } from "../../auth/authRedirect";

function HeaderContenido({ userData, loading }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const userInitials = userData ? obtenerIniciales(userData.response.name) : "";

  const showDrawer = () => {
    setMenuVisible(true);
  };

  const onClose = () => {
    setMenuVisible(false);
  };

  const clickItem = (item) => {
    if (item.onClick) {
      item.onClick();
    }
  };

  const manejoCerrarSesion = () => {
    signOut();
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 900);
    };

    handleResize(); // Para establecer el estado inicial al cargar la página

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const items = [
    {
      key: "Inicio",
      icon: <BiHomeAlt2 />,
      onClick: () => onItemClick("inicio"),
    },
    {
      key: "Formulario",
      icon: <FaWpforms />,
      onClick: () => redireccionar("/form"),
    },
    {
      key: "Calendario",
      icon: <BiCalendarAlt />,
      onClick: () => onItemClick("calendario"),
    },
    {
      key: "Asignar",
      icon: <BiUser />,
      label: "Asignar",
      onClick: () => onItemClick("asignar"),
    },
    {
      key: "Salir",
      icon: <BiExit style={{ transform: "rotate(180deg)" }} />,
      onClick: () => manejoCerrarSesion(),
    },
  ];

  return (
    <div className="head-cnt-page">
      <div className="search-head">
        <BiSearch /> <input type="text" placeholder="Iniciar búsqueda..." />
      </div>
      <div>
        <img src={logo_utb} alt="utb" className="logo-utb" />
      </div>
      <div className="user-head">
        <div
          className="user-initials"
          onClick={isSmallScreen ? showDrawer : undefined}
        >
          <div className="user-avatar-head">{userInitials}</div>
          {loading ? <p>Cargando...</p> : userData && <p>{userData.name}</p>}
        </div>
        {isSmallScreen && (
          <Drawer
            title="Sire"
            placement="right"
            closable={false}
            onClose={onClose}
            open={menuVisible}
            width={200}
          >
            {items.map((item) => (
              <li
                className="li-drawer"
                key={item.key}
                onClick={() => clickItem(item)}
              >
                <div className="menu-drawer">
                  {item.icon}
                  <p>{item.key}</p>
                </div>
              </li>
            ))}
          </Drawer>
        )}
      </div>
    </div>
  );
}

export default HeaderContenido;
