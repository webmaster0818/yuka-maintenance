import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata = {
  title: "ワックスがけができない・不要な床材の見分け方",
  alternates: { canonical: "/know/no-wax-floor/" },
  description:
    "ワックスを塗ってはいけない床材・塗らなくてよい床材があります。ノンワックス仕様のフローリングや無垢材・オイル仕上げの見分け方と、確認する相手・聞き方、ワックス以外の選択肢を解説します。",
};

const checkSteps = [
  {
    title: "取扱説明書・仕様書を探す",
    body: "新築・リフォーム時に受け取った住宅の取扱説明書や仕様書に、床材の品番とお手入れ方法が記載されていることがあります。まずここを確認するのが最も確実です。",
  },
  {
    title: "床材の品番からメーカー情報を調べる",
    body: "品番が分かれば、メーカーの製品ページやお手入れガイドでワックスの可否が確認できる場合があります。同じ「フローリング」でも製品ごとに指定が異なります。",
  },
  {
    title: "施工会社・管理会社に問い合わせる",
    body: "書類が見つからない場合は、建てた会社・リフォーム会社、賃貸なら管理会社に品番を照会します。賃貸では勝手な施工が契約上の問題になることもあるため、この確認は兼ねて行う価値があります。",
  },
  {
    title: "目視や簡易テストは「目安」にとどめる",
    body: "表面の質感や水のはじき方から推測する方法が紹介されることがありますが、これだけで断定はできません。判断材料の一つとして扱い、最終確認はメーカーや施工会社の情報で行ってください。",
  },
];

const alternatives = [
  {
    title: "日常清掃の見直し",
    body: "乾いたモップやフロアワイパーでほこりを取り除く回数を増やすだけでも、砂ぼこりによる細かな擦り傷を減らすことにつながります。",
  },
  {
    title: "床材に指定された専用メンテナンス剤",
    body: "ノンワックス仕様や無垢材向けに、メーカーが専用のクリーナーやオイルを指定していることがあります。指定品があるならそれに従うのが無難です。",
  },
  {
    title: "フロアコーティング（可否の確認が前提）",
    body: "ワックスより長期の保護を目的とした施工ですが、床材によっては施工できない・保証の対象外になる場合があります。床材の品番を伝えたうえで可否を確認してください。",
  },
  {
    title: "部分的な保護と傷補修",
    body: "家具の脚にフェルトを付ける、動線にラグを敷くなど部分的な対策もあります。すでに付いてしまった傷は、傷補修のサービスで相談できます。",
  },
];

