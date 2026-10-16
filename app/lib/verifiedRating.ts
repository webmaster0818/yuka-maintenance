import reviewsData from "@/data/reviews.json";

/**
 * 一次確認できた口コミ評価（reviews.json の ratingBlock：Googleマップ・取得日つき）。
 * companies.json の rating・reviewCount・reviews は出典がないため表示に使わない（2026-10-16 に削除済み）。
 * ratingBlock が無い社は null を返す（既定値・推測値で埋めない）。
 */
export type VerifiedRating = {
  rating: number;
  reviewCount: number;
  fetchedAt: string;
  mapsUri?: string;
  sourceLabel: string;
};

type ReviewEntry = { slug: string; ratingBlock?: VerifiedRating | null };

const entries = reviewsData as unknown as ReviewEntry[];
const bySlug = new Map(entries.map((r) => [r.slug, r.ratingBlock ?? null]));

export function getVerifiedRating(slug: string): VerifiedRating | null {
  const rb = bySlug.get(slug);
  if (!rb || typeof rb.rating !== "number" || typeof rb.reviewCount !== "number" || !rb.fetchedAt || !rb.sourceLabel) return null;
  return rb;
}

/** 口コミ検証記事（/review/<slug>/）があるか */
export function hasReviewArticle(slug: string): boolean {
  return bySlug.has(slug);
}
