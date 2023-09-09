import { API_HOST } from "../../utils/constants";
import { METHOD } from "../Api/sendApiRequest";

export async function sendApiRequestAvatar({ name, email, password, avatar }) {
  const UPLOAD_URL = API_HOST + `/registro/avatar`;

  const headers = {};
  //const { name, email, password, avatar } = requestObject;
  const fetchPromises = uploadRegistroUsuario((requestObject) => {
    formData.append(requestObject);

    return fetch(UPLOAD_URL, {
      method: METHOD.POST,
      headers,
      body: formData,
    });
  });

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
