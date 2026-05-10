import { notFound } from "next/navigation";
import Breadcrumb from "@/app/components/Breadcrumb";
import companies from "@/data/companies.json";
import Link from "next/link";

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
  return {
    title: `${company.name}の口コミ・評判・料金 | 床メンテナンス110番`,
    description: `${company.name}の床メンテナンスサービスを詳しくレビュー。料金目安${company.priceRange}、口コミ${company.reviewCount}件掲載。${company.catchphrase}`,
  };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`評価 ${rating}点`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={star <= Math.round(rating) ? "#F59E0B" : "#D6D3D1"}
          className="w-5 h-5"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);
  if (!company) notFound();

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
                <StarRating rating={company.rating} />
                <span className="text-xl font-bold text-[#F59E0B]">{company.rating}</span>
                <span className="text-sm text-[#78716C]">（{company.reviewCount}件のレビュー）</span>
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
        <div className="bg-white rounded-2xl border border-[#D6D3D1] p-6 mb-8">
          <h2 className="text-xl font-bold text-[#1C1917] mb-5 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#F59E0B]" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            ユーザーの口コミ・レビュー（{company.reviewCount}件中 抜粋）
          </h2>
          <div className="space-y-4">
            {company.reviews.map((review, index) => (
              <div key={index} className="border border-[#F0ECE8] rounded-xl p-4 bg-[#FFFBEB]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm text-[#1C1917]">{review.author}</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill={star <= review.score ? "#F59E0B" : "#D6D3D1"}
                        className="w-4 h-4"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-[#57534E] leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#F59E0B] rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-[#92400E] mb-2">
            {company.name}に相談してみましょう
          </h2>
          <p className="text-sm text-[#78350F] mb-4">
            料金の見積もりは無料です。まずはお気軽にお問い合わせを。
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
          <h3 className="font-bold text-[#1C1917] mb-4">他の業者も見てみる</h3>
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
