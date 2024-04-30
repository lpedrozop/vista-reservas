export async function fetchTokenInfo() {
  try {
    const sessionToken = sessionStorage.getItem("msal.account.keys");

    if (sessionToken) {
      const tokenObject = JSON.parse(sessionToken)[0];

      try {
        const accessToken = sessionStorage.getItem(tokenObject);
        const response = JSON.parse(accessToken);
        return response;
      } catch {
        console.log("error");
      }
    } else {
      console.log("No se encontró el token en el almacenamiento de sesión");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener los datos del usuario:", error);
    throw error;
  }
}
