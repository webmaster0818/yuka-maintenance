import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import services from "@/data/services.json";

export const metadata = {
  title: "床の依頼は「何をしたいか」から決める｜目的と作業名を対応させる",
  alternates: { canonical: "/know/purpose-first/" },
  description:
    "作業名から選ぼうとすると、自分に必要なものかどうかが分かりません。今の見え方を戻したいのか、これから傷むのを抑えたいのか、傷を目立たなくしたいのか、手入れの負担を減らしたいのか。目的を先に言葉にして、作業の説明ページへ対応させる方法を整理しました。",
};

const purposes = [
  {
    key: "A",
    t: "今の見え方を戻したい",
    b: "くすみやざらつきが気になっていて、以前の見え方に近づけたい状態です。今ある表面をどう扱うかが話の中心になります。",
  },
  {
    key: "B",
    t: "これから傷むのを抑えたい",
    b: "今は気になっていないが、この先のことを考えて手を打っておきたい状態です。入居前や、家具を入れる前に多い動機です。",
  },
  {
    key: "C",
    t: "すでにある傷や欠けをどうにかしたい",
    b: "特定の場所に、目に見える損傷がある状態です。全面の作業とは切り分けて考える必要があります。",
  },
  {
    key: "D",
    t: "手入れの負担を減らしたい",
    b: "毎回の掃除が重い、何をすればよいか分からないという状態です。一度の作業より、続け方の相談になります。",
  },
];

const mapping: { purpose: string; look: { href: string; label: string }[]; note: string }[] = [
  {
    purpose: "今の見え方を戻したい",
    look: [
      { href: "/service/wax/", label: "ワックスがけ" },
      { href: "/service/stripping-wash/", label: "剥離洗浄" },
    ],
    note: "今ある層の上から重ねるのか、いったん落とすのかで工程が変わります。どちらになるかは現地で見てもらってから決まります。",
  },
  {
    purpose: "これから傷むのを抑えたい",
    look: [
      { href: "/service/floor-coating/", label: "フロアコーティング" },
      { href: "/service/wax/", label: "ワックスがけ" },
    ],
    note: "床材によっては、塗ること自体が想定されていない場合があります。先に自宅の床が対象になるかを確かめます。",
  },
  {
    purpose: "すでにある傷や欠けをどうにかしたい",
    look: [
      { href: "/service/scratch-repair/", label: "傷補修" },
      { href: "/floor/flooring/", label: "床材別のガイド" },
    ],
    note: "程度によっては、表面の作業では扱えず床材側の工事になります。まず状態を見てもらう段階から始まります。",
  },
  {
    purpose: "手入れの負担を減らしたい",
    look: [
      { href: "/service/regular-maintenance/", label: "定期メンテナンス" },
      { href: "/know/daily-care/", label: "日常の手入れ" },
    ],
    note: "一度の施工で完結する話とは限りません。自分で続けられる範囲と、任せる範囲の線をどこに引くかの相談になります。",
  },
];

const ordering = [
  "四つのうち、当てはまるものをすべて挙げる",
  "そのうち「これができないなら頼まない」というものを一つ選ぶ",
  "残りを、同じ機会にできれば嬉しいものとして分けておく",
  "外せないものが複数あるなら、日を分ける前提も選択肢に入れる",
  "業者には、外せないものと、あれば嬉しいものを分けて伝える",
];

const whatChanges = [
  {
    t: "提案される作業の順番が変わる",
    b: "同じ床でも、目的が違えば先に手を付ける場所が変わります。目的を伝えないと、一般的な順番で組まれることになります。",
  },
  {
    t: "見積もりに含める範囲が変わる",
    b: "全面でそろえるのか、気になる場所だけを扱うのかは目的次第です。範囲が決まると、比較できる形の見積もりになります。",
  },
  {
    t: "できないことを先に言ってもらえる",
    b: "目的がはっきりしていれば、その目的には向かないと早い段階で伝えてもらえます。作業してから気づくより負担が小さくて済みます。",
  },
];

const hardToSay = [
  "使える金額の上限。言いにくくても、範囲を伝えたほうが提案が絞られます",
  "いつまでに終えたいか。逆算して現地調査の日程が決まります",
  "見た目の好み。つやをどうしたいかは、言葉にしないと伝わりません",
  "自分でやれること・やれないこと。物の移動や当日の立会いの可否です",
  "今回はやらないと決めていること。除外する範囲も目的の一部です",
];

const ifUnclear = [
  {
    t: "作業名を指定して問い合わせてしまう",
    b: "指定した作業の見積もりが返ってきます。それが自分の状況に合っているかどうかは、誰も検証していないまま進みます。",
  },
  {
    t: "現地で提案されたものをそのまま受ける",
    b: "その場で比較の材料がないため、判断の根拠が持てません。持ち帰って考える前提にしておくほうが安全です。",
  },
  {
    t: "会社ごとに違う内容の見積もりが並ぶ",
    b: "目的を伝えていないと、各社が違う前提で組み立てます。金額の差が、何の差なのかが読めなくなります。",
  },
];

