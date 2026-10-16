import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import companies from "@/data/companies.json";
import SourcedRating from "@/app/components/SourcedRating";

export const metadata = {
  title: `床メンテナンス業者おすすめランキング${companies.length}選`,
  alternates: { canonical: "/ranking/" },
  description:
    `床メンテナンス業者のおすすめランキングです。公式サイトで確認できる会社情報・料金・対応サービスをもとに、${companies.length}社を掲載しています。`,
};

// 出典のない評価スコアで順位を付けない。並びは掲載順（★・点数による序列ではない）。
const sortedCompanies = companies;


export default function RankingPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "おすすめランキング" }]} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-[#F59E0B] text-[#92400E] text-xs font-bold px-2 py-1 rounded">
              PR・広告掲載あり
            </span>
            <span className="text-sm text-[#78716C]">2026年10月更新</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-3">
            床メンテナンス業者おすすめランキング{companies.length}選
          </h1>
          <p className="text-[#57534E] leading-relaxed">
            公式サイトで確認できる料金・対応サービス・会社情報をもとに比較した、床メンテナンス業者の一覧です。フローリング・カーペット・大理石などさまざまな床材に対応した業者を掲載しています。
          </p>
          <div className="mt-4 flex gap-4">
            <Link
              href="/ranking/"
              className="bg-[#92400E] text-white text-sm font-bold px-4 py-2 rounded-full"
            >
              総合ランキング
            </Link>
            <Link
              href="/ranking/cheap/"
              className="bg-white text-[#92400E] text-sm font-bold px-4 py-2 rounded-full border border-[#92400E] hover:bg-[#FFFBEB] transition-colors"
            >
              格安ランキング
            </Link>
          </div>
        </div>

        <div className="space-y-5">
          {sortedCompanies.map((company, index) => (
            <div
              key={company.slug}
              className={`bg-white border rounded-2xl p-6 shadow-sm ${
                index === 0
                  ? "border-[#F59E0B] ring-2 ring-[#F59E0B]/30"
                  : index === 1
                  ? "border-[#A8A29E]"
                  : index === 2
                  ? "border-[#B45309]"
                  : "border-[#D6D3D1]"
              }`}
            >
              {index < 3 && (
                <div
                  className={`inline-block text-white text-xs font-bold px-2 py-1 rounded mb-3 ${
                    index === 0
                      ? "bg-[#F59E0B]"
                      : index === 1
                      ? "bg-[#A8A29E]"
                      : "bg-[#B45309]"
                  }`}
                >
                  {index === 0 ? "1位 編集部おすすめ" : index === 1 ? "2位" : "3位"}
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0 ${
                    index === 0
                      ? "bg-[#F59E0B] text-white"
                      : index === 1
                      ? "bg-[#A8A29E] text-white"
                      : index === 2
                      ? "bg-[#B45309] text-white"
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
                    <SourcedRating
                      slug={company.slug}
                      emptyText="評価スコア・口コミ件数は当サイトでは保有していません（公式サイトで確認できた会社情報・料金のみ掲載）"
                    />
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {company.features.map((f) => (
                      <span key={f} className="text-xs bg-[#059669]/10 text-[#059669] px-2 py-1 rounded-full font-medium">
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {company.floorServices.slice(0, 3).map((s) => (
                      <span key={s} className="text-xs bg-[#92400E]/10 text-[#92400E] px-2 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:text-right shrink-0">
                  <div className="text-xs text-[#78716C] mb-1">最低料金目安</div>
                  <div className="text-lg font-bold text-[#92400E] mb-3">{company.priceRange}</div>
                  <div className="flex flex-col gap-2">
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="bg-[#F59E0B] text-[#92400E] font-bold py-2 px-5 rounded-full text-sm hover:bg-[#FCD34D] transition-colors text-center"
                    >
                      公式サイトを見る
                    </a>
                    <Link
                      href={`/company/${company.slug}/`}
                      className="border border-[#92400E] text-[#92400E] font-bold py-2 px-5 rounded-full text-sm hover:bg-[#FFFBEB] transition-colors text-center"
                    >
                      {company.reviews.length ? "口コミを見る" : "料金・会社概要を見る"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-[#FFFBEB] border border-[#D6D3D1] rounded-xl p-5">
          <h2 className="font-bold text-[#1C1917] mb-3">ランキングの選定基準について</h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-3">
            当ランキングは、公式サイトで確認できる料金の透明性・対応サービスの幅広さ・対応エリアなどをもとに編集部が掲載順を決めています。出典のない評価スコアや口コミ件数による順位付けは行っていません。評価を表示している社は、Googleマップで確認した値を、出典と取得日を記載して掲載しています。なお、当サイトは一部の業者よりPR掲載料をいただいており、ランキングはその影響を受ける場合があります。
          </p>
          <p className="text-xs text-[#78716C]">
            最終更新: 2026年10月 | 掲載情報は変更される場合があります。最新情報は各業者の公式サイトをご確認ください。
          </p>
        </div>
      </div>
    </>
  );
}
