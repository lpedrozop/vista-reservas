import "../../../styles/reservas/asignar/auxpicker.css";

function CardDesignAux({ text, value }) {
  return (
    <div className="info-select-aux">
      <h6>{text}</h6>
      <p>{value}</p>
    </div>
  );
}

function AuxPicker({ auxData }) {
  return (
    <div className="aux-picker-cnt">
      <h5>Auxiliar Seleccionado</h5>
      <div className="selected-profile-aux">
        <div className="profile-aux">
          <img src={auxData.imageUrl} alt={auxData.name} />
          <h6>{auxData.name}</h6>
          <p>Auxiliar</p>
        </div>
        <div className="detail-profile-aux">
          <CardDesignAux text="Estado" value={auxData.estado}/>
          <CardDesignAux text="Bloque" value={auxData.bloques}/>
          <CardDesignAux text="Asignaciones" value={auxData.asignaciones}/>
          <CardDesignAux text="Horas" value={auxData.horas}/>
        </div>
      </div>
    </div>
  );
}

export default AuxPicker;
