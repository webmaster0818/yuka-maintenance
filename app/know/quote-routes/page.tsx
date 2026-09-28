import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import companies from "@/data/companies.json";

export const metadata = {
  title: "床の見積もりが出るまでの流れは会社によって違う｜自社施工型と紹介型",
  alternates: { canonical: "/know/quote-routes/" },
  description:
    "同じ「無料見積もり」でも、自社で作業まで行う会社と、条件に合う事業者を紹介する会社では、金額が出るまでの経路が違います。どちらの形かを自分で見分ける手がかりと、形ごとに申し込み前へ回しておく確認項目を整理しました。",
};

const ownWork = [
  {
    t: "問い合わせ先と作業する人が同じ組織にいる",
    b: "最初に話した相手と、当日来る人が同じ会社に属します。条件のすり合わせが一本の線でつながるぶん、伝え漏れは追いかけやすくなります。",
  },
  {
    t: "料金の考え方がその会社の基準で決まる",
    b: "作業の単位や含まれる工程が、その会社の決め方で示されます。他社と比べるには、単位をそろえ直す作業が必要になります。",
  },
  {
    t: "加盟店・フランチャイズの形が混ざることがある",
    b: "同じ看板でも、実際に来るのが地域の加盟店であることがあります。窓口が本部か店舗かで、答えられる範囲が変わる場合があります。",
  },
  {
    t: "断るときの相手が一つで済む",
    b: "見送る場合の連絡先が一か所にまとまります。やり取りの負担は軽い一方、比較したいなら自分で他社にも当たる必要があります。",
  },
];

const intermediated = [
  {
    t: "条件を出すと、登録している事業者側から反応が返る",
    b: "自分で一社ずつ探さなくても複数の候補が出てきます。そのぶん、誰が答えているのかを自分で把握しておく必要があります。",
  },
  {
    t: "実際に作業する事業者が後から決まる",
    b: "最初に金額を見た時点では、来る人が確定していないことがあります。事業者が決まった段階で、条件を伝え直す手間が生じます。",
  },
  {
    t: "同じ作業名でも中身が事業者ごとに違う",
    b: "並んだ候補が同じ言葉を使っていても、含まれる工程がそろっているとは限りません。並びの上下だけで決めないようにします。",
  },
  {
    t: "連絡が複数から来る場合の扱いを決めておく",
    b: "反応が重なると、どこへ何を伝えたかが混ざります。返事をする順番と、見送る相手への連絡方法を先に決めておきます。",
  },
];

const tells = [
  "公式サイトに、自社の作業内容や工程の説明が具体的に書かれているか",
  "「加盟店」「登録事業者」「出店者」といった言葉が使われていないか",
  "料金の表示が、自社の価格表なのか、事業者ごとの価格の集まりなのか",
  "問い合わせフォームで、住所や条件を先に入れる形になっているか",
  "利用規約に、仲介・紹介・マッチングという立場の説明がないか",
  "作業をした人への評価と、運営そのものへの評価が分けて書かれているか",
];

const whoQuotes = [
  {
    t: "金額を出しているのが誰かを確かめる",
    b: "運営が定めた価格なのか、事業者が個別に出した価格なのかで、相談できる相手が変わります。どちらなのかを最初に聞いておきます。",
  },
  {
    t: "条件の変更をどこへ伝えるかを決める",
    b: "部屋を減らす、日程を変えるといった変更が、運営を通すのか事業者へ直接なのかを確かめます。二重に伝えると食い違いが起きます。",
  },
  {
    t: "支払う相手と支払いの時期を確認する",
    b: "運営へ払う形と、作業した事業者へ払う形があります。支払い先が誰かは、申し込みの前に書面で確かめておきます。",
  },
];

const commonChecks = [
  "現地を見る前の金額なのか、見たあとの金額なのかを区別して受け取る",
  "作業を担当する人が決まる時点はいつかを聞いておく",
  "当日来る人と、事前に話した人が別になる可能性があるかを確認する",
  "取りやめる場合の連絡先と、その期限を先に把握する",
  "やり取りの記録が残る手段（メール・アプリ内のメッセージなど）を一つ決める",
];

