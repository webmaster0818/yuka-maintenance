import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata = {
  title: "ワックスとフロアコーティングのどちらを検討するか｜住まいの前提から絞る",
  alternates: { canonical: "/know/wax-or-coating/" },
  description:
    "ワックスがけとフロアコーティングは、良し悪しではなく住まいの前提で検討対象が変わります。そもそも両方を選べる床なのか、持ち家か賃貸か、手入れにどこまで関われるかという順で絞り込む方法と、見積もりを取る前に決めておく項目を整理しました。",
};

const preconditions = [
  {
    t: "その床で両方が選べるとは限らない",
    b: "床材やその仕上げによって、扱える作業が限られることがあります。比較を始める前に、自宅の床が何であるかを確かめる必要があります。",
  },
  {
    t: "すでに何かが塗られている床かどうか",
    b: "過去に施工されている場合、上から重ねられるのか、いったん落とす工程が入るのかで話が変わります。履歴が分からない床は、その前提で相談します。",
  },
  {
    t: "建物の側に決まりがある場合",
    b: "賃貸や分譲では、床に手を入れる範囲が契約や規約で決まっていることがあります。選ぶ前に、誰の許可が要るのかを確かめておきます。",
  },
];

const byHousing: [string, string, string][] = [
  [
    "分譲・持ち家で長く住む予定がある",
    "どちらも検討対象になる",
    "選択肢が広いぶん、決め手を自分で用意する必要があります。手入れにどこまで関わるつもりかを先に決めると絞りやすくなります。",
  ],
  [
    "賃貸で、退去時の扱いが決まっている",
    "契約の確認が先",
    "手を入れてよい範囲が決まっていることがあります。自分の判断で選ぶ前に、管理側へ確認する順番になります。",
  ],
  [
    "入居前・引き渡し前で床に何も置いていない",
    "検討しやすい条件",
    "床全面が見える状態は限られた期間です。ただし床材メーカー側の条件が付く場合があるため、資料を確認したうえで相談します。",
  ],
  [
    "近いうちに住み替えや売却を考えている",
    "目的を先に決める",
    "見た目を整えるのか、この先も使い続ける前提で考えるのかで、検討する作業が変わります。目的を先に言葉にしておきます。",
  ],
  [
    "床材が何か分からない",
    "確認が先",
    "選ぶ前の段階です。資料を探す、現地で見てもらうといった手順を踏んでから比較に入ります。",
  ],
];

const effort = [
  "自分で拭き掃除の方法を変えられるか、家族全員に共有できるか",
  "施工のために部屋を空ける日を、今後も定期的に確保できるか",
  "床の見え方の変化に自分で気づけるか、気づいたら相談する気があるか",
  "家具の脚や敷物など、床に触れる物の扱いを変えられるか",
  "施工後に守る条件があった場合、それを続けられるか",
];

const costView = [
  {
    t: "今回の金額だけで比べない",
    b: "この先も手を入れ続ける前提の作業と、そうでない作業では、比べている対象が違います。見積もりを取るときは、次に手を入れるとしたら何をするのかもあわせて聞きます。",
  },
  {
    t: "年数の数字は業者ごとの前提付きで聞く",
    b: "どのくらい保つかは、床の状態・使い方・手入れの仕方で変わります。当サイトでは年数の目安を示しません。業者が年数を挙げた場合は、何を前提にした数字なのかを確かめてください。",
  },
  {
    t: "やり直すときの工程を先に聞いておく",
    b: "将来に方針を変えたくなった場合、どういう作業が必要になるのかは選ぶ時点で聞けます。金額ではなく工程として説明してもらいます。",
  },
];

const bothQuotes = [
  "同じ部屋・同じ範囲を前提に、両方の見積もりを出してもらえるかを聞く",
  "片方しかすすめられない場合は、その理由を床の状態に即して説明してもらう",
  "両方の見積書で、含まれる工程が同じ粒度で書かれているかを見る",
  "現地を見てから意見が変わることがある前提で、調査の前後の説明を分けて聞く",
  "その場で決めず、持ち帰って条件を並べてから判断する",
];

const neither = [
  {
    t: "どちらもしないという選択",
    b: "床材によっては、塗らないことが前提の手入れになります。何も塗らずに日常の清掃だけで維持する形も選択肢に入ります。",
  },
  {
    t: "床材に指定された専用の手入れ剤",
    b: "メーカーが手入れの方法を指定している床があります。その場合、一般的な作業名で探すより、指定に沿えるかを業者に確認する形になります。",
  },
  {
    t: "先に傷や欠けへの対応を検討する",
    b: "表面に何かを塗る前に、下地側の対応が必要な状態のことがあります。順番を間違えると、塗ったあとにやり直しになります。",
  },
];

