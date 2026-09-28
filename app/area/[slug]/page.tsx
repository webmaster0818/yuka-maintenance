import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/app/components/Breadcrumb";
import areas from "@/data/areas.json";
import companies from "@/data/companies.json";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) return {};
  const url = `https://yuka-maintenance.com/area/${area.slug}/`;
  const title = `${area.name}の床メンテナンス業者を比較｜料金目安と対応サービス一覧`;
  const description = `${area.name}で床のワックスがけ・フロアコーティング・剥離洗浄を依頼したい方向けに、掲載${companies.length}社の最低料金目安と対応サービスを一覧で比較。対応エリアの可否は各社への確認が必要です。`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article" },
  };
}

/**
 * 対応サービスの絞り込み用キーワード。
 * companies.json の floorServices に含まれる文字列を機械的に照合するだけで、
 * 掲載社のデータ自体は一切書き換えない。
 */
const SERVICE_KEYWORDS = [
  { label: "ワックスがけ", keyword: "ワックス", href: "/service/wax/" },
  { label: "フロアコーティング", keyword: "コーティング", href: "/service/floor-coating/" },
  { label: "剥離洗浄", keyword: "剥離", href: "/service/stripping-wash/" },
  { label: "傷補修", keyword: "傷補修", href: "/service/scratch-repair/" },
  { label: "定期メンテナンス", keyword: "定期", href: "/service/regular-maintenance/" },
  { label: "カーペット", keyword: "カーペット", href: "/floor/carpet/" },
  { label: "タイル", keyword: "タイル", href: "/floor/tile/" },
  { label: "大理石", keyword: "大理石", href: "/floor/marble/" },
  { label: "クッションフロア", keyword: "クッションフロア", href: "/floor/cushion-floor/" },
];

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) notFound();

  const otherAreas = areas.filter((a) => a.slug !== area.slug);

  // focus.questions / questionsHeading は後から追加した任意項目。
  // 既存エリアのデータには存在しないため、存在するときだけ描画する。
  const focus = area.focus as {
    heading: string;
    intro: string;
    points: { title: string; body: string }[];
    questionsHeading?: string;
    questions?: string[];
  };

  // 既存4エリア（tokyo/osaka/kanagawa/aichi）のページ文言は変更しない方針のため、
  // 今回追加したエリア（questions を持つもの）だけ、共通セクションの見出しに
  // 県名を含めてページ間の見出し重複を避ける。
  const scopedHeading = Boolean(focus.questions);
  const serviceHeading = scopedHeading
    ? `対応サービスから掲載社を絞り込む（${area.name}から依頼する場合）`
    : "対応サービスから掲載社を絞り込む";
  const otherAreasHeading = scopedHeading
    ? `${area.name}以外のエリアのページ`
    : "他のエリアのページ";

  const serviceGroups = SERVICE_KEYWORDS.map((s) => ({
    ...s,
    matches: companies.filter((c) =>
      c.floorServices.some((f) => f.includes(s.keyword))
    ),
  })).filter((s) => s.matches.length > 0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${area.name}の床メンテナンス業者を比較｜料金目安と対応サービス一覧`,
    author: { "@type": "Organization", name: "床メンテナンス110番" },
    publisher: {
      "@type": "Organization",
      name: "床メンテナンス110番",
      url: "https://yuka-maintenance.com/",
    },
    mainEntityOfPage: `https://yuka-maintenance.com/area/${area.slug}/`,
  };

  return (
    <>
      <Breadcrumb
        items={[
          { label: "エリア別比較" },
          { label: area.name },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className="bg-[#F59E0B] text-[#92400E] text-xs font-bold px-2 py-1 rounded">
              PR・広告掲載あり
            </span>
            <span className="text-sm text-[#78716C]">掲載{companies.length}社</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-3">
            {area.name}の床メンテナンス業者比較
          </h1>
          <p className="text-[#57534E] leading-relaxed">{area.lead}</p>
        </div>

        {/* 1. 対応可否 */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            {area.name}の対応可否を確認する方法
          </h2>
          <p className="text-sm text-amber-900 leading-relaxed mb-3">
            当サイトは各社の市区町村単位の出張範囲データを保有していません。そのため、このページでは
            <strong>「{area.name}に強い」「{area.name}で実績が多い」といった評価は一切行っていません</strong>。
            {area.name}が対応エリアに含まれるかどうかは、各社の公式サイトまたは問い合わせ窓口でご確認ください。
          </p>
          <ul className="space-y-2 text-sm text-amber-900">
            {[
              "公式サイトの「対応エリア」「店舗検索」ページで市区町村名を確認する",
              "一括見積もりサービスの場合は、郵便番号を入力した時点で対応社が表示されるか確認する",
              "対応エリア内でも、離島・山間部など一部地域は対象外となる場合があるため問い合わせ時に住所を伝える",
              "出張費が別途かかるかどうかを、見積もり金額とあわせて確認する",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* 2. 一覧表 */}
        <div className="bg-white rounded-2xl border border-[#D6D3D1] overflow-hidden mb-8">
          <div className="bg-[#92400E] text-white px-5 py-3">
            <h2 className="font-bold">
              掲載{companies.length}社の料金目安・対応サービス一覧（{area.name}から依頼する場合）
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#FFFBEB] border-b border-[#D6D3D1]">
                <tr>
                  <th className="text-left px-4 py-3 font-bold text-[#1C1917] whitespace-nowrap">社名</th>
                  <th className="text-right px-3 py-3 font-bold text-[#92400E] whitespace-nowrap">最低料金目安</th>
                  <th className="text-left px-3 py-3 font-bold text-[#1C1917]">対応する床メンテナンス</th>
                  <th className="text-center px-3 py-3 font-bold text-[#1C1917] whitespace-nowrap">{area.name}対応</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company, i) => (
                  <tr
                    key={company.slug}
                    className={`border-b border-[#F0ECE8] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF9]"}`}
                  >
                    <td className="px-4 py-3 font-medium text-[#1C1917] whitespace-nowrap">
                      <Link href={`/company/${company.slug}/`} className="hover:text-[#92400E] underline decoration-[#D6D3D1] underline-offset-2">
                        {company.name}
                      </Link>
                    </td>
                    <td className="px-3 py-3 text-right font-bold text-[#92400E] whitespace-nowrap">
                      {company.priceRange}
                    </td>
                    <td className="px-3 py-3 text-[#57534E] text-xs">
                      {company.floorServices.join("／")}
                    </td>
                    <td className="px-3 py-3 text-center text-[#78716C] text-xs whitespace-nowrap">
                      各社へ確認
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="px-4 py-3 text-xs text-[#78716C] bg-[#FAFAF9] border-t border-[#F0ECE8]">
            料金・対応サービス・公式サイトは各社の公表情報を掲載しています。金額は作業範囲・床材の状態・面積によって変わるため、必ず事前に見積もりを取得してください。「{area.name}対応」欄は、当サイトがエリアデータを保有していないため全社「各社へ確認」と表記しています。
          </p>
        </div>

        {/* 3. サービス別絞り込み */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-8">
          <h2 className="text-lg font-bold text-[#1C1917] mb-2">{serviceHeading}</h2>
          <p className="text-sm text-[#78716C] mb-4">
            各社が公表している対応サービスの表記をキーワードで機械的に分類したものです。表記のゆれにより、実際には対応していても下記に含まれない場合があります。詳細は各社にご確認ください。
          </p>
          <div className="space-y-4">
            {serviceGroups.map((group) => (
              <div key={group.label} className="border-b border-[#F0ECE8] pb-4 last:border-0 last:pb-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <Link
                    href={group.href}
                    className="font-bold text-sm text-[#92400E] hover:underline"
                  >
                    {group.label}
                  </Link>
                  <span className="text-xs text-[#78716C]">
                    掲載{companies.length}社中 {group.matches.length}社が記載
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.matches.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/company/${c.slug}/`}
                      className="text-xs bg-[#FFFBEB] text-[#92400E] px-3 py-1.5 rounded-full border border-[#F59E0B]/30 hover:border-[#F59E0B] transition-colors"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. エリア固有の切り口 */}
        <div className="bg-[#FFFBEB] border border-[#D6D3D1] rounded-xl p-5 mb-8">
          <h2 className="text-lg font-bold text-[#1C1917] mb-2">{focus.heading}</h2>
          <p className="text-sm text-[#57534E] mb-4">{focus.intro}</p>
          <div className="grid md:grid-cols-2 gap-4">
            {focus.points.map((p) => (
              <div key={p.title} className="flex gap-3">
                <div className="w-2 h-2 bg-[#92400E] rounded-full mt-2 shrink-0"></div>
                <div>
                  <div className="font-bold text-sm text-[#1C1917]">{p.title}</div>
                  <p className="text-sm text-[#57534E] mt-0.5 leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>

          {focus.questionsHeading && focus.questions && (
            <div className="mt-5 bg-white border border-[#F0ECE8] rounded-lg p-4">
              <h3 className="font-bold text-sm text-[#92400E] mb-3">
                {focus.questionsHeading}
              </h3>
              <ul className="space-y-2 text-sm text-[#57534E]">
                {focus.questions.map((q) => (
                  <li key={q} className="flex items-start gap-2">
                    <span className="text-[#92400E] font-bold shrink-0">Q.</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#78716C] mt-3">
                回答は会社や現場の状況によって変わります。ここに挙げた質問は、条件をそろえて比較するための確認項目であり、回答内容そのものを当サイトが保証するものではありません。
              </p>
            </div>
          )}
        </div>

        {/* 掲載社カード（公式サイト導線） */}
        <div className="space-y-4 mb-8">
          {companies.map((company) => (
            <div
              key={company.slug}
              className="bg-white border border-[#D6D3D1] rounded-2xl p-5 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-lg font-bold text-[#1C1917]">{company.name}</h3>
                    <span className="bg-[#F59E0B]/10 text-[#92400E] text-xs font-bold px-2 py-0.5 rounded">PR</span>
                  </div>
                  <p className="text-sm text-[#57534E] mb-2">{company.catchphrase}</p>
                  <div className="flex flex-wrap gap-2">
                    {company.features.map((f) => (
                      <span key={f} className="text-xs bg-[#059669]/10 text-[#059669] px-2 py-1 rounded-full font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:text-right shrink-0">
                  <div className="text-xs text-[#78716C] mb-0.5">最低料金目安</div>
                  <div className="text-xl font-bold text-[#92400E] mb-2">{company.priceRange}</div>
                  <div className="flex flex-col gap-2">
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="bg-[#F59E0B] text-[#92400E] font-bold py-2 px-5 rounded-full text-sm hover:bg-[#FCD34D] transition-colors text-center"
                    >
                      公式サイトで対応エリアを確認
                    </a>
                    <Link
                      href={`/company/${company.slug}/`}
                      className="border border-[#92400E] text-[#92400E] font-bold py-2 px-5 rounded-full text-sm hover:bg-[#FFFBEB] transition-colors text-center"
                    >
                      詳細・口コミを見る
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 関連リンク */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="/cost/price/"
            className="flex-1 bg-[#92400E] text-white font-bold py-3 px-6 rounded-full text-center hover:bg-[#78350F] transition-colors"
          >
            サービス別の料金相場を見る
          </Link>
          <Link
            href="/ranking/"
            className="flex-1 border-2 border-[#92400E] text-[#92400E] font-bold py-3 px-6 rounded-full text-center hover:bg-[#FFFBEB] transition-colors"
          >
            総合ランキングを見る
          </Link>
        </div>

        {/* 5. 他エリア */}
        <div>
          <h2 className="font-bold text-[#1C1917] mb-4">{otherAreasHeading}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {otherAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/area/${a.slug}/`}
                className="border border-[#D6D3D1] rounded-lg p-3 text-center hover:border-[#F59E0B] transition-colors text-sm font-medium text-[#1C1917] hover:text-[#92400E]"
              >
                {a.name}
              </Link>
            ))}
            <Link
              href="/know/no-wax-floor/"
              className="border border-[#D6D3D1] rounded-lg p-3 text-center hover:border-[#F59E0B] transition-colors text-sm font-medium text-[#1C1917] hover:text-[#92400E]"
            >
              ワックス不可の床材
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
