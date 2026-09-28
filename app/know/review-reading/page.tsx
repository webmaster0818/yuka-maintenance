import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import reviews from "@/data/reviews.json";

export const metadata = {
  title: "床メンテナンス業者の口コミから読み取れること・読み取れないこと",
  alternates: { canonical: "/know/review-reading/" },
  description:
    "星の数や件数は何を表していて、何を表していないのか。当サイトが各社の口コミを集めた際に、そもそも出典をたどれる評価がどれだけ集まったのかという実績もあわせて、床メンテナンスの依頼先を口コミで検討するときの読み方を整理しました。",
};

type ReviewEntry = {
  slug: string;
  companyName: string;
  ratingBlock: {
    rating: number;
    reviewCount: number;
    sourceLabel: string;
  } | null;
  reviews: { author: string; excerpt: string; sourceUrl?: string }[] | null;
  reviewsEmptyNote?: string;
};

const entries = reviews as unknown as ReviewEntry[];

const withRating = entries.filter((e) => e.ratingBlock);
const withVoices = entries.filter((e) => (e.reviews?.length ?? 0) > 0);
const withNothing = entries.filter(
  (e) => !e.ratingBlock && (e.reviews?.length ?? 0) === 0
);

const scoreLimits = [
  {
    t: "平均点は「何についての平均か」が書かれていない",
    b: "床の作業だけを対象にした評価とは限りません。同じ会社が扱う他の作業への評価が同じ数字に混ざっていることがあります。",
  },
  {
    t: "点を付けた時期がばらついている",
    b: "古い評価と最近の評価が同じ重みで平均に入ります。担当者や運営が変わっていても、数字の上では区別されません。",
  },
  {
    t: "評価の対象が運営なのか現場なのかが分かれる",
    b: "紹介や仲介の形をとるサービスでは、運営そのものへの評価と、実際に作業した事業者への評価が別物になります。どちらを見ているかを意識します。",
  },
  {
    t: "点が付く理由は仕上がりだけではない",
    b: "連絡の速さ、態度、時間の正確さなど、作業の結果以外の要素も同じ点数に含まれます。低い点が必ずしも施工の問題を指すとは限りません。",
  },
];

const writerPositions: [string, string][] = [
  [
    "自分で選んで依頼した人",
    "比較したうえで選んでいるため、期待していた条件と結果の差が書かれやすくなります。何と比べたのかが書いてあれば手がかりになります。",
  ],
  [
    "住んでいるが手配はしていない人",
    "当日の様子や仕上がりは分かっても、金額や契約の条件については触れられないことがあります。",
  ],
  [
    "手配したが立ち会っていない人",
    "連絡のやり取りや書類の話が中心になり、仕上がりの評価は伝聞になっている場合があります。",
  ],
  [
    "床以外の作業を頼んだ人",
    "同じ会社でも作業が違えば、担当する人も工程も変わります。床メンテナンスの参考になる範囲は限られます。",
  ],
  [
    "掲載元が選んで載せた声",
    "公式サイトに載っている利用者の声は、掲載する側が選んでいます。内容が事実であっても、全体の分布を表すものではありません。",
  ],
];

const countMeaning = [
  {
    t: "件数が多い＝利用者が多い、とは限らない",
    b: "評価を書きやすい仕組みがあるかどうかで件数は変わります。件数の差を、そのまま規模や質の差として読むことはできません。",
  },
  {
    t: "件数が少ないことは悪い評価ではない",
    b: "集める仕組みを持っていない会社もあります。件数が少ないときは、評価が低いのではなく、材料がないと考えるほうが正確です。",
  },
  {
    t: "同じ会社でも窓口ごとに件数が分かれる",
    b: "店舗や加盟店が個別に評価を受けている場合、全体像は一つの数字にまとまりません。自分の地域の窓口を見る必要があります。",
  },
];

