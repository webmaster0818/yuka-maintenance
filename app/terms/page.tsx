import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata = {
  title: "利用規約 | 床メンテナンス110番",
  description: "床メンテナンス110番の利用規約です。当サイトをご利用いただく前にご確認ください。",
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "利用規約" }]} />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-2">利用規約</h1>
        <p className="text-sm text-[#78716C] mb-8">最終更新日: 2026年4月1日</p>

        <div className="prose prose-stone max-w-none space-y-8">
          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-3 border-l-4 border-[#92400E] pl-3">第1条（適用）</h2>
            <p className="text-sm text-[#57534E] leading-relaxed">
              本利用規約（以下「本規約」）は、床メンテナンス110番（以下「当サイト」）が提供するサービスの利用条件を定めるものです。ユーザーの皆さまは、本規約に同意の上、当サイトをご利用ください。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-3 border-l-4 border-[#92400E] pl-3">第2条（サービスの内容）</h2>
            <p className="text-sm text-[#57534E] leading-relaxed mb-3">
              当サイトは、床メンテナンス業者の情報提供および比較サービスを提供します。以下の点についてご了承ください。
            </p>
            <ul className="space-y-2 text-sm text-[#57534E]">
              <li>掲載情報は参考情報であり、実際のサービス内容・料金は各業者の公式サイトにてご確認ください</li>
              <li>当サイトは一部の業者からPR掲載料をいただいており、掲載順位に影響する場合があります</li>
              <li>サービス内容・料金は予告なく変更される場合があります</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-3 border-l-4 border-[#92400E] pl-3">第3条（禁止事項）</h2>
            <p className="text-sm text-[#57534E] leading-relaxed mb-3">ユーザーは以下の行為を行ってはなりません。</p>
            <ul className="space-y-2 text-sm text-[#57534E]">
              <li>法令または公序良俗に違反する行為</li>
              <li>当サイトのコンテンツを無断で複製・転載・改変する行為</li>
              <li>当サイトのシステムやサーバーに過度な負荷をかける行為</li>
              <li>他のユーザーまたは第三者に不利益、損害、不快感を与える行為</li>
              <li>当サイトの運営を妨害する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-3 border-l-4 border-[#92400E] pl-3">第4条（免責事項）</h2>
            <p className="text-sm text-[#57534E] leading-relaxed">
              当サイトは、当サイトに掲載された情報の正確性・完全性について保証しません。当サイトの利用によって生じた損害について、当サイトは一切の責任を負いません。掲載業者とのトラブルについても、当サイトは関与しません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-3 border-l-4 border-[#92400E] pl-3">第5条（著作権）</h2>
            <p className="text-sm text-[#57534E] leading-relaxed">
              当サイトに掲載されているコンテンツ（テキスト・画像・デザイン等）の著作権は、当サイト運営者または正当な権利者に帰属します。無断での複製・転載・商用利用は禁止です。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-3 border-l-4 border-[#92400E] pl-3">第6条（広告・アフィリエイトについて）</h2>
            <p className="text-sm text-[#57534E] leading-relaxed">
              当サイトでは、第三者配信の広告サービスおよびアフィリエイトプログラムを利用しています。PR表記のあるコンテンツは広告掲載料をいただいているものです。ユーザーが広告リンクを経由して商品・サービスを購入した場合、当サイトは報酬を受け取ることがあります。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-3 border-l-4 border-[#92400E] pl-3">第7条（規約の変更）</h2>
            <p className="text-sm text-[#57534E] leading-relaxed">
              当サイトは、必要に応じて本規約を変更することがあります。変更後の規約は当ページに掲載した時点から効力を生じるものとします。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-3 border-l-4 border-[#92400E] pl-3">第8条（準拠法・管轄裁判所）</h2>
            <p className="text-sm text-[#57534E] leading-relaxed">
              本規約の解釈にあたっては日本法を準拠法とし、当サイトに関して生じた紛争については東京地方裁判所を専属的合意管轄とします。
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
