

export async function sendApiRequestAvatar(metodo, url, formValue) {

  const formData = new FormData();
  if (formValue.email) {
    formData.append("email", formValue.email);
  }
  if (formValue.avatar) {
    formData.append("avatar", formValue.avatar[0]);
  }
  if (formValue.password) {
    formData.append("password", formValue.password);
  }
  formData.append("name", formValue.name);

  const respuesta = await fetch(url, {
    method: metodo,
    body: formData,
  });

  return await respuesta.json();
}
