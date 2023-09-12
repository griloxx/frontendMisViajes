import { API_HOST } from "../../utils/constants";
import { METHOD, sendApiRequest } from "./sendApiRequest";

export const servicioConsultaEntrada = async (id) => {
  return sendApiRequest(METHOD.GET, API_HOST + `/entradas/consulta/${id}`);
};
