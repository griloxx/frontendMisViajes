

export async function sendApiRequestAvatar(metodo, url, formValue) {

  const formData = new FormData();
  formData.append("name", formValue.name);
  formData.append("email", formValue.email);
  formData.append("password", formValue.password);
  formData.append("avatar", formValue.avatar[0]);

  const respuesta = await fetch(url, {
    method: metodo,
    body: formData,
  });

  return await respuesta.json();
}
