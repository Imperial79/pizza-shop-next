export default function SectionHeader({
  subHeader = "Sub Header",
  mainHeader = "Main Header",
  margin = "mt-10",
}) {
  return (
    <div className={`text-center ${margin}`}>
      <h3 className="text-xl">{subHeader}</h3>
      <h2 className="text-primary font-bold text-4xl">{mainHeader}</h2>
    </div>
  );
}
