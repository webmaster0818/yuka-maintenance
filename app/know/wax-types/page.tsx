import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata = {
  title: "床用ワックスの種類と選び方｜樹脂・乳化性・油性の違い",
  alternates: { canonical: "/know/wax-types/" },
  description:
    "床用ワックスは膜をつくる成分によって性質が変わります。水性樹脂・乳化性・油性それぞれの考え方、つや表記の読み方、床材との組み合わせで起きやすい行き違い、製品表示で確認する項目を整理しました。",
};

const glossTable: [string, string][] = [
  [
    "つや出し（光沢）",
    "光を強く反射する仕上がりを指す表記です。反射が強いほど、細かな傷やムラも目に入りやすくなります。",
  ],
  [
    "半つや",
    "光沢を抑えた中間の仕上がりを指す表記です。つや出しとつや消しの中間として案内されることが多い区分です。",
  ],
  [
    "つや消し（マット）",
    "反射を抑えた落ち着いた仕上がりを指す表記です。もとの床材の質感を変えたくない場合に選ばれます。",
  ],
  [
    "表記は製品ごとの相対的なもの",
    "同じ「半つや」でもメーカーや製品によって見え方が異なります。言葉だけでそろえず、実物やサンプルで確認するのが確実です。",
  ],
];

const mismatches = [
  {
    t: "床材がワックスを想定していない",
    b: "表面にあらかじめ保護層のある製品など、メーカーがワックスを推奨していない床材があります。種類を選ぶ前に、そもそも塗ってよい床かを確かめる必要があります。",
  },
  {
    t: "既存の膜と新しい膜の相性",
    b: "すでに別のワックスが塗られている床に異なる種類を重ねると、密着せずにムラやはがれが出ることがあります。何が塗られているか分からない場合は、その旨を業者に伝えてください。",
  },
  {
    t: "水分に弱い床材への施工",
    b: "水性の製品は水分を含みます。水分に弱い床材や、継ぎ目から水が入りやすい床では、施工の可否と方法を事前に確認します。",
  },
  {
    t: "屋外・半屋外との取り違え",
    b: "ベランダや土間など、屋内用として案内されていない場所に屋内用の製品を使うと、想定どおりの結果になりません。使用場所の指定を確認してください。",
  },
];

const labelChecks = [
  "適用できる床材として何が書かれているか（書かれていない床材は対象外の可能性があります）",
  "使用できない床材・場所として何が挙げられているか",
  "希釈が必要か、原液のまま使うのか",
  "重ね塗りの可否と、重ねる場合の手順",
  "はがすときに使う剥離剤の指定があるか",
  "つやの区分と、仕上がりの表記",
];

