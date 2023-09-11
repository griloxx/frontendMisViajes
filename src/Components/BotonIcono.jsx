export function BotonIcono({icono, onClick, clase}) {
  return (
    <button onClick={onClick} className={clase} >
      <span className="material-symbols-outlined">{icono}</span>
    </button>
  );
}
