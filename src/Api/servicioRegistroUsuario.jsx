import { METHOD, sendApiRequest } from "./sendApiRequest";

export const servicioRegistroUsuario = async (requestObject) => {
  console.log(requestObject);

  return sendApiRequest(METHOD.POST, "/usuarios/registro", requestObject);
};
