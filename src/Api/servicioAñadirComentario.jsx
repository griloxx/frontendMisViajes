import { API_HOST } from "../../utils/constants";
import { METHOD, sendApiRequest } from "./sendApiRequest";

export const servicioAñadirComentario = async (entrada_id, formValue) => {
  return sendApiRequest(
    METHOD.POST,
    API_HOST + `/entradas/comentar/${entrada_id}`,
    formValue
  );
};
