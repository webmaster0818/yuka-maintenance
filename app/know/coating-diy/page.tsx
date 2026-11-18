import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const CHECKED = "2026年11月18日";

const faqs = [
  {
    q: "フロアコーティングは自分で（DIY）できますか？",
    a: "家庭用として市販されている床用の「コート」製品は、樹脂ワックスとして販売されているものがあります。たとえばリンレイの「ハイテクフローリングコート」は樹脂ワックスで、耐久性は約6ヶ月と公表されています。業者が施工するUV・ガラスなどのフロアコーティングとは、持ちの目安が大きく異なります。",
  },
  {
    q: "DIYで塗る前に確認することは何ですか？",
    a: "床材メーカーの案内です。DAIKENは床材のお手入れ方法一覧で「フロアーコーティングは行わないでください」と案内し、LIXILはフロアコーティングを使わないよう、使用に伴う不具合は保証対象外と案内しています。一方でノダは、ワックスに木質床材用樹脂ワックスかリンレイの「ハイテクフローリングコート」を使うよう案内しています。",
  },
  {
    q: "ハイテクフローリングコートが使えない床はありますか？",
    a: "リンレイは、フッ素樹脂・シリコン樹脂塗装の木床、油加工された床、塗装されていない床（白木床など）、石床、土足で歩く床などを「使えない床」としています。床の材質によっては密着しないものがあるため、目立たない所で試してから使うよう案内しています。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "フロアコーティングは自分で（DIY）できる？市販の床用コート剤と床材メーカーの注意",
  alternates: { canonical: "/know/coating-diy/" },
  description:
    "市販の床用コート剤には樹脂ワックスとして販売されているものがあり、リンレイ「ハイテクフローリングコート」の耐久性は約6ヶ月です。DAIKEN・LIXILはフロアコーティングを行わないよう案内しています。DIYの前に確認することを、各社の公式情報（2026年11月18日確認）で整理しました。",
};

export default function CoatingDiyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumb="フロアコーティングのDIY"
        h1="フロアコーティングは自分で（DIY）できる？市販の床用コート剤と床材メーカーの注意"
        lead={
          <>
            <p className="mb-3">
              家庭で塗れる床用の「コート」製品は市販されていますが、その中には<strong>樹脂ワックスとして販売されているもの</strong>があります。
              たとえばリンレイの「ハイテクフローリングコート」は「多くの床材メーカー推奨の樹脂ワックス」と案内され、<strong>耐久性は約6ヶ月</strong>と公表されています。
              業者が施工するフロアコーティングは、保証期間を10年〜30年としている会社もあり、持ちの考え方が大きく異なります。
            </p>
            <p>
              また、<strong>DAIKENとLIXILは、フローリングにフロアコーティングを行わないよう案内</strong>しています。DIYで塗る前に、床材のメーカーが何を推奨しているかを確認することをおすすめします。
            </p>
          </>
        }
        notice={`このページはリンレイ・DAIKEN・LIXIL・ノダ・コーティングのS-STYLE・森のしずくの公式情報（いずれも${CHECKED}確認）をもとにしています。`}
        sections={[
          {
            heading: "市販のコート剤と業者のフロアコーティングの違い",
            tone: "amber",
            table: {
              head: ["項目", "市販のコート剤（例：ハイテクフローリングコート）", "業者のフロアコーティング（例）"],
              rows: [
                ["製品の区分", "樹脂ワックス（リンレイの表記）", "UV・ガラス・シリコンなどのコーティング"],
                ["持ちの目安", "耐久性 約6ヶ月（リンレイ公表値）", "S-STYLEはプレミアムナノ30・UVコートを30年保証、プレミアムコート・シリコンコートを20年保証。森のしずくは新築の場合30年保証"],
                ["乾燥時間", "約30分（初めて塗るときは2回塗り）", "各社の施工方法による"],
                ["塗り直し", "耐久性に合わせて塗り直す", "保証期間中の剥がれは無料補修とする会社がある（S-STYLE）"],
              ],
              caption: "業者の保証期間は会社と製品によって異なります。保証の対象・対象外は各社の保証書でご確認ください。",
            },
          },
          {
            heading: "床材メーカーの案内",
            table: {
              head: ["メーカー", "フロアコーティング・コート剤についての案内"],
              rows: [
                ["DAIKEN", "床材のお手入れ方法一覧で、フロアーコーティング（表面コート剤）は行わないよう案内"],
                ["LIXIL", "フロアコーティングは本来の性能や品質を損なう場合があり、はがれ・膨れ・粉吹き・変色・ひび割れ等の不具合が発生するおそれがあるため使用しないよう案内。使用に伴う不具合は保証対象外"],
                ["ノダ", "ワックスは、木質床材用樹脂ワックスか、リンレイ「ハイテクフローリングコート」を使うよう案内"],
              ],
            },
            note: (
              <>
                メーカーごとの詳しい案内は<Link href="/maker/daiken/" className="underline">DAIKEN</Link>・<Link href="/maker/lixil/" className="underline">LIXIL</Link>・<Link href="/maker/noda/" className="underline">ノダ</Link>の各ページにまとめています。
              </>
            ),
          },
          {
            heading: "市販のコート剤を塗る前に確かめること",
            list: [
              "床材のメーカーと品番。メーカーがワックスやコーティングを不要・不可としていないかを確認します。",
              "使えない床に当たらないか。リンレイは、フッ素樹脂・シリコン樹脂塗装の木床、油加工された床（オイルステイン・ロウ仕上げ等）、油性ワックス等を使用した床、塗装されていない床（白木床等）、化学床、ゴム床タイル、石床、土足で歩く床などを使えない床としています。",
              "目立たない所での試し塗り。リンレイは、床の材質により質感の変化や密着しないものがあるため、必ず目立たない所で試してから使うよう案内しています。",
              "床暖房の扱い。リンレイは、床暖房は電源を切って床面が冷めてから使い、ワックスが乾くまで床暖房を使わないよう案内しています。",
            ],
          },
          {
            heading: "塗り方（リンレイの案内）",
            steps: [
              { title: "汚れと油分を落とす", body: "床用洗剤で汚れや油分などを拭き取り、水拭きして洗剤分を取り除き、よく乾かします。" },
              { title: "薄くムラなく塗る", body: "布や市販のワックス専用塗布具に本品をしみ込ませ、薄くムラなく塗り広げます。厚塗りは避け、直接床にまかないよう案内されています。" },
              { title: "完全に乾かす", body: "乾燥時間は約30分です。初めて塗るときは合計2回塗ります。" },
            ],
            note: (
              <>
                ワックスをDIYで塗るか業者に頼むかの比較は<Link href="/cost/diy-vs-pro/" className="underline">床メンテナンスのDIYと業者依頼の比較</Link>、製品の詳細は<Link href="/product/rinrei-hightech-flooring-coat/" className="underline">ハイテクフローリングコートとは</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/service/floor-coating/", label: "フロアコーティングの業者を見る" }}
        secondary={{ href: "/know/wax-or-coating/", label: "ワックスとコーティングの選び方を見る" }}
        related={[
          { href: "/know/wax-or-coating/", label: "ワックスとコーティングの選び方" },
          { href: "/know/coating-types/", label: "フロアコーティングの種類" },
          { href: "/cost/diy-vs-pro/", label: "DIYと業者依頼の比較" },
          { href: "/product/rinrei-hightech-flooring-coat/", label: "ハイテクフローリングコート" },
          { href: "/know/no-wax-floor/", label: "ノンワックス床の見分け方" },
          { href: "/know/coating-warranty/", label: "コーティングの保証" },
        ]}
        sources={[
          { label: "リンレイ「ハイテクフローリングコート」", href: "https://www.rinrei.co.jp/home_care/wax/02/high-tech_flooring.html", checked: CHECKED },
          { label: "DAIKEN よくあるご質問「床材のお手入れ方法一覧」", href: "https://faq.daiken.jp/faq/show/3189?site_domain=user", checked: CHECKED },
          { label: "LIXIL Q&A「フローリングにフロアコーティングしてもよいですか。」", href: "https://faq.lixil.co.jp/%E3%83%95%E3%83%AD%E3%83%BC%E3%83%AA%E3%83%B3%E3%82%B0%E3%81%AB%E3%83%95%E3%83%AD%E3%82%A2%E3%82%B3%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%97%E3%81%A6%E3%82%82%E3%82%88%E3%81%84%E3%81%A7%E3%81%99%E3%81%8B%E3%80%82-63c8e03b6876c9001d3bfb52", checked: CHECKED },
          { label: "ノダ「よくあるご質問（床材）」", href: "https://www.noda-co.jp/support/faq/floor/", checked: CHECKED },
          { label: "コーティングのS-STYLE「保証内容」", href: "https://www.s-style-coating.com/warranty/", checked: CHECKED },
          { label: "森のしずく公式「保証内容」", href: "https://www.morinosizuku.com/services/warranty/", checked: CHECKED },
        ]}
      />
    </>
  );
}
