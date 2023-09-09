import { API_HOST } from "../../utils/constants";
import { METHOD } from "../Api/sendApiRequest";

export async function sendApiRequestAvatar(formValue) {
  const UPLOAD_URL = API_HOST + `/usuarios/registro`;

  const formData = new FormData();
  formData.append("name", formValue.name);
  formData.append("email", formValue.email);
  formData.append("password", formValue.password);
  formData.append("avatar", formValue.avatar);

  return fetch(UPLOAD_URL, {
    method: METHOD.POST,
    body: formData,
  });
}
