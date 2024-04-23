import "../../../styles/reservas/Principal/headerPrincipal.css";
import logo_utb from "../../../assets/logo_utb.png";
import { BiSearch, BiBell, BiMailSend } from "react-icons/bi";

function HeaderContenido() {
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
          <div className="icons-name">
            <BiMailSend />
            <BiBell />
          </div>
          <div className="user-avatar-head"></div>
          <p>Jose Mendoza</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderContenido;
