import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const CHECKED = "2026年11月20日";

const faqs = [
  {
    q: "つや消し（マット）のフロアコーティングはありますか？",
    a: "あります。今回確認した3社では、グッドライフの「グッドライフコート竹」（ガラスコーティング）、ジェブの「EPCOAT-M（マット）」、アップライフの「ガラスコーティング」が、マットな仕上がりと公式に案内されています。",
  },
  {
    q: "同じ商品で、艶ありか艶なしかを選べますか？",
    a: "グッドライフはQ&Aで、クリスタルを艶ありにできるかという質問に対し「光沢のカスタマイズはできません」と回答しています。艶の程度は商品ごとに決まっていると考え、商品を選ぶ段階で仕上がりを確かめるのが確実です。",
  },
  {
    q: "マットなコーティングは保証が短いですか？",
    a: "商品によります。グッドライフでは、マットな竹が20年保証、低光沢のクリスタルが35年保証と、保証内容ページに掲載されています。ジェブはEPCOAT（低光沢）について30年以上の耐久性を案内しています。艶の程度だけで保証の長さは決まりません。",
  },
  {
    q: "つや消しの床にワックスをかけると艶が出ますか？",
    a: "DAIKENは、艶出しタイプのワックス（DKワックスネオ）を艶消しタイプの床材にかけると艶が上がると案内しています。艶を抑えたい場合はリンレイの「ハイテクフローリングコートつや消し20」をすすめていますが、それでも艶はやや高くなる場合があるとしています。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "つや消し（マット）のフロアコーティング｜3社の商品と艶の違い・保証を公式情報で比較",
  alternates: { canonical: "/know/matte-coating/" },
  description:
    "つや消し（マット）・低光沢のフロアコーティングを、グッドライフ・ジェブ・アップライフの公式の商品案内（2026年11月20日確認）で比べました。商品ごとの艶の程度と種類、保証期間、艶を選ぶときに確かめることをまとめています。",
};

export default function MatteCoatingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumb="つや消しのフロアコーティング"
        h1="つや消し（マット）のフロアコーティング｜3社の商品と艶の違い・保証を公式情報で比較"
        lead={
          <>
            <p className="mb-3">
              つや消し（マット）のフロアコーティングは、<strong>ガラスコーティング系の商品に多く</strong>見られます。グッドライフの「竹」、ジェブの「EPCOAT-M」、アップライフの「ガラスコーティング」は、いずれも公式にマットな仕上がりと案内されています。反対に、UVコーティングは高光沢と案内されている例が多くあります。
            </p>
            <p>
              艶の程度は<strong>商品ごとに決まっている</strong>ことが多く、グッドライフは光沢のカスタマイズはできないと回答しています。艶で選ぶ場合は、商品を決める前にショールームやサンプルで仕上がりを確かめるのが確実です。
            </p>
          </>
        }
        notice={`このページは、グッドライフ・ジェブ・アップライフの公式サイトの商品案内・Q&A・保証内容と、DAIKENのお手入れの案内（いずれも${CHECKED}確認）をもとに、当サイトが並べたものです。艶の見え方は床材の色や種類によって変わります。`}
        sections={[
          {
            heading: "3社の商品と艶の程度",
            tone: "amber",
            table: {
              head: ["会社", "商品（種類）", "公式の艶の表記"],
              rows: [
                ["グッドライフ", "竹（ガラスコーティング）", "マットな質感。フロアコーティング特有の光沢感がなく、木の雰囲気を残せる"],
                ["グッドライフ", "クリスタル（ハードガラスコーティング）", "低光沢の上品な仕上がり"],
                ["グッドライフ", "色（特殊UVコーティング）", "微光沢"],
                ["グッドライフ", "光（UVコーティング）", "高光沢"],
                ["ジェブ", "EPCOAT-M（マット）", "EPCOATをさらに低光沢にしたマットな仕上がり"],
                ["ジェブ", "EPCOAT（ガラスコーティング）", "低光沢"],
                ["アップライフ", "ガラスコーティング（自然乾燥）", "マット仕上がり。光沢を抑えた自然な風合い"],
                ["アップライフ", "ガラスUVコーティング（UV照射）", "微光沢"],
                ["アップライフ", "UVコーティング／シリコンコーティング", "高光沢"],
              ],
              caption: "各社の公式の商品ページの表記を当サイトが並べたものです。「マット」「低光沢」「微光沢」の基準は会社ごとに異なり、数値での比較はできません。",
            },
          },
          {
            heading: "保証期間と艶の関係",
            table: {
              head: ["商品", "艶", "保証・耐久の公式の記載"],
              rows: [
                ["グッドライフ 竹", "マット", "20年保証"],
                ["グッドライフ クリスタル", "低光沢", "35年保証"],
                ["グッドライフ 光", "高光沢", "30年保証"],
                ["ジェブ EPCOAT", "低光沢", "30年以上の耐久性（耐久性の試験による）と案内"],
                ["アップライフ ガラス", "マット", "耐用年数 最大30年（UV・シリコンは約10〜30年）。製品保証は施工完了時から20〜30年"],
              ],
              caption: "マットな商品だから保証が短い、という関係はありません。保証の対象（膜の剥がれ・生活のキズなど）は保証書でご確認ください。",
            },
          },
          {
            heading: "艶で選ぶときに確かめること",
            list: [
              "検討している商品の艶の程度を、ショールームやサンプル板で確かめる（同じ商品でも床材の色・種類で見え方が変わる）",
              "艶を後から変えられるかを確認する（グッドライフは光沢のカスタマイズはできないと回答）",
              "マットな商品の保証期間と保証の対象を、ほかの商品と並べて確認する",
              "床材のメーカーがフロアコーティングをどう案内しているかを確認する（DAIKEN・LIXIL・ノダは使わないよう案内）",
              "ワックスで艶を抑えたい場合は、つや消しタイプのワックスでも艶がやや上がることがある点を踏まえる（DAIKEN）",
            ],
            note: (
              <>
                各社のショールームは<Link href="/know/coating-showroom/" className="underline">フロアコーティングのショールーム</Link>、種類ごとの違いは<Link href="/know/coating-types/" className="underline">フロアコーティングの種類</Link>、ワックスのつや消しタイプは<Link href="/product/rinrei-flooring-wax-tsuyanashi/" className="underline">リンレイ「フローリング専用ワックス つやなし」</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/service/floor-coating/", label: "フロアコーティングの業者を見る" }}
        secondary={{ href: "/know/coating-showroom/", label: "ショールームで仕上がりを見る" }}
        related={[
          { href: "/know/coating-types/", label: "フロアコーティングの種類" },
          { href: "/know/coating-showroom/", label: "フロアコーティングのショールーム" },
          { href: "/know/coating-demerit/", label: "フロアコーティングのデメリット" },
          { href: "/company/goodlife/", label: "グッドライフ" },
          { href: "/company/jeb/", label: "ジェブ（EPCOAT）" },
          { href: "/company/uplife/", label: "アップライフ" },
        ]}
        sources={[
          { label: "グッドライフ公式「フロアコーティングの商品一覧」", href: "https://www.good-life.co.jp/product/", checked: CHECKED },
          { label: "グッドライフ公式「Q&A」", href: "https://www.good-life.co.jp/qa/", checked: CHECKED },
          { label: "グッドライフ公式「保証内容」", href: "https://www.good-life.co.jp/quality/", checked: CHECKED },
          { label: "ジェブ公式「EPCOAT」トップページ", href: "https://epcoat.net/", checked: CHECKED },
          { label: "ジェブ公式「EPCOAT-M（マット）」", href: "https://epcoat.net/service/epcoat-m.html", checked: CHECKED },
          { label: "アップライフ公式「ガラスコーティング」", href: "https://uplife.biz/floorcoating/glass-coating.html", checked: CHECKED },
          { label: "アップライフ公式「ガラスUVコーティング」", href: "https://uplife.biz/floorcoating/glass-uv-coating.html", checked: CHECKED },
          { label: "アップライフ公式「UVコーティング」", href: "https://uplife.biz/floorcoating/uv-coating.html", checked: CHECKED },
          { label: "アップライフ公式「シリコンコーティング」", href: "https://uplife.biz/floorcoating/silicon-coating.html", checked: CHECKED },
          { label: "アップライフ公式「フロアコーティングのよくある質問」", href: "https://uplife.biz/faq/", checked: CHECKED },
          { label: "DAIKEN よくあるご質問「床材のお手入れ方法一覧」", href: "https://faq.daiken.jp/faq/show/3189?site_domain=user", checked: CHECKED },
        ]}
      />
    </>
  );
}