export default function WaxOrCoatingPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "床メンテナンスの基礎知識" },
          { label: "ワックスとコーティングの選び分け" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-3">
            ワックスとフロアコーティングのどちらを検討するか｜住まいの前提から絞る
          </h1>
          <p className="text-[#57534E] leading-relaxed">
            この二つは、性能を並べて優劣を決める形では選びにくいものです。
            <strong>そもそも自宅の床で両方が選べるのか、住まいの条件がどちらを許すのか</strong>
            を先に確かめると、比較する対象が絞れます。このページでは、その絞り込みの順番を扱います。
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-900 mb-8">
          <strong>先に前提:</strong>{" "}
          当サイトは、どちらが優れているかという評価を行いません。耐久年数や乾燥にかかる時間といった数値も、床の状態や施工条件によって変わるため掲載していません。ここで扱うのは、判断に入る前に自分で確かめられる項目です。
        </div>

        {/* H2-1 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            比べる前に、選べる状態かどうかを確かめる
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-4">
            どちらにするかを考え始める前に、判断の土台が整っているかを見ます。ここが抜けたまま比較を進めると、あとで前提から覆ることがあります。
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {preconditions.map((x) => (
              <div key={x.t} className="bg-[#FFFBEB] rounded-lg p-4 border border-[#F0ECE8]">
                <div className="font-bold text-sm text-[#92400E] mb-1">{x.t}</div>
                <p className="text-sm text-[#57534E] leading-relaxed">{x.b}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#78716C] mt-3">
            塗ること自体が想定されていない床材については「
            <Link href="/know/no-wax-floor/" className="text-[#92400E] underline">
              ワックスがけができない・不要な床材の見分け方
            </Link>
            」を先に確認してください。
          </p>
        </div>

        {/* H2-2 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            住まいの条件で検討対象が変わる
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-3">
            同じ床でも、その家にどう関わっているかで選べる範囲が変わります。自分がどの行に近いかを見てから、比較に入ります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#FFFBEB] border-b border-[#D6D3D1]">
                <tr>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917]">住まいの条件</th>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917] whitespace-nowrap">入口の扱い</th>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917]">その理由</th>
                </tr>
              </thead>
              <tbody>
                {byHousing.map(([a, b, c], i) => (
                  <tr key={a} className={`border-b border-[#F0ECE8] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF9]"}`}>
                    <td className="px-3 py-2 font-medium text-[#1C1917] align-top">{a}</td>
                    <td className="px-3 py-2 text-[#92400E] font-bold align-top whitespace-nowrap">{b}</td>
                    <td className="px-3 py-2 text-[#57534E]">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* H2-3 */}
        <div className="bg-[#FFFBEB] border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            施工後に自分がどこまで関われるかで絞る
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-4">
            施工そのものより、そのあとに続く関わり方のほうが選択に効いてきます。次の項目に自分がどう答えるかを書き出しておくと、業者へ希望を伝えやすくなります。
          </p>
          <ul className="space-y-2 text-sm text-[#57534E]">
            {effort.map((t) => (
              <li key={t} className="flex items-start gap-2 bg-white rounded-lg p-3 border border-[#F0ECE8]">
                <span className="text-[#92400E] font-bold shrink-0">□</span>
                <span className="leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* H2-4 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            金額を比べるときにそろえておく前提
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {costView.map((x) => (
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
            掲載各社が公表している最低料金目安は
            <Link href="/cost/price/" className="text-[#92400E] underline">料金相場のページ</Link>
            にまとめています。金額は作業範囲・床材・面積によって変わるため、必ず見積もりで確認してください。
          </p>
        </div>

        {/* H2-5 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            片方に決めきらずに見積もりを頼んでよい
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-4">
            決めてから問い合わせなければならない決まりはありません。迷っていることを伝えたうえで、次のように頼む形が取れます。
          </p>
          <ol className="space-y-3">
            {bothQuotes.map((t, i) => (
              <li key={t} className="flex items-start gap-3 bg-[#FFFBEB] rounded-lg p-3 border border-[#F0ECE8]">
                <span className="w-6 h-6 bg-[#92400E] text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm text-[#57534E] leading-relaxed">{t}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* H2-6 */}
        <div className="bg-[#059669]/5 border border-[#059669]/20 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-bold text-[#059669] mb-3">
            二択の外にある選択肢
          </h2>
          <p className="text-sm text-[#374151] leading-relaxed mb-4">
            どちらかを選ぶ形に見えても、実際には三つ目以降の道があります。比較で行き詰まったときは、こちらに当てはまらないかを見ます。
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {neither.map((x) => (
              <div key={x.t} className="bg-white rounded-lg p-4 border border-[#059669]/20">
                <div className="font-bold text-sm text-[#059669] mb-1">{x.t}</div>
                <p className="text-sm text-[#374151] leading-relaxed">{x.b}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="/service/wax/"
            className="flex-1 bg-[#92400E] text-white font-bold py-3 px-6 rounded-full text-center hover:bg-[#78350F] transition-colors"
          >
            ワックスがけの作業内容を見る
          </Link>
          <Link
            href="/service/floor-coating/"
            className="flex-1 border-2 border-[#92400E] text-[#92400E] font-bold py-3 px-6 rounded-full text-center hover:bg-[#FFFBEB] transition-colors"
          >
            フロアコーティングの作業内容を見る
          </Link>
        </div>

        <div>
          <h2 className="font-bold text-[#1C1917] mb-4">絞り込みの前後に読むページ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/know/wax-types/", label: "ワックスの種類" },
              { href: "/know/coating-types/", label: "コーティングの種類" },
              { href: "/know/purpose-first/", label: "目的から作業を選ぶ" },
              { href: "/know/quote-routes/", label: "見積もりが出るまでの流れ" },
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