export default function PurposeFirstPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "床メンテナンスの基礎知識" },
          { label: "目的から作業を選ぶ" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-3">
            床の依頼は「何をしたいか」から決める｜目的と作業名を対応させる
          </h1>
          <p className="text-[#57534E] leading-relaxed">
            作業の名前から探し始めると、その作業が自分に必要かどうかを確かめないまま話が進みます。
            <strong>先に目的を言葉にしてから、対応する作業の説明を読む</strong>
            という順番にすると、見積もりを取る段階で比べる軸がそろいます。
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-900 mb-8">
          <strong>先に前提:</strong>{" "}
          ここでの対応づけは、どの説明ページを先に読むかの目安です。実際にどの作業になるかは、床材・状態・範囲を見てもらったうえで決まります。目的に対する効果を当サイトが保証するものではありません。
        </div>

        {/* H2-1 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            依頼の動機は四つに分けられる
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-4">
            「きれいにしたい」という一言の中身を開くと、たいていは次のどれかに当たります。複数に当てはまっても構いません。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {purposes.map((x) => (
              <div key={x.key} className="flex gap-3 bg-[#FFFBEB] rounded-lg p-4 border border-[#F0ECE8]">
                <span className="w-7 h-7 bg-[#92400E] text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0">
                  {x.key}
                </span>
                <div>
                  <div className="font-bold text-sm text-[#1C1917]">{x.t}</div>
                  <p className="text-sm text-[#57534E] mt-0.5 leading-relaxed">{x.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* H2-2 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            目的から、先に読む説明ページへ進む
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#FFFBEB] border-b border-[#D6D3D1]">
                <tr>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917]">目的</th>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917] whitespace-nowrap">先に読むページ</th>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917]">読むときの注意</th>
                </tr>
              </thead>
              <tbody>
                {mapping.map((m, i) => (
                  <tr key={m.purpose} className={`border-b border-[#F0ECE8] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF9]"}`}>
                    <td className="px-3 py-2 font-medium text-[#1C1917] align-top">{m.purpose}</td>
                    <td className="px-3 py-2 align-top whitespace-nowrap">
                      <span className="flex flex-col gap-1">
                        {m.look.map((l) => (
                          <Link key={l.href} href={l.href} className="text-[#92400E] font-bold underline">
                            {l.label}
                          </Link>
                        ))}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-[#57534E]">{m.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/service/${s.slug}/`}
                className="border border-[#D6D3D1] rounded-lg p-3 hover:border-[#F59E0B] transition-colors"
              >
                <div className="font-bold text-sm text-[#92400E]">{s.name}</div>
                <p className="text-xs text-[#57534E] mt-0.5 leading-relaxed">{s.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* H2-3 */}
        <div className="bg-[#FFFBEB] border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            当てはまるものが複数あるときの並べ方
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-4">
            すべてを一度に満たそうとすると、範囲も金額も広がります。優先順位を自分で決めてから相談に入ります。
          </p>
          <ol className="space-y-3">
            {ordering.map((t, i) => (
              <li key={t} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-[#F0ECE8]">
                <span className="w-6 h-6 bg-[#92400E] text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm text-[#57534E] leading-relaxed">{t}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* H2-4 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            目的を先に伝えると、返ってくる内容が変わる
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {whatChanges.map((x) => (
              <div key={x.t} className="flex gap-3">
                <div className="w-2 h-2 bg-[#92400E] rounded-full mt-2 shrink-0"></div>
                <div>
                  <div className="font-bold text-sm text-[#1C1917]">{x.t}</div>
                  <p className="text-sm text-[#57534E] mt-0.5 leading-relaxed">{x.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* H2-5 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            言いにくい条件ほど、先に出しておく
          </h2>
          <ul className="space-y-2 text-sm text-[#57534E]">
            {hardToSay.map((t) => (
              <li key={t} className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#92400E] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* H2-6 */}
        <div className="bg-[#059669]/5 border border-[#059669]/20 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-bold text-[#059669] mb-3">
            目的が決まらないまま問い合わせると起きること
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {ifUnclear.map((x) => (
              <div key={x.t} className="bg-white rounded-lg p-4 border border-[#059669]/20">
                <div className="font-bold text-sm text-[#059669] mb-1">{x.t}</div>
                <p className="text-sm text-[#374151] leading-relaxed">{x.b}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#4B5563] mt-3">
            床に何か起きていて、その原因から整理したい場合は「
            <Link href="/know/floor-symptoms/" className="text-[#059669] underline">
              床の気になる症状は何が原因か
            </Link>
            」を先に読んでください。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="/cost/price/"
            className="flex-1 bg-[#92400E] text-white font-bold py-3 px-6 rounded-full text-center hover:bg-[#78350F] transition-colors"
          >
            サービス別の料金相場を見る
          </Link>
          <Link
            href="/cost/diy-vs-pro/"
            className="flex-1 border-2 border-[#92400E] text-[#92400E] font-bold py-3 px-6 rounded-full text-center hover:bg-[#FFFBEB] transition-colors"
          >
            DIYとプロ依頼の比較を見る
          </Link>
        </div>

        <div>
          <h2 className="font-bold text-[#1C1917] mb-4">目的を決めたあとに読むページ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/know/wax-or-coating/", label: "ワックスかコーティングか" },
              { href: "/know/quote-routes/", label: "見積もりが出るまでの流れ" },
              { href: "/know/estimate-reading/", label: "見積書の読み方" },
              { href: "/know/review-reading/", label: "口コミの読み方" },
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
