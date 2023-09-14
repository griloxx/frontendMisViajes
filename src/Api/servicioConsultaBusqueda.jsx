import { API_HOST } from "../../utils/constants";
import { METHOD, sendApiRequest } from "./sendApiRequest";

export const servicioConsultaBusqueda = async (requestObject) => {
  return sendApiRequest(METHOD.GET, API_HOST + `/entradas/consulta?${requestObject}`);
};
