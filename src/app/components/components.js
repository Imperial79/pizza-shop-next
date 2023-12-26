import Link from "next/link";

export function KButton({
  id,
  onClick,
  href = "",
  type = "button",
  btnColor = "bg-primary",
  textColor = "text-white",
  label = "label",
  icon,
  width = "w-auto",
  textAlign = "text-center",
  textSize = "text-lg",
  margin = "",
  fontWeight = "",
}) {
  return href === "" ? (
    <button
      id={id}
      type={type}
      onClick={onClick}
      className={`${btnColor} rounded-full px-4 py-2 ${textColor} flex ${width} ${textAlign} ${textSize} items-center ${margin} ${fontWeight} justify-center transition-all duration-200 hover:${btnColor}/80`}
    >
      {label}
      {icon !== undefined ? <div className="ml-2">{icon}</div> : <></>}
    </button>
  ) : (
    <Link
      href={href}
      id={id}
      type={type}
      onClick={onClick}
      className={`${btnColor} rounded-full px-4 py-2 ${textColor} flex ${width} ${textAlign} ${textSize} items-center ${margin} ${fontWeight} justify-center hover:${btnColor}/80 transition-all duration-200`}
    >
      {label}
      {icon !== undefined ? <div className="ml-2">{icon}</div> : <></>}
    </Link>
  );
}

export function KTextButton({
  id,
  onClick,
  href = "",
  type = "button",
  textColor = "text-black",
  label = "label",
  icon,
  width = "w-auto",
  textAlign = "text-center",
  textSize = "lg",
  margin = "",
  fontWeight = "",
}) {
  return href === "" ? (
    <button
      id={id}
      type={type}
      onClick={onClick}
      className={`${textColor} flex ${width} ${textAlign} ${textSize} items-center ${margin} ${fontWeight} justify-center hover:underline`}
    >
      {label}
      {icon !== undefined ? <div className="ml-2">{icon}</div> : <></>}
    </button>
  ) : (
    <Link
      href={href}
      id={id}
      type={type}
      onClick={onClick}
      className={`${textColor} flex ${width} ${textAlign} ${textSize} items-center ${margin} ${fontWeight} justify-center hover:underline`}
    >
      {label}
      {icon !== undefined ? <div className="ml-2">{icon}</div> : <></>}
    </Link>
  );
}

export function KGrid({
  crossAxisCount = 2,
  gap = 5,
  children,
  alignment = "center",
  margin = "mb-5",
}) {
  return (
    <div
      className={`md:grid md:grid-cols-${crossAxisCount} gap-${gap} items-${alignment} ${margin}`}
    >
      {children}
    </div>
  );
}

export function KTextField({
  id,
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  required,
  readOnly,
  width = "w-full",
}) {
  return (
    <div>
      <div className="mb-2 text-sm">{label}</div>

      <input
        type={type}
        id={id}
        name={id}
        className={`bg-white text-sm placeholder:text-sm p-2.5 border border-gray-300 rounded-lg focus:border-b-8 focus:border-primary transition-all block ${width}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        readOnly={readOnly}
      />
    </div>
  );
}

export function KTextArea({
  id,
  label,
  type = "text",
  placeholder = "",
  rows = 3,
  value,
  onChange,
  required,
  readOnly,
  width = "w-full",
  margin = "",
}) {
  return (
    <div>
      <div className="mb-2">{label}</div>

      <textarea
        type={type}
        id={id}
        name={id}
        rows={rows}
        className={`bg-white p-2.5 border text-sm placeholder:text-sm border-gray-300 rounded-lg focus:border-b-8 focus:border-primary transition-all block ${width} ${margin}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        readOnly={readOnly}
      />
    </div>
  );
}
