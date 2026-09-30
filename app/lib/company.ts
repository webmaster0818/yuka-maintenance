/**
 * companies.json の掲載社データを扱う共通ヘルパー。
 *
 * 掲載社には2種類ある。
 *  1) 既存の掲載社 … rating / reviewCount を持つ
 *  2) 2026年9月に追加した掲載社 … 公式サイトで会社情報・料金を一次確認したが、
 *     評価スコアと口コミ件数は一次情報が無いため rating = null / reviewCount = null
 *
 * 数値を持たない掲載社に星やスコアを表示すると事実でない情報になるため、
 * 表示側は必ず hasRating() で分岐する。
 */

export type Company = {
  slug: string;
  name: string;
  catchphrase: string;
  rating: number | null;
  reviewCount: number | null;
  priceRange: string;
  features: string[];
  floorServices: string[];
  url: string;
  description: string;
  reviews: { author: string; score: number; text: string }[];
};

/** 評価スコアを持つ掲載社か */
export function hasRating(c: {
  rating: number | null;
  reviewCount: number | null;
}): c is { rating: number; reviewCount: number } {
  return typeof c.rating === "number" && typeof c.reviewCount === "number";
}

/**
 * 「安い順」の比較対象にできる料金表記かどうか。
 * 1畳単価・1平方メートル単価・価格表記なしは、1件あたりの総額と比較できないため除外する。
 */
export function isComparablePrice(priceRange: string): boolean {
  if (priceRange.includes("記載なし")) return false;
  if (priceRange.includes("1畳")) return false;
  if (priceRange.includes("1平方メートル")) return false;
  return /[0-9]/.test(priceRange);
}

/**
 * 料金表記から比較用の数値を取り出す（比較対象外なら null）。
 * 「130,000円〜（50平方メートル…）」のように後ろに面積などの数字が続く表記があるため、
 * 文字列全体から数字を抜き出さず、先頭の金額だけを読む。
 */
export function comparablePrice(priceRange: string): number | null {
  if (!isComparablePrice(priceRange)) return null;
  const m = priceRange.match(/^[0-9,]+/);
  if (!m) return null;
  const n = parseInt(m[0].replace(/,/g, ""), 10);
  return Number.isNaN(n) ? null : n;
}
