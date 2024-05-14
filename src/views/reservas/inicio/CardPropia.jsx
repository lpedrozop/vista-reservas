import "../../../styles/reservas/Principal/profesor.css";
import { BiBadgeCheck , BiBuildings, BiTime } from "react-icons/bi";
import { LuUsers } from "react-icons/lu";

function CardPropia({ reserva }) {
    const fechaInicio = new Date(reserva.Fh_Ini);

    const fecha = fechaInicio.toLocaleDateString();
    const hora = fechaInicio.toLocaleTimeString();

  return (
    <div className="card-propia">
      <div className="head-propia">
        <h6>{fecha}</h6>
      </div>
      <div className="content-propia">
        <div className="icon-text">
          <div>
            <BiBadgeCheck  /> {reserva.Apr_Doc}
          </div>
          <div>
            <LuUsers /> {reserva.Aforo}
          </div>
        </div>
        <div className="icon-text">
          <div>
            <BiBuildings />
            {reserva.ID_Espacio}
          </div>
          <div>
            <BiTime />
            {hora}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPropia;
