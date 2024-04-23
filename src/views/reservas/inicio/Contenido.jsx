import "../../../styles/reservas/Principal/contenido.css";
import { IoSearch } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";
import TablaReservas from "./TablaReservas";
import HeaderContenido from "./HeaderContenido";
import CardReserva from "./CardReserva";

function Contenido() {
  return (
    <div className="cnt-contenido">
      <HeaderContenido />
      <div className="search-cnt">
        <CardReserva />
      </div>
      <div className="cnt-reservas">
        <TablaReservas />
      </div>
    </div>
  );
}

export default Contenido;
