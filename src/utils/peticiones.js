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
      let errorMessage = `Error al realizar la solicitud: ${response.status}`;
      if (response.status === 400) {
        const errorData = await response.json();
        if (errorData.error) {
          errorMessage = errorData.error;
        }
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
