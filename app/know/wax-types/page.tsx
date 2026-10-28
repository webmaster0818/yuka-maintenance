import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata = {
  title: "フローリングワックスの違い｜水性（樹脂系）・乳化性・油性の見分け方と選び方",
  alternates: { canonical: "/know/wax-types/" },
  description:
    "フローリングワックスの違いは、容器の「種類」の表示で分かります。家庭用品品質表示法の規程は、ワックスの種類を水性・乳化性・油性で表示し、合成樹脂が主成分なら「樹脂系」を付けると定めています。フローリングに使う種類はメーカーの指定で確認します。",
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

const faqs = [
  {
    q: "フローリングワックスの水性・乳化性・油性は、どう違いますか？",
    a: "消費者庁の雑貨工業品品質表示規程では、ろう・油脂・合成樹脂などを水に溶解・乳化・可溶化したものを「水性」、有機溶剤とともに水に乳化したものを「乳化性」、そのどちらにも当たらないものを「油性」と表示します。合成樹脂が主成分のものは「水性（樹脂系）」のように「樹脂系」が付きます。",
  },
  {
    q: "樹脂ワックスかどうかは、どこで見分けますか？",
    a: "容器の品質表示の「種類」の欄に「樹脂系」と書かれているかで確認できます。成分の欄にも、含有量1%以上の主要成分が「合成樹脂」「ろう」「有機溶剤」「水」などの名称で表示されます。",
  },
  {
    q: "フローリングにはどの種類のワックスを使えばよいですか？",
    a: "床材メーカーの指定に従います。パナソニックは同社の木質床材について水性樹脂タイプを用意し、ロウタイプ・油性タイプは使わないよう案内しています。ワックス不要・ワックス禁止の床材もあるため、まず品番で塗ってよい床かを確認してください。",
  },
];

const sources = [
  { label: "消費者庁「雑貨工業品品質表示規程（三十 住宅用又は家具用のワックス）」", href: "https://www.caa.go.jp/policies/policy/representation/household_goods/law/law_07/item_030.html", checked: "2026年10月24日" },
  { label: "パナソニック「木質床材・フローリングのお手入れ（お掃除）」", href: "https://sumai.panasonic.jp/support/care/floor/01/", checked: "2026年10月24日" },
  { label: "東リ 床材FAQ「複層ビニル床タイルのメンテナンスでは、ワックスが必要でしょうか」", href: "https://www.toli.co.jp/faq/floor/32.html", checked: "2026年10月24日" },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function WaxTypesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Breadcrumb
        items={[
          { label: "床メンテナンスの基礎知識" },
          { label: "ワックスの種類と選び方" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-3">
            フローリングワックスの違い｜水性（樹脂系）・乳化性・油性の見分け方と選び方
          </h1>
          <p className="text-[#57534E] leading-relaxed mb-3">
            フローリングワックスの違いは、容器の「種類」と「成分」の表示で確かめられます。家庭用品品質表示法にもとづく消費者庁の雑貨工業品品質表示規程は、住宅用のワックスの種類を「水性」「乳化性」「油性」のいずれかで表示し、合成樹脂を主成分とするものは「水性（樹脂系）」のように「樹脂系」と書き添えるよう定めています。
          </p>
          <p className="text-[#57534E] leading-relaxed mb-3">
            フローリングに使える種類は、床材メーカーの指定で決まります。たとえばパナソニックは、同社の木質床材にワックスをかける場合は水性樹脂タイプを用意し、ロウタイプ・油性タイプは使わないよう案内しています。東リは、ワックスの塗布を推奨する複層ビニル床タイルについて、メーカー推奨品以外でもビニル床材用の樹脂ワックスであれば使用できるとしています。種類を選ぶ前に、お使いの床材の取扱説明書やメーカーの案内を確認してください。
          </p>
          <p className="text-[#57534E] leading-relaxed">
            このページでは、表示の規程にもとづく3種類の違い、床材との組み合わせで起きやすい行き違い、製品表示で確認する項目を整理します。
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-900 mb-8">
          <strong>先に前提:</strong>{" "}
          ここで扱うのは一般的な分類の考え方です。実際の性能・使用方法・適合する床材は製品ごとに異なります。数値としての持ちや乾燥の目安は製品や条件によって変わるため、当ページでは示しません。必ず製品の表示とメーカーの案内、施工する業者の説明で確認してください。
        </div>

        {/* H2-1 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            水性・乳化性・油性の違い（表示の規程による区分）
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-3">
            雑貨工業品品質表示規程は、住宅用・家具用のワックスについて、成分（ろう・油脂・有機溶剤・合成樹脂・シリコーン・水など、含有量1%以上の主要成分）と種類の表示を求めています。
            種類は、ろう・油脂・合成樹脂などの成分を何に溶かしたり乳化させたりしているかで、次の3つに分かれます。
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                t: "水性",
                b: "ろう・油脂・合成樹脂などを水に溶解、乳化または可溶化したものです。合成樹脂が主成分のものは「水性（樹脂系）」と表示され、一般に「樹脂ワックス」「水性樹脂ワックス」と呼ばれます。",
              },
              {
                t: "乳化性",
                b: "ろう・油脂・合成樹脂などと有機溶剤を、水に乳化したものです。水と有機溶剤の両方を含む点が、水性との違いです。",
              },
              {
                t: "油性",
                b: "ろう・油脂・合成樹脂などを成分とするもので、水性・乳化性のどちらにも当たらないものです。においや換気の扱いが水性と異なるため、製品の使用上の注意を確認します。",
              },
            ].map((x) => (
              <div key={x.t} className="bg-[#FFFBEB] rounded-lg p-4 border border-[#F0ECE8]">
                <div className="font-bold text-sm text-[#92400E] mb-1">{x.t}</div>
                <p className="text-sm text-[#57534E] leading-relaxed">{x.b}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#78716C] mt-3">
            「樹脂ワックス」「ロウタイプ」などの呼び方は商品名やカタログの表現で、表示の規程の区分名とは一致しないことがあります。見分けるときは容器の「種類」「成分」の欄を見て、あわせて「適用できる床材」「使えない場所」の記載を確認してください。
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

        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-bold text-sm text-[#1C1917] mb-1">Q. {f.q}</h3>
                <p className="text-sm text-[#57534E] leading-relaxed">A. {f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-8">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">出典</h2>
          <ul className="space-y-1 text-xs text-[#57534E] list-disc pl-5">
            {sources.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-[#92400E] underline">{s.label}</a>（{s.checked}確認）
              </li>
            ))}
          </ul>
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
              { href: "/know/vinyl-tile-wax/", label: "タイルの床とワックス" },
              { href: "/know/muku-floor-care/", label: "無垢フローリングの手入れ" },
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
