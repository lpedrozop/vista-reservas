import MenuLateral from "./MenuLateral";
import Contenido from "./Contenido";
import "../../styles/Principal/principal.css";

function Principal() {
  return (
    <div className="cnt-panel">
      <MenuLateral />
      <Contenido />
    </div>
  );
}

export default Principal;
