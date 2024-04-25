export function obtenerIniciales(nombre) {
  const palabras = nombre.split(" ");

  let iniciales = "";

  palabras.forEach((palabra) => {
    iniciales += palabra.charAt(0).toUpperCase();
  });

  return iniciales;
}
