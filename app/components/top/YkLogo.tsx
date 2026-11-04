import { logoSvgInner, LOGO_WOOD, LOGO_OAK } from "./marks";

// ロゴマーク「床板」（2026-11-04）。ファビコン・apple-icon も同じ形。
export function YkMark({ size = 36, tone = "dark" }: { size?: number; tone?: "dark" | "light" }) {
  const inner = tone === "light" ? logoSvgInner("#FFFFFF", LOGO_OAK, "#1C1917") : logoSvgInner(LOGO_WOOD, LOGO_OAK, "#FFFFFF");
  return <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" dangerouslySetInnerHTML={{ __html: inner }} />;
}
