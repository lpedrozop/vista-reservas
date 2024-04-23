import "../../styles/formulario/formulario.css";
import LeftForm from "./LeftForm";
import RightForm from "./RightForm";

function Formulario() {
  return (
    <div className="cnt-background">
      <div className="cnt-color-bcg">
        <div className="cnt-left-display">
          <LeftForm />
        </div>
        <div className="cnt-right-display">
          <RightForm />
        </div>
      </div>
    </div>
  );
}

export default Formulario;