const negativeKinds: [string, string, string][] = [
  [
    "作業の結果について",
    "仕上がり・傷・残った汚れなど",
    "自分の床でも起こりうるかを、床材と作業内容が近いかどうかで判断します。条件が違えば参考になりません。",
  ],
  [
    "段取りと連絡について",
    "遅れ・連絡が取れない・説明が足りない",
    "会社の仕組みに関わる部分で、自分のときも起こりうる話です。申し込み前に連絡手段を確かめる材料になります。",
  ],
  [
    "料金の説明について",
    "追加費用・見積もりとの差",
    "同じことを避けるには、書面で何を残すかが対策になります。金額そのものより、決め方の説明を見ます。",
  ],
  [
    "期待とのずれについて",
    "思っていたのと違った",
    "作業内容の認識が合っていなかった可能性があります。自分のときは、仕上がりの言葉をどうそろえるかの参考にします。",
  ],
];

const selfChecks = [
  "口コミに出てくる作業名が、自分が頼もうとしている作業と同じかを確かめる",
  "書かれている床材が、自宅の床と同じ種類かを見る",
  "良い評価と悪い評価で、触れている論点が同じかどうかを見比べる",
  "気になった点を、そのまま業者への質問に置き換えて聞いてみる",
  "口コミでは分からない条件（範囲・書面・支払い）は、見積もりの段階で自分で確認する",
];

