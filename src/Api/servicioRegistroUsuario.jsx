export const servicioRegistroUsuario = async ({ name, email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/usuarios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: json.stringify({ name, email, password }),
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
};
