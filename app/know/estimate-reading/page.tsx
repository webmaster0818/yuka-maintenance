import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata = {
  title: "床メンテナンスの見積書の読み方｜「一式」表記と単位の確かめ方",
  alternates: { canonical: "/know/estimate-reading/" },
  description:
    "床のワックスがけやコーティングの見積書を、どの欄から読み、どこで行き違いが起きるのかを整理しました。一式表記の扱い、数量と単位の違い、値引き行の読み方、備考欄の但し書き、複数社の見積書を同じ表に並べ替える方法を解説します。",
};

const firstLook: [string, string][] = [
  [
    "宛名と発行元",
    "自分の氏名と、発行した会社の名称・所在地・連絡先が入っているかを見ます。発行元が問い合わせた窓口と違う名称になっている場合は、どちらが作業を行うのかを確認する材料になります。",
  ],
  [
    "作業の対象と場所",
    "どの建物のどの部屋を対象にした金額なのかが書かれているかを見ます。部屋名が入っていないものは、あとから範囲の解釈が分かれる原因になります。",
  ],
  [
    "作成日と有効期限",
    "いつ時点の金額なのかが分かります。複数社を比べるときは、同じ時期に出してもらったものかを確認してください。",
  ],
  [
    "合計額に何が含まれているか",
    "税の扱い、作業以外の名目の有無を見ます。合計だけを見て比べると、含まれている範囲の違いを見落とします。",
  ],
];

const lumpSum = [
  {
    t: "何の作業が入っているか分からない",
    b: "洗浄だけなのか、仕上げの塗布まで入るのかが読み取れません。工程の名前を並べて書いてもらうと、他社と比較できる形になります。",
  },
  {
    t: "増減の計算ができない",
    b: "部屋を一つ減らしたい、階段を追加したいといった相談をしたときに、いくら動くのかが分かりません。分けて書いてもらう理由はここにあります。",
  },
  {
    t: "当日の追加との境目があいまいになる",
    b: "一式の中に入っている作業なのか、追加なのかで判断が分かれます。含まれるものと含まれないものを、書面のどこかに明記してもらいます。",
  },
  {
    t: "内訳を出せない事情がある場合もある",
    b: "現地を見ないと決められない、という理由で一式になっていることもあります。その場合は、現地調査のあとに内訳つきで出し直してもらえるかを聞きます。",
  },
];

const unitRows: [string, string][] = [
  [
    "面積で計上している",
    "作業する広さを単位にした書き方です。どの部分を面積に数えているか（家具の下、収納の中など）を確認しないと、同じ広さでも数量が変わります。",
  ],
  [
    "部屋・箇所で計上している",
    "一部屋いくら、階段一か所いくら、という書き方です。部屋の広さが違っても同じ金額になるため、対象の部屋名が書かれているかが重要になります。",
  ],
  [
    "作業時間や人工で計上している",
    "作業にあたる人数と時間をもとにした書き方です。想定を超えたときの扱いが決まっているかを確認します。",
  ],
  [
    "一部だけ単位が違う",
    "本体は面積、階段だけ箇所というように混在することがあります。混在自体は問題ありませんが、比較するときは同じ区分ごとに見る必要があります。",
  ],
];

const discountNotes = [
  "値引き行がある場合、何に対する値引きなのかが書かれているかを見る",
  "「サービス」と書かれた行は、無償なのか元の金額に含まれているのかを確認する",
  "期間や即決を条件にした値引きは、条件そのものを書面に残してもらう",
  "値引き後の金額が、他社の同じ作業範囲と比べられる形になっているかを確かめる",
  "値引きの代わりに作業範囲が狭まっていないかを、内訳の行数で照らし合わせる",
];

const remarksChecks = [
  {
    t: "現地調査後に金額が変わる条件",
    b: "「現地確認のうえ再見積もり」と書かれている場合、どういう状況で変わるのかを聞いておきます。変わる可能性があること自体は珍しくありません。",
  },
  {
    t: "含まれないものの列挙",
    b: "家具の移動、廃材の処分、駐車にかかるものなどが「別途」として小さく書かれていることがあります。別途の項目は必ず読みます。",
  },
  {
    t: "作業ができない場合の扱い",
    b: "床材の状態によって作業を行わない判断になったとき、出張分の扱いがどうなるかが書かれていることがあります。",
  },
  {
    t: "手直しの申し出に関する記載",
    b: "仕上がりについて申し出ができる期間や方法が備考にあることがあります。見積もりの段階で読んでおくと、あとから探さずに済みます。",
  },
];

const compareSteps = [
  "各社の見積書から、作業の行だけを書き写して縦に並べる",
  "同じ作業を指していると思われる行を、名称が違っても横に並べる",
  "どちらか一方にしかない行に印をつけ、それが不要なのか漏れなのかを聞く",
  "別途と書かれた項目を、金額が分かるものと分からないものに分ける",
  "分からないものが残っている状態では総額を比べない、と決めておく",
];

