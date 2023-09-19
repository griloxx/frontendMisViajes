import { API_HOST } from "../../utils/constants";
import { sendApiRequestMultiFotos } from "./sedApiRequestMultiFotos";
import { METHOD } from "./sendApiRequest";

export const servicioModificarEntrada = async (id, formValue) => {
  return sendApiRequestMultiFotos (
    METHOD.PUT,
    API_HOST + `/entradas/modificarentrada/${id}`,
    formValue
  );
};
