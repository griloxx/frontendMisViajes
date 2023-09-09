import { API_HOST } from "../../utils/constants";
import { METHOD, sendApiRequest } from "./sendApiRequest";
import { sendApiRequestAvatar } from "./sendApiRequestAvatar";

export const servicioModificarUsuario = async (requestObject) => {
  return sendApiRequestAvatar(METHOD.PUT, API_HOST + "/usuarios/perfil", requestObject);
};