export default function WaxTypesPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "床メンテナンスの基礎知識" },
          { label: "ワックスの種類と選び方" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-3">
            床用ワックスの種類と選び方｜樹脂・乳化性・油性の違い
          </h1>
          <p className="text-[#57534E] leading-relaxed">
            「床用ワックス」とひとくくりに呼ばれていますが、膜をつくる成分によって性質も扱い方も変わります。
            種類の違いを知らずに選ぶと、床材と合わずにムラが出たり、後からはがしにくくなったりすることがあります。
            このページでは、製品を選ぶ前に押さえておきたい分類の考え方と、確認すべき表示項目を整理します。
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-900 mb-8">
          <strong>先に前提:</strong>{" "}
          ここで扱うのは一般的な分類の考え方です。実際の性能・使用方法・適合する床材は製品ごとに異なります。数値としての持ちや乾燥の目安は製品や条件によって変わるため、当ページでは示しません。必ず製品の表示とメーカーの案内、施工する業者の説明で確認してください。
        </div>

        {/* H2-1 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            床用ワックスは「何でできた膜か」で分かれる
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-3">
            床用ワックスの分類でまず押さえたいのは、床の上に残る膜が何でできているかという点です。
            大きくは、合成樹脂の膜をつくるタイプと、ろう成分を主体としたタイプに分けて考えると整理しやすくなります。
            さらに、その成分を運ぶ液体が水なのか溶剤なのかという軸が重なります。
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                t: "水性樹脂タイプ",
                b: "合成樹脂を水に分散させたもので、乾くと樹脂の膜が残ります。住宅用として一般に流通している製品の多くがこの考え方にあたります。",
              },
              {
                t: "乳化性タイプ",
                b: "ろう成分と樹脂などを水に乳化させたもので、しっとりとした仕上がりを狙う製品に用いられる考え方です。",
              },
              {
                t: "油性タイプ",
                b: "溶剤にろう成分を溶かしたもので、水を嫌う床材に向けて案内されることがあります。においや換気の扱いが水性と異なります。",
              },
            ].map((x) => (
              <div key={x.t} className="bg-[#FFFBEB] rounded-lg p-4 border border-[#F0ECE8]">
                <div className="font-bold text-sm text-[#92400E] mb-1">{x.t}</div>
                <p className="text-sm text-[#57534E] leading-relaxed">{x.b}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#78716C] mt-3">
            分類の呼び方はメーカーによって異なります。店頭やカタログの区分名が上記と一致しないこともあるため、名称よりも「適用できる床材」「使えない場所」の記載を優先して読んでください。
          </p>
        </div>

        {/* H2-2 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            水性樹脂タイプが住宅で広く使われる背景
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-3">
            住宅の床向けに案内される製品では、水性の樹脂タイプが選ばれることが多くなっています。理由として挙げられるのは次のような点です。
          </p>
          <ul className="space-y-2 text-sm text-[#57534E]">
            {[
              "溶剤を主体とする製品に比べ、作業中のにおいの負担が小さいと案内されることが多い",
              "住宅で一般的なフローリングやクッションフロアを適用対象に含む製品が多い",
              "汚れてきたときに、専用の剥離剤で膜ごと取り除く前提で設計された製品がある",
              "重ね塗りのしかたが製品側で案内されており、手順を確認しやすい",
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
            ただし「水性だから安心」という意味ではありません。水分に弱い床材や、継ぎ目から水が入りやすい床では扱いに注意が必要です。
          </p>
        </div>

        {/* H2-3 */}
        <div className="bg-[#FFFBEB] border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            乳化性・油性タイプが選ばれる場面
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-3">
            樹脂の膜をつくるタイプ以外が案内されるのは、仕上がりの質感や床材の事情がある場合です。代表的な考え方を挙げます。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                t: "強い光沢を出したくないとき",
                b: "樹脂膜の光沢が住まいの雰囲気に合わないと感じる場合、ろう成分を主体とした製品が候補になることがあります。",
              },
              {
                t: "水分をできるだけ避けたい床のとき",
                b: "水分に弱い床材では、水性以外の選択肢を提案されることがあります。ただし溶剤側にも適・不適があるため、床材の指定を必ず確認します。",
              },
              {
                t: "既存の仕上げと考え方をそろえたいとき",
                b: "もともとろう系の手入れをしてきた床では、同じ考え方の製品で続けるほうが仕上がりがそろいやすい場合があります。",
              },
              {
                t: "部分的な手入れを繰り返したいとき",
                b: "全面を一度にやり直すのではなく、気になる場所を都度手入れしたい場合に、扱い方の異なる製品が案内されることがあります。",
              },
            ].map((x) => (
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
            油性・溶剤系の製品では、においと換気の扱いが水性と変わります。同居する家族の事情がある場合は、選ぶ前に業者へ相談してください。
          </p>
        </div>

        {/* H2-4 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            つや表記（つや出し・半つや・つや消し）の読み方
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-3">
            製品選びで意見が分かれやすいのが仕上がりのつやです。表記は目安として読み、最終的には実物で確認するのが確実です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#FFFBEB] border-b border-[#D6D3D1]">
                <tr>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917] whitespace-nowrap">表記</th>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917]">読み方</th>
                </tr>
              </thead>
              <tbody>
                {glossTable.map(([a, b], i) => (
                  <tr key={a} className={`border-b border-[#F0ECE8] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF9]"}`}>
                    <td className="px-3 py-2 font-medium text-[#1C1917] align-top whitespace-nowrap">{a}</td>
                    <td className="px-3 py-2 text-[#57534E]">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#78716C] mt-3">
            業者に依頼する場合は「つやはどうしますか」と聞かれることがあります。希望が固まっていないときは、施工事例の写真を見せてもらい、明るい部屋・暗い部屋それぞれの見え方を確認すると判断しやすくなります。
          </p>
        </div>

        {/* H2-5 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            床材との組み合わせで起きやすい行き違い
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {mismatches.map((x) => (
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
            塗ってよい床かどうかの確認方法は「
            <Link href="/know/no-wax-floor/" className="text-[#92400E] underline">
              ワックスがけができない・不要な床材の見分け方
            </Link>
            」で手順をまとめています。
          </p>
        </div>

        {/* H2-6 */}
        <div className="bg-[#059669]/5 border border-[#059669]/20 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-bold text-[#059669] mb-3">
            製品表示と業者への確認でそろえておく情報
          </h2>
          <p className="text-sm text-[#374151] leading-relaxed mb-3">
            自分で製品を選ぶ場合も、業者に任せる場合も、確認する項目は共通しています。次の内容をそろえておくと、後からの手戻りが減ります。
          </p>
          <ul className="space-y-2 text-sm text-[#374151]">
            {labelChecks.map((t) => (
              <li key={t} className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#059669] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
          <p className="text-xs text-[#4B5563] mt-3">
            業者に依頼する場合は「どの種類のワックスを使うのか」「その床材に適合しているか」の2点を見積もり時に確認し、回答を書面やメールで残しておくと後で照合できます。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="/service/wax/"
            className="flex-1 bg-[#92400E] text-white font-bold py-3 px-6 rounded-full text-center hover:bg-[#78350F] transition-colors"
          >
            ワックスがけの作業内容を見る
          </Link>
          <Link
            href="/cost/price/"
            className="flex-1 border-2 border-[#92400E] text-[#92400E] font-bold py-3 px-6 rounded-full text-center hover:bg-[#FFFBEB] transition-colors"
          >
            サービス別の料金相場を見る
          </Link>
        </div>

        <div>
          <h2 className="font-bold text-[#1C1917] mb-4">ワックス選びの次に読むページ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/know/no-wax-floor/", label: "ワックス不可の床材" },
              { href: "/know/recoat-timing/", label: "塗り替えのサイン" },
              { href: "/know/stripping-decision/", label: "剥離が必要かの判断" },
              { href: "/floor/flooring/", label: "フローリングのガイド" },
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
