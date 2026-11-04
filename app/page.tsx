import Link from "next/link";
import companies from "@/data/companies.json";
import SourcedRating from "@/app/components/SourcedRating";
import floors from "@/data/floors.json";
import services from "@/data/services.json";
import { areaCount } from "@/data/areaRegions";
import TaskIcon from "./components/top/TaskIcon";
import AreaFinder from "./components/top/AreaFinder";
import ScrollReveal from "./components/top/ScrollReveal";

export const metadata = {
  title: "床メンテナンス110番 | 床クリーニング業者の比較・料金情報",
  description:
    "フローリング・大理石・カーペットなど床材別の専門業者を、公式情報をもとに比較できる情報サイトです。ワックスがけ・フロアコーティングなどの料金は、各社が公式サイトに掲載している金額を掲載しています。",
  alternates: { canonical: "/" },
};

// 2026-11-04 TOP デザイン刷新（redesign-20261104）。本文・料金・業者情報・リンク先は変えず、見せ方だけを変えている。

const ArrowRight = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

const PinIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

/* ─── Hero ─── */
function HeroButtons() {
  return (
    <div className="grid gap-2.5 sm:grid-cols-2">
      <a href="#task" className="yk-btn yk-btn--lg justify-between">
        <span className="flex items-center gap-3">
          <TaskIcon name="flooring" size={30} className="text-white" />
          床材・お悩みから探す
        </span>
        <ArrowRight className="h-5 w-5" />
      </a>
      <a href="#area" className="yk-btn yk-btn--lg justify-between">
        <span className="flex items-center gap-3">
          <PinIcon />
          エリアから探す
        </span>
        <ArrowRight className="h-5 w-5" />
      </a>
    </div>
  );
}

const HERO_LINKS: [string, string][] = [
  ["業者ランキングを見る", "/ranking/"],
  ["料金相場を確認する", "/cost/price/"],
];

const LEAD =
  "フローリング・大理石・カーペットなど、床材に対応した専門業者を比較して掲載しています。各社の公式掲載料金・口コミ・業者の選び方まで、床メンテナンスの検討に必要な情報をまとめています。";

