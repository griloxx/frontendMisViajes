import { METHOD } from "./sendApiRequest";
import { sendApiRequestAvatar } from "./sendApiRequestAvatar";

export const servicioRegistroUsuario = async (requestObject) => {
  console.log(requestObject);

  return sendApiRequestAvatar(METHOD.POST, "/usuarios/registro", requestObject);
};
