import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const CHECKED = "2026年11月19日";

const faqs = [
  {
    q: "シートフローリングにフロアコーティングはできますか？",
    a: "施工会社の中には、ワックスフリーのシートフローリングへの施工実績が多数あると案内している会社があります（カラー）。一方で、DAIKEN・LIXIL・ノダは自社の床材にフロアコーティングを使わないよう案内しています。まず床材のメーカーと品番を確かめ、そのメーカーの案内を読んでから判断します。",
  },
  {
    q: "ノンワックスのシートフローリングなら、コーティングも不要ですか？",
    a: "「ワックス不要」は、ワックスを塗らなくてよい（塗ると不具合が出るおそれがある）という意味で、コーティングの要否とは別の話です。施工会社のカラーは、ノンワックスのシートフローリングは水分に弱く表面がすり減りやすいとしてコーティングをすすめていますが、床材メーカーには使わないよう案内している会社があります。",
  },
  {
    q: "メーカーの案内に反してコーティングした場合、どうなりますか？",
    a: "LIXILは、フロアコーティングの使用に伴う不具合は保証対象外と案内しています。施工会社の保証はコーティングの剥がれなどを対象にしたもので、床材そのものの保証とは別です。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "シートフローリングにフロアコーティングはできる？床材メーカー4社と施工会社の案内を比較",
  alternates: { canonical: "/know/sheet-flooring-coating/" },
  description:
    "シートフローリング（ワックスフリーの床材を含む）にフロアコーティングをしてよいかを、DAIKEN・LIXIL・ノダ・パナソニックの公式の案内と、施工会社3社の案内（2026年11月19日確認）で比べました。メーカーの保証との関係と、依頼前に確かめることをまとめています。",
};

export default function SheetFlooringCoatingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumb="シートフローリングのフロアコーティング"
        h1="シートフローリングにフロアコーティングはできる？床材メーカー4社と施工会社の案内を比較"
        lead={
          <>
            <p className="mb-3">
              答えは<strong>床材のメーカーと品番によります</strong>。施工会社にはシートフローリングへの施工実績を案内している会社がある一方で、<strong>DAIKEN・LIXIL・ノダは自社の床材にフロアコーティングを使わないよう案内</strong>しています。パナソニックは、使う場合はコーティング業者やメーカーに確認するよう案内しています。
            </p>
            <p>
              依頼する前に、取扱説明書や仕様書で床材のメーカーと品番を確かめ、そのメーカーの案内を読むことが出発点です。LIXILは、使用に伴う不具合を<strong>保証対象外</strong>としています。
            </p>
          </>
        }
        notice={`このページは、床材メーカー4社のよくある質問・お手入れの案内と、施工会社3社（カラー・グッドライフ・ドッグランコーティング）の公式サイトのよくある質問（いずれも${CHECKED}確認）をもとに、当サイトが並べたものです。お使いの床材の品番ごとの可否は、各メーカーにご確認ください。`}
        sections={[
          {
            heading: "床材メーカー4社の案内",
            tone: "amber",
            table: {
              head: ["メーカー", "フロアコーティングについての公式の案内"],
              rows: [
                ["DAIKEN", "「フロアーコーティングは行わないでください」。床材表面の剥がれ、膨れ、白化、粉吹き、変色、床鳴り、ひび割れ等の不具合の出るおそれがあると記載"],
                ["LIXIL", "本来の性能や品質を損なう場合があり、はがれ・膨れ・粉吹き・変色・ひび割れ等の不具合が発生するおそれがあるため使用しないよう案内。使用に伴う不具合は保証対象外"],
                ["ノダ", "フロアコーティング剤（厚塗り表面コート剤）は、剥がれ、白化、粉吹き、変色、床鳴り、ひび割れ等の不具合が発生するおそれがあるため使用しないよう案内"],
                ["パナソニック", "不具合が発生する場合があるため、使用する場合はコーティング業者やメーカーに確認するよう案内"],
              ],
              caption: "各社の公式ページの記載を当サイトが要約したものです。製品によって案内が異なる場合があります。",
            },
          },
          {
            heading: "施工会社の案内",
            table: {
              head: ["施工会社", "シートフローリング・ワックスフリーの床についての案内"],
              rows: [
                ["カラー", "ワックスフリーのシートフローリングへの施工実績が多数あり、床材によって特性が異なるため問い合わせをと案内。ノンワックスのシートフローリングは水分に弱く表面がすり減りやすいとして、コーティングをすすめている"],
                ["グッドライフ", "ワックスフリーの床材も、効果が経年で薄れていくため、保証期間のあるコーティングをすすめると案内"],
                ["ドッグランコーティング", "ノンワックスタイプのフローリングは表面の仕上げが非常に薄く、めくれやすく継ぎ目からの水分の混入を防ぐことが難しいとして、コーティングを選ぶ人が多いと案内"],
              ],
              caption: "施工会社の案内は、各社がコーティングをすすめる立場で書いたものです。床材メーカーの案内と食い違う場合は、メーカーの案内と保証の扱いを確認してください。",
            },
          },
          {
            heading: "依頼する前に確かめること",
            list: [
              "取扱説明書・仕様書で床材のメーカーと品番を確認する（分からなければ建てた会社・管理会社に問い合わせる）",
              "そのメーカーがフロアコーティングをどう案内しているかを、公式のよくある質問やお手入れの案内で読む",
              "コーティングした場合に床材メーカーの保証がどうなるかを確認する（LIXILは保証対象外と記載）",
              "施工会社の保証が何を対象にしているか（膜の剥がれ・生活のキズなど）を、床材の保証とは別に確認する",
            ],
            note: (
              <>
                ワックスが不要な床かどうかの見分け方は<Link href="/know/no-wax-floor/" className="underline">ノンワックスフローリングの見分け方</Link>、コーティング全般の注意点は<Link href="/know/coating-demerit/" className="underline">フロアコーティングのデメリット</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/know/no-wax-floor/", label: "ノンワックスの床か確かめる" }}
        secondary={{ href: "/service/floor-coating/", label: "フロアコーティングの業者を見る" }}
        related={[
          { href: "/know/no-wax-floor/", label: "ノンワックスフローリングの見分け方" },
          { href: "/know/coating-demerit/", label: "フロアコーティングのデメリット" },
          { href: "/know/coating-diy/", label: "フロアコーティングのDIY" },
          { href: "/maker/daiken/", label: "DAIKENの床材" },
          { href: "/maker/lixil/", label: "LIXILの床材" },
          { href: "/maker/noda/", label: "ノダの床材" },
        ]}
        sources={[
          { label: "DAIKEN よくあるご質問「床材のお手入れ方法一覧」", href: "https://faq.daiken.jp/faq/show/3189?site_domain=user", checked: CHECKED },
          { label: "LIXIL Q&A「フローリングにフロアコーティングしてもよいですか。」", href: "https://faq.lixil.co.jp/%E3%83%95%E3%83%AD%E3%83%BC%E3%83%AA%E3%83%B3%E3%82%B0%E3%81%AB%E3%83%95%E3%83%AD%E3%82%A2%E3%82%B3%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%97%E3%81%A6%E3%82%82%E3%82%88%E3%81%84%E3%81%A7%E3%81%99%E3%81%8B%E3%80%82-63c8e03b6876c9001d3bfb52", checked: CHECKED },
          { label: "ノダ「よくあるご質問（床材）」", href: "https://www.noda-co.jp/support/faq/floor/", checked: CHECKED },
          { label: "パナソニック「床のお掃除（木質床材・フローリングのお手入れ）」", href: "https://sumai.panasonic.jp/support/care/floor/01/", checked: CHECKED },
          { label: "カラー公式「よくある質問」", href: "https://www.uv-colors.jp/faq/all", checked: CHECKED },
          { label: "グッドライフ公式「Q&A」", href: "https://www.good-life.co.jp/qa/", checked: CHECKED },
          { label: "ドッグランコーティング公式「よくある質問」", href: "https://dogrun-coating.com/faq/", checked: CHECKED },
        ]}
      />
    </>
  );
}
