export function Icon({ icono, onClick, style }) {
  return (
    <span
      onClick={onClick}
      className="material-symbols-outlined"
      style={{
        fontSize: "60px",
      }}
    >
      {icono}
    </span>
  );
}
