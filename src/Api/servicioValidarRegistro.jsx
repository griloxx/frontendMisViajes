import { METHOD, sendApiRequest } from "./sendApiRequest";

export const servicioValidarUsuario = async (codigoRegistro) => {
  return sendApiRequest(METHOD.GET, `/usuarios/validacion/${codigoRegistro}`);
};
