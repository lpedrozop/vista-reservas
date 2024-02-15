import React, { useState, useEffect } from "react";
import { AiOutlineSetting, AiOutlineHome } from "react-icons/ai";
import { MdOutlineCalendarToday } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import logo_utb from "../../assets/logo_utb.png";
import "../../styles/Principal/menulateral.css";
import { useNavigate } from "react-router-dom";

const MenuLateral = () => {
  const [current, setCurrent] = useState(null);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const navigate = useNavigate();

  const clickItem = (item) => {
    if (item.onClick) {
      item.onClick();
    }
  };

  const redireccionar = (direccion) => {
    if (direccion.startsWith("http")) {
      window.location.href = direccion;
    } else {
      navigate(direccion);
    }
    setSidebarVisible(false);
  };

  const items = [
    {
      key: "companyName",
      icon: (
        <img
          src={logo_utb}
          alt="logo"
          style={{ width: "47px", marginLeft: "-14px" }}
        />
      ),
      label: "",
    },
    {
      key: "inicio",
      icon: <AiOutlineHome />,
      label: "Inicio",
      onClick: () => redireccionar("/"),
    },
    {
      key: "calendario",
      icon: <MdOutlineCalendarToday />,
      label: "Calendario",
      onClick: () => redireccionar("/aula-activa"),
    },
    {
      key: "configuracion",
      icon: <AiOutlineSetting />,
      label: "Configuracion",
    },
    {
      key: "salir",
      icon: <RxExit style={{ transform: "rotate(180deg)" }} />,
      label: "Salir",
      onClick: () => redireccionar("https://www.utb.edu.co/"),
    },
  ];

  const hideSidebar = () => setSidebarVisible(false);

  useEffect(() => {
    setCurrent(null);
  }, []);

  const handleMouseEnter = () => {
    setSidebarVisible(true);
  };

  const handleMouseLeave = (e) => {
    const relatedTarget = e.relatedTarget;
    if (relatedTarget) {
      const isInside =
        relatedTarget.closest && relatedTarget.closest(".custom-barra-lateral");
      if (!isInside) {
        setSidebarVisible(false);
      }
    }
  };

  return (
    <div className="custom-barra-lateral" onMouseLeave={handleMouseLeave}>
      <div
        className={`custom-visible-barra ${
          sidebarVisible ? "expanded" : "collapsed"
        }`}
        onMouseEnter={handleMouseEnter}
      >
        <ul className="custom-menu-lateral" onClick={hideSidebar}>
          {items.map((item) => (
            <li key={item.key} onClick={() => clickItem(item)}>
              <div className="custom-icon">{item.icon}</div>
              <div className="custom-label">
                {sidebarVisible ? item.label : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuLateral;
