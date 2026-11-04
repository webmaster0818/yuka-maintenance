import { regions, tokyo, areaCount, type AreaLink } from "@/data/areaRegions";

const Chevron = () => (
  <svg className="yk-chev h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const Arrow = ({ className = "h-3.5 w-3.5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

function Tiles({ items }: { items: AreaLink[] }) {
  return (
    <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {items.map((x) => (
        <li key={x.slug}>
          <a
            href={`/area/${x.slug}/`}
            className="flex min-h-[48px] items-center justify-between gap-2 rounded-[4px] border border-[color:var(--yk-border)] bg-white px-3.5 text-[14px] font-bold text-[color:var(--yk-ink)] transition-colors hover:border-[color:var(--yk-wood)] hover:bg-[color:var(--yk-wash)]"
          >
            <span>{x.label}</span>
            <span className="shrink-0 text-[color:var(--yk-oak-dark)]"><Arrow /></span>
          </a>
        </li>
      ))}
    </ul>
  );
}

const summaryCls = "flex min-h-[60px] items-center justify-between gap-3 px-4 md:px-5";

/** TOP「エリアから探す」。東京都は最上部の別枠、ほかは地方ごとの折りたたみ（JS 不要の details）。 */
export default function AreaFinder() {
  return (
    <div>
      <p className="mb-5 text-[14px] text-[color:var(--yk-muted)]">
        {areaCount}都道府県のページがあります。地方名を押すと都道府県の一覧が開きます。
      </p>

      {tokyo && (
        <div className="mb-4 overflow-hidden rounded-[4px] border-2 border-[color:var(--yk-wood)] bg-white" data-reveal="0">
          <div className={`${summaryCls} bg-[color:var(--yk-wood)] text-white`}>
            <span className="text-[18px] font-bold tracking-[0.06em]">東京都</span>
          </div>
          <div className="grid gap-3 p-4 md:p-6">
            <a href={`/area/${tokyo.slug}/`} className="yk-btn w-full justify-between !px-4 text-[15px] sm:w-fit sm:min-w-[340px] sm:!px-6 sm:text-base">
              東京都の床メンテナンス業者を見る
              <Arrow className="h-4 w-4" />
            </a>
            <p className="text-[12px] leading-relaxed text-[color:var(--yk-muted)]">23区・市町村ごとのページは、現在ありません。区内・市内の方は東京都のページをご覧ください。</p>
          </div>
        </div>
      )}

      <div className="grid gap-3">
        {regions.map((r, i) => (
          <details key={r.name} className="yk-acc group overflow-hidden rounded-[4px] border border-[color:var(--yk-border-strong)] bg-white" data-reveal={String(i + 1)}>
            <summary className={`${summaryCls} bg-white group-open:border-b group-open:border-[color:var(--yk-border)]`}>
              <span className="text-[16px] font-bold tracking-[0.04em] text-[color:var(--yk-wood-dark)]">{r.name}</span>
              <span className="flex items-center gap-2 text-[12px] font-bold text-[color:var(--yk-muted)]">
                {r.areas.length}都道府県
                <span className="text-[color:var(--yk-wood)]"><Chevron /></span>
              </span>
            </summary>
            <div className="bg-[color:var(--yk-paper)] p-4 md:p-6">
              <Tiles items={r.areas} />
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