export default function QuoteRoutesPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "床メンテナンスの基礎知識" },
          { label: "見積もりが出るまでの流れ" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-3">
            床の見積もりが出るまでの流れは会社によって違う｜自社施工型と紹介型
          </h1>
          <p className="text-[#57534E] leading-relaxed">
            同じ「無料見積もり」という言葉でも、
            <strong>自分の会社で作業まで行う形と、条件に合う事業者を紹介する形</strong>
            では、金額が出るまでの経路が違います。この違いを知らないまま並べると、比較の軸がずれます。
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-900 mb-8">
          <strong>先に前提:</strong>{" "}
          当サイトは掲載{companies.length}社について、料金目安・対応サービス・公式サイトを公表情報のまま掲載しています。各社がどちらの形であるかを当サイトで判定して掲載しているわけではありません。判断の材料は下の「見分ける手がかり」に挙げますが、最終的には各社の公式サイトと利用規約でご確認ください。
        </div>

        {/* H2-1 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            同じ言葉でも、その先に進む道が分かれている
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-3">
            問い合わせのボタンまでは似て見えても、押したあとの流れが違います。大きくは、次の二つの形に分かれます。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#FFFBEB] rounded-lg p-4 border border-[#F0ECE8]">
              <div className="font-bold text-sm text-[#92400E] mb-1">自社で作業まで行う形</div>
              <p className="text-sm text-[#57534E] leading-relaxed">
                問い合わせた会社が、そのまま見積もりを出し、作業も担当します。加盟店が実際に動く場合も、看板と料金の決め方は運営側にそろっています。
              </p>
            </div>
            <div className="bg-[#FFFBEB] rounded-lg p-4 border border-[#F0ECE8]">
              <div className="font-bold text-sm text-[#92400E] mb-1">事業者を紹介・仲介する形</div>
              <p className="text-sm text-[#57534E] leading-relaxed">
                条件を伝えると、登録している事業者が候補として示されます。金額を出すのも作業をするのも、紹介された側の事業者になります。
              </p>
            </div>
          </div>
        </div>

        {/* H2-2 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            自社で作業まで行う形で起きること
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {ownWork.map((x) => (
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

        {/* H2-3 */}
        <div className="bg-[#FFFBEB] border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            事業者を紹介・仲介する形で起きること
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {intermediated.map((x) => (
              <div key={x.t} className="flex gap-3">
                <div className="w-2 h-2 bg-[#059669] rounded-full mt-2 shrink-0"></div>
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
            どちらの形かを自分で見分ける手がかり
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-4">
            公式サイトを開いたときに見る場所です。一つで断定せず、いくつか重ねて判断します。
          </p>
          <ul className="space-y-2 text-sm text-[#57534E]">
            {tells.map((t) => (
              <li key={t} className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#92400E] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {companies.map((c) => (
              <a
                key={c.slug}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-xs bg-[#FFFBEB] text-[#92400E] px-3 py-1.5 rounded-full border border-[#F59E0B]/30 hover:border-[#F59E0B] transition-colors"
              >
                {c.name}の公式サイト
              </a>
            ))}
          </div>
          <p className="text-xs text-[#78716C] mt-3">
            掲載社の運営会社や基本情報は
            <Link href="/review/" className="text-[#92400E] underline">口コミ・評判まとめ</Link>
            の各ページにも整理しています。
          </p>
        </div>

        {/* H2-5 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            金額を提示しているのが誰かで、相談できる範囲が変わる
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {whoQuotes.map((x) => (
              <div key={x.t} className="bg-[#FFFBEB] rounded-lg p-4 border border-[#F0ECE8]">
                <div className="font-bold text-sm text-[#92400E] mb-1">{x.t}</div>
                <p className="text-sm text-[#57534E] leading-relaxed">{x.b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* H2-6 */}
        <div className="bg-[#059669]/5 border border-[#059669]/20 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-bold text-[#059669] mb-3">
            どちらの形でも、申し込み前に押さえておくこと
          </h2>
          <ol className="space-y-3">
            {commonChecks.map((t, i) => (
              <li key={t} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-[#059669]/20">
                <span className="w-6 h-6 bg-[#059669] text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm text-[#374151] leading-relaxed">{t}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="/ranking/"
            className="flex-1 bg-[#92400E] text-white font-bold py-3 px-6 rounded-full text-center hover:bg-[#78350F] transition-colors"
          >
            掲載社を一覧で見る
          </Link>
          <Link
            href="/cost/price/"
            className="flex-1 border-2 border-[#92400E] text-[#92400E] font-bold py-3 px-6 rounded-full text-center hover:bg-[#FFFBEB] transition-colors"
          >
            サービス別の料金相場を見る
          </Link>
        </div>

        <div>
          <h2 className="font-bold text-[#1C1917] mb-4">問い合わせの前後に読むページ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/know/estimate-reading/", label: "見積書の読み方" },
              { href: "/know/review-reading/", label: "口コミの読み方" },
              { href: "/know/after-work-trouble/", label: "施工後のトラブル対策" },
              { href: "/know/purpose-first/", label: "目的から作業を選ぶ" },
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
