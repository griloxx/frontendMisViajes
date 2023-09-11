import { API_HOST } from "../../utils/constants";
import { METHOD } from "./sendApiRequest";
import { sendApiRequest } from "./sendApiRequest";

export const servicioLoginUsuario = async (requestObject) => {
    return sendApiRequest (METHOD.POST, API_HOST + "/usuarios/login", requestObject);
};
