

export async function sendApiRequestMultiFotos(metodo, url, formValue) {

    const headers = {};
    const formData = new FormData();
    
    if (formValue.titulo) {
      formData.append("titulo", formValue.titulo);
    }
    const foto = formValue.foto.filter((sF) => {
      return sF instanceof File;
    })
    
    if (foto) {
        foto.forEach((foto) => {
            formData.append("foto", foto)
        })
    }
    
    if (formValue.categoria) {
      formData.append("categoria", formValue.categoria);
    }
    if (formValue.lugar) {
      formData.append("lugar", formValue.lugar);
    }
    if (formValue.texto) {
      formData.append("texto", formValue.texto);
    }
  
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
  