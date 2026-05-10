import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import companies from "@/data/companies.json";

export const metadata = {
  title: "床メンテナンス業者激安ランキング | 料金が安い順 | 床メンテナンス110番",
  description:
    "床メンテナンス業者を料金の安い順に比較したランキングです。コストを抑えながら高品質なサービスを受けられる業者を厳選しました。",
};

const cheapCompanies = [...companies].sort((a, b) => {
  const priceA = parseInt(a.priceRange.replace(/[^0-9]/g, ""));
  const priceB = parseInt(b.priceRange.replace(/[^0-9]/g, ""));
  return priceA - priceB;
});

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={star <= Math.round(rating) ? "#F59E0B" : "#D6D3D1"}
          className="w-4 h-4"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

export default function CheapRankingPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "ランキング", href: "/ranking/" },
          { label: "激安ランキング" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-[#F59E0B] text-[#92400E] text-xs font-bold px-2 py-1 rounded">
              PR・広告掲載あり
            </span>
            <span className="text-sm text-[#78716C]">2026年4月更新</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-3">
            床メンテナンス業者 激安ランキング
          </h1>
          <p className="text-[#57534E] leading-relaxed mb-4">
            料金の安い順に床メンテナンス業者を比較しました。コストを抑えつつも、品質は妥協したくない方へのおすすめ業者を厳選しています。
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800">
            <strong>注意:</strong> 表示価格はあくまでも目安です。作業範囲・床材の状態・地域によって異なります。必ず事前に見積もりを取得してください。
          </div>
          <div className="mt-4 flex gap-4">
            <Link
              href="/ranking/"
              className="bg-white text-[#92400E] text-sm font-bold px-4 py-2 rounded-full border border-[#92400E] hover:bg-[#FFFBEB] transition-colors"
            >
              総合ランキング
            </Link>
            <Link
              href="/ranking/cheap/"
              className="bg-[#92400E] text-white text-sm font-bold px-4 py-2 rounded-full"
            >
              激安ランキング
            </Link>
          </div>
        </div>

        <div className="space-y-5">
          {cheapCompanies.map((company, index) => (
            <div
              key={company.slug}
              className={`bg-white border rounded-2xl p-6 shadow-sm ${
                index === 0
                  ? "border-[#059669] ring-2 ring-[#059669]/20"
                  : "border-[#D6D3D1]"
              }`}
            >
              {index === 0 && (
                <div className="inline-block bg-[#059669] text-white text-xs font-bold px-2 py-1 rounded mb-3">
                  最安値 1位
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0 ${
                    index === 0
                      ? "bg-[#059669] text-white"
                      : "bg-[#FFFBEB] text-[#92400E] border-2 border-[#D6D3D1]"
                  }`}
                >
                  {index + 1}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h2 className="text-xl font-bold text-[#1C1917]">{company.name}</h2>
                    <span className="bg-[#F59E0B]/10 text-[#92400E] text-xs font-bold px-2 py-0.5 rounded">PR</span>
                  </div>
                  <p className="text-sm text-[#57534E] mb-2">{company.catchphrase}</p>

                  <div className="flex items-center gap-2 mb-3">
                    <StarRating rating={company.rating} />
                    <span className="font-bold text-[#F59E0B]">{company.rating}</span>
                    <span className="text-xs text-[#78716C]">（{company.reviewCount}件）</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {company.features.slice(0, 2).map((f) => (
                      <span key={f} className="text-xs bg-[#059669]/10 text-[#059669] px-2 py-1 rounded-full font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:text-right shrink-0">
                  <div className="text-xs text-[#78716C] mb-0.5">最低料金目安</div>
                  <div className="text-2xl font-bold text-[#059669] mb-1">{company.priceRange}</div>
                  <div className="text-xs text-[#78716C] mb-3">（税込・最低料金）</div>
                  <div className="flex flex-col gap-2">
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="bg-[#F59E0B] text-[#92400E] font-bold py-2 px-5 rounded-full text-sm hover:bg-[#FCD34D] transition-colors text-center"
                    >
                      無料見積もりを依頼
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

        <div className="mt-8 bg-[#FFFBEB] border border-[#D6D3D1] rounded-xl p-5">
          <h2 className="font-bold text-[#1C1917] mb-3">安い業者を選ぶ際の注意点</h2>
          <ul className="space-y-2 text-sm text-[#57534E]">
            <li className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#F59E0B] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              価格が安い業者は、使用する薬剤や作業工程が簡略化されている場合があります
            </li>
            <li className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#F59E0B] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              損害賠償保険の加入有無を必ず確認しましょう
            </li>
            <li className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#F59E0B] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              複数の業者から見積もりを取り、内容を詳しく比較してから依頼することをおすすめします
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