function HeroLinks() {
  return (
    <ul className="flex flex-wrap gap-2">
      {HERO_LINKS.map(([label, href]) => (
        <li key={href}>
          <Link href={href} className="inline-flex min-h-[44px] items-center gap-1 rounded-[4px] border border-[color:var(--yk-border-strong)] bg-white px-3.5 text-[14px] font-bold text-[color:var(--yk-wood-dark)] hover:border-[color:var(--yk-wood)]">
            {label}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--yk-border)] bg-[color:var(--yk-paper)]">
      <div className="md:grid md:min-h-[600px] md:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:min-h-[640px]">
        {/* 左：見出しと主導線 */}
        <div className="relative z-10 flex flex-col justify-center px-4 pb-6 pt-7 md:py-14 md:pl-[max(24px,calc((100vw-1160px)/2+24px))] md:pr-0">
          <p className="text-[13px] font-bold tracking-[0.06em] text-[color:var(--yk-wood)] md:text-[14px]">床メンテナンス業者の比較情報サイト</p>
          <h1 className="mt-3 text-[32px] font-bold leading-[1.32] tracking-[0.04em] text-[color:var(--yk-ink)] md:mt-4 md:text-[46px] lg:text-[54px]">
            床メンテナンス
            <br />
            <span className="text-[color:var(--yk-wood)]">業者</span>の比較
          </h1>

          {/* PC：見出しの直後に主導線。右の写真に少し重ねる */}
          <div className="relative mt-8 hidden md:block md:mr-[-110px] lg:mr-[-190px]">
            <div className="border border-[color:var(--yk-border-strong)] bg-white p-3">
              <HeroButtons />
            </div>
          </div>

          <p className="mt-6 hidden max-w-[34em] text-[15px] leading-[1.9] text-[color:var(--yk-muted)] md:block">{LEAD}</p>
          <div className="mt-5 hidden md:block">
            <HeroLinks />
          </div>
        </div>

        {/* 右（PC）：写真を見出しの下まで広げ、左から背景色のグラデーションを重ねる */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[64%] md:block lg:w-[62%]" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/fv-floor-pc.jpg" alt="" width={2000} height={1333} className="absolute inset-0 h-full w-full object-cover object-[62%_60%]" fetchPriority="high" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--yk-paper)_0%,var(--yk-paper)_6%,color-mix(in_srgb,var(--yk-paper)_82%,transparent)_24%,color-mix(in_srgb,var(--yk-paper)_35%,transparent)_42%,transparent_58%)]" />
          <p className="absolute bottom-3 right-3 bg-black/45 px-2 py-1 text-[11px] text-white">写真はイメージです</p>
        </div>
        <div className="hidden md:block" />

        {/* スマホ：写真の中に主導線 */}
        <div className="relative md:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/fv-floor-sp.jpg" alt="白い床をモップで清掃する作業者" width={1200} height={1000} className="block h-[350px] w-full object-cover object-[50%_50%]" fetchPriority="high" />
          <p className="absolute right-2 top-2 bg-black/45 px-2 py-0.5 text-[10px] text-white">写真はイメージです</p>
          <div className="absolute inset-x-3 bottom-3">
            <HeroButtons />
          </div>
        </div>
        <div className="px-4 pb-6 pt-5 md:hidden">
          <p className="text-[14px] leading-[1.85] text-[color:var(--yk-muted)]">{LEAD}</p>
          <div className="mt-4">
            <HeroLinks />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Trust Badges（数値はサイト内のデータから数えた値） ─── */
function TrustBadges() {
  const badges: { k: string; v: string; u: string; desc: string }[] = [
    { k: "掲載業者", v: String(companies.length), u: "社", desc: "公式情報をもとに比較" },
    { k: "エリア別ページ", v: String(areaCount), u: "都道府県", desc: "都道府県ごとのページ" },
    { k: "床種別ガイド", v: String(floors.length), u: "種類", desc: "床材別ガイドを掲載" },
    { k: "口コミ", v: "出典つき", u: "", desc: "出典を確認できた口コミのみ掲載" },
  ];
  return (
    <section className="border-b border-[color:var(--yk-border)] bg-white">
      <div className="yk-container">
        <dl className="grid grid-cols-2 md:grid-cols-4">
          {badges.map((b, i) => (
            <div
              key={b.k}
              className={`px-3 py-5 md:px-6 md:py-7 ${i % 2 === 0 ? "border-r border-[color:var(--yk-border)]" : "md:border-r md:border-[color:var(--yk-border)]"} ${i < 2 ? "border-b border-[color:var(--yk-border)] md:border-b-0" : ""} ${i === 3 ? "md:border-r-0" : ""}`}
            >
              <dt className="text-[12px] font-bold tracking-[0.06em] text-[color:var(--yk-muted)] md:text-[13px]">{b.k}</dt>
              <dd className="mt-1.5">
                <span className={`font-bold leading-none text-[color:var(--yk-wood)] ${/^\d+$/.test(b.v) ? "text-[28px] md:text-[36px]" : "text-[22px] md:text-[26px]"}`}>{b.v}</span>
                <span className="ml-1 text-[13px] font-bold md:text-[15px]">{b.u}</span>
                <span className="mt-1.5 block text-[12px] text-[color:var(--yk-muted)] md:text-[13px]">{b.desc}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <p className="yk-container pb-3 text-[11px] leading-relaxed text-[color:var(--yk-muted)]">
        ※ 掲載業者数・エリア別ページ数・床種別ガイド数は、当サイトの掲載ページを数えた値です（2026年11月4日時点）。写真はイメージです（Unsplash・撮影 Toon Lambrechts）。
      </p>
    </section>
  );
}

/* ─── 床材・お悩みから探す ─── */
const FLOOR_PAGES: { icon: string; name: string; href: string }[] = [
  ...floors.map((f) => ({ icon: f.slug, name: f.name, href: `/floor/${f.slug}/` })),
  { icon: "chemical-floor", name: "Pタイル・長尺シート", href: "/floor/chemical-floor/" },
];

const TROUBLES: [string, string][] = [
  ["ワックスが白くなる", "/trouble/wax-whitening/"],
  ["ワックスがベタつく", "/trouble/wax-sticky/"],
  ["ワックスがはがれる", "/trouble/wax-peeling/"],
  ["ワックスが黒ずむ・ムラになる", "/trouble/wax-darkening/"],
  ["ワックスを塗って滑る", "/trouble/wax-slippery/"],
  ["ワックスに足跡・シミが付いた", "/trouble/wax-spot-repair/"],
  ["フローリングのシミ・汚れ", "/trouble/floor-stain-removal/"],
  ["フローリングの傷・へこみ", "/trouble/floor-scratch-repair/"],
];

function TaskFinder() {
  return (
    <section id="task" className="yk-section scroll-mt-20">
      <div className="yk-container">
        <h2 className="yk-h2">床材・お悩みから探す</h2>

        <h3 className="yk-h3">床種別メンテナンスガイド</h3>
        <p className="mb-5 mt-2 text-[14px] text-[color:var(--yk-muted)]">床材に適したメンテナンス方法をご紹介します</p>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {FLOOR_PAGES.map((f, i) => (
            <li key={f.href} data-reveal={String(i % 6)}>
              <Link href={f.href} className="yk-card yk-card-link group flex h-full flex-col items-center px-3 pb-5 pt-6 text-center md:pt-7">
                <TaskIcon name={f.icon} size={96} className="h-[72px] w-[72px] text-[color:var(--yk-wood)] md:h-[88px] md:w-[88px]" />
                <span className="mt-3 text-[15px] font-bold leading-snug tracking-[0.02em] md:text-[16px]">{f.name}</span>
                <span className="mt-2 inline-flex items-center gap-1 text-[12px] font-bold text-[color:var(--yk-wood)] md:text-[13px]">
                  ガイドを見る
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <h3 className="yk-h3 mt-12">お悩みから探す</h3>
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4" data-reveal="1">
          {TROUBLES.map(([label, href]) => (
            <li key={href}>
              <Link href={href} className="yk-card yk-card-link flex min-h-[56px] items-center justify-between gap-3 px-4 text-[14px] font-bold">
                {label}
                <span className="shrink-0 text-[color:var(--yk-wood)]"><ArrowRight /></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─── エリアから探す ─── */
function AreaSection() {
  return (
    <section id="area" className="yk-section yk-band scroll-mt-20">
      <div className="yk-container">
        <h2 className="yk-h2">エリアから探す</h2>
        <AreaFinder />
      </div>
    </section>
  );
}

/* ─── おすすめ業者ランキング（上位3社。内容は従来のまま） ─── */
function TopRanking() {
  const topCompanies = companies.slice(0, 3);
  return (
    <section className="yk-section">
      <div className="yk-container">
        <div className="yk-h2 justify-between">
          <h2>おすすめ業者ランキング</h2>
          <Link href="/ranking/" className="inline-flex items-center gap-1 text-[14px] font-bold text-[color:var(--yk-wood)] hover:underline">
            すべて見る
            <ArrowRight />
          </Link>
        </div>
        <ul className="yk-card divide-y divide-[color:var(--yk-border)]">
          {topCompanies.map((company, index) => (
            <li key={company.slug} data-reveal={String(index)}>
              <Link href={`/company/${company.slug}/`} className="group grid grid-cols-[40px_minmax(0,1fr)_20px] items-center gap-4 px-4 py-5 transition-colors hover:bg-[#FCFBF8] md:grid-cols-[48px_minmax(0,1fr)_300px_20px] md:px-6">
                <span className={`flex h-10 w-10 items-center justify-center text-[18px] font-bold md:h-12 md:w-12 md:text-[20px] ${index === 0 ? "bg-[color:var(--yk-wood)] text-white" : "border-2 border-[color:var(--yk-wood)] text-[color:var(--yk-wood)]"}`}>
                  {index + 1}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="text-[17px] font-bold group-hover:text-[color:var(--yk-wood)]">{company.name}</span>
                    <SourcedRating slug={company.slug} emptyText="評価スコアなし（公式情報のみ掲載）" />
                  </div>
                  <p className="mt-1 truncate text-[14px] text-[color:var(--yk-muted)]">{company.catchphrase}</p>
                  <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                    {company.features.slice(0, 2).map((f) => (
                      <li key={f} className="yk-dot text-[13px] font-medium">{f}</li>
                    ))}
                  </ul>
                  <p className="mt-2 text-[13px] md:hidden">
                    <span className="text-[color:var(--yk-muted)]">料金目安 </span>
                    <span className="font-bold text-[color:var(--yk-wood-dark)]">{company.priceRange}</span>
                  </p>
                </div>
                <div className="hidden text-right md:block">
                  <div className="text-[12px] text-[color:var(--yk-muted)]">料金目安</div>
                  <div className="text-[15px] font-bold text-[color:var(--yk-wood-dark)]">{company.priceRange}</div>
                </div>
                <span className="text-[color:var(--yk-border-strong)] group-hover:text-[color:var(--yk-wood)]"><ArrowRight className="h-5 w-5" /></span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-center">
          <Link href="/ranking/" className="yk-btn w-full sm:w-auto sm:min-w-[340px]">
            全ランキングを見る（{companies.length}社）
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── サービス一覧（内容は従来のまま） ─── */
function Services() {
  return (
    <section className="yk-section yk-band">
      <div className="yk-container">
        <h2 className="yk-h2">
          床メンテナンスのサービス一覧
          <small>目的に応じたサービスをお選びください</small>
        </h2>
        <ul className="grid gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {services.map((service, i) => (
            <li key={service.slug} data-reveal={String(i % 3)}>
              <Link href={`/service/${service.slug}/`} className="yk-card yk-card-link group flex h-full gap-4 p-5">
                <TaskIcon name={service.slug} size={56} className="h-12 w-12 shrink-0 text-[color:var(--yk-wood)] md:h-14 md:w-14" />
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="text-[17px] font-bold group-hover:text-[color:var(--yk-wood)]">{service.name}</span>
                  <span className="mt-1.5 line-clamp-2 text-[14px] leading-relaxed text-[color:var(--yk-muted)]">{service.shortDescription}</span>
                  <span className="mt-3 flex items-center justify-between text-[12px] text-[color:var(--yk-muted)]">
                    費用は見積もりで確認
                    <span className="text-[color:var(--yk-wood)]"><ArrowRight /></span>
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─── 編集方針（内容は従来のまま） ─── */
function EditorialPolicy() {
  const items = [
    {
      title: "出典を確認できた情報のみを掲載します",
      desc: "口コミ・評価は、公式サイトやGoogleマップなど出典を確認できたものに限り、出典と取得日を記載して掲載しています。",
    },
    {
      title: "公式に掲載された料金を一覧で掲載します",
      desc: "ワックスがけからフロアコーティングまで、各社が公式サイトに掲載している料金を、税込・税別と単位の条件を添えて掲載しています。",
    },
    {
      title: "床材別のガイドを掲載します",
      desc: "フローリング・大理石・カーペットなど、5種類の床材別にメンテナンス情報を掲載しています。",
    },
  ];
  return (
    <section className="yk-section">
      <div className="yk-container">
        <h2 className="yk-h2">床メンテナンス110番の編集方針</h2>
        <ol className="grid gap-3 md:grid-cols-3 md:gap-4">
          {items.map((item, i) => (
            <li key={item.title} className="yk-card p-5 md:p-6" data-reveal={String(i)}>
              <span className="block text-[13px] font-bold tracking-[0.08em] text-[color:var(--yk-oak-dark)]">方針 {i + 1}</span>
              <h3 className="mt-2 text-[17px] font-bold leading-snug">{item.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--yk-muted)]">{item.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─── CTA（内容は従来のまま） ─── */
function CTA() {
  return (
    <section className="border-t border-[color:var(--yk-border)] bg-[color:var(--yk-wash)] py-14 md:py-20">
      <div className="yk-container text-center" data-reveal="0">
        <h2 className="text-[20px] font-bold tracking-[0.02em] md:text-[28px] md:tracking-[0.04em]">依頼前に料金の相場をご確認ください</h2>
        <p className="mx-auto mt-3 max-w-[40em] text-[14px] leading-relaxed text-[color:var(--yk-muted)] md:text-[15px]">
          各社が公式に掲載している料金を確認しておくと、業者との相談を円滑に進められます。
        </p>
        <div className="mx-auto mt-7 grid max-w-[640px] gap-3 sm:grid-cols-2">
          <Link href="/cost/price/" className="yk-btn">料金相場を見る</Link>
          <Link href="/cost/diy-vs-pro/" className="yk-btn yk-btn--ghost">DIYと業者依頼の比較</Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="yk-page -mb-16">
      <ScrollReveal />
      <Hero />
      <TrustBadges />
      <TaskFinder />
      <AreaSection />
      <TopRanking />
      <Services />
      <EditorialPolicy />
      <CTA />
    </div>
  );
}
