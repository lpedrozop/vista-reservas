import React, { useState, useEffect } from "react";
import "../../styles/formulario/rightform.css";
import LogoUtb from "../../assets/logo_utb.png";
import { Steps, message } from "antd";
import { fetchTokenInfo } from "../../utils/fetchTokenInfo";
import Input from "./InputForm";
import Select from "./SelectInput";
import { peticionForm } from "../../utils/peticiones";
import { redireccionar } from "../../utils/redireccionarRutas";

function RightForm({ materias }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTokenInfo();
        setUserData(data);
        setCurrentStep(0);
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    fetchData();
  }, []);

  function PrimerPaso({ userData, materias }) {
    const [selectedMateria, setSelectedMateria] = useState("");
    const [profesores, setProfesores] = useState([]);
    const [profesorDisabled, setProfesorDisabled] = useState(true);
    const [codigo, setCodigo] = useState("");
    const [motivo, setMotivo] = useState("");
    const [tipoRes, setTipoRes] = useState("");
    const [selectedProfesor, setSelectedProfesor] = useState("");

    const manejoCambioMateria = async (value) => {
      try {
        const encodedValue = encodeURIComponent(value);

        setSelectedMateria(value);
        setProfesorDisabled(false);

        const url = `https://sire-utb-x2ifq.ondigitalocean.app/form/profesor/${encodedValue}`;

        const response = await peticionForm(url, "GET");

        if (Array.isArray(response) && response.length > 0) {
          const nombresProfesores = response.map((profesor) => profesor.Nombre);

          setProfesores(nombresProfesores);
        } else {
          console.log(
            "La respuesta de la API de profesores está vacía o no es un array."
          );
        }
      } catch (error) {
        console.error("Error al obtener los datos de los profesores:", error);
      }
    };

    const handleProfesorChange = (event) => {
      const { value } = event.target;
      setSelectedProfesor(value);
    };

    const manejoCodigoCambio = (e) => {
      const { value } = e.target;
      const codigoValidado = value.toUpperCase();

      if (!codigoValidado.startsWith("T000")) {
        setCodigo(value);
        return;
      } else {
        setCodigo(codigoValidado);
      }
    };

    const manejoCodigoBlur = (e) => {
      const { value } = e.target;
      const codigoValidado = value.toUpperCase();

      if (!codigoValidado.startsWith("T000")) {
        message.error("El código debe comenzar con T000.", 8);
      }
    };

    const campos = [
      {
        id: "nombre",
        type: "input",
        inputType: "text",
        placeholder: "",
        value: userData?.response?.name || "",
        readOnly: true,
      },
      {
        id: "codigo",
        type: "input",
        inputType: "text",
        placeholder: "Código",
        value: codigo,
        onChange: manejoCodigoCambio,
        onBlur: manejoCodigoBlur,
        readOnly: false,
      },
      {
        id: "correo",
        type: "input",
        inputType: "email",
        placeholder: "Correo electrónico",
        value: userData?.response?.username || "",
        readOnly: true,
      },
      {
        id: "academica",
        type: "select",
        options: [
          { value: "", label: "¿La solicitud es académica?", disabled: true },
          { value: 1, label: "Si" },
          { value: 0, label: "No" },
        ],
        defaultValue: "",
        onChange: (e) => setTipoRes(e.target.value),
      },
      {
        id: "materia",
        type: "select",
        options: [
          { value: "", label: "Materia", disabled: true },
          ...(Array.isArray(materias)
            ? materias.map((materia) => ({
                value: materia.id,
                label: materia.Nom_Materia,
              }))
            : []),
        ],
        defaultValue: "",
        onChange: (e) => manejoCambioMateria(e.target.value),
      },
      {
        id: "profesor",
        type: "select",
        options: [
          { value: "", label: "Profesor", disabled: true },
          ...profesores.map((nombre) => ({ value: nombre, label: nombre })),
        ],
        defaultValue: "",
        onChange: handleProfesorChange,
        disabled: profesorDisabled,
      },
      {
        id: "motivo",
        type: "input",
        inputType: "text",
        placeholder: "Motivo",
        onChange: (e) => setMotivo(e.target.value),
        readOnly: false,
      },
    ];

    const manejoSiguienteClick = () => {
      if (
        !codigo.startsWith("T000") ||
        !tipoRes ||
        !selectedMateria ||
        !selectedProfesor ||
        !motivo
      ) {
        message.error("Por favor, complete todos los campos.", 8);
        return;
      }

      const data = {
        Nombre: userData?.response?.name || "",
        Codigo: codigo,
        Correo: userData?.response?.username || "",
        Tipo_Res: tipoRes,
        Materia: selectedMateria,
        Nombre_Prof: selectedProfesor,
        Motivo: motivo,
      };

      localStorage.setItem("primer_paso", JSON.stringify(data));

      setCurrentStep(currentStep + 1);
    };

    return (
      <>
        <form className="formulario-reserva">
          {campos.map((campo, index) => {
            if (campo.type === "input") {
              return (
                <Input
                  key={index}
                  id={campo.id}
                  value={campo.value}
                  inputType={campo.inputType}
                  placeholder={campo.placeholder}
                  readOnly={campo.readOnly}
                  onChange={campo.onChange}
                  onBlur={campo.onBlur}
                />
              );
            } else if (campo.type === "select") {
              return (
                <Select
                  key={index}
                  id={campo.id}
                  options={campo.options}
                  defaultValue={campo.defaultValue}
                  onChange={campo.onChange}
                />
              );
            } else {
              return null;
            }
          })}
        </form>
        <div className="fto-step">
          <button
            type="primary"
            className="btn-sgt"
            onClick={manejoSiguienteClick}
          >
            Siguiente
          </button>
        </div>
      </>
    );
  }

  function SegundoPaso() {
    const [selectedCampus, setSelectedCampus] = useState("");
    const [bloques, setBloques] = useState([]);
    const [selectedBloque, setSelectedBloque] = useState("");
    const [selectedDia, setSelectedDia] = useState("");
    const [selectedHoraInicio, setSelectedHoraInicio] = useState("");
    const [selectedHoraFin, setSelectedHoraFin] = useState("");
    const [aulas, setAulas] = useState([]);
    const [aulasDisabled, setAulasDisabled] = useState(true);
    const [bloquesDisabled, setBloquesDisabled] = useState("");
    const [capacidad, setCapacidad] = useState("");
    const [selectedSalon, setSelectedSalon] = useState("");

    const currentDate = new Date().toISOString().split("T")[0];

    const manejoCambioAula = async (value) => {
      try {
        setSelectedCampus(value);
        setBloquesDisabled(false);
        setAulasDisabled(false);

        const url = `https://sire-utb-x2ifq.ondigitalocean.app/form/bloque/${value}`;

        const response = await peticionForm(url, "GET");

        if (Array.isArray(response) && response.length > 0) {
          const numBloques = response.map((bloque) => bloque.Bloque);
          setBloques(numBloques);
        } else {
          console.log(
            "La respuesta de la API de bloques está vacía o no es un array."
          );
        }
      } catch (error) {
        console.error("Error al obtener los datos de las bloques:", error);
      }
    };

    const handleBloqueChange = (event) => {
      const { value } = event.target;
      setSelectedBloque(value);
    };

    const handleDiaChange = (e) => {
      const selectedDate = e.target.value;
      setSelectedDia(selectedDate);
    };

    const handleFechaBlur = () => {
      if (!selectedDia) {
        setSelectedDia(currentDate);
      } else if (selectedDia < currentDate) {
        setSelectedDia(currentDate);
      }
    };

    const handleHoraInicioChange = (e) => {
      setSelectedHoraInicio(e.target.value);
      if (
        selectedCampus &&
        selectedBloque &&
        selectedDia &&
        e.target.value &&
        selectedHoraFin
      ) {
        setAulasDisabled(false);
      }
    };

    const handleHoraFinChange = (e) => {
      setSelectedHoraFin(e.target.value);
      if (
        selectedCampus &&
        selectedBloque &&
        selectedDia &&
        selectedHoraInicio &&
        e.target.value
      ) {
        setAulasDisabled(false);
      }
    };

    const postValidarAulas = async () => {
      try {
        if (
          selectedCampus &&
          selectedBloque &&
          selectedDia &&
          selectedHoraInicio &&
          selectedHoraFin
        ) {
          const body = {
            Campus: selectedCampus,
            Bloque: selectedBloque,
            Hora_ini: selectedHoraInicio,
            Hora_fin: selectedHoraFin,
            Fecha: selectedDia,
          };

          const response = await peticionForm(
            "https://sire-utb-x2ifq.ondigitalocean.app/form/validate",
            "POST",
            body
          );

          if (response && response.aulas && response.aulas.Disponibles) {
            const aulasDisponibles = response.aulas.Disponibles.map(
              (aula) => aula.Salon
            );
            setAulas(aulasDisponibles);
          } else {
            console.log(
              "La respuesta de la API no tiene las aulas disponibles esperadas."
            );
          }
        }
      } catch (error) {
        console.error("Error al realizar la validación de aulas:", error);
      }
    };

    useEffect(() => {
      postValidarAulas();
    }, [
      selectedCampus,
      selectedBloque,
      selectedDia,
      selectedHoraInicio,
      selectedHoraFin,
    ]);

    const handleSalonChange = (event) => {
      const { value } = event.target;
      setSelectedSalon(value);
    };

    const campos = [
      {
        id: "campus",
        type: "select",
        options: [
          { value: "", label: "Campus", disabled: true },
          { value: "TE", label: "Ternera" },
          { value: "MA", label: "Manga" },
        ],
        defaultValue: "",
        onChange: (e) => {
          manejoCambioAula(e.target.value);
          setSelectedCampus(e.target.value);
          setAulasDisabled(true);
        },
      },
      {
        id: "bloque",
        type: "select",
        options: [
          { value: "", label: "Bloque", disabled: true },
          ...bloques.map((bloque) => ({ value: bloque, label: bloque })),
        ],
        defaultValue: "",
        onChange: handleBloqueChange,
        disabled: !selectedCampus,
      },
      {
        id: "dia",
        type: "input",
        inputType: "date",
        placeholder: "Dia",
        value: selectedDia,
        readOnly: false,
        min: currentDate,
        onChange: handleDiaChange,
        onBlur: handleFechaBlur,
        disabled: !selectedCampus,
      },
      {
        id: "horaInicio",
        type: "input",
        inputType: "time",
        placeholder: "Hora Inicio",
        defaultValue: "",
        readOnly: false,
        onChange: handleHoraInicioChange,
        disabled: !selectedCampus,
      },
      {
        id: "HoraFin",
        type: "input",
        inputType: "time",
        placeholder: "Hora Fin",
        defaultValue: "",
        readOnly: false,
        onChange: handleHoraFinChange,
        disabled: !selectedCampus,
      },
      {
        id: "aula",
        type: "select",
        placeholder: "Aula",
        options: [
          { value: "", label: "Salon", disabled: true },
          ...aulas.map((aula) => ({ value: aula, label: aula })),
        ],
        defaultValue: "",
        onChange: handleSalonChange,
        disabled: aulasDisabled,
      },
      {
        id: "capacidad",
        type: "input",
        inputType: "text",
        placeholder: "Capacidad",
        onChange: (e) => setCapacidad(e.target.value),
        readOnly: false,
        disabled: !selectedCampus,
      },
    ];

    const manejoSiguienteClick = async () => {
      if (
        !selectedCampus ||
        !selectedBloque ||
        !selectedDia ||
        !selectedHoraInicio ||
        !selectedHoraFin ||
        !selectedSalon ||
        !capacidad
      ) {
        message.error("Por favor, complete todos los campos.", 8, {
          style: { fontSize: "20px" },
        });
        return;
      }

      const dataString = localStorage.getItem("primer_paso");
      const data_first_stage = JSON.parse(dataString);

      const data = {
        Nombre: data_first_stage.Nombre,
        Codigo: data_first_stage.Codigo,
        Correo: data_first_stage.Correo,
        Tipo_Res: data_first_stage.Tipo_Res,
        Materia: data_first_stage.Materia,
        Nombre_Prof: data_first_stage.Nombre_Prof,
        Motivo: data_first_stage.Motivo,
        Campus: selectedCampus,
        Bloque: selectedBloque,
        Hora_ini: selectedHoraInicio,
        Hora_fin: selectedHoraFin,
        Fecha: selectedDia,
        Salon: selectedSalon,
        Capacidad: capacidad,
      };

      try {
        await peticionForm(
          "https://sire-utb-x2ifq.ondigitalocean.app/form/create_reser",
          "POST",
          data
        );
        localStorage.removeItem("primer_paso");
        setCurrentStep(currentStep + 1);
        setTimeout(() => {
          redireccionar("/dashboard");
        }, 2500);
      } catch (error) {
        if (error.message) {
          message.error(error.message, 8);
        } else {
          message.error(
            "Error al realizar la reserva. Por favor, inténtelo de nuevo más tarde.",
            8
          );
        }
      }
    };

    return (
      <>
        <form className="formulario-reserva">
          {campos.map((campo, index) => {
            if (campo.type === "input") {
              return (
                <Input
                  key={index}
                  id={campo.id}
                  inputType={campo.inputType}
                  placeholder={campo.placeholder}
                  value={campo.value}
                  readOnly={campo.readOnly}
                  min={campo.min}
                  onChange={campo.onChange}
                  onBlur={campo.onBlur}
                  disabled={campo.disabled}
                />
              );
            } else if (campo.type === "select") {
              return (
                <Select
                  key={index}
                  id={campo.id}
                  options={campo.options}
                  defaultValue={campo.defaultValue}
                  onChange={campo.onChange}
                  disabled={campo.disabled}
                />
              );
            } else {
              return null;
            }
          })}
        </form>
        <div className="fto-step">
          <button
            style={{
              margin: "0 8px",
            }}
            className="btn-ant"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Anterior
          </button>
          <button
            style={{
              margin: "0 8px",
            }}
            className="btn-sgt"
            onClick={manejoSiguienteClick}
          >
            Finalizar
          </button>
        </div>
      </>
    );
  }

  function IconoCheck() {
    return (
      <>
        <div className="cnt-check-icon">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle className="checkmark-circle" cx="26" cy="26" r="25" />
            <path
              className="checkmark-check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
          <p className="txt-icon">Formulario enviado con éxito</p>
        </div>
      </>
    );
  }
  const steps = [
    {
      title: "",
      content: <PrimerPaso userData={userData} materias={materias} />,
    },
    {
      title: "",
      content: <SegundoPaso />,
    },

    {
      title: "",
      content: <IconoCheck />,
    },
  ];

  return (
    <div className="rg-form">
      <div className="cnt-form">
        <img src={LogoUtb} alt="Utb" className="img-lg-utb" />
        <Steps current={currentStep} items={steps} direction="horizontal" />
        <div className="content-form">{steps[currentStep].content}</div>
      </div>
    </div>
  );
}

export default RightForm;
