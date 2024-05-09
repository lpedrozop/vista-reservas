import { fetchTokenInfo } from "./fetchTokenInfo";

export async function peticionForm(url, method, body = null) {
  try {
    const { secretParse } = await fetchTokenInfo();

    const headers = {
      Authorization: `Bearer ${secretParse.secret}`,
      "Content-Type": "application/json",
    };

    const requestOptions = {
      method: method,
      headers: headers,
    };

    if (body !== null) {
      requestOptions.body = JSON.stringify(body);
    }

    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error(`Error al realizar la solicitud: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    throw error;
  }
}
