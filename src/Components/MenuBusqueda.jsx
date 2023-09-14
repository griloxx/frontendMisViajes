import { Forms } from "./Forms";
import { Input } from "./Input";
import { InputRadio } from "./InputRadio";
import { InputSelect } from "./InputSelect";

export function MenuBusqueda({menu, onSubmit }) {
 
  return (
    <div className={`div-form-busqueda ${!menu && "oculto"} `}>
      <Forms clase={"form-busqueda"} onSubmit={onSubmit} >
        <Input
          name={"lugar"}
          clase={"input"}
          type={"search"}
          label={"Lugar :"}
          autocomplete={"off"}
        />
        <InputSelect label={"Categoria"} name={"categoria"} />
        
        <InputRadio label={"Ordenar Por:"} label2={"Votos"} label3={"Fecha"} clase={"radio"} name={"votos"} value1={"votos"} value2={"entradilla"} />
      </Forms>
    </div>
  );
}
