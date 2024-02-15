import "../../styles/calendario/calendario.css";
import HeaderContenido from "../../views/inicio/HeaderContenido";
import PickerCalendario from "./PickerCalendario";
import StoryLine from "./StoryLine";

export function CntCalendario() {
  return (
    <div className="cnt-calendario">
      <HeaderContenido />
      <div className="head-calendario">
        <h4>Calendario</h4>
      </div>
      <div className="picker-calendario">
        <PickerCalendario />
        <StoryLine />
      </div>
    </div>
  );
}
