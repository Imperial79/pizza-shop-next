export function KButton({
  id,
  type = "button",
  btnColor = "primary",
  textColor = "white",
  label = "label",
  icon,
}) {
  return (
    <button
      id={id}
      type={type}
      className={`bg-${btnColor} rounded-full px-4 py-2 text-${textColor} inline-flex`}
    >
      {label}
      {icon !== undefined ? <div className="ml-2">{icon}</div> : <></>}
    </button>
  );
}
