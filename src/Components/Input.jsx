export function Input({
  label,
  type,
  name,
  clase,
  autocomplete,
  value,
  onChange,
}) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        className={clase}
        type={type}
        id={name}
        autoComplete={autocomplete ?? "on"}
        value={value}
        onChange={(e) => onChange}
      />
    </>
  );
}
