import "../../../styles/reservas/calendario/calendario.css";
import HeaderContenido from "../inicio/HeaderContenido";
import PickerCalendario from "./PickerCalendario";
import StoryLine from "./StoryLine";

export function CntCalendario() {
  return (
    <div className="cnt-calendario">
      <HeaderContenido />

      <div className="picker-calendario">
        <PickerCalendario />
        <StoryLine />
      </div>
    </div>
  );
}
