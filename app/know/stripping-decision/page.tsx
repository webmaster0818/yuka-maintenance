import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata = {
  title: "剥離洗浄をすすめられたときの判断とリスクの確認",
  alternates: { canonical: "/know/stripping-decision/" },
  description:
    "床の剥離洗浄を提案されたとき、本当に必要かをどう見るか。提案されやすい状況、避けたほうがよい床、作業にともなうリスク、重ね塗り・張り替えとの比べ方、見積もりで分けてもらう項目を整理しました。",
};

const situations = [
  {
    t: "重ね塗りを繰り返して層が厚くなっている",
    b: "上から塗り足すだけの手入れを続けると、膜が積み重なります。厚くなった層は色味やムラが出やすく、上に塗っても改善しにくいと説明されることがあります。",
  },
  {
    t: "膜がめくれている・部分的になくなっている",
    b: "残っている部分と失われた部分が混在した状態では、上から塗っても段差が残ります。いったん全体をそろえる目的で提案されます。",
  },
  {
    t: "過去に何を塗ったか分からない",
    b: "既存の膜と相性の分からない製品を重ねると、密着不良が起きる可能性があります。相性の判断がつかない場合の対処として挙げられます。",
  },
  {
    t: "コーティングなど別の施工に切り替えたい",
    b: "ワックス以外の施工に変える場合、下地をそろえる工程として案内されることがあります。切り替えが目的なら、その工程が見積もりに含まれているかを確認します。",
  },
];

const cautionFloors = [
  ["メーカーがワックス施工を想定していない床材", "そもそも膜が載っていない前提の床では、剥離作業自体が不要であるか、表面を傷める恐れがあります。"],
  ["無垢材のオイル仕上げなど、染み込ませる仕上げの床", "膜を取る作業が仕上げそのものに影響する可能性があります。施工前に仕上げの種類を確認します。"],
  ["水分が入りやすい継ぎ目のある床", "剥離では水分を使います。継ぎ目やめくれから下へ入り込む懸念がある場合、方法の変更や見送りが検討されます。"],
  ["すでに床材自体が傷んでいる床", "膜ではなく床材側の劣化が進んでいる場合、取り除いても見た目が戻らないことがあります。補修や張り替えとの比較が必要です。"],
  ["賃貸で施工の可否が確認できていない床", "作業後に元へ戻せない変化が出る可能性があるため、貸主・管理会社の了解を先に得ます。"],
];

const risks = [
  {
    t: "床材の表面に影響が出る可能性",
    b: "薬剤と機械を使う作業のため、床材の状態によっては表面に変化が出ることがあります。心配な場合は、目立たない場所で試してもらえるかを相談します。",
  },
  {
    t: "水分が入り込む箇所がある",
    b: "継ぎ目、壁際、めくれのある部分などは水分が入りやすい場所です。どのように養生するかを事前に聞いておきます。",
  },
  {
    t: "作業中は部屋に入れない",
    b: "薬剤の使用中と回収中は立ち入りが制限されます。どの部屋がいつ使えなくなるのかを当日までに確認します。",
  },
  {
    t: "取り切れない箇所が残ることがある",
    b: "家具の下や隅など、機械が入りにくい場所の仕上がりは中央部と差が出ることがあります。どこまでを作業範囲とするかを明確にします。",
  },
];

const compare: [string, string, string][] = [
  [
    "既存の膜を取り除く（剥離洗浄）",
    "膜の状態をいったんそろえたいとき",
    "作業の負担と費用が増えます。床材の状態によっては実施の可否を検討する必要があります。",
  ],
  [
    "上から塗り重ねる",
    "膜が残っていて、つやの低下が中心のとき",
    "層が厚くなるため、繰り返すほど後の作業が大きくなる可能性があります。",
  ],
  [
    "部分的に補修する",
    "傷やへこみなど、気になる箇所が限られているとき",
    "全体の見た目はそろいません。周囲との差が出る可能性を確認します。",
  ],
  [
    "床材を張り替える",
    "床材自体の傷みが進んでいるとき",
    "費用と工期は最も大きくなります。賃貸では貸主の判断が必要です。",
  ],
];

