import { API_HOST } from "../../utils/constants";
import { METHOD } from "./sendApiRequest";
import { sendApiRequestAvatar } from "./sendApiRequestAvatar";

export const servicioLoginUsuario = async (requestObject) => {
    return sendApiRequestAvatar (METHOD.POST, API_HOST + "/usuarios/Login", requestObject);
};
