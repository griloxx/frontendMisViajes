import { BotonMenu } from "./BotonMenu";
import { BotonPerfil } from "./BotonPerfil";
import "../styles/header.css";
export function Header() {
  return (
    <>
      <header className="header">
        <BotonMenu />
        <h1>Mis Viajes</h1>
        <BotonPerfil />
      </header>
    </>
  );
}
