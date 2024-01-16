export function KTextField({
  id,
  label,
  type = "text",
  placeholder = "",
  value,
  maxLength,
  onChange,
  required = true,
  readOnly,
  width = "w-full",
  margin = "mb-0",
  disabled = false,
}) {
  return (
    <div>
      <div className="mb-2 text-sm">{label}</div>

      <input
        type={type}
        id={id}
        name={id}
        maxLength={maxLength}
        className={`kTextField ${width} ${margin}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        readOnly={readOnly}
        disabled={disabled}
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
  disabled = false,
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
        disabled={disabled}
      />
    </div>
  );
}
