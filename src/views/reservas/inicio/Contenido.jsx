import "../../../styles/reservas/Principal/contenido.css";
import TablaReservas from "./TablaReservas";
import CardReserva from "./CardReserva";

function Contenido() {
  return (
    <div className="cnt-contenido">
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
