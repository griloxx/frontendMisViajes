import { API_HOST } from "../../utils/constants";
import { METHOD, sendApiRequest } from "./sendApiRequest";

export const servicioValidarUsuario = async (codigoRegistro) => {
  return sendApiRequest(METHOD.GET, API_HOST + `/usuarios/validacion/${codigoRegistro}`);
};
