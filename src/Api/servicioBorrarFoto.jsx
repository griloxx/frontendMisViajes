import { API_HOST } from "../../utils/constants";
import { METHOD, sendApiRequest } from "./sendApiRequest";

export const servicioBorrarFoto = async (foto_id, requestObject) => {
  return sendApiRequest(
    METHOD.DELETE,
    API_HOST + `/entradas/borrarFoto/${foto_id}`,
    requestObject
  );
};
