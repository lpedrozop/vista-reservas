import "../styles/Principal/contenido.css";
import { IoSearch } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";
import TablaReservas from "./TablaReservas";

function Contenido() {
  return (
    <div className="cnt-contenido">
      <div className="head-cnt-page">
        <h5>10 Solicitudes</h5>
        <div className="user-head">
          <div className="user-initials">
            <div className="user-avatar-head">JM</div>
            <div className="user-info-head">
              <p>Jose Mendoza</p>
            </div>
          </div>
        </div>
      </div>
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
