export async function fetchTokenInfo() {
  try {
    const token = localStorage.getItem("access_token");
    console.log(token);

    if (token) {
      const response = await fetch("https://graph.microsoft.com/v1.0/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const userData = await response.json();
        console.log(userData);
        return userData;
      } else {
        throw new Error(
          `Error en la solicitud: ${response.status} - ${response.statusText}`
        );
      }
    } else {
      console.log("No se encontró el token en el almacenamiento local");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener los datos del usuario:", error);
    throw error;
  }
}
