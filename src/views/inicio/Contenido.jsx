import "../../styles/Principal/contenido.css";
import { IoSearch } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";
import TablaReservas from "./TablaReservas";
import HeaderContenido from "./HeaderContenido";

function Contenido() {
  return (
    <div className="cnt-contenido">
      <HeaderContenido />
      <div className="search-cnt">
        <div className="cnt-boxes">
          <div className="search-box">
            <input
              type="text"
              placeholder="Realizar busquedas por nombre o codigo"
            />
            <IoSearch className="search-icon" />
          </div>
          <div className="search-box">
            <input
              type="date"
              placeholder="Realizar busquedas por nombre o codigo"
            />
          </div>
        </div>
        <BsQuestionCircle className="qa-icon" />
      </div>
      <div className="cnt-reservas">
        <TablaReservas />
      </div>
    </div>
  );
}

export default Contenido;
