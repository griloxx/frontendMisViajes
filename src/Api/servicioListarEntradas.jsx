import { API_HOST } from "../../utils/constants";
import { METHOD, sendApiRequest } from "./sendApiRequest";

export const servicioListarEntradas = async () => {
  return sendApiRequest(METHOD.GET, API_HOST + "/entradas");
};
