import { API_HOST, CURRENT_USER_STORAGE } from "../../utils/constants";

export const servicioModificarUsuario = async ( requestObject ) => {
  const {name, password } =requestObject.formValue;
  const token = localStorage.getItem(CURRENT_USER_STORAGE);
  const response = await fetch(`${API_HOST}/usuarios/perfil`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    },
    body: JSON.stringify({name, password}),
  });
  
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json;
};
