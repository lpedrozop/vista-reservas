import * as jwt_decode from "jwt-decode";

export async function fetchTokenInfo() {
  try {
    const tokenCookie = document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith("access_token"));

    if (tokenCookie) {
      const token = tokenCookie.substring("access_token".length);
      const decodedToken = jwt_decode(token);
      console.log(decodedToken);
      return decodedToken;
    } else {
      console.log("paso por aqui");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener el token de las cookies:", error);
    throw error;
  }
}
