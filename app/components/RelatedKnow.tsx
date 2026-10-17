import Link from "next/link";

type Item = { href: string; label: string };

export default function RelatedKnow({ heading = "あわせて確認したい基礎知識", items }: { heading?: string; items: Item[] }) {
  if (!items.length) return null;
  return (
    <div className="mt-8">
      <h3 className="font-bold text-[#1C1917] mb-4">{heading}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {items.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="border border-[#D6D3D1] rounded-lg p-3 text-center hover:border-[#F59E0B] transition-colors text-sm font-medium text-[#1C1917] hover:text-[#92400E]"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
