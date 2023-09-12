import { API_HOST } from "../../utils/constants";
import { METHOD, sendApiRequest } from "./sendApiRequest";

export const servicioConsultaEntrada = async () => {
  return sendApiRequest(METHOD.GET, API_HOST + "/entradas/conulta/:id");
};
