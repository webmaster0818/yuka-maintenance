import Link from "next/link";
import RelatedKnow from "@/app/components/RelatedKnow";
import Breadcrumb from "@/app/components/Breadcrumb";
import companies from "@/data/companies.json";
import type { Company } from "@/app/lib/company";

export const metadata = {
  title: "床メンテナンスの料金｜公式に料金を掲載している会社の一覧",
  alternates: { canonical: "/cost/price/" },
  description:
    "床のワックスがけ・フロアコーティングなどの料金を、各社が公式サイトに掲載している最低料金（税込・税別・単位の条件つき）で一覧にしています。料金表のない会社は見積もりで確認してください。",
};

// 料金は各社公式サイトの記載だけを掲載する（2026-10-25 既定案：根拠のない相場表は削除）。
// 値と出典・確認日は data/companies.json（各社の紹介ページに出典を記載）を正とする。
const priced = (companies as Company[]).filter((c) => /^[0-9]/.test(c.priceRange));
const unpriced = (companies as Company[]).filter((c) => !/^[0-9]/.test(c.priceRange));

export default function PricePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "費用・料金", href: "/cost/price/" },
          { label: "料金相場" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-3">
            床メンテナンスの料金（各社公式の掲載料金）
          </h1>
          <p className="text-[#57534E] leading-relaxed">
            掲載している金額は、各社が公式サイトに掲載している料金だけです。公的機関や業界団体が示す床メンテナンスの料金相場は確認できないため、当サイトでは独自の相場は掲載していません。単位（1件・1平方メートル・1畳など）と税込・税別の条件が会社ごとに異なるため、条件をそろえて比べ、金額は見積もりで確認してください。
          </p>
        </div>

        {/* Price Table */}
        <div className="bg-white rounded-2xl border border-[#D6D3D1] overflow-hidden mb-4">
          <div className="bg-[#92400E] text-white px-5 py-3">
            <h2 className="font-bold">公式サイトに料金を掲載している会社（{priced.length}社）</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#FFFBEB] border-b border-[#D6D3D1]">
                <tr>
                  <th className="text-left px-4 py-3 font-bold text-[#1C1917]">会社</th>
                  <th className="text-left px-3 py-3 font-bold text-[#92400E]">公式に掲載の最低料金と条件</th>
                </tr>
              </thead>
              <tbody>
                {priced.map((c, i) => (
                  <tr key={c.slug} className={`border-b border-[#F0ECE8] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF9]"}`}>
                    <td className="px-4 py-3 font-medium text-[#1C1917]">
                      <Link href={`/company/${c.slug}/`} className="underline">{c.name}</Link>
                    </td>
                    <td className="px-3 py-3 text-[#57534E]">{c.priceRange}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-xs text-[#78716C] mb-8">
          出典と確認日は各社の紹介ページに記載しています。ワックスがけの料金を条件ごとに並べた比較は
          <Link href="/know/wax-price-official/" className="text-[#92400E] underline">ワックスがけ料金の比較</Link>
          をご覧ください。料金表を公式に掲載していない会社（{unpriced.map((c) => c.name).join("・")}）は、見積もりで金額を確認してください。
        </p>

        {/* Cost Factors */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-8">
          <h2 className="text-lg font-bold text-[#1C1917] mb-4">料金に影響する主な要因</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "床面積", desc: "作業面積が広いほど料金は高くなります。料金の単位は1件（10帖までなど）・1平方メートル・1畳など会社ごとに異なります。" },
              { title: "床材の種類", desc: "大理石や特殊床材は専用の薬剤・技術が必要なため、フローリングより高額になる傾向があります。" },
              { title: "床の状態", desc: "汚れや傷がひどいほど、前処理に時間がかかり料金が上がります。" },
              { title: "地域", desc: "都市部は人件費が高く、地方より料金が高くなる場合があります。" },
              { title: "作業内容", desc: "ワックスの層数・使用薬剤の種類・追加作業（家具移動等）によって変動します。" },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <div className="w-2 h-2 bg-[#92400E] rounded-full mt-2 shrink-0"></div>
                <div>
                  <div className="font-bold text-sm text-[#1C1917]">{item.title}</div>
                  <p className="text-sm text-[#57534E] mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Money saving tips */}
        <div className="bg-[#059669]/5 border border-[#059669]/20 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-[#059669] mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
            </svg>
            費用を抑える方法
          </h2>
          <ul className="space-y-2 text-sm text-[#374151]">
            <li className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#059669] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              複数の業者から相見積もりを取り、価格と内容を比較する
            </li>
            <li className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#059669] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              定期メンテナンスの契約を結ぶと単発より割安になる場合がある
            </li>
            <li className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#059669] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              家具移動は自分で行い、作業エリアをあらかじめ確保しておく
            </li>
            <li className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#059669] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              定期的なメンテナンスで状態を保ち、大きな修繕を防ぐ
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <RelatedKnow
            heading="料金とあわせて確認したい基礎知識"
            items={[
              { href: "/know/wax-price-official/", label: "ワックスがけ料金の比較" },
              { href: "/know/floor-cleaning-menu/", label: "床クリーニングの作業内容" },
              { href: "/know/floor-sanding/", label: "フローリングの研磨" },
              { href: "/know/coating-warranty/", label: "コーティングの保証と点検" },
            ]}
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/ranking/"
            className="flex-1 bg-[#92400E] text-white font-bold py-3 px-6 rounded-full text-center hover:bg-[#78350F] transition-colors"
          >
            業者ランキングを見る
          </Link>
          <Link
            href="/cost/diy-vs-pro/"
            className="flex-1 border-2 border-[#92400E] text-[#92400E] font-bold py-3 px-6 rounded-full text-center hover:bg-[#FFFBEB] transition-colors"
          >
            DIYと業者依頼を比較する
          </Link>
        </div>
      </div>
    </>
  );
}