export default function NoWaxFloorPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "床メンテナンスの基礎知識" },
          { label: "ワックスができない床材" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-3">
            ワックスがけができない・不要な床材の見分け方
          </h1>
          <p className="text-[#57534E] leading-relaxed">
            床のワックスがけは多くの床材で行える基本的なメンテナンスですが、
            <strong>すべての床に塗ってよいわけではありません</strong>。
            メーカーがワックスを推奨していない製品もあり、知らずに施工すると見た目や保証に影響することがあります。
            このページでは、塗る前に確認したい床材のタイプと、自宅の床がどれに当たるかを調べる手順を整理します。
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-900 mb-8">
          <strong>先に結論:</strong>{" "}
          床材の可否はメーカーと製品ごとに異なります。ここで挙げる内容は一般的な傾向であり、最終的な判断は床材の取扱説明書、メーカーの案内、施工会社への確認によって行ってください。
        </div>

        {/* H2-1 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            「ワックス不要」とされる床材がある
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-3">
            住宅用のフローリングには、表面にあらかじめ硬い保護層を設けた「ノンワックス」「ワックス不要」などと案内される製品があります。
            こうした製品では、メーカーがワックスの塗布を推奨していない場合があります。理由として案内されることが多いのは次のような点です。
          </p>
          <ul className="space-y-2 text-sm text-[#57534E]">
            {[
              "表面の加工がすでに保護の役割を担っており、ワックスを重ねる前提で作られていない",
              "ワックスがうまく定着せず、部分的にはがれてムラになる可能性がある",
              "ワックスを塗ったことでメーカーの保証や推奨のお手入れ方法から外れる場合がある",
              "後からワックスを取り除こうとすると、剥離作業で表面を傷める恐れがある",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#92400E] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
          <p className="text-xs text-[#78716C] mt-3">
            なお「ワックス不要」は「何もしなくてよい」という意味ではなく、ほこりや水分を放置してよいわけではありません。日常の清掃方法は製品ごとの案内に従ってください。
          </p>
        </div>

        {/* H2-2 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            無垢材・オイル仕上げでワックスを避ける理由
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-3">
            無垢材のフローリングは、表面をどう仕上げているかでお手入れの方法が変わります。とくにオイルやワックス系の自然塗料で仕上げた床は、
            塗料を木に染み込ませて木の質感を残す考え方で作られています。ここに膜をつくるタイプの床用ワックスを塗ると、次のような影響が出ることがあります。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                t: "仕上げの風合いが変わる",
                b: "つや消しに仕上げてある床に光沢のある膜ができ、想定していた見た目と変わってしまうことがあります。",
              },
              {
                t: "後からの再塗装がしにくくなる",
                b: "オイル仕上げは部分的な塗り直しで手入れできる点が利点ですが、上に別の膜があると染み込みが妨げられる場合があります。",
              },
              {
                t: "木の調湿や質感を活かしにくい",
                b: "表面を覆うことで、無垢材を選んだ理由である足ざわりや質感が損なわれると感じる人もいます。",
              },
              {
                t: "指定外の薬剤で変色する恐れ",
                b: "仕上げ材と合わない薬剤を使うと、色ムラやしみの原因になることがあります。使用前に相性を確認してください。",
              },
            ].map((x) => (
              <div key={x.t} className="flex gap-3">
                <div className="w-2 h-2 bg-[#92400E] rounded-full mt-2 shrink-0"></div>
                <div>
                  <div className="font-bold text-sm text-[#1C1917]">{x.t}</div>
                  <p className="text-sm text-[#57534E] mt-0.5">{x.b}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#78716C] mt-3">
            同じ無垢材でもウレタン塗装など膜をつくる仕上げの場合は考え方が変わります。「無垢材だから一律に不可」ではなく、仕上げの種類で判断します。
          </p>
        </div>

        {/* H2-3 */}
        <div className="bg-[#FFFBEB] border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-4">
            自宅の床がどのタイプか確かめる手順
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {checkSteps.map((s, i) => (
              <div key={s.title} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-[#F0ECE8]">
                <span className="w-6 h-6 bg-[#92400E] text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <div>
                  <div className="font-bold text-sm text-[#1C1917]">{s.title}</div>
                  <p className="text-sm text-[#57534E] mt-0.5 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* H2-4 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            判断できないときに聞く相手と聞き方
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-3">
            品番が分からない、書類が残っていないというケースは珍しくありません。その場合は、次の相手に次の内容を伝えると話が早く進みます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#FFFBEB] border-b border-[#D6D3D1]">
                <tr>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917] whitespace-nowrap">聞く相手</th>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917]">伝えるとよい内容</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["施工会社・ハウスメーカー", "建築年・住所または物件名。床材の品番を照会してもらえる場合があります。"],
                  ["管理会社・大家（賃貸の場合）", "床の施工をしてよいか、費用負担と原状回復の扱いをあわせて確認します。"],
                  ["床材メーカーの問い合わせ窓口", "品番が分かる場合は品番、分からない場合は床の写真。推奨のお手入れ方法を確認します。"],
                  ["床メンテナンス業者", "床材の種類・仕上げ・面積・現在の状態。判断がつかない場合は現地調査を依頼します。"],
                ].map(([a, b], i) => (
                  <tr key={a} className={`border-b border-[#F0ECE8] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF9]"}`}>
                    <td className="px-3 py-2 font-medium text-[#1C1917] align-top whitespace-nowrap">{a}</td>
                    <td className="px-3 py-2 text-[#57534E]">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#78716C] mt-3">
            業者に相談する際は「ワックスをかけてほしい」ではなく「この床にワックスをかけてよいかを含めて見てほしい」と伝えると、床材に合わない施工を避けやすくなります。
          </p>
        </div>

        {/* H2-5 */}
        <div className="bg-[#059669]/5 border border-[#059669]/20 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-bold text-[#059669] mb-4">
            ワックスを使わない場合に検討できる選択肢
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {alternatives.map((a) => (
              <div key={a.title} className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#059669] mt-1 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="font-bold text-sm text-[#1C1917]">{a.title}</div>
                  <p className="text-sm text-[#374151] mt-0.5 leading-relaxed">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="/service/wax/"
            className="flex-1 bg-[#92400E] text-white font-bold py-3 px-6 rounded-full text-center hover:bg-[#78350F] transition-colors"
          >
            ワックスがけの内容を見る
          </Link>
          <Link
            href="/floor/flooring/"
            className="flex-1 border-2 border-[#92400E] text-[#92400E] font-bold py-3 px-6 rounded-full text-center hover:bg-[#FFFBEB] transition-colors"
          >
            フローリングのガイドを見る
          </Link>
        </div>

        <div>
          <h2 className="font-bold text-[#1C1917] mb-4">あわせて読みたい</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/know/after-work-trouble/", label: "施工後のトラブル対策" },
              { href: "/cost/price/", label: "料金相場" },
              { href: "/service/floor-coating/", label: "フロアコーティング" },
              { href: "/service/scratch-repair/", label: "傷補修" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="border border-[#D6D3D1] rounded-lg p-3 text-center hover:border-[#F59E0B] transition-colors text-sm font-medium text-[#1C1917] hover:text-[#92400E]"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
