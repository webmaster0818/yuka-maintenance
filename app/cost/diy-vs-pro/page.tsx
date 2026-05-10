import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata = {
  title: "床メンテナンス DIY vs プロに頼む どちらがいい？ | 床メンテナンス110番",
  description:
    "床メンテナンスをDIYで行うべきか、プロに依頼すべきか徹底比較。費用・時間・仕上がり・リスクの観点から最適な選択をご案内します。",
};

const comparisons = [
  {
    category: "費用",
    diy: "ワックス代・道具代で3,000〜10,000円程度",
    pro: "8,000〜30,000円（作業内容による）",
    winner: "diy",
    note: "初期投資は安いが道具が必要",
  },
  {
    category: "仕上がり品質",
    diy: "ムラになりやすく、均一な仕上がりが難しい",
    pro: "プロの技術と機器で均一で美しい仕上がり",
    winner: "pro",
    note: "特に大理石・フロアコーティングはプロ必須",
  },
  {
    category: "所要時間",
    diy: "6畳で2〜4時間（慣れていない場合さらに長く）",
    pro: "プロは同じ作業を1〜2時間で完了",
    winner: "pro",
    note: "作業経験の差が大きく影響",
  },
  {
    category: "リスク",
    diy: "失敗すると床を傷める可能性あり。補修費用が発生することも",
    pro: "損害賠償保険加入業者なら万が一の補償あり",
    winner: "pro",
    note: "特に高級床材はDIYリスクが高い",
  },
  {
    category: "頻度",
    diy: "いつでも好きなタイミングで実施できる",
    pro: "予約が必要。繁忙期は2〜3週間待つ場合も",
    winner: "diy",
    note: "緊急時はDIYが便利",
  },
  {
    category: "持続性",
    diy: "市販ワックスは3〜6ヶ月で効果が薄れる",
    pro: "業務用製品で6ヶ月〜数年の持続効果",
    winner: "pro",
    note: "フロアコーティングなら5年以上持続",
  },
];

export default function DiyVsProPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "費用・料金", href: "/cost/price/" },
          { label: "DIY vs プロ" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-3">
            床メンテナンス DIY vs プロに依頼 徹底比較
          </h1>
          <p className="text-[#57534E] leading-relaxed">
            「自分でワックスがけをすべきか？」「やはりプロに頼むべきか？」床のメンテナンスで悩む多くの方の疑問にお答えします。費用・仕上がり・リスクを多角的に比較しました。
          </p>
        </div>

        {/* Summary */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          <div className="bg-[#FFFBEB] border-2 border-[#F59E0B] rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#F59E0B] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-[#1C1917]">DIYでやる場合</h2>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2 text-[#059669]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                費用を大幅に抑えられる
              </li>
              <li className="flex items-start gap-2 text-[#059669]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                自分のペースで実施できる
              </li>
              <li className="flex items-start gap-2 text-[#059669]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                待ち時間がない
              </li>
              <li className="flex items-start gap-2 text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                仕上がりにムラが出やすい
              </li>
              <li className="flex items-start gap-2 text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                失敗すると床が傷む可能性
              </li>
              <li className="flex items-start gap-2 text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                効果の持続期間が短い
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-[#F59E0B]/30">
              <div className="text-sm font-bold text-[#92400E]">こんな方にDIYがおすすめ</div>
              <p className="text-xs text-[#57534E] mt-1">
                軽い汚れのフローリング洗浄・フラット床での日常メンテナンス・賃貸のクッションフロアケア
              </p>
            </div>
          </div>

          <div className="bg-white border-2 border-[#92400E] rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#92400E] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-[#1C1917]">プロに依頼する場合</h2>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2 text-[#059669]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                プロの技術で均一・高品質な仕上がり
              </li>
              <li className="flex items-start gap-2 text-[#059669]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                業務用製品で長持ちする効果
              </li>
              <li className="flex items-start gap-2 text-[#059669]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                損害賠償保険で安心・保証あり
              </li>
              <li className="flex items-start gap-2 text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                DIYより費用が高い
              </li>
              <li className="flex items-start gap-2 text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                予約・スケジュール調整が必要
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-[#92400E]/30">
              <div className="text-sm font-bold text-[#92400E]">こんな方にプロがおすすめ</div>
              <p className="text-xs text-[#57534E] mt-1">
                大理石・高級フローリング・フロアコーティング・賃貸退去前の原状回復・広い施工面積
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-[#D6D3D1] overflow-hidden mb-8">
          <div className="bg-[#92400E] text-white px-5 py-3">
            <h2 className="font-bold">項目別比較表</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#FFFBEB] border-b border-[#D6D3D1]">
                <tr>
                  <th className="text-left px-4 py-3 font-bold text-[#1C1917]">比較項目</th>
                  <th className="text-center px-4 py-3 font-bold text-[#92400E]">DIY</th>
                  <th className="text-center px-4 py-3 font-bold text-[#92400E]">プロに依頼</th>
                  <th className="text-center px-4 py-3 font-bold text-[#1C1917] hidden md:table-cell">優位</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={row.category} className={`border-b border-[#F0ECE8] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF9]"}`}>
                    <td className="px-4 py-3 font-bold text-[#1C1917]">{row.category}</td>
                    <td className="px-4 py-3 text-[#57534E]">{row.diy}</td>
                    <td className="px-4 py-3 text-[#57534E]">{row.pro}</td>
                    <td className="px-4 py-3 text-center hidden md:table-cell">
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                        row.winner === "pro"
                          ? "bg-[#92400E]/10 text-[#92400E]"
                          : "bg-[#059669]/10 text-[#059669]"
                      }`}>
                        {row.winner === "pro" ? "プロ" : "DIY"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-[#FFFBEB] border border-[#D6D3D1] rounded-xl p-5 mb-8">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">結論：どちらを選ぶべき？</h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-3">
            <strong className="text-[#1C1917]">日常的な軽いメンテナンスはDIYで十分です。</strong>ただし、フロアコーティング・大理石の研磨・剥離洗浄・深い傷の補修などは、専門技術と機器が必要なためプロへの依頼をおすすめします。
          </p>
          <p className="text-sm text-[#57534E] leading-relaxed">
            特に高級床材や賃貸の原状回復など、失敗が許されない場面では、損害賠償保険に加入したプロの業者に依頼することで安心して任せられます。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/ranking/"
            className="flex-1 bg-[#92400E] text-white font-bold py-3 px-6 rounded-full text-center hover:bg-[#78350F] transition-colors"
          >
            プロの業者を探す
          </Link>
          <Link
            href="/cost/price/"
            className="flex-1 border-2 border-[#92400E] text-[#92400E] font-bold py-3 px-6 rounded-full text-center hover:bg-[#FFFBEB] transition-colors"
          >
            料金相場を確認する
          </Link>
        </div>
      </div>
    </>
  );
}
