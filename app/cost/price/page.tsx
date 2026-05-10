import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata = {
  title: "床メンテナンスの料金相場・費用一覧 | 床メンテナンス110番",
  description:
    "床メンテナンスの料金相場を徹底調査。フローリングワックス・フロアコーティング・傷補修など、サービス別・床材別の費用目安を詳しく紹介します。",
};

const priceData = [
  {
    service: "ワックスがけ（フローリング）",
    unit: "6畳あたり",
    min: "8,000",
    max: "15,000",
    avg: "11,000",
    notes: "汚れの度合いにより変動",
  },
  {
    service: "ワックスがけ（クッションフロア）",
    unit: "6畳あたり",
    min: "6,000",
    max: "12,000",
    avg: "9,000",
    notes: "素材の状態により変動",
  },
  {
    service: "フロアコーティング（UV硬化型）",
    unit: "一般住宅全体",
    min: "80,000",
    max: "200,000",
    avg: "130,000",
    notes: "広さ・コーティング種類による",
  },
  {
    service: "フロアコーティング（ガラスコーティング）",
    unit: "一般住宅全体",
    min: "50,000",
    max: "150,000",
    avg: "90,000",
    notes: "施工面積により変動",
  },
  {
    service: "剥離洗浄",
    unit: "6畳あたり",
    min: "15,000",
    max: "35,000",
    avg: "22,000",
    notes: "ワックスの層数による",
  },
  {
    service: "フローリング傷補修",
    unit: "1箇所あたり",
    min: "3,000",
    max: "15,000",
    avg: "7,000",
    notes: "傷の深さ・大きさによる",
  },
  {
    service: "大理石研磨・コーティング",
    unit: "6畳あたり",
    min: "30,000",
    max: "80,000",
    avg: "50,000",
    notes: "汚れ・傷の程度による",
  },
  {
    service: "カーペット洗浄",
    unit: "6畳あたり",
    min: "10,000",
    max: "30,000",
    avg: "18,000",
    notes: "汚れの度合い・素材による",
  },
  {
    service: "タイル洗浄・コーティング",
    unit: "6畳あたり",
    min: "12,000",
    max: "40,000",
    avg: "22,000",
    notes: "タイルの種類による",
  },
  {
    service: "定期メンテナンス（月1回）",
    unit: "月額",
    min: "5,000",
    max: "20,000",
    avg: "10,000",
    notes: "床面積・作業内容による",
  },
];

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
            床メンテナンスの料金相場
          </h1>
          <p className="text-[#57534E] leading-relaxed">
            サービス別・床材別の床メンテナンス費用の目安をご紹介します。実際の料金は業者・地域・作業内容によって異なるため、必ず事前に複数の業者から見積もりを取ることをおすすめします。
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "ワックスがけ", price: "8,000円〜", unit: "6畳" },
            { label: "フロアコーティング", price: "50,000円〜", unit: "全体" },
            { label: "傷補修", price: "3,000円〜", unit: "1箇所" },
            { label: "剥離洗浄", price: "15,000円〜", unit: "6畳" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-[#FFFBEB] border border-[#D6D3D1] rounded-xl p-4 text-center"
            >
              <div className="text-xs text-[#78716C] mb-1">{item.label}</div>
              <div className="text-lg font-bold text-[#92400E]">{item.price}</div>
              <div className="text-xs text-[#A8A29E]">{item.unit}あたり</div>
            </div>
          ))}
        </div>

        {/* Price Table */}
        <div className="bg-white rounded-2xl border border-[#D6D3D1] overflow-hidden mb-8">
          <div className="bg-[#92400E] text-white px-5 py-3">
            <h2 className="font-bold">サービス別料金相場一覧</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#FFFBEB] border-b border-[#D6D3D1]">
                <tr>
                  <th className="text-left px-4 py-3 font-bold text-[#1C1917]">サービス</th>
                  <th className="text-center px-3 py-3 font-bold text-[#1C1917]">単位</th>
                  <th className="text-right px-3 py-3 font-bold text-[#1C1917]">最安値</th>
                  <th className="text-right px-3 py-3 font-bold text-[#1C1917]">最高値</th>
                  <th className="text-right px-3 py-3 font-bold text-[#92400E]">平均</th>
                  <th className="text-left px-3 py-3 font-bold text-[#1C1917] hidden md:table-cell">備考</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row, i) => (
                  <tr
                    key={row.service}
                    className={`border-b border-[#F0ECE8] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF9]"}`}
                  >
                    <td className="px-4 py-3 font-medium text-[#1C1917]">{row.service}</td>
                    <td className="px-3 py-3 text-center text-[#78716C]">{row.unit}</td>
                    <td className="px-3 py-3 text-right text-[#57534E]">{row.min}円</td>
                    <td className="px-3 py-3 text-right text-[#57534E]">{row.max}円</td>
                    <td className="px-3 py-3 text-right font-bold text-[#92400E]">{row.avg}円</td>
                    <td className="px-3 py-3 text-[#78716C] text-xs hidden md:table-cell">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cost Factors */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-8">
          <h2 className="text-lg font-bold text-[#1C1917] mb-4">料金に影響する主な要因</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "床面積", desc: "作業面積が広いほど料金は高くなります。一般的に6畳あたりの単価で計算されます。" },
              { title: "床材の種類", desc: "大理石や特殊床材は専用の薬剤・技術が必要なため、フローリングより高額になる傾向があります。" },
              { title: "床の状態", desc: "汚れや傷がひどいほど、前処理に時間がかかり料金が上がります。" },
              { title: "地域", desc: "都市部は人件費が高く、地方より料金が高くなる場合があります。" },
              { title: "作業内容", desc: "ワックスの層数・使用薬剤の種類・追加作業（家具移動等）によって変動します。" },
              { title: "業者の規模", desc: "大手は価格が安定していますが高め、地域密着型の小規模業者は安い場合があります。" },
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
            費用を抑えるコツ
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
            DIY vs プロを比較する
          </Link>
        </div>
      </div>
    </>
  );
}
