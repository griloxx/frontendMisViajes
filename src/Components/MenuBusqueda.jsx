import { Forms } from "./Forms";
import { Input } from "./Input";

export function MenuBusqueda() {
  return (
    <div>
      <Forms>
        <Input
          name={"lugar"}
          clase={"input"}
          type={"search"}
          label={"Lugar:"}
        />
        <select name="" id=""></select>
      </Forms>
    </div>
  );
}
