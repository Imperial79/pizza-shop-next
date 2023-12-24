import Link from "next/link";
export function KButton({
  id,
  href = "",
  onClick,
  type = "button",
  btnColor = "primary",
  textColor = "white",
  label = "label",
  icon,
  width = "w-auto",
  textAlign = "text-center",
  textSize = "lg",
  margin = "",
  fontWeight = "",
}) {
  return (
    <Link href={href}>
      <button
        id={id}
        type={type}
        onClick={onClick}
        className={`bg-${btnColor} rounded-full px-4 py-2 text-${textColor} flex ${width} ${textAlign} text-${textSize} items-center ${margin} font-${fontWeight} justify-center hover:bg-primary/80 transition-all duration-200`}
      >
        {label}
        {icon !== undefined ? <div className="ml-2">{icon}</div> : <></>}
      </button>
    </Link>
  );
}
