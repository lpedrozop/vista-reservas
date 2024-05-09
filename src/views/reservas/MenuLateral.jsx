import { BiExit, BiHomeAlt2, BiCalendarAlt, BiUser } from "react-icons/bi";
import { FaWpforms } from "react-icons/fa";
import "../../styles/reservas/Principal/menulateral.css";
import { redireccionar } from "../../utils/redireccionarRutas";
import { signOut } from "../../auth/authRedirect";

const MenuLateral = ({ onItemClick }) => {
  const clickItem = (item) => {
    if (item.onClick) {
      item.onClick();
    }
  };

  const manejoCerrarSesion = () => {
    signOut();
  };

  const items = [
    {
      key: "inicio",
      icon: <BiHomeAlt2 />,
      onClick: () => onItemClick("inicio"),
    },
    {
      key: "menu",
      icon: <FaWpforms />,
      onClick: () => redireccionar("/form"),
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
      onClick: () => manejoCerrarSesion(),
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
