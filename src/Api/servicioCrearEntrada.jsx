import { API_HOST } from "../../utils/constants";
import { METHOD, sendApiRequest } from "./sendApiRequest";

export const servicioCrearEntrada = async (formValue) => {
  return sendApiRequest(
    METHOD.POST,
    API_HOST + `/entradas/crearentrada`,
    formValue
  );
};