export default function ReviewReadingPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "床メンテナンスの基礎知識" },
          { label: "口コミの読み方" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-3">
            床メンテナンス業者の口コミから読み取れること・読み取れないこと
          </h1>
          <p className="text-[#57534E] leading-relaxed">
            口コミは、依頼先を決める材料の一つになります。ただし
            <strong>そこに書かれていないことのほうが多い</strong>
            のも事実です。このページでは、数字と文章のそれぞれについて、どこまで読み取ってよいのかを整理します。
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-900 mb-8">
          <strong>先に前提:</strong>{" "}
          当サイトは口コミを自分で作成しません。掲載しているのは、出典をたどれる公開情報に限っています。掲載の考え方は
          <Link href="/content-policy/" className="underline font-bold">コンテンツポリシー</Link>
          に記載しています。
        </div>

        {/* H2-1 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            出典をたどれる評価は、そもそもあまり多くない
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-4">
            当サイトが掲載{entries.length}社について口コミを集めた結果です。星評価まで確認できたのは
            <strong>{withRating.length}社</strong>、出典付きの利用者の声を掲載できたのは
            <strong>{withVoices.length}社</strong>、どちらも確認できなかったのが
            <strong>{withNothing.length}社</strong>でした。探して見つからないこと自体が珍しくない、という前提で読み始めてください。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#FFFBEB] border-b border-[#D6D3D1]">
                <tr>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917] whitespace-nowrap">会社</th>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917]">確認できた星評価</th>
                  <th className="text-center px-3 py-2 font-bold text-[#1C1917] whitespace-nowrap">出典付きの声</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((e, i) => (
                  <tr key={e.slug} className={`border-b border-[#F0ECE8] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF9]"}`}>
                    <td className="px-3 py-2 font-medium text-[#1C1917] align-top whitespace-nowrap">
                      <Link href={`/review/${e.slug}/`} className="hover:text-[#92400E] underline decoration-[#D6D3D1] underline-offset-2">
                        {e.companyName}
                      </Link>
                    </td>
                    <td className="px-3 py-2 text-[#57534E] align-top">
                      {e.ratingBlock
                        ? `${e.ratingBlock.rating}／${e.ratingBlock.reviewCount.toLocaleString("ja-JP")}件（${e.ratingBlock.sourceLabel}）`
                        : "確認できず"}
                    </td>
                    <td className="px-3 py-2 text-center text-[#92400E] font-bold align-top whitespace-nowrap">
                      {(e.reviews?.length ?? 0) > 0 ? `${e.reviews?.length}件` : "なし"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#78716C] mt-3">
            星評価は、各社の運営そのものに対して付いているものを取得した時点の値として掲載しています。床メンテナンスの施工そのものへの評価ではありません。取得日と出典は
            <Link href="/review/" className="text-[#92400E] underline">各社の口コミページ</Link>
            に記載しています。
          </p>
        </div>

        {/* H2-2 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            星の数だけでは分からないこと
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {scoreLimits.map((x) => (
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

        {/* H2-3 */}
        <div className="bg-[#FFFBEB] border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            書き手がどの立場かで、見えている範囲が違う
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-3">
            同じ一件の作業でも、誰が書いたかによって書ける内容が変わります。立場が読み取れない口コミは、その分だけ扱いを軽くします。
          </p>
          <div className="space-y-3">
            {writerPositions.map(([a, b]) => (
              <div key={a} className="bg-white rounded-lg p-4 border border-[#F0ECE8]">
                <div className="font-bold text-sm text-[#92400E] mb-1">{a}</div>
                <p className="text-sm text-[#57534E] leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* H2-4 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            件数の多さを何に結び付けてよいか
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {countMeaning.map((x) => (
              <div key={x.t} className="bg-[#FFFBEB] rounded-lg p-4 border border-[#F0ECE8]">
                <div className="font-bold text-sm text-[#92400E] mb-1">{x.t}</div>
                <p className="text-sm text-[#57534E] leading-relaxed">{x.b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* H2-5 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            低い評価は、四つの種類に分けてから読む
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-3">
            まとめて「評判が悪い」と受け取らず、何について書かれているのかで分けます。自分に当てはまるかどうかは種類ごとに違います。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#FFFBEB] border-b border-[#D6D3D1]">
                <tr>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917] whitespace-nowrap">種類</th>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917]">書かれがちな内容</th>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917]">自分に当てはめるときの見方</th>
                </tr>
              </thead>
              <tbody>
                {negativeKinds.map(([a, b, c], i) => (
                  <tr key={a} className={`border-b border-[#F0ECE8] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF9]"}`}>
                    <td className="px-3 py-2 text-[#92400E] font-bold align-top whitespace-nowrap">{a}</td>
                    <td className="px-3 py-2 text-[#1C1917] align-top">{b}</td>
                    <td className="px-3 py-2 text-[#57534E]">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* H2-6 */}
        <div className="bg-[#059669]/5 border border-[#059669]/20 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-bold text-[#059669] mb-3">
            口コミを見たあとに、自分の手で確かめる項目
          </h2>
          <ol className="space-y-3">
            {selfChecks.map((t, i) => (
              <li key={t} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-[#059669]/20">
                <span className="w-6 h-6 bg-[#059669] text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm text-[#374151] leading-relaxed">{t}</span>
              </li>
            ))}
          </ol>
          <p className="text-xs text-[#4B5563] mt-3">
            口コミで判断しきれない部分は、見積もりの段階で確かめられます。確認の仕方は「
            <Link href="/know/estimate-reading/" className="text-[#059669] underline">
              床メンテナンスの見積書の読み方
            </Link>
            」を参照してください。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="/review/"
            className="flex-1 bg-[#92400E] text-white font-bold py-3 px-6 rounded-full text-center hover:bg-[#78350F] transition-colors"
          >
            掲載社の口コミ・評判を見る
          </Link>
          <Link
            href="/content-policy/"
            className="flex-1 border-2 border-[#92400E] text-[#92400E] font-bold py-3 px-6 rounded-full text-center hover:bg-[#FFFBEB] transition-colors"
          >
            当サイトの掲載方針を見る
          </Link>
        </div>

        <div>
          <h2 className="font-bold text-[#1C1917] mb-4">口コミとあわせて見るページ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/know/quote-routes/", label: "見積もりが出るまでの流れ" },
              { href: "/know/after-work-trouble/", label: "施工後のトラブル対策" },
              { href: "/know/purpose-first/", label: "目的から作業を選ぶ" },
              { href: "/ranking/", label: "総合ランキング" },
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
