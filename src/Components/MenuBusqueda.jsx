import { Forms } from "./Forms";
import { Input } from "./Input";

export function MenuBusqueda({ display, menu }) {


  
  return (
    <div className={`div-form-busqueda ${!menu && "oculto"} ${display && "display"} `}>
      <Forms clase={"form-busqueda"} /* onSubmit={onSubmit} schema={schema} */>
        <Input
          name={"lugar"}
          clase={"input"}
          type={"search"}
          label={"Lugar :"}
        />
        <label htmlFor="categoria">Categoria :</label>
        <select name="categoria" id="categoria">
          <option value="">--------------</option>
          <option value="Aventura">Aventura</option>
          <option value="Single">Single</option>
          <option value="Parejas">Parejas</option>
          <option value="Familia">Familia</option>
          <option value="Cultura">Cultura</option>
          <option value="Gastronomía">Gastronomia</option>
          <option value="Playa">Playa</option>
          <option value="Montaña">Montaña</option>
          <option value="Naturaleza">Naturaleza</option>
        </select>
        <div className="div-radio">
          <label>Ordenar por :</label>
          <input className="radio" type="radio" value="votos" id="votos" />
          <label htmlFor="votos">Votos</label>
          <input
            className="radio"
            type="radio"
            value="fecha"
            id="fecha"
            checked
          />
          <label htmlFor="fecha">Fecha</label>
        </div>
      </Forms>
    </div>
  );
}
