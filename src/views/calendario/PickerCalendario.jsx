import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "../../styles/calendario/picker.css";

function PickerCalendario() {
  const [fecha, setFecha] = useState(new Date());

  const obtenerDiaMes = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const nombreDia = (dia) => {
    const dias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sáb"];
    return dias[dia];
  };

  const nombreMes = (month) => {
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    return months[month];
  };

  const mesAnterior = () => {
    setFecha(
      new Date(fecha.getFullYear(), fecha.getMonth() - 1, fecha.getDate())
    );
  };

  const mesSiguiente = () => {
    setFecha(
      new Date(fecha.getFullYear(), fecha.getMonth() + 1, fecha.getDate())
    );
  };

  const seleccionarDia = (day) => {
    setFecha(new Date(fecha.getFullYear(), fecha.getMonth(), day));
  };

  const primerDiaDelMes = new Date(fecha.getFullYear(), fecha.getMonth(), 1);
  const primerDiaSemana = primerDiaDelMes.getDay();

  const cantidadDiasMes = obtenerDiaMes(fecha.getMonth(), fecha.getFullYear());
  const diasDelMes = Array.from({ length: cantidadDiasMes }, (_, i) => i + 1);

  const diasAnteriores = Array.from(
    { length: primerDiaSemana },
    (_, i) => obtenerDiaMes(fecha.getMonth() - 1, fecha.getFullYear()) - i
  ).reverse();

  return (
    <div className="body-calendar">
      <div className="hdr-calendar">
        <a onClick={mesAnterior}>
          <IoIosArrowBack />
        </a>
        <span className="titulo-fecha">
          {`${fecha.getDate()} de ${nombreMes(
            fecha.getMonth()
          )} ${fecha.getFullYear()}`}
        </span>
        <a onClick={mesSiguiente}>
          <IoIosArrowForward />
        </a>
      </div>
      <div className="dias-calendar">
        {Array.from({ length: 7 }).map((_, index) => (
          <span key={index}>{nombreDia(index)}</span>
        ))}
      </div>
      <div className="fechas-calendar">
        {diasAnteriores.map((dia, index) => (
          <div key={`empty-${index}`} className="fecha-calendar empty">
            {dia}
          </div>
        ))}
        {diasDelMes.map((dia) => (
          <div
            key={dia}
            className={`fecha-calendar ${
              dia === fecha.getDate() ? "hoy-calendar" : ""
            }`}
            onClick={() => seleccionarDia(dia)}
          >
            {dia}
          </div>
        ))}
      </div>
      <a className="btn-fecha-actual">Hoy</a>
    </div>
  );
}

export default PickerCalendario;
