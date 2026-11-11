import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const faqs = [
  {
    q: "シリコンのフロアコーティングは滑りにくいですか？",
    a: "2026年11月11日に確認した3社とも、滑りにくさを特徴に挙げています。S-STYLEはシリコンコートの最大の特徴を滑り止め効果としており、ベルカーサのフロアシールEPXは防滑骨材を配合しています。ピュアコートは、滑りにくさと防汚性能に優れたコーティングと説明しています。",
  },
  {
    q: "シリコンコーティングの保証は何年ですか？",
    a: "S-STYLEのシリコンコートとピュアコートのシリコンコーティングは、いずれも料金表で20年保証とされています。ベルカーサのフロアシールEPXは保証期間10年間（塗膜剥離等の施工不良に対する無償手直し保証）で、耐久目安は15年（参考値）です。S-STYLEの無料修繕保証は被膜の剥がれ・めくれが対象で、表面の傷やフローリングのへこみは対象外としています。",
  },
  {
    q: "施工後はいつから歩けますか？",
    a: "ピュアコートは、シリコンコーティングは施工の約24時間後から歩けるとし、家具の設置は施工後48〜72時間ほど空けるのが安全としています。ベルカーサのフロアシールEPXは硬化時間1.5時間〜半日、施工の平均所要時間は1日（9時〜15時）です。S-STYLEのシリコンコートのページには、歩けるまでの時間の記載はありませんでした。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "シリコンフロアコーティングの保証と特徴｜3社の公式情報を比較（滑りにくさ・歩けるまでの時間）",
  alternates: { canonical: "/service/silicone-coating/" },
  description:
    "シリコン（シリコーン系）のフロアコーティングを扱うS-STYLE・ピュアコート・ベルカーサの成分の説明、保証年数、光沢、施工後に歩けるまでの時間、対応する床材を各社の公式ページ（2026年11月11日確認）で比較します。",
};

export default function SiliconeCoatingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumbParent="サービス一覧"
        crumb="シリコンフロアコーティング"
        h1="シリコンフロアコーティングの保証と特徴｜3社の公式情報を比較"
        lead={
          <>
            <p className="mb-3">
              シリコンフロアコーティングは、シリコン（シリコーン系）の塗料でフローリングなどの表面に膜をつくる施工です。当サイトの掲載社では、S-STYLE・ピュアコート・ベルカーサの3社が、シリコン系のフロアコーティングを公式サイトに掲載しています。
            </p>
            <p>
              3社とも<strong>滑りにくさ</strong>を特徴に挙げており、ペットや高齢の方がいる家庭向けに案内しています。一方で、保証年数（10年〜20年）、施工後に歩けるまでの時間、施工できる地域は会社ごとに異なります。下の表で確認してください。
            </p>
          </>
        }
        notice="成分・保証・光沢・施工時間は、各社の公式ページ（2026年11月11日確認）の記載です。料金は掲載していません。正式な施工範囲と金額は見積もりで確認してください。"
        sections={[
          {
            heading: "シリコン系のフロアコーティングを扱う3社の比較",
            tone: "amber",
            table: {
              head: ["会社・商品", "成分の説明・特徴", "保証・耐久の目安"],
              rows: [
                ["S-STYLE シリコンコート", "シリコン樹脂が原料。撥水性の被膜で、最大の特徴を滑り止め効果としている。鉛筆硬度5Hの保護膜、高光沢の仕上がり、液剤はF☆☆☆☆取得。床暖房仕様でも施工できる", "20年保証（無料修繕保証。対象は被膜の剥がれ・めくれ）"],
                ["ピュアコート シリコンコーティング", "滑りにくさと防汚性能に優れたコーティングと説明。柔軟性のある塗膜で、足元にクッション性があるとしている", "20年保証（料金表の記載）"],
                ["ベルカーサ フロアシールEPX", "シラン・シロキサンなどケイ素化合物が主成分の有機塗料（シリコーン系）。防滑骨材を配合。鉛筆硬度5H（JIS規格試験）。光沢は艶有のみ", "保証期間10年間（塗膜剥離等の施工不良に対する無償手直し）。耐久目安15年（参考値）"],
              ],
              caption: "ベルカーサの出張範囲は首都圏一帯（神奈川・東京・千葉・埼玉）と記載されています。S-STYLEの対応エリアは関東と関西・近畿・中国・中部と記載されています。",
            },
          },
          {
            heading: "施工後に歩けるまでの時間と、施工時の注意",
            list: [
              "ピュアコート：シリコンコーティングは施工の約24時間後から歩けるとしています（ガラスコーティングは約8〜12時間後、UVコーティングは数時間後）。家具の搬入や重いものを置けるのは完全硬化の後で、施工後48〜72時間ほど空けるのが安全としています。",
              "ベルカーサ：フロアシールEPXの施工の平均所要時間は1日（9時〜15時）、硬化時間は1.5時間〜半日です。石油系溶剤のため硬化乾燥するまで少し揮発臭があること、床が5℃以下の低温ではやや乾燥時間が長くなることをデメリットとして挙げています。",
              "S-STYLE：シリコンコートのページには、歩けるまでの時間の記載はありませんでした。見積もりの際に確認してください。",
            ],
          },
          {
            heading: "対応する床材",
            list: [
              "ピュアコートの床材別の適性表では、シリコンコーティングは複合フローリングとワックスフリーフローリングが◎、シートフローリングが◯（光沢中）、無垢フローリングが△です。",
              "ベルカーサは、フロアシールEPXは無機系のガラスコーティングよりも幅広い床材に密着するとし、シートフローリング・突板フローリング・Pタイル・クッションフロアは密着性良好としています。素地仕上げの無垢や消耗した突板など液体を吸う素材には下塗りが必要としています。",
            ],
            note: (
              <>
                コーティングの呼び名（ガラス・UV・シリコン）の整理は<Link href="/know/coating-types/" className="underline">フロアコーティングの種類</Link>、保証で直してもらえる範囲は<Link href="/know/coating-warranty/" className="underline">コーティングの保証と点検</Link>で扱っています。
              </>
            ),
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/service/floor-coating/", label: "フロアコーティングの費用・業者選び" }}
        secondary={{ href: "/service/glass-coating/", label: "ガラスフロアコーティングの比較" }}
        related={[
          { href: "/company/s-style/", label: "S-STYLE" },
          { href: "/company/purecoat/", label: "ピュアコート" },
          { href: "/company/belcasa/", label: "ベルカーサ" },
          { href: "/service/uv-coating/", label: "UVフロアコーティング" },
          { href: "/know/coating-types/", label: "フロアコーティングの種類" },
          { href: "/know/coating-warranty/", label: "コーティングの保証と点検" },
        ]}
        sources={[
          { label: "S-STYLE「シリコンフロアコーティング シリコンコート」", href: "https://www.s-style-coating.com/flooring/silicone/", checked: "2026年11月11日" },
          { label: "S-STYLE「フロアコーティング価格 費用相場・料金表」", href: "https://www.s-style-coating.com/price/", checked: "2026年11月11日" },
          { label: "S-STYLE「フロアコーティングの保証について　無料修繕保証」", href: "https://www.s-style-coating.com/warranty/", checked: "2026年11月11日" },
          { label: "ピュアコート公式サイト（トップページのシリコンコーティング・床材別コーティング適性表）", href: "https://floorcoating.co.jp/", checked: "2026年11月11日" },
          { label: "ピュアコート「フロアコーティング 価格・料金表」", href: "https://floorcoating.co.jp/price/", checked: "2026年11月11日" },
          { label: "ピュアコート「よくある質問」", href: "https://floorcoating.co.jp/faq/", checked: "2026年11月11日" },
          { label: "ベルカーサ「フロアシールEPX」", href: "https://belcasa.jp/service/floorseal-epx/", checked: "2026年11月11日" },
        ]}
      />
    </>
  );
}
