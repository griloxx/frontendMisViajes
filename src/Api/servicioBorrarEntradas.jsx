import { API_HOST } from "../../utils/constants";
import { METHOD, sendApiRequest } from "./sendApiRequest";

export const servicioBorrarEntradas = async (id) => {
  return sendApiRequest(METHOD.DELETE, API_HOST + `/entradas/borrar/${id}`);
};