export default function EstimateReadingPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "床メンテナンスの基礎知識" },
          { label: "見積書の読み方" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-3">
            床メンテナンスの見積書の読み方｜「一式」表記と単位の確かめ方
          </h1>
          <p className="text-[#57534E] leading-relaxed">
            見積書を受け取ると、つい合計の欄から見てしまいます。ただし床の作業は、
            <strong>同じ金額でも含まれている工程と範囲が会社ごとに違う</strong>ため、合計だけでは比べられません。
            このページでは、どの欄から読むのか、どこで行き違いが起きやすいのか、そして複数社のものを並べ替えて比べる手順を整理します。
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-900 mb-8">
          <strong>先に前提:</strong>{" "}
          見積書の様式は会社ごとに異なり、ここで挙げる欄がすべて存在するとは限りません。金額そのものは作業範囲・床材の状態・面積によって変わるため、当ページでは具体的な金額を示していません。各社の料金の考え方は
          <Link href="/cost/price/" className="underline font-bold">サービス別の料金相場</Link>
          のページと、実際に受け取る見積もりでご確認ください。
        </div>

        {/* H2-1 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            見積書はどの欄から読み始めるか
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-3">
            合計欄より先に見ておくと、あとの確認が楽になる欄があります。順番としては次のとおりです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#FFFBEB] border-b border-[#D6D3D1]">
                <tr>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917] whitespace-nowrap">見る欄</th>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917]">何を確かめるか</th>
                </tr>
              </thead>
              <tbody>
                {firstLook.map(([a, b], i) => (
                  <tr key={a} className={`border-b border-[#F0ECE8] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF9]"}`}>
                    <td className="px-3 py-2 font-medium text-[#1C1917] align-top whitespace-nowrap">{a}</td>
                    <td className="px-3 py-2 text-[#57534E]">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#78716C] mt-3">
            発行元と作業を行う会社が違う形もあります。窓口と担当の関係の確かめ方は「
            <Link href="/know/after-work-trouble/" className="text-[#92400E] underline">
              施工後に起こりうる症状と、依頼前の取り決め
            </Link>
            」でも扱っています。
          </p>
        </div>

        {/* H2-2 */}
        <div className="bg-[#FFFBEB] border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            「一式」とだけ書かれた行をどう扱うか
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-4">
            一式という表記そのものが問題なのではなく、比較と相談の材料にならないことが困る点です。次の四つの不都合が起こりえます。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {lumpSum.map((x) => (
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
            依頼するときの言い方としては「作業の工程ごとに行を分けた見積書を出していただけますか」と伝えると、意図が伝わりやすくなります。
          </p>
        </div>

        {/* H2-3 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            数量と単位の書き方で比較がずれる
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-3">
            同じ作業でも、何を単位にして数えるかが会社によって違います。単位が違うこと自体は問題ありませんが、単位をそろえずに合計だけを並べると比較になりません。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#FFFBEB] border-b border-[#D6D3D1]">
                <tr>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917] whitespace-nowrap">計上のしかた</th>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917]">確認するポイント</th>
                </tr>
              </thead>
              <tbody>
                {unitRows.map(([a, b], i) => (
                  <tr key={a} className={`border-b border-[#F0ECE8] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF9]"}`}>
                    <td className="px-3 py-2 font-medium text-[#1C1917] align-top whitespace-nowrap">{a}</td>
                    <td className="px-3 py-2 text-[#57534E]">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* H2-4 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            値引き・サービスと書かれた行の読み方
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-3">
            金額を下げる方向の行は歓迎したくなりますが、何に対するものかが分からないまま受け取ると、比較の軸が崩れます。
          </p>
          <ul className="space-y-2 text-sm text-[#57534E]">
            {discountNotes.map((t) => (
              <li key={t} className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#92400E] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* H2-5 */}
        <div className="bg-[#FFFBEB] border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            備考欄と但し書きに条件が隠れていないか
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-4">
            金額の欄より下に、小さな文字で条件が書かれていることがあります。あとで争点になりやすいのは、だいたいこの部分です。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {remarksChecks.map((x) => (
              <div key={x.t} className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#92400E] mt-1 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="font-bold text-sm text-[#1C1917]">{x.t}</div>
                  <p className="text-sm text-[#57534E] mt-0.5 leading-relaxed">{x.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* H2-6 */}
        <div className="bg-[#059669]/5 border border-[#059669]/20 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-bold text-[#059669] mb-3">
            複数社の見積書を同じ表に並べ替える手順
          </h2>
          <p className="text-sm text-[#374151] leading-relaxed mb-3">
            様式の違う見積書は、そのままでは比べられません。手を動かして並べ替えると、質問すべき点が自然に浮かび上がります。
          </p>
          <ol className="space-y-3">
            {compareSteps.map((t, i) => (
              <li key={t} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-[#059669]/15">
                <span className="w-6 h-6 bg-[#059669] text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm text-[#374151] leading-relaxed">{t}</span>
              </li>
            ))}
          </ol>
          <p className="text-xs text-[#4B5563] mt-3">
            並べ替えた表は、そのまま各社への質問リストになります。分からない行を残したまま契約せず、回答を受け取ってから判断してください。
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
            href="/area/kyoto/"
            className="flex-1 border-2 border-[#92400E] text-[#92400E] font-bold py-3 px-6 rounded-full text-center hover:bg-[#FFFBEB] transition-colors"
          >
            相見積もりの進め方を見る
          </Link>
        </div>

        <div>
          <h2 className="font-bold text-[#1C1917] mb-4">見積書を受け取ったあとに読むページ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/know/stripping-decision/", label: "剥離が必要かの判断" },
              { href: "/know/floor-symptoms/", label: "症状から原因を切り分ける" },
              { href: "/cost/diy-vs-pro/", label: "DIYとプロの比較" },
              { href: "/area/nagano/", label: "契約書面と支払い条件" },
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
