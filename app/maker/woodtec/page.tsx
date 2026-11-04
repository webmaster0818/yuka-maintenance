import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const faqs = [
  {
    q: "朝日ウッドテックの床にワックスは必要ですか？",
    a: "朝日ウッドテックは、当社床材のワックスがけは必要ないとしています。希望する場合はワックスがけが可能ですが、フロアの表面がワックスの被膜となるため、傷の付きにくさ、抗菌・抗ウイルス性等の塗膜性能が発揮されなくなるとしています。",
  },
  {
    q: "朝日ウッドテックの床にかけてはいけない製品はありますか？",
    a: "防滑塗装品とサニタリー用フローリングにはワックスはかけられないと案内しています。防滑塗装の対象商品は、Live Natural PLUS for Dog、Live Natural MSX スーパー6 for Dog、Live Natural ネダレス145 for Dogです。",
  },
  {
    q: "朝日ウッドテックが推奨するワックスは何ですか？",
    a: "株式会社リンレイの「ハイテクフローリングコート」「ハイテクフローリングコートつや消し20（JFPAマーク有り品）」「ハイテクフローリングコートつや消し40」「ノンブライト」と、株式会社リスダンケミカルの「ナチュラルック」です。対象となる床（塗装の種類）は製品ごとに異なります。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const O = "○";

export const metadata = {
  title: "朝日ウッドテックの床のお手入れ｜ワックス不要の床と塗装別の推奨ワックス",
  alternates: { canonical: "/maker/woodtec/" },
  description:
    "朝日ウッドテックの床材はワックスがけの必要がなく、防滑塗装品とサニタリー用フローリングにはワックスをかけられません。かける場合の推奨ワックス（リンレイ「ハイテクフローリングコート」ほか）を塗装の種類別に、公式の案内をもとに整理しました。",
};

export default function WoodtecMakerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumbParent="床材メーカー別のお手入れ"
        crumb="朝日ウッドテック"
        h1="朝日ウッドテックの床のお手入れ｜ワックス不要の床と塗装別の推奨ワックス"
        lead={
          <>
            <p className="mb-3">
              朝日ウッドテックの床材は、<strong>ワックスがけの必要がありません</strong>。希望する場合はワックスがけもできますが、フロアの表面がワックスの被膜となるため、傷の付きにくさ、抗菌・抗ウイルス性等の塗膜性能が発揮されなくなるとしています。
              また、<strong>防滑塗装品とサニタリー用フローリングにはワックスはかけられません</strong>。
            </p>
            <p>
              かける場合の推奨ワックスは、塗装の種類（ナチュラルマット塗装・マット塗装、ピュアハード塗装、シート、ヘリンボーン）ごとに公表されています。このページでは、朝日ウッドテックの公式のお手入れページ「フリーワックス」をもとに整理しています。
            </p>
          </>
        }
        notice="このページは朝日ウッドテックの公式サイト「フリーワックス」（2026年11月1日確認）をもとにしています。"
        sections={[
          {
            heading: "塗装の種類と対象商品",
            tone: "amber",
            table: {
              head: ["塗装", "対象商品", "ワックス"],
              rows: [
                ["ナチュラルマット塗装", "Live Natural Premium、Live Natural PLUS", "不要（かける場合は推奨品）"],
                ["ピュアハード塗装", "Live Natural ORIGINAL", "不要（かける場合は推奨品）"],
                ["マット塗装（同社の標準仕様の塗装）", "ヘリンボーン、Live Natural MSX/MRX、AIRiS-α", "不要（かける場合は推奨品）"],
                ["防滑塗装", "Live Natural PLUS for Dog、Live Natural MSX スーパー6 for Dog、Live Natural ネダレス145 for Dog", "かけられない"],
                ["サニタリー用フローリング", "－", "かけられない"],
              ],
              caption: "防滑塗装品とサニタリー用フローリングにワックスをかけると、犬にとっての適度な滑りにくさや、水廻りに適した表面性能が発揮できなくなるとしています。",
            },
          },
          {
            heading: "推奨のワックス（塗装の種類別）",
            paras: ["朝日ウッドテックが公表している推奨ワックスと、対象となるフローリングは次のとおりです（○が対象）。"],
            table: {
              head: ["メーカー", "商品名", "ナチュラルマット・マット塗装", "ピュアハード塗装", "シート", "ヘリンボーン"],
              rows: [
                ["(株)リンレイ", <Link key="hfc" href="/product/rinrei-hightech-flooring-coat/" className="underline">ハイテクフローリングコート</Link>, "", O, O, ""],
                ["(株)リンレイ", "ハイテクフローリングコートつや消し20（JFPAマーク有り品）", O, "", "", O],
                ["(株)リンレイ", "ハイテクフローリングコートつや消し40", O, O, O, ""],
                ["(株)リンレイ", "ノンブライト", O, O, O, ""],
                ["(株)リスダンケミカル", "ナチュラルック", O, "", "", ""],
              ],
              caption: "ロウタイプ（水性・乳化性・油性）ワックスは使わず、必ず木質床材用の水性樹脂ワックスを使うよう案内しています。上記以外の水性樹脂ワックスを使う場合は、目立たない部分で試し塗りをして、ムラや剥がれなどの問題が起こらないか確認するよう案内しています。",
            },
          },
          {
            heading: "ワックスをかけたときの変化",
            paras: [
              "朝日ウッドテックは、ワックスをかけると表面のツヤが上がり、本来の仕上がりとは異なってくるとしています。また、ワックスを保つには定期的なワックスがけが必要になるとしています。",
              "一方で、ワックスがけの効能として、ワックス皮膜がフローリング表面を保護し汚れが直接付くのを防げること、表面の細かい傷や汚れが目立たなくなること、長年の使用で褪せた感じになったときに艶を上げられることを挙げています。",
            ],
          },
          {
            heading: "ワックスを剥離したい場合",
            paras: [
              "ワックス剥離剤で除去することは可能としています。変色のおそれがあるため、使用方法をよく読み十分に注意し、使用後は水で濡らしてよく絞った雑巾で拭き取るよう案内しています。強アルカリ性のものは使わないよう案内しています。",
            ],
            note: (
              <>
                自分で剥離するか業者に頼むかは<Link href="/know/stripping-decision/" className="underline">剥離洗浄の判断</Link>で解説しています。
              </>
            ),
          },
          {
            heading: "表面コート剤（コーティング）について",
            paras: [
              "朝日ウッドテックは、表面コート（コーティング）を使用する必要はないとしています。希望する場合は、業者と十分確認のうえで使用を判断するよう案内しています。床材の表面がコート剤の皮膜となり、塗装本来の仕上がりとは異なるとしています。",
            ],
            note: (
              <>
                判断の考え方は<Link href="/know/wax-or-coating/" className="underline">ワックスかコーティングか</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/service/wax/", label: "ワックスがけの内容を見る" }}
        secondary={{ href: "/know/no-wax-floor/", label: "ワックス不要の床の見分け方" }}
        related={[
          { href: "/trouble/floor-scratch-repair/", label: "フローリングの傷・へこみの補修" },
          { href: "/know/floor-scratch-prevention/", label: "床の傷・へこみを防ぐ" },
          { href: "/product/rinrei-hightech-flooring-coat/", label: "ハイテクフローリングコート" },
          { href: "/maker/eidai/", label: "永大産業の適応ワックス" },
          { href: "/maker/daiken/", label: "DAIKENの床のお手入れ" },
          { href: "/maker/noda/", label: "ノダの床材" },
          { href: "/maker/panasonic/", label: "パナソニックの床" },
          { href: "/know/toilet-sanitary-floor/", label: "トイレ・洗面所の床" },
          { href: "/know/skip-wax/", label: "ワックスをかけない場合" },
          { href: "/floor/flooring/", label: "フローリングのガイド" },
        ]}
        sources={[
          { label: "朝日ウッドテック公式サイト「フリーワックス」", href: "https://www.woodtec.co.jp/maintenance/index04/", checked: "2026年11月1日" },
        ]}
      />
    </>
  );
}
