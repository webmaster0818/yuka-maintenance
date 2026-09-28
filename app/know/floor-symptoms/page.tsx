import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata = {
  title: "床の気になる症状は何が原因か｜膜・床材・生活の切り分け方",
  alternates: { canonical: "/know/floor-symptoms/" },
  description:
    "床のくもり・べたつき・線状の跡・きしみなどが、仕上げの膜の問題なのか、床材や下地の問題なのか、掃除や生活の仕方で説明がつくのかを切り分ける手順。症状ごとの相談先と、現地で見てもらうべき場合の目安を整理しました。",
};

const filmSide = [
  {
    t: "床全体が同じように白っぽい",
    b: "部屋の一部ではなく全体が均一に変わっている場合、表面に乗っている層側の話である可能性があります。床材そのものが一斉に変わることは考えにくいためです。",
  },
  {
    t: "歩く場所だけ見え方が違う",
    b: "動線や椅子の下だけが変わっているなら、その場所の層が先に減っていると考えられます。部屋の隅と比べると差が分かりやすくなります。",
  },
  {
    t: "拭いても戻らないが、触ると表面にざらつきがある",
    b: "汚れが乗っているのではなく、表面の状態が変わっているときの感触です。強くこすらず、そのまま相談に回すほうが無難です。",
  },
  {
    t: "境目がはっきりした形で色が違う",
    b: "ラグを敷いていた形、家具の脚の形など、置いてあったものの輪郭と一致するなら、その部分だけ条件が違っていたことになります。",
  },
];

const materialSide = [
  {
    t: "踏むと沈む・音が鳴る",
    b: "表面の層ではなく、床材や下の構造に関わる話になります。清掃や塗り直しの範囲では扱えないため、相談先が変わる可能性があります。",
  },
  {
    t: "板の継ぎ目が開いている・浮いている",
    b: "接合部そのものの動きです。上から何かを塗って解決する種類のものではないため、まず状態を見てもらう必要があります。",
  },
  {
    t: "削れて下の層が見えている",
    b: "表面の化粧の層まで達している場合、清掃や塗布とは別の対応になります。傷の程度によって選べる手段が変わります。",
  },
  {
    t: "水がかかる場所で変色や膨らみがある",
    b: "水分が入り込んだ可能性があります。原因を止めないまま表面だけ手を入れても、同じことが起こりえます。",
  },
];

const habitSide = [
  {
    t: "べたつきが残る",
    b: "洗剤を使ったあとのすすぎ残しや、洗剤の濃さが合っていないことで起こる場合があります。まずは水拭きで変わるかを目立たない場所で試します。",
  },
  {
    t: "拭いた跡が筋になって残る",
    b: "布の汚れ、水分量、拭く順番などで起こります。道具を替えて同じ場所を拭くと、切り分けができます。",
  },
  {
    t: "細かい線状の傷が増えてきた",
    b: "砂やほこりを巻き込んだまま掃除している場合に起こりえます。乾いた状態で先に取り除く手順に変えると、増え方が変わるかを確認できます。",
  },
  {
    t: "部屋の一部だけくすんで見える",
    b: "日差しの当たり方や照明の向きで見え方が変わることがあります。時間帯を変えて見比べると、状態の差なのか光の差なのかが分かります。",
  },
];

const routing: [string, string, string][] = [
  [
    "表面の見え方が全体的に変わった",
    "仕上げの層",
    "清掃と塗り直しを扱う会社。塗り重ねでよいか、いったん落とす必要があるかを見てもらう",
  ],
  [
    "動線や椅子の下だけ変わった",
    "仕上げの層",
    "同じく塗り直しの相談。部分だけ行うか全面でそろえるかを含めて確認する",
  ],
  [
    "べたつき・拭き跡が残る",
    "手入れの方法",
    "まず道具と洗剤を替えて試す。変わらなければ施工した会社へ相談する",
  ],
  [
    "細かい傷が増えている",
    "手入れと生活の条件",
    "掃除の手順と家具の脚の扱いを見直したうえで、必要なら傷の相談に進む",
  ],
  [
    "削れて下の層が見えている",
    "床材",
    "傷の補修を扱う会社。程度によっては床材側の工事の検討になる",
  ],
  [
    "沈む・鳴る・継ぎ目が開く",
    "床材・下地",
    "清掃や塗布では扱えない領域。建物や内装の工事を扱う相談先を検討する",
  ],
  [
    "水がかかる場所で変色・膨らみ",
    "水の経路",
    "水の出どころを先に確認する。床の表面だけの対応では再発しうる",
  ],
];

