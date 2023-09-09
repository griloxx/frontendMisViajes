import { API_HOST } from "../../utils/constants";
import { METHOD } from "./sendApiRequest";
import { sendApiRequestAvatar } from "./sendApiRequestAvatar";

export const servicioRegistroUsuario = async (formValue) => {

  return sendApiRequestAvatar(METHOD.POST, API_HOST + "/usuarios/registro", formValue);
};
