import { API_HOST } from "../../utils/constants";
import { METHOD } from "../Api/sendApiRequest";

export async function sendApiRequestAvatar(formValue) {
  const UPLOAD_URL = API_HOST + `/registro/avatar`;

  const { name, email, password, avatar } = formValue;

  const fetchPromises = uploadRegistroUsuario.map(
    ({ name, email, password, avatar }) => {
      formData.append("avatar", avatar);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);

      return fetch(UPLOAD_URL, {
        method: METHOD.POST,
        body: formData,
      });
    }
  );

  const fetchResponses = await Promise.all(fetchPromises);

  const allOk = fetchResponses.every((response) => response.ok);

  return {
    success: allOk,
    ...(!allOk && {
      error: {
        msg: "No se ha podido realizar el registro",
      },
    }),
  };
}
