import { getToken } from "../auth/fetch";

export async function fetchTokenInfo() {
  try {
    const token = await getToken();
    if (token && token.account) {
      return {
        name: token.account.name,
        preferredUsername: token.account.username,
        roles: token.idTokenClaims.roles || [],
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al obtener el token:", error);
    throw error;
  }
}
