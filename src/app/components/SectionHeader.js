export default function SectionHeader({
  subHeader = "Sub Header",
  mainHeader = "Main Header",
}) {
  return (
    <div className="text-center mt-10">
      <h3 className="text-xl">{subHeader}</h3>
      <h2 className="text-primary font-bold text-4xl">{mainHeader}</h2>
    </div>
  );
}
