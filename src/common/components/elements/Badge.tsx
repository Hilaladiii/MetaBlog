export default function Badge({ title }: { title: string }) {
  return (
    <span className="rounded-sm bg-sky px-3 py-1 text-xs text-white">
      {title}
    </span>
  );
}
