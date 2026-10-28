import { notFound } from "next/navigation";
import Breadcrumb from "@/app/components/Breadcrumb";
import companies from "@/data/companies.json";
import SourcedRating from "@/app/components/SourcedRating";
import { hasReviewArticle } from "@/app/lib/verifiedRating";
import Link from "next/link";
import companyAnswers from "@/data/company-answers.json";
import DaikenCoatingNotice from "@/app/components/DaikenCoatingNotice";

// 検索語に即答する冒頭・FAQ（公式出典つき）を持つ社だけ、data/company-answers.json で上書きする
type CompanyAnswer = {
  title: string;
  description: string;
  heading: string;
  lead: string[];
  priceTable?: { caption: string; head: string[]; rows: string[][]; note: string; sourceHref: string };
  faq: { q: string; a: string }[];
  sources: { label: string; href: string; checked: string }[];
};
const answers = companyAnswers as Record<string, CompanyAnswer>;

export async function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);
  if (!company) return {};
  const answer = answers[slug];
  if (answer) {
    return {
      title: answer.title,
      description: answer.description,
      alternates: { canonical: `/company/${company.slug}/` },
    };
  }
  return {
    // 口コミを掲載していない社に「口コミ・評判」のタイトルを付けない
    title: company.reviews.length
      ? `${company.name}の口コミ・評判・料金`
      : `${company.name}の料金・対応サービスと会社概要`,
    description: `${company.name}の床メンテナンスサービスを、公式サイトで確認できる会社情報・料金・対応サービスから整理しています。料金目安${company.priceRange}。${company.catchphrase}`,
    alternates: { canonical: `/company/${company.slug}/` },
  };
}


