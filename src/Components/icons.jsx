export function Icon({ icono, onClick }) {
  return (
    <span onClick={onClick} className="material-symbols-outlined">
      {icono}
    </span>
  );
}
