import {
  BiExit,
  BiHomeAlt2,
  BiCalendarAlt,
  BiMenuAltLeft,
  BiUser,
} from "react-icons/bi";
import "../../../styles/reservas/Principal/menulateral.css";
import { redireccionar } from "../../../utils/redireccionarRutas";

const MenuLateral = () => {
  const clickItem = (item) => {
    if (item.onClick) {
      item.onClick();
    }
  };

  const items = [
    {
      key: "logoUtb",
      icon: <BiMenuAltLeft />,
    },
    {
      key: "inicio",
      icon: <BiHomeAlt2 />,
      onClick: () => redireccionar("/dashboard"),
    },
    {
      key: "calendario",
      icon: <BiCalendarAlt />,
      onClick: () => redireccionar("/dashboard/aula-activa"),
    },
    {
      key: "configuracion",
      icon: <BiUser />,
      label: "Configuracion",
    },
    {
      key: "salir",
      icon: <BiExit style={{ transform: "rotate(180deg)" }} />,
      onClick: () => redireccionar("/"),
    },
  ];

  return (
    <div className="custom-barra">
      <ul className="custom-menu-lateral">
        {items.map((item) => (
          <li key={item.key} onClick={() => clickItem(item)}>
            <div className="custom-icon">{item.icon}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuLateral;
