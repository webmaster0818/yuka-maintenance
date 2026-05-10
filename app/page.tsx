import Link from "next/link";
import companies from "@/data/companies.json";
import floors from "@/data/floors.json";
import services from "@/data/services.json";

export const metadata = {
  title: "床メンテナンス110番 | プロの床クリーニング業者比較・口コミ",
  description:
    "フローリング・大理石・カーペットなど床種別の専門業者を比較・口コミで探せる。ワックスがけ・フロアコーティング・傷補修の費用相場も掲載。",
};

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`評価 ${rating}点`}>
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

export default function HomePage() {
  const topCompanies = companies.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#92400E] to-[#78350F] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-[#F59E0B] text-[#92400E] text-xs font-bold px-3 py-1 rounded-full mb-4">
            全国対応・無料一括比較
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
            プロの床メンテナンスで、<br className="hidden sm:block" />
            <span className="text-[#FCD34D]">足元から美しく。</span>
          </h1>
          <p className="text-lg text-[#FDE68A] mb-8 max-w-2xl mx-auto">
            フローリング・大理石・カーペット…あらゆる床材に対応したプロ業者を徹底比較。費用相場・口コミ・選び方まで、床メンテナンスのすべてがわかります。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ranking/"
              className="bg-[#F59E0B] text-[#92400E] font-bold py-4 px-8 rounded-full text-lg hover:bg-[#FCD34D] transition-colors shadow-lg"
            >
              業者ランキングを見る
            </Link>
            <Link
              href="/cost/price/"
              className="bg-white/10 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white/20 transition-colors border border-white/30"
            >
              料金相場を確認する
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-[#FDE68A]">
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              10社以上を徹底比較
            </span>
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              実際の口コミ掲載
            </span>
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              床種別ガイド完備
            </span>
          </div>
        </div>
      </section>

      {/* Top Rankings Preview */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#1C1917]">
              <span className="text-[#92400E]">おすすめ</span>業者ランキング
            </h2>
            <Link href="/ranking/" className="text-sm text-[#92400E] font-medium hover:underline flex items-center gap-1">
              全件見る
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="grid gap-4">
            {topCompanies.map((company, index) => (
              <Link
                key={company.slug}
                href={`/company/${company.slug}/`}
                className="flex items-center gap-4 p-5 bg-[#FFFBEB] border border-[#D6D3D1] rounded-xl hover:border-[#F59E0B] hover:shadow-md transition-all group"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0 ${
                    index === 0
                      ? "bg-[#F59E0B] text-white"
                      : index === 1
                      ? "bg-[#A8A29E] text-white"
                      : "bg-[#B45309] text-white"
                  }`}
                >
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-[#1C1917] group-hover:text-[#92400E]">{company.name}</span>
                    <StarRating rating={company.rating} />
                    <span className="text-sm text-[#57534E]">{company.rating}</span>
                    <span className="text-xs text-[#78716C]">({company.reviewCount}件)</span>
                  </div>
                  <p className="text-sm text-[#57534E] mt-1 truncate">{company.catchphrase}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {company.features.slice(0, 2).map((f) => (
                      <span key={f} className="text-xs bg-[#059669]/10 text-[#059669] px-2 py-0.5 rounded-full font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right shrink-0 hidden sm:block">
                  <div className="text-xs text-[#78716C]">料金目安</div>
                  <div className="text-sm font-bold text-[#92400E]">{company.priceRange}</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#A8A29E] group-hover:text-[#92400E] shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/ranking/"
              className="inline-block bg-[#92400E] text-white font-bold py-3 px-8 rounded-full hover:bg-[#78350F] transition-colors"
            >
              全ランキングを見る（10社）
            </Link>
          </div>
        </div>
      </section>

      {/* Floor Type Guides */}
      <section className="py-12 px-4 bg-[#FFFBEB]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1C1917] mb-2">床種別メンテナンスガイド</h2>
          <p className="text-[#57534E] mb-6">あなたの床材に合った最適なメンテナンス方法をご紹介します</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {floors.map((floor) => (
              <Link
                key={floor.slug}
                href={`/floor/${floor.slug}/`}
                className="bg-white border border-[#D6D3D1] rounded-xl p-5 text-center hover:border-[#92400E] hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-[#92400E]/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#92400E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="font-bold text-[#1C1917] group-hover:text-[#92400E] text-sm">{floor.name}</div>
                <div className="text-xs text-[#78716C] mt-1">{floor.avgCost}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1C1917] mb-2">床メンテナンスのサービス一覧</h2>
          <p className="text-[#57534E] mb-6">目的別に最適なサービスを選びましょう</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/service/${service.slug}/`}
                className="border border-[#D6D3D1] rounded-xl p-5 hover:border-[#F59E0B] hover:shadow-md transition-all group bg-[#FFFBEB]"
              >
                <h3 className="font-bold text-[#1C1917] group-hover:text-[#92400E] mb-2">{service.name}</h3>
                <p className="text-sm text-[#57534E] mb-3 line-clamp-2">{service.shortDescription}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#78716C]">平均費用: {service.avgCost}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#A8A29E] group-hover:text-[#92400E]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 px-4 bg-[#059669]/5 border-t border-[#059669]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1C1917] mb-8">床メンテナンス110番が選ばれる理由</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "信頼の口コミ情報",
                desc: "実際に利用したお客様の口コミをもとに、業者の品質を正直に評価しています。",
                icon: (
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
              },
              {
                title: "費用相場が一目でわかる",
                desc: "ワックスがけからフロアコーティングまで、サービス別・床材別の費用相場を掲載。",
                icon: (
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
              },
              {
                title: "床種別の専門ガイド",
                desc: "フローリング・大理石・カーペットなど5種類の床材に対応した専門メンテナンス情報。",
                icon: (
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                ),
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-[#059669]/20">
                <div className="w-12 h-12 bg-[#059669]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="font-bold text-[#1C1917] mb-2">{item.title}</h3>
                <p className="text-sm text-[#57534E]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 px-4 bg-[#F59E0B]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#92400E] mb-3">
            まずは料金の相場を確認しましょう
          </h2>
          <p className="text-[#78350F] mb-6">
            依頼前に費用の目安を把握しておくことで、業者との交渉もスムーズに。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cost/price/"
              className="bg-[#92400E] text-white font-bold py-3 px-8 rounded-full hover:bg-[#78350F] transition-colors"
            >
              料金相場を見る
            </Link>
            <Link
              href="/cost/diy-vs-pro/"
              className="bg-white text-[#92400E] font-bold py-3 px-8 rounded-full hover:bg-[#FFFBEB] transition-colors border border-[#92400E]"
            >
              DIY vs プロを比較
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
