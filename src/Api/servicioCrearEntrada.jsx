import { API_HOST } from "../../utils/constants";
import { sendApiRequestMultiFotos } from "./sedApiRequestMultiFotos";
import { METHOD } from "./sendApiRequest";

export const servicioCrearEntrada = async (formValue) => {
  return sendApiRequestMultiFotos (
    METHOD.POST,
    API_HOST + `/entradas/crearentrada`,
    formValue
  );
};
