import {
  BiExit,
  BiHomeAlt2,
  BiCalendarAlt,
  BiMenuAltLeft,
  BiUser,
} from "react-icons/bi";
import "../../styles/reservas/Principal/menulateral.css";
import { redireccionar } from "../../utils/redireccionarRutas";

const MenuLateral = ({ onItemClick }) => {
  const clickItem = (item) => {
    if (item.onClick) {
      item.onClick();
    }
  };

  const items = [
    {
      key: "menu",
      icon: <BiMenuAltLeft />,
      onClick: () => redireccionar("/form"),
    },
    {
      key: "inicio",
      icon: <BiHomeAlt2 />,
      onClick: () => onItemClick("inicio"),
    },
    {
      key: "calendario",
      icon: <BiCalendarAlt />,
      onClick: () => onItemClick("calendario"),
    },
    {
      key: "asignar",
      icon: <BiUser />,
      label: "Asignar",
      onClick: () => onItemClick("asignar"),
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
