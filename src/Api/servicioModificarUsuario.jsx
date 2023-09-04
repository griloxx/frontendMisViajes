import { METHOD, sendApiRequest } from "./sendApiRequest";

export const servicioModificarUsuario = async (requestObject) => {
  return sendApiRequest(METHOD.PUT, "/usuarios/perfil", requestObject);
};
