import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const faqs = [
  {
    q: "DAIKEN（旧・大建工業）の床にはどのワックスを使えばよいですか？",
    a: "DAIKENは、ワックス掛けが必要な床材には半年に1度、同社の「DKワックスネオ」を使うよう案内しています。他のワックスを使うと塗りムラが起きる場合があるとしています。",
  },
  {
    q: "DAIKENの床にフロアコーティングはできますか？",
    a: "DAIKENは「フロアーコーティングは行わないでください」と案内しています。床材表面の剥がれ、膨れ、白化、粉吹き、変色、床鳴り、ひび割れ等の不具合の出るおそれがあるためです。",
  },
  {
    q: "艶消しタイプのDAIKENの床にワックスをかけると艶が出ますか？",
    a: "DAIKENは、DKワックスネオは艶出しタイプのため、艶消しタイプの床材にかけると艶が上がるとしています。艶を抑えたい場合は株式会社リンレイ製の「ハイテクフローリングコートつや消し20」を勧めていますが、それでも艶はやや高くなる場合があるとしています。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "DAIKEN（旧・大建工業）の床のお手入れ｜ワックスはDKワックスネオ、フロアーコーティングは不可",
  alternates: { canonical: "/maker/daiken/" },
  description:
    "DAIKEN（旧・大建工業）は、床材のワックスに同社の「DKワックスネオ」を指定し、フロアーコーティングは行わないよう案内しています。日常の掃除、ワックス不要の床材の扱い、艶消しの床に使うワックス、消毒の注意を公式の案内をもとに整理しました。",
};

export default function DaikenMakerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumbParent="床材メーカー別のお手入れ"
        crumb="DAIKEN（旧・大建工業）"
        h1="DAIKEN（旧・大建工業）の床のお手入れ｜ワックスはDKワックスネオ、フロアーコーティングは不可"
        lead={
          <>
            <p className="mb-3">
              DAIKENの床材は、<strong>ワックスをかける場合は同社の「DKワックスネオ」を使い、フロアーコーティングは行わない</strong>のが公式の案内です。
              ワックス掛けが必要な床材は半年に1度のワックス掛けで美しさが長持ちするとしており、ワックス不要の床材はワックスを掛ける必要はないとしています。
            </p>
            <p>
              DAIKENは、2025年9月26日に大建工業株式会社から「DAIKEN株式会社」に社名を変更しています。このページでは、同社のよくあるご質問「床材のお手入れ方法一覧」などをもとに、床材のお手入れの要点を整理しています。
            </p>
          </>
        }
        caution={
          <aside className="bg-red-50 border border-red-200 rounded-xl px-5 py-4 text-sm text-[#7F1D1D] leading-relaxed mb-6" aria-label="床材メーカーの注意">
            <p className="font-bold mb-1">DAIKENの床材には、フロアーコーティングを行わないよう案内されています</p>
            <p>
              DAIKENは「フロアーコーティングは行わないでください」としています。床材表面の剥がれ、膨れ、白化、粉吹き、変色、床鳴り、ひび割れ等の不具合の出るおそれがあるためです。コーティング業者から提案を受けた場合も、床材がDAIKEN製かどうかを先に確認してください。
            </p>
          </aside>
        }
        sections={[
          {
            heading: "DAIKENの床材のお手入れ一覧",
            tone: "amber",
            table: {
              head: ["項目", "DAIKENの案内"],
              rows: [
                ["日常のお手入れ", "雑巾で乾拭き、または化学雑巾（ドライタイプ）。"],
                ["落ちにくい汚れ", "固く絞った雑巾で水拭きし、水分が残らないように乾拭きします。それでも落ちない汚れは、住宅用洗剤（中性）や中性の床用クリーナーを含ませた雑巾で拭き、乾く前に乾拭きします。"],
                ["ロボット掃除機・スチームモップ", "ロボット掃除機は床材への傷や艶落ちの可能性があるため勧めていません。湿式タイプのロボット掃除機やスチームモップは、変色や捲れ、膨れのおそれがあるため使用しないよう案内しています。"],
                ["消毒", "一般床材には消毒用の薬品を使わないよう案内しています（変色や白化のおそれ）。公共・商業施設向けの「コミュニケーションタフⅡシリーズ」「コミュニケーションタフ バイオリーフシリーズ」は、所定の濃度の薬品が使用可能としています。"],
                ["ワックス掛けが必要な床材", "半年に1度。ワックスはDKワックスネオを使用。他のワックスでは塗りムラが起きる場合があるとしています。"],
                ["ワックス不要の床材", "ワックスを掛ける必要はありません。お客様の都合で掛ける場合もDKワックスネオを使うよう案内しています。"],
                ["フロアーコーティング（表面コート剤）", "行わないよう案内しています。"],
              ],
              caption: "出典：DAIKEN よくあるご質問「床材のお手入れ方法一覧」（2026年11月1日確認）",
            },
          },
          {
            heading: "ワックスは「DKワックスネオ」が指定です",
            paras: [
              "DAIKENは、同社の床材にワックスを掛ける場合、ワックスが必要な床材でもワックス不要の床材でも、DKワックスネオを使うよう案内しています。DKワックスネオの使用方法のページでは、ワックス不要のフロアー（「鏡面調」または「高光沢」のみ）にワックスを掛ける場合は、必ずDKワックスネオを使うよう案内しており、他のワックスを使うと床表面がはじいて塗りムラになる場合があるとしています。",
              "一方で、ワックス不要の床材にワックスを使うと、ワックス膜で床材の持つ表面性能が隠れてしまうとしています。",
            ],
            note: (
              <>
                対象の床・使えない床・塗り方は<Link href="/product/daiken-dk-wax-neo/" className="underline">DKワックスネオの使い方</Link>にまとめています。
              </>
            ),
          },
          {
            heading: "艶消しの床材に掛ける場合",
            paras: [
              "DAIKENは、DKワックスネオは艶出しタイプのワックスのため、艶消しタイプの床材に掛けると艶が上がるとしています。艶を抑えたい場合には、株式会社リンレイ製の「ハイテクフローリングコートつや消し20」を勧めています。ただし、それでも艶はやや高くなる場合があるとしています。",
            ],
          },
          {
            heading: "水拭きの注意",
            paras: [
              "DAIKENは、濡れ雑巾を頻繁に使用したり、水分が床に残っていたりすると、床と床の隙間から水が浸入し、表面にシミやヒビ割れが生じることがあるとしています。水拭きをする場合は、固く絞った雑巾で拭いた後、必ずカラ拭きをして水分を拭き取るよう案内しています。",
            ],
          },
          {
            heading: "業者に依頼するときの確認事項",
            steps: [
              { title: "床材がDAIKEN製か確認する", body: "取扱説明書や引き渡し書類で、床材のメーカーと品番を確認します。" },
              { title: "コーティングは依頼しない", body: "DAIKENはフロアーコーティングを行わないよう案内しています。コーティングの提案を受けた場合は、この案内を業者に伝えてください。" },
              { title: "ワックスの銘柄を指定する", body: "ワックスがけを依頼する場合は、DKワックスネオ（艶を抑えたい場合はハイテクフローリングコートつや消し20）を使えるか確認します。" },
              { title: "水と洗浄液の使い方を確認する", body: "DAIKENは、洗浄液やワックス剥離剤を多量にまき散らすと、目地部のふくれや床鳴り等の原因となることがあるとしています。" },
            ],
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/product/daiken-dk-wax-neo/", label: "DKワックスネオの使い方を見る" }}
        secondary={{ href: "/service/wax/", label: "ワックスがけの内容を見る" }}
        related={[
          { href: "/maker/eidai/", label: "永大産業の適応ワックス" },
          { href: "/maker/woodtec/", label: "朝日ウッドテックの床" },
          { href: "/maker/noda/", label: "ノダの床材" },
          { href: "/maker/panasonic/", label: "パナソニックの床" },
          { href: "/know/wax-or-coating/", label: "ワックスかコーティングか" },
          { href: "/know/daily-care/", label: "日常の手入れ" },
          { href: "/know/tatami-care/", label: "和紙畳・樹脂畳のお手入れ" },
          { href: "/know/no-wax-floor/", label: "ワックス不要の床の見分け方" },
          { href: "/service/floor-coating/", label: "フロアコーティング" },
        ]}
        sources={[
          { label: "DAIKEN よくあるご質問「床材のお手入れ方法一覧」", href: "https://faq.daiken.jp/faq/show/3189?site_domain=user", checked: "2026年11月1日" },
          { label: "DAIKEN よくあるご質問「床材の日常のお手入れはどのようにすればよいですか？」", href: "https://faq.daiken.jp/faq/show/44?site_domain=user", checked: "2026年11月1日" },
          { label: "DAIKENパーツショップ「お手入れ製品：DKワックスネオのご使用方法」", href: "https://www.daiken.jp/service/s/report_03", checked: "2026年11月1日" },
          { label: "DAIKEN「会社概要」", href: "https://www.daiken.jp/about/profile.html", checked: "2026年11月1日" },
          { label: "大建工業 ニュースリリース「2025年9月26日より『DAIKEN株式会社』に社名変更します」（2025年2月5日）", href: "https://www.daiken.jp/news/detail/pdf/20250204031109.pdf", checked: "2026年11月1日" },
        ]}
      />
    </>
  );
}
