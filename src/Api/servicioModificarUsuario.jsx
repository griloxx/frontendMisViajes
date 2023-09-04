import { API_HOST, CURRENT_USER_STORAGE } from "../../utils/constants";
import { METHOD, sendApiRequest } from "./sendApiRequest";

export const servicioModificarUsuario = async ( requestObject ) => {
  
  return sendApiRequest(METHOD.PUT, "/usuarios/perfil", requestObject);
  
};
