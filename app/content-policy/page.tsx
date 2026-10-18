import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata = {
  title: "コンテンツポリシー",
  alternates: { canonical: "/content-policy/" },
  description: "床メンテナンス110番のコンテンツ制作・掲載基準についてご説明します。",
};

export default function ContentPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "コンテンツポリシー" }]} />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-2">コンテンツポリシー</h1>
        <p className="text-sm text-[#78716C] mb-8">最終更新日: 2026年10月18日</p>

        <div className="bg-[#059669]/5 border border-[#059669]/20 rounded-xl p-5 mb-8">
          <p className="text-sm text-[#374151] leading-relaxed">
            床メンテナンス110番は、ユーザーの皆様に正確で有益な情報を提供することを使命としています。当サイトのコンテンツがどのように作成・管理されているかを透明性をもってお伝えします。
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-3 border-l-4 border-[#92400E] pl-3">編集方針</h2>
            <p className="text-sm text-[#57534E] leading-relaxed mb-3">
              当サイトのコンテンツは、床メンテナンスに関する専門的な知識と実際のユーザー体験を基に作成されています。
            </p>
            <ul className="space-y-2 text-sm text-[#57534E]">
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#059669] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                事実に基づいた正確な情報の提供を最優先とします
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#059669] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                業者情報は定期的に見直しを行い、最新情報を維持します
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#059669] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                PR・広告掲載の有無を明確に開示します
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#059669] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                ユーザーにとって有益な情報を中立的な立場で提供します
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-3 border-l-4 border-[#92400E] pl-3">広告・PRコンテンツの表示方法</h2>
            <p className="text-sm text-[#57534E] leading-relaxed mb-3">
              当サイトでは、広告または有料掲載のコンテンツには以下のラベルを表示しています。
            </p>
            <div className="flex flex-wrap gap-3 mb-3">
              <span className="bg-[#F59E0B] text-[#92400E] text-xs font-bold px-3 py-1.5 rounded">PR・広告掲載あり</span>
              <span className="bg-[#F59E0B]/10 text-[#92400E] text-xs font-bold px-3 py-1.5 rounded border border-[#F59E0B]/30">PR</span>
            </div>
            <p className="text-sm text-[#57534E] leading-relaxed">
              これらのラベルが表示されているコンテンツは、掲載業者から広告掲載料またはアフィリエイト報酬を受け取っている場合があります。ただし、情報の正確性・客観性の維持に努めています。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-3 border-l-4 border-[#92400E] pl-3">ランキングの選定基準</h2>
            <p className="text-sm text-[#57534E] leading-relaxed mb-3">
              当サイトのランキングは、各業者の公式サイトで確認できる以下の情報をもとに作成しています。口コミや評価スコアは順位の判断に用いていません。
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: "料金の公開状況", desc: "公式サイトに料金・面積の区切り・税表記が記載されているか" },
                { title: "サービスの幅", desc: "対応できる床材・サービスの種類" },
                { title: "対応エリア", desc: "全国対応か地域限定か" },
                { title: "会社情報", desc: "運営会社・所在地などの公開状況" },
                { title: "保険・保証", desc: "損害賠償保険・保証の公式サイトでの記載" },
              ].map((item) => (
                <div key={item.title} className="bg-[#FFFBEB] rounded-lg p-3">
                  <div className="font-bold text-sm text-[#1C1917]">{item.title}</div>
                  <p className="text-xs text-[#57534E] mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#78716C] mt-3">
              ※ 広告掲載料の支払いはランキング順位に影響する場合があります。その場合は明示的にPRラベルを表示します。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-3 border-l-4 border-[#92400E] pl-3">口コミの掲載について</h2>
            <p className="text-sm text-[#57534E] leading-relaxed">
              当サイトでは、利用者から口コミを独自に収集していません。口コミを掲載する場合は、業者の公式サイトに掲載された利用者の声など出典を確認できるものに限り、原文のまま引用し、出典を明記しています。評価スコア（★・点数）と口コミ件数は、Googleマップなど出典と取得日を示せるものに限って表示します。出典を確認できない評価スコア・口コミは掲載していません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-3 border-l-4 border-[#92400E] pl-3">情報の更新・訂正</h2>
            <p className="text-sm text-[#57534E] leading-relaxed">
              掲載情報の誤りや変更が生じた場合は速やかに修正します。業者情報の変更（廃業・サービス内容の変更等）についても定期的な確認を行い、最新情報の維持に努めます。誤りを発見された場合はお問い合わせよりご連絡ください。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-3 border-l-4 border-[#92400E] pl-3">禁止コンテンツ</h2>
            <p className="text-sm text-[#57534E] leading-relaxed mb-3">当サイトでは以下のコンテンツを掲載しません。</p>
            <ul className="space-y-2 text-sm text-[#57534E]">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold shrink-0">×</span>
                虚偽または誇大な業者情報
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold shrink-0">×</span>
                特定の業者への根拠のない誹謗中傷
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold shrink-0">×</span>
                違法または不正なサービスの紹介
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold shrink-0">×</span>
                著作権・肖像権を侵害するコンテンツ
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
