import "../../styles/formulario/leftform.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function LeftForm() {
  return (
    <div className="lf-form">
      <div className="head-lf-frm">
        <h5>Sistema de reservas de aula</h5>
        <h3>
          Por favor asegurese <br /> de rellenar todos los campos <br />
          pedidos. Lea detenidamente.
        </h3>
        <HiOutlineArrowNarrowRight />
      </div>
      <div className="bt-lf-frm">
        <h6>© 2023 UTB </h6>
        <p>Contáctanos: fruiz@utb.edu.co</p>
      </div>
    </div>
  );
}

export default LeftForm;
