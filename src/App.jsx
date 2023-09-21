import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { ModificarUsuario } from "./Pages/ModificarUsuario";
import { RegistroUsuario } from "./Pages/RegistroUsuario";
import { LoginAuthProvider } from "./context/LoginContext.jsx";
import { ListarEntradas } from "./Pages/ListarEntradas";
import { ValidarRegistro } from "./Pages/ValidarRegistro";
import { LoginPage } from "./Pages/LoginPage";
import { PaginaNoEncontrada } from "./Pages/PaginaNoEncontrada";
import { ConsultarEntrada } from "./Pages/ConsultarEntrada";
import { HeaderProvider } from "./context/HeaderContext";
import { Perfil } from "./Pages/Perfil";
import { CrearEntrada } from "./Pages/CrearEntradas";
import { ModificarEntrada } from "./Pages/ModificarEntrada";
import { SearchProvider } from "./context/searchContext";

function App() {
  return (
    <>
      <LoginAuthProvider>
        <HeaderProvider>
          <SearchProvider>
          <Header />
          <Routes>
            <Route path="/" element={<ListarEntradas />} />
            <Route path="/entradas/:id" element={<ConsultarEntrada />} />
            <Route path="/entradas/modificar/:id" element={<ModificarEntrada />} />
            <Route path="/entradas/crear" element={<CrearEntrada />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registro" element={<RegistroUsuario />} />
            <Route
              path="/validar-registro/:codigo"
              element={<ValidarRegistro />}
            />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/modificar-usuario" element={<ModificarUsuario />} />
            <Route path="/*" element={<PaginaNoEncontrada />} />
          </Routes>
          {/* <Footer /> */}
          </SearchProvider>
        </HeaderProvider>
      </LoginAuthProvider>
    </>
  );
}

export default App;
