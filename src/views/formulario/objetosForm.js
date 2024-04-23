export const camposPrimerPaso = [
  { type: "input", inputType: "text", placeholder: "Nombre Completo" },
  { type: "input", inputType: "text", placeholder: "Codigo" },
  {
    type: "select",
    name: "academica",
    id: "academica",
    options: [
      { value: "", label: "¿La solicitud es academica?", disabled: true },
      { value: "Si", label: "Si" },
      { value: "No", label: "No" },
    ],
  },
  {
    type: "select",
    name: "Materia",
    id: "materia",
    options: [
      { value: "", label: "Materia", disabled: true },
      { value: "Calculo", label: "Calculo" },
      { value: "Fisica", label: "Fisica" },
      { value: "Programacion", label: "Programacion" },
      { value: "Quimica", label: "Quimica" },
    ],
  },

  {
    type: "select",
    name: "Profesor",
    id: "profesor",
    options: [
      { value: "", label: "Nombre del profesor", disabled: true },
      { value: "eder", label: "Eder Barrios" },
      { value: "gloria", label: "Gloria Marquez" },
      { value: "fabian", label: "Fabian Arias" },
      { value: "isaac", label: "Isaac Zuñiga" },
    ],
  },
  { type: "input", inputType: "text", placeholder: "Aforo" },
];

export const camposSegundoPaso = [
  {
    type: "select",
    name: "aula",
    id: "aula",
    options: [
      { value: "", label: "Aula", disabled: true },
      { value: "a1-202", label: "A1-202" },
      { value: "a1-301", label: "A1-301" },
      { value: "a4-102", label: "A4-102" },
      { value: "a3-102", label: "A3-102" },
    ],
  },
  { type: "input", inputType: "date", placeholder: "Dia" },
  { type: "input", inputType: "time", placeholder: "Hora" },
  {
    type: "input",
    inputType: "text",
    placeholder: "Razon por la cual aparta el aula",
  },
];
