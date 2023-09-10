

export async function sendApiRequestAvatar(metodo, url, formValue) {

  const headers = {};

  const formData = new FormData();
  if (formValue.email) {
    formData.append("email", formValue.email);
  }
  if (formValue.avatar instanceof FileList) {
    formData.append("avatar", formValue.avatar[0]);
  }
  if (formValue.avatar === "sinAvatar") {
    formData.append("avatar", formValue.avatar);
  }
  if (formValue.password) {
    formData.append("password", formValue.password);
  }
  formData.append("name", formValue.name);

  const token = localStorage.getItem("userToken");
  if(token) {
    headers["Authorization"] = token;
  }
  const respuesta = await fetch(url, {
    method: metodo,
    headers: headers,
    body: formData,
  });
  

  return await respuesta.json();
}