export default function StrippingDecisionPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "床メンテナンスの基礎知識" },
          { label: "剥離洗浄の判断" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-3">
            剥離洗浄をすすめられたときの判断とリスクの確認
          </h1>
          <p className="text-[#57534E] leading-relaxed">
            ワックスがけを依頼したら「まず剥離が必要です」と言われた、という相談は珍しくありません。
            提案自体は状態にもとづいた妥当なものであることが多い一方、床材や状況によっては別の選択肢を検討したほうがよい場合もあります。
            このページでは、提案を受けたときに何を確認すればよいかを整理します。
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-900 mb-8">
          <strong>先に前提:</strong>{" "}
          必要かどうかは床の現物を見て判断する事柄です。当ページは確認すべき観点を示すもので、実施の可否を遠隔で判定するものではありません。作業にかかる時間や乾燥の目安は、床材・工法・状況によって変わるため記載していません。
        </div>

        {/* H2-1 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            剥離洗浄が提案される典型的な状況
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {situations.map((x) => (
              <div key={x.t} className="flex gap-3">
                <div className="w-2 h-2 bg-[#92400E] rounded-full mt-2 shrink-0"></div>
                <div>
                  <div className="font-bold text-sm text-[#1C1917]">{x.t}</div>
                  <p className="text-sm text-[#57534E] mt-0.5 leading-relaxed">{x.b}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#78716C] mt-3">
            提案を受けたら「なぜ必要なのか」を床の状態に結びつけて説明してもらいます。どこを見てそう判断したのかを聞くと、根拠が具体的かどうかが分かります。
          </p>
        </div>

        {/* H2-2 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            剥離を避けたほうがよい床・できない床がある
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#FFFBEB] border-b border-[#D6D3D1]">
                <tr>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917]">状況</th>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917]">確認したいこと</th>
                </tr>
              </thead>
              <tbody>
                {cautionFloors.map(([a, b], i) => (
                  <tr key={a} className={`border-b border-[#F0ECE8] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF9]"}`}>
                    <td className="px-3 py-2 font-medium text-[#1C1917] align-top">{a}</td>
                    <td className="px-3 py-2 text-[#57534E]">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#78716C] mt-3">
            自宅の床が該当するか分からない場合は「
            <Link href="/know/no-wax-floor/" className="text-[#92400E] underline">
              ワックスがけができない・不要な床材の見分け方
            </Link>
            」の確認手順から先に進めてください。
          </p>
        </div>

        {/* H2-3 */}
        <div className="bg-[#FFFBEB] border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            剥離作業にともなうリスクと、事前に取り決める点
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {risks.map((x) => (
              <div key={x.t} className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#92400E] mt-1 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="font-bold text-sm text-[#1C1917]">{x.t}</div>
                  <p className="text-sm text-[#57534E] mt-0.5 leading-relaxed">{x.b}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#78716C] mt-3">
            作業後に想定と違う状態になったときの連絡手順は「
            <Link href="/know/after-work-trouble/" className="text-[#92400E] underline">
              床メンテナンス施工後に起こりうる症状と、依頼前の取り決め
            </Link>
            」にまとめています。
          </p>
        </div>

        {/* H2-4 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            剥離・重ね塗り・張り替えを比べるときの観点
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#FFFBEB] border-b border-[#D6D3D1]">
                <tr>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917]">選択肢</th>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917]">検討される場面</th>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917]">確認しておく点</th>
                </tr>
              </thead>
              <tbody>
                {compare.map(([a, b, c], i) => (
                  <tr key={a} className={`border-b border-[#F0ECE8] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF9]"}`}>
                    <td className="px-3 py-2 font-medium text-[#1C1917] align-top">{a}</td>
                    <td className="px-3 py-2 text-[#57534E] align-top">{b}</td>
                    <td className="px-3 py-2 text-[#57534E]">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#78716C] mt-3">
            どれが適しているかは床の状態と目的で変わります。金額だけで比べず、作業後に何がどう変わるのかを説明してもらったうえで選んでください。
          </p>
        </div>

        {/* H2-5 */}
        <div className="bg-[#059669]/5 border border-[#059669]/20 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-bold text-[#059669] mb-3">
            見積もりで内訳を分けてもらう項目
          </h2>
          <p className="text-sm text-[#374151] leading-relaxed mb-3">
            剥離を含む依頼では、いくつもの工程が一式でまとめられることがあります。次の単位で分けてもらうと、他社と比較でき、後から工程を減らす相談もしやすくなります。
          </p>
          <ul className="space-y-2 text-sm text-[#374151]">
            {[
              "既存の膜を取り除く作業と、その後に塗る作業を別の行に分ける",
              "家具の移動・養生が作業費に含まれるかを明記してもらう",
              "汚水や使用済み資材の処分費が含まれるかを確認する",
              "対象とする部屋名と、範囲から外す場所を書面に残す",
              "取り切れない箇所が出た場合の扱いを、着手前に取り決める",
              "複数日になる場合、日ごとにどこまで進むのかを示してもらう",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#059669] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="/service/stripping-wash/"
            className="flex-1 bg-[#92400E] text-white font-bold py-3 px-6 rounded-full text-center hover:bg-[#78350F] transition-colors"
          >
            剥離洗浄を依頼できる業者を見る
          </Link>
          <Link
            href="/cost/price/"
            className="flex-1 border-2 border-[#92400E] text-[#92400E] font-bold py-3 px-6 rounded-full text-center hover:bg-[#FFFBEB] transition-colors"
          >
            サービス別の料金相場を見る
          </Link>
        </div>

        <div>
          <h2 className="font-bold text-[#1C1917] mb-4">剥離を検討する前後に読むページ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/know/recoat-timing/", label: "塗り替えのサイン" },
              { href: "/know/wax-types/", label: "ワックスの種類" },
              { href: "/know/coating-types/", label: "コーティングの種類" },
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
