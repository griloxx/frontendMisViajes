import { METHOD } from "./sendApiRequest";

export const servicioLoginUsuario = async (requestObject) => {
return sendApiRequest(METHOD.POST, "/usuarios/Login", requestObject);
};
