// 床メンテナンス110番 TOP 用のロゴマーク・床材／作業アイコン（すべて自作の SVG。48×48 のグリッド）。
// アイコンは太線（stroke 3）＋一部を塗る1系統。色は currentColor の単色。ロゴだけ2色（--yk-wood / --yk-oak）。

export type Shape = {
  d: string; // path の d
  solid?: boolean; // 塗りつぶす部分
  thin?: boolean; // 細めに描く補助線
};

export type IconDef = { key: string; label: string; shapes: Shape[] };

export const TASK_ICONS: IconDef[] = [
  {
    key: "flooring",
    label: "フローリング",
    shapes: [
      { d: "M5 41L13 15H35L43 41Z" },
      { d: "M18.5 15L16 41M24 15V41M29.5 15L32 41" },
      { d: "M14.5 26H17.5M24 21H29.8M30.6 31H34.4M19.5 35H24", thin: true },
    ],
  },
  {
    key: "cushion-floor",
    label: "クッションフロア",
    shapes: [
      { d: "M4 31H36V38H4Z", solid: true },
      { d: "M45 27A9 9 0 1 1 27 27A9 9 0 1 1 45 27Z" },
      { d: "M39.5 27A3.5 3.5 0 1 1 32.5 27A3.5 3.5 0 1 1 39.5 27Z", solid: true, thin: true },
      { d: "M4 43H44", thin: true },
    ],
  },
  {
    key: "tile",
    label: "タイル",
    shapes: [
      { d: "M6 6H42V42H6Z" },
      { d: "M18 6V42M30 6V42M6 18H42M6 30H42" },
    ],
  },
  {
    key: "marble",
    label: "大理石",
    shapes: [
      { d: "M6 8H42V40H6Z" },
      { d: "M6 17C13 18 17 22 21 27C25 32 31 34 42 33", thin: true },
      { d: "M17 8C19 13 23 15 27 18C31 21 33 24 34 28", thin: true },
      { d: "M6 31C10 31 13 34 15 40", thin: true },
    ],
  },
  {
    key: "carpet",
    label: "カーペット",
    shapes: [
      { d: "M11 8H37V40H11Z" },
      { d: "M16 13H32V35H16Z", thin: true },
      { d: "M24 17L29 24L24 31L19 24Z", solid: true },
      { d: "M5 12H11M5 18H11M5 24H11M5 30H11M5 36H11M37 12H43M37 18H43M37 24H43M37 30H43M37 36H43", thin: true },
    ],
  },
  {
    key: "chemical-floor",
    label: "Pタイル・長尺シート",
    shapes: [
      { d: "M6 6H42V42H6Z" },
      { d: "M6 6H24V24H6Z", solid: true },
      { d: "M24 24H42V42H24Z", solid: true },
    ],
  },
  {
    key: "wax",
    label: "ワックスがけ",
    shapes: [
      { d: "M9 20C9 18 10.5 17 12.5 17H20.5C22.5 17 24 18 24 20V39C24 41 22.5 42 20.5 42H12.5C10.5 42 9 41 9 39Z", solid: true },
      { d: "M14 17V11H19V17M12 11H21" },
      { d: "M36 14C36 14 30.5 20.5 30.5 24.5C30.5 27.5 33 30 36 30C39 30 41.5 27.5 41.5 24.5C41.5 20.5 36 14 36 14Z", solid: true },
      { d: "M28 42H44", thin: true },
    ],
  },
  {
    key: "floor-coating",
    label: "フロアコーティング",
    shapes: [
      { d: "M4 33H44V41H4Z", solid: true },
      { d: "M4 27H44" },
      { d: "M31 7V19M25 13H37" },
      { d: "M14 15V21M11 18H17", thin: true },
    ],
  },
  {
    key: "stripping-wash",
    label: "剥離洗浄",
    shapes: [
      { d: "M33 5L24 28" },
      { d: "M29.5 5H37" },
      { d: "M7 37C7 32 13 29 22 29C31 29 37 32 37 37V39H7Z", solid: true },
      { d: "M4 43H44", thin: true },
      { d: "M41 29.5A2 2 0 1 0 41 29.6M43 22A1.5 1.5 0 1 0 43 22.1", thin: true },
    ],
  },
  {
    key: "scratch-repair",
    label: "傷補修",
    shapes: [
      { d: "M4 24H44V38H4Z" },
      { d: "M24 24V38", thin: true },
      { d: "M8 31.5L12 29L15 33L19 30", thin: true },
      { d: "M31 5L39 13L30 22H25V17Z", solid: true },
    ],
  },
  {
    key: "regular-maintenance",
    label: "定期メンテナンス",
    shapes: [
      { d: "M7 11H41V41H7Z" },
      { d: "M7 11H41V19H7Z", solid: true },
      { d: "M15 6V14M33 6V14" },
      { d: "M14 25H18V29H14ZM22 25H26V29H22ZM30 25H34V29H30ZM14 33H18V37H14ZM22 33H26V37H22Z", solid: true, thin: true },
    ],
  },
];

// ロゴマーク「床板」（2026-11-04）。継ぎ目の位置をずらして張った細長い床板4列。左上の1枚だけ明るい木の色。
export const LOGO_WOOD = "#6B4423";
export const LOGO_OAK = "#C8945C";

export function logoSvgInner(a: string = LOGO_WOOD, b: string = LOGO_OAK, gap: string = "#FFFFFF"): string {
  return (
    `<rect x="3" y="3" width="42" height="42" rx="3" fill="${a}"/>` +
    `<path d="M6 3H31V13.5H3V6A3 3 0 0 1 6 3Z" fill="${b}"/>` +
    `<path d="M3 13.5H45M3 24H45M3 34.5H45M31 3V13.5M15 13.5V24M37 24V34.5M21 34.5V45" stroke="${gap}" stroke-width="2.6"/>`
  );
}

/** アイコン1つ分の SVG 内側（<svg> 要素の中身）を返す */
export function iconInner(def: IconDef): string {
  return def.shapes
    .map((s) => {
      const fill = s.solid ? "currentColor" : "none";
      const w = s.thin ? 2 : 3;
      return `<path d="${s.d}" fill="${fill}" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
    })
    .join("");
}
