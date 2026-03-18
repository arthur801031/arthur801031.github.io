export default function SectionHeader({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <div id={id} className="mb-8">
      <h2 className="text-2xl font-bold tracking-tight text-text">{title}</h2>
      <div className="mt-2 w-12 h-1 rounded-full bg-primary" />
    </div>
  );
}
