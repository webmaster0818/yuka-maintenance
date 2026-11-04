// TOP「エリアから探す」用の一覧。data/areas.json（= app/area/[slug] で生成される都道府県ページ）から作る。
// 当サイトのエリアページは都道府県単位（2026-11-04 時点 47ページ）。市区町村・23区ごとのページは無い。
import areas from "./areas.json";

export type AreaLink = { slug: string; label: string };
export type Region = { name: string; areas: AreaLink[] };

const REGION_OF: [string, string[]][] = [
  ["北海道・東北", ["hokkaido", "aomori", "iwate", "miyagi", "akita", "yamagata", "fukushima"]],
  ["関東（東京都を除く）", ["ibaraki", "tochigi", "gunma", "saitama", "chiba", "kanagawa"]],
  ["中部", ["niigata", "toyama", "ishikawa", "fukui", "yamanashi", "nagano", "gifu", "shizuoka", "aichi"]],
  ["近畿", ["mie", "shiga", "kyoto", "osaka", "hyogo", "nara", "wakayama"]],
  ["中国・四国", ["tottori", "shimane", "okayama", "hiroshima", "yamaguchi", "tokushima", "kagawa", "ehime", "kochi"]],
  ["九州・沖縄", ["fukuoka", "saga", "nagasaki", "kumamoto", "oita", "miyazaki", "kagoshima", "okinawa"]],
];

const bySlug = new Map(areas.map((a) => [a.slug, { slug: a.slug, label: a.name }]));

export const tokyo: AreaLink | undefined = bySlug.get("tokyo");

export const regions: Region[] = REGION_OF.map(([name, slugs]) => ({
  name,
  areas: slugs.map((s) => bySlug.get(s)).filter((x): x is AreaLink => Boolean(x)),
}));

export const areaCount = areas.length;
