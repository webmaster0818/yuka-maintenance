import { getVerifiedRating } from "@/app/lib/verifiedRating";

/**
 * 評価表示。reviews.json の ratingBlock（Googleマップで一次確認・取得日つき）がある社だけ、
 * 値を出典・取得日つきで表示する。無い社は「保有していません」と明記する（★や点数で埋めない）。
 */
export default function SourcedRating({
  slug,
  size = "sm",
  emptyText = "当サイトでは評価スコア・口コミ件数を保有していません",
}: {
  slug: string;
  size?: "sm" | "md";
  emptyText?: string;
}) {
  const rb = getVerifiedRating(slug);
  if (!rb) {
    return size === "md" ? (
      <span className="text-sm text-[#57534E] bg-[#FFFBEB] border border-[#D6D3D1] rounded px-3 py-1">{emptyText}</span>
    ) : (
      <span className="text-xs text-[#78716C]">{emptyText}</span>
    );
  }
  return (
    <span className={`flex flex-wrap items-center gap-x-2 gap-y-1 ${size === "md" ? "text-sm" : "text-xs"} text-[#78716C]`}>
      <span className={`${size === "md" ? "text-xl" : "text-sm"} font-bold text-[#1C1917]`}>
        <span className="text-[#F59E0B]" aria-hidden="true">★</span> {rb.rating}
      </span>
      <span>
        （出典：
        {rb.mapsUri ? (
          <a href={rb.mapsUri} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[#92400E]">
            {rb.sourceLabel}
          </a>
        ) : (
          rb.sourceLabel
        )}
        ・{rb.reviewCount.toLocaleString("ja-JP")}件・{rb.fetchedAt}取得）
      </span>
    </span>
  );
}
