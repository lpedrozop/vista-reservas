import "../../styles/formulario/leftform.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { redireccionar } from "../../utils/redireccionarRutas";

function LeftForm() {
  return (
    <div className="lf-form">
      <div className="head-lf-frm">
        <IoClose
          style={{ fontSize: "25px", cursor: "pointer", marginBottom: "20px" }}
          onClick={() => redireccionar("/dashboard")}
        />
        <h5>Sistema de reservas de aula</h5>
        <h3>
          Por favor asegurese <br /> de rellenar todos los campos <br />
          pedidos. Lea detenidamente.
        </h3>
        <HiOutlineArrowNarrowRight />
      </div>
      <div className="bt-lf-frm">
        <h6>© 2024 UTB </h6>
        <p>Contáctanos: fruiz@utb.edu.co</p>
      </div>
    </div>
  );
}

export default LeftForm;
