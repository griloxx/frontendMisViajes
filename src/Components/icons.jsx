export function Icon({ clase, icono, onClick }) {
  return (
    <span onClick={onClick} className={clase ? clase + " material-symbols-outlined" : "material-symbols-outlined"}>
      {icono}
    </span>
  );
}