export default async function CompanyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);
  if (!company) notFound();
  const answer = answers[company.slug];
  const faqLd = answer
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: answer.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }
    : null;

  return (
    <>
      <Breadcrumb
        items={[
          { label: "業者一覧", href: "/ranking/" },
          { label: company.name },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl border border-[#D6D3D1] p-6 mb-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-[#059669]/10 text-[#059669] text-xs font-bold px-2 py-0.5 rounded">
                  床メンテナンス専門
                </span>
                <span className="bg-[#F59E0B]/10 text-[#92400E] text-xs font-bold px-2 py-0.5 rounded">
                  PR
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-1">{company.name}</h1>
              <p className="text-[#57534E] mb-3">{company.catchphrase}</p>
              <div className="flex items-center gap-3 flex-wrap">
                {/* 評価：Googleマップで一次確認できた社のみ出典・取得日つきで表示 */}
                <SourcedRating slug={company.slug} size="md" />
              </div>
            </div>
            <div className="md:text-right">
              <div className="text-sm text-[#78716C] mb-1">料金目安（最低）</div>
              <div className="text-2xl font-bold text-[#92400E]">{company.priceRange}</div>
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="mt-3 inline-block bg-[#F59E0B] text-[#92400E] font-bold py-3 px-6 rounded-full hover:bg-[#FCD34D] transition-colors text-sm"
              >
                公式サイトを見る
              </a>
            </div>
          </div>
        </div>

        {company.floorServices.some((s) => s.includes("コーティング")) && <DaikenCoatingNotice />}

        {answer && (
          <section className="bg-white rounded-2xl border border-[#D6D3D1] p-6 mb-6 shadow-sm">
            {faqLd && (
              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
            )}
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">{answer.heading}</h2>
            <div className="space-y-3 text-sm text-[#57534E] leading-relaxed">
              {answer.lead.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {answer.priceTable && (
              <div className="mt-6">
                <h3 className="font-bold text-[#1C1917] mb-3">地域別の料金表</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-[#D6D3D1]">
                    <caption className="text-left text-xs text-[#78716C] mb-2">{answer.priceTable.caption}</caption>
                    <thead className="bg-[#FFFBEB]">
                      <tr>
                        {answer.priceTable.head.map((h) => (
                          <th key={h} className="px-3 py-2 text-left font-bold text-[#1C1917] border-b border-[#D6D3D1]">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {answer.priceTable.rows.map((r) => (
                        <tr key={r[0]} className="border-b border-[#D6D3D1]">
                          {r.map((c, i) => (
                            <td key={i} className={i === 0 ? "px-3 py-2 font-bold text-[#1C1917] whitespace-nowrap" : "px-3 py-2 text-[#57534E]"}>{c}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-[#78716C] mt-2">
                  {answer.priceTable.note}
                  <a href={answer.priceTable.sourceHref} target="_blank" rel="noopener noreferrer" className="underline ml-1">公式の価格・料金一覧を見る</a>
                </p>
              </div>
            )}
            <h3 className="font-bold text-[#1C1917] mt-6 mb-3">よくある質問</h3>
            <div className="space-y-3">
              {answer.faq.map((f) => (
                <div key={f.q} className="rounded-xl bg-[#FFFBEB] border border-[#D6D3D1] p-4">
                  <p className="font-bold text-sm text-[#1C1917] mb-1">Q. {f.q}</p>
                  <p className="text-sm text-[#57534E] leading-relaxed">A. {f.a}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#78716C] mt-4">
              出典：
              {answer.sources.map((src, i) => (
                <span key={src.href}>
                  {i > 0 && "／"}
                  <a href={src.href} target="_blank" rel="noopener noreferrer" className="underline">{src.label}</a>（{src.checked}確認）
                </span>
              ))}
            </p>
          </section>
        )}

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Features */}
          <div className="md:col-span-1 bg-[#FFFBEB] rounded-xl border border-[#D6D3D1] p-5">
            <h2 className="font-bold text-[#1C1917] mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#059669]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              主な特長
            </h2>
            <ul className="space-y-2">
              {company.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-[#57534E]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#059669] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Floor Services */}
          <div className="md:col-span-2 bg-white rounded-xl border border-[#D6D3D1] p-5">
            <h2 className="font-bold text-[#1C1917] mb-3">対応する床メンテナンスサービス</h2>
            <div className="flex flex-wrap gap-2">
              {company.floorServices.map((s) => (
                <span key={s} className="bg-[#92400E]/10 text-[#92400E] text-sm font-medium px-3 py-1.5 rounded-full">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-[#D6D3D1]">
              <h3 className="text-sm font-bold text-[#1C1917] mb-2">会社概要</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">{company.description}</p>
            </div>
          </div>
        </div>

        {/* Reviews */}
        {/* 口コミ：出典を確認できない口コミは掲載しない（companies.json の口コミ文は 2026-10-16 に削除） */}
          <div className="bg-white rounded-2xl border border-[#D6D3D1] p-6 mb-8">
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">口コミの掲載について</h2>
            <p className="text-sm text-[#57534E] leading-relaxed">
              {hasReviewArticle(company.slug)
                ? `${company.name}の利用者の声は、出典を確認できたものに限り、出典を記載して下記の検証記事に掲載しています。`
                : `${company.name}については、当サイトで内容を確認できた利用者の口コミがありません。`}
              出所を確認できない口コミは掲載しない方針のため、このページでは公式サイトで確認できた会社情報・料金・対応サービスのみを掲載しています。
              実際の評判は、公式サイトの施工事例や見積もり時の説明とあわせてご判断ください。
            </p>
            {hasReviewArticle(company.slug) && (
              <p className="mt-3 text-sm">
                <Link href={`/review/${company.slug}/`} className="text-[#92400E] font-bold underline underline-offset-2">
                  {company.name}の評判を公開情報で検証した記事を見る
                </Link>
              </p>
            )}
          </div>

        {/* CTA */}
        <div className="bg-[#F59E0B] rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-[#92400E] mb-2">
            {company.name}への相談をご検討ください
          </h2>
          <p className="text-sm text-[#78350F] mb-4">
            料金の見積もりは無料です。公式サイトからお問い合わせいただけます。
          </p>
          <a
            href={company.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block bg-[#92400E] text-white font-bold py-3 px-8 rounded-full hover:bg-[#78350F] transition-colors"
          >
            公式サイトで無料見積もり
          </a>
          <p className="text-xs text-[#92400E] mt-3 font-medium">※当サイトはPR・広告を含みます</p>
        </div>

        {/* Other Companies */}
        <div className="mt-8">
          <h3 className="font-bold text-[#1C1917] mb-4">他の業者を見る</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {companies
              .filter((c) => c.slug !== company.slug)
              .slice(0, 4)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/company/${c.slug}/`}
                  className="border border-[#D6D3D1] rounded-lg p-3 text-center hover:border-[#F59E0B] transition-colors text-sm font-medium text-[#1C1917] hover:text-[#92400E]"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
