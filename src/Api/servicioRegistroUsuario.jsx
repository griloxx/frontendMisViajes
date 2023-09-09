import { METHOD } from "./sendApiRequest";
import { sendApiRequestAvatar } from "./sendApiRequestAvatar";

export const servicioRegistroUsuario = async (formValue) => {
  console.log(formValue);

  return sendApiRequestAvatar(METHOD.POST, "/usuario/registro", formValue);
};
