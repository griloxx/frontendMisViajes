export function Icon({ name, style }) {
  return (
    <span className="material-symbols-outlined" style={style}>
      {name}
    </span>
  );
}