const beforeAsking = [
  "同じ部屋の中で、症状が出ている場所と出ていない場所を見つける",
  "目立たない場所で、乾いた拭き取りだけを試して変わるかを見る",
  "変わらなければ、水だけで拭いて変わるかを見る（水を使ってよい床の場合）",
  "それでも変わらない場合は、そこで手を止めて写真を撮る",
  "いつごろから気づいたか、直前に何をしたかをメモに添える",
  "強い洗剤や研磨材を使う前に相談する。試したことは正直に伝える",
];

const seeInPerson = [
  "症状が広がっているのか、止まっているのかが自分では判断できないとき",
  "水に関わる症状で、出どころに心当たりがないとき",
  "賃貸や分譲で、自分の判断で手を入れてよいかが決まっていないとき",
  "施工から日が浅く、手直しの相談になるかもしれないとき",
  "床材が何であるかを示す資料が手元にないとき",
];

export default function FloorSymptomsPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "床メンテナンスの基礎知識" },
          { label: "症状から原因を切り分ける" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-3">
            床の気になる症状は何が原因か｜膜・床材・生活の切り分け方
          </h1>
          <p className="text-[#57534E] leading-relaxed">
            床に何か起きていると感じたとき、いきなり業者を探すよりも先に、
            <strong>それが表面の仕上げの話なのか、床材そのものの話なのか、手入れの仕方の話なのか</strong>
            を切り分けておくと、相談先を間違えずに済みます。このページでは、その分け方と、相談に進むまでの順番を整理します。
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-900 mb-8">
          <strong>先に前提:</strong>{" "}
          同じ見え方でも原因は一つとは限らず、ここでの分け方は可能性を整理するためのものです。断定はできません。とくに水や構造に関わる症状は、早めに現地で見てもらう判断が必要になります。
        </div>

        {/* H2-1 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            症状の名前より「どこに出ているか」で分ける
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-3">
            「くもっている」「べたつく」といった言葉は、人によって指しているものが違います。
            言葉でそろえようとするより、出ている場所の広がり方を見るほうが、切り分けの手がかりになります。
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                t: "部屋全体に均一に出ている",
                b: "床全体に同じ条件がかかっている、つまり表面の層や施工の条件を先に疑う見方ができます。",
              },
              {
                t: "特定の場所だけに出ている",
                b: "その場所にだけ違う条件があったことになります。歩く回数、家具、日差し、水のかかり方を順に当てはめます。",
              },
              {
                t: "形がはっきりしている",
                b: "何かの輪郭と一致するなら、置いてあったもの・こぼしたものが関係している可能性が高くなります。",
              },
            ].map((x) => (
              <div key={x.t} className="bg-[#FFFBEB] rounded-lg p-4 border border-[#F0ECE8]">
                <div className="font-bold text-sm text-[#92400E] mb-1">{x.t}</div>
                <p className="text-sm text-[#57534E] leading-relaxed">{x.b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* H2-2 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            仕上げの層に原因がありそうなとき
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-4">
            ワックスやコーティングを施工している床では、表面の層側で説明がつく見え方があります。次のような特徴があれば、清掃や塗り直しを扱う会社が相談先になります。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {filmSide.map((x) => (
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
            塗り重ねでよいのか、いったん落とす必要があるのかの考え方は「
            <Link href="/know/stripping-decision/" className="text-[#92400E] underline">
              剥離洗浄をすすめられたときの判断とリスクの確認
            </Link>
            」で扱っています。
          </p>
        </div>

        {/* H2-3 */}
        <div className="bg-[#FFFBEB] border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            床材や下地に原因がありそうなとき
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-4">
            表面に何を塗っても変わらない種類の症状があります。この場合は、清掃や塗布を扱う会社だけでは完結しません。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {materialSide.map((x) => (
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
        </div>

        {/* H2-4 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            掃除や生活の仕方で説明がつくとき
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-4">
            業者に頼むまでもなく、手順を変えるだけで見え方が戻ることもあります。まずここを試すと、相談するときの情報も増えます。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {habitSide.map((x) => (
              <div key={x.t} className="flex gap-3">
                <div className="w-2 h-2 bg-[#059669] rounded-full mt-2 shrink-0"></div>
                <div>
                  <div className="font-bold text-sm text-[#1C1917]">{x.t}</div>
                  <p className="text-sm text-[#57534E] mt-0.5 leading-relaxed">{x.b}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#78716C] mt-3">
            普段の手入れで避けたい方法は「
            <Link href="/know/daily-care/" className="text-[#92400E] underline">
              ワックス・コーティング後の床の日常の手入れ
            </Link>
            」にまとめています。
          </p>
        </div>

        {/* H2-5 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            見え方と相談先を対応させる早見表
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-3">
            切り分けた結果を、どこへ持っていくかの目安です。実際の判断は現地を見てもらったうえで変わることがあります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#FFFBEB] border-b border-[#D6D3D1]">
                <tr>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917]">気づいたこと</th>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917] whitespace-nowrap">疑う対象</th>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917]">持っていく先</th>
                </tr>
              </thead>
              <tbody>
                {routing.map(([a, b, c], i) => (
                  <tr key={a} className={`border-b border-[#F0ECE8] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF9]"}`}>
                    <td className="px-3 py-2 font-medium text-[#1C1917] align-top">{a}</td>
                    <td className="px-3 py-2 text-[#92400E] font-bold align-top whitespace-nowrap">{b}</td>
                    <td className="px-3 py-2 text-[#57534E]">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#78716C] mt-3">
            掲載している会社がどの作業を扱っているかは、
            <Link href="/ranking/" className="text-[#92400E] underline">総合ランキング</Link>
            や各社のページで公表されている表記を確認してください。
          </p>
        </div>

        {/* H2-6 */}
        <div className="bg-[#FFFBEB] border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            相談する前に自分で試す順番
          </h2>
          <ol className="space-y-3">
            {beforeAsking.map((t, i) => (
              <li key={t} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-[#F0ECE8]">
                <span className="w-6 h-6 bg-[#92400E] text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm text-[#57534E] leading-relaxed">{t}</span>
              </li>
            ))}
          </ol>
          <p className="text-xs text-[#78716C] mt-3">
            試した内容を隠すと、原因の見立てがずれます。強い薬剤を使ってしまった場合も、そのまま伝えてください。
          </p>
        </div>

        {/* H2-7 */}
        <div className="bg-[#059669]/5 border border-[#059669]/20 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-bold text-[#059669] mb-3">
            自分で切り分けず、先に見てもらったほうがよい場合
          </h2>
          <ul className="space-y-2 text-sm text-[#374151]">
            {seeInPerson.map((t) => (
              <li key={t} className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#059669] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
          <p className="text-xs text-[#4B5563] mt-3">
            床の状態を写真と言葉でどう伝えるかは「
            <Link href="/area/gunma/" className="text-[#059669] underline">
              傷みが進んだ床を相談するときの伝え方
            </Link>
            」でも整理しています。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="/service/scratch-repair/"
            className="flex-1 bg-[#92400E] text-white font-bold py-3 px-6 rounded-full text-center hover:bg-[#78350F] transition-colors"
          >
            傷補修の作業内容を見る
          </Link>
          <Link
            href="/service/stripping-wash/"
            className="flex-1 border-2 border-[#92400E] text-[#92400E] font-bold py-3 px-6 rounded-full text-center hover:bg-[#FFFBEB] transition-colors"
          >
            剥離洗浄の作業内容を見る
          </Link>
        </div>

        <div>
          <h2 className="font-bold text-[#1C1917] mb-4">切り分けたあとに読むページ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/know/recoat-timing/", label: "塗り替えのサイン" },
              { href: "/know/estimate-reading/", label: "見積書の読み方" },
              { href: "/know/no-wax-floor/", label: "ワックス不可の床材" },
              { href: "/know/coating-types/", label: "コーティングの種類" },
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
