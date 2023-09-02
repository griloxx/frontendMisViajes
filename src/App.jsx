import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { ModificarUsuario } from "./Pages/ModificarUsuario";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/*   <Route path="/" element={<ListarEntradas />} />
        <Route path="/entradas/:id" element={<ConsultarEntrada />} />
        <Route path="/entradas/modificar" element={<ModificarEntrada />} />
        <Route path="/entradas/crear" element={<CrearEntrada />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<RegistroUsuario />} />
        <Route path="/validar-registro" element={<ValidarRegistro />} /> */}
        <Route path="/modificar-usuario" element={<ModificarUsuario />} />
        {/* <Route path="/*" element={<PaginaNoEncontrada />} />  */}
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
