import "../Styles/PaginaNoEncontrada.css";
import { servicioPaginaNoEncontrada } from "../Api/servicioPaginaNoEncontrada";

export function PaginaNoEncontrada() {
  return (
    <main>
      <div>
        <h1>ERROR</h1>
        <p className="pagina-no-encontrada">Error en la busqueda.</p>:
      </div>
    </main>
  );
}
