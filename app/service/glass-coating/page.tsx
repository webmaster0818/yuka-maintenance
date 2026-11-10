import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";
import MakerCoatingCaution, { MAKER_COATING_SOURCES } from "@/app/components/MakerCoatingCaution";

const faqs = [
  {
    q: "ガラスフロアコーティングの保証は何年ですか？",
    a: "会社と製品で10年から30年まで分かれます。2026年11月1日に各社の公式ページで確認した範囲では、S-STYLEのプレミアムナノ30とクリーンエクスプレスのプレミアムガラスフロアコーティングが30年、S-STYLEのプレミアムコート・クリーンエクスプレスのガラスフロアコーティング・ピュアコートのハイグレードガラス・FSSCOATのSDCOATハイグレードプランが20年、ジェブのEPCOAT・ベルカーサの施工保証・FSSCOATのSDCOATベーシックプランが10年です。",
  },
  {
    q: "ガラスコーティングは施工後いつから歩けますか？",
    a: "ピュアコートは歩行可能になるまでの目安を約8〜12時間後とし、家具の設置は48〜72時間ほど空けるのが安全としています。クリーンエクスプレスはプレミアムガラスフロアコーティングについて、翌日の引越しも可能だが、すり傷が入りやすいため施工2日目以降の引越しをすすめています。",
  },
  {
    q: "アルコールや次亜塩素酸水で床を拭いても大丈夫ですか？",
    a: "製品によります。クリーンエクスプレスは、同社のガラスフロアコーティングは消毒用アルコールや次亜塩素酸水では溶けず、プレミアムガラスフロアコーティングは塩素系漂白剤でも溶けないと案内しています。一方で同社は、一般的なガラスコーティングは塩素系漂白剤がつくと表面が溶けてしまうとも記載しています。使える薬剤は施工した会社に確認してください。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "ガラスフロアコーティングの保証年数と料金｜6社の公式情報を比較",
  alternates: { canonical: "/service/glass-coating/" },
  description:
    "ガラスフロアコーティングの保証は会社・製品で10〜30年。S-STYLE・クリーンエクスプレス・ピュアコート・ベルカーサ・ジェブ・FSSCOATの保証年数、料金、保証の対象外、歩行できるまでの時間を各社の公式ページ（2026年11月1日確認）で比較し、DAIKEN・LIXILの注意もあわせて掲載しています。",
};

export default function GlassCoatingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumbParent="サービス一覧"
        crumb="ガラスフロアコーティング"
        h1="ガラスフロアコーティングの保証年数と料金｜6社の公式情報を比較"
        lead={
          <>
            <p className="mb-3">
              ガラスフロアコーティングは、ガラス成分を主体にした薄い膜で床を保護するコーティングです。各社とも、光沢を抑えた自然な仕上がりと、傷や薬品への強さを特徴に挙げています。
            </p>
            <p>
              当サイトの掲載社のうち、ガラスコーティングを公式サイトに掲載している6社を比較しました。保証年数は<strong>製品によって10年・20年・30年</strong>に分かれ、同じ会社でも上位製品とそれ以外で年数が異なります。床材メーカーの中には、フロアコーティングをしないよう案内している会社もあるため、先に下の注意をご確認ください。
            </p>
          </>
        }
        notice="料金・保証・施工条件は、各社の公式ページ（2026年11月1日確認）の記載です。キャンペーン価格や新築向けの割引価格を含むため、正式な金額は見積もりで確認してください。"
        caution={<MakerCoatingCaution className="mb-8" />}
        sections={[
          {
            heading: "ガラスコーティングを扱う6社の保証と料金",
            tone: "amber",
            table: {
              head: ["会社（製品名）", "保証", "公式に掲載されている料金"],
              rows: [
                ["S-STYLE（プレミアムナノ30）", "30年保証", "リビング1畳 8,000円（税別・通常価格）、新築未入居価格 6,000円。その他の部屋1畳 8,000円（同）、新築未入居 5,300円"],
                ["S-STYLE（プレミアムコート）", "20年保証", "リビング1畳 6,000円（税別・通常価格）、新築未入居価格 4,600円。その他の部屋1畳 6,000円（同）、新築未入居 4,000円"],
                ["クリーンエクスプレス（プレミアムガラスフロアコーティング）", "30年保証", "一般的な一戸建て住宅で25万円〜30万円前後"],
                ["クリーンエクスプレス（ガラスフロアコーティング）", "20年保証", "製品ページに金額の記載なし"],
                ["ピュアコート（ハイグレードガラス）", "20年保証", "33m²（20帖）までの基本料金 115,500円（通常価格）、ご新築割引キャンペーン価格 99,000円。20帖からの1m²単価 3,500円（新築割引 3,000円）。いずれも税別"],
                ["ベルカーサ（フロアガラスSi）", "施工保証10年（塗膜剥がれや異物混入など施工不良に対する無償の補修）", "1m²あたり2,800円＋基本料金36,000円（別途消費税）"],
                ["ジェブ（EPCOAT）", "10年保証", "床の種類やオプション、家具の移動、ワックス剥離の有無で変わるため、一概に料金表や価格を提示できないと記載"],
                ["FSSCOAT（SDCOAT）", "ハイグレードプラン20年保証、ベーシックプラン10年保証", "金額の一覧は掲載なし（見積もり）"],
              ],
              caption: "S-STYLEの料金は1畳＝1.65m²換算です。ベルカーサは面積に応じた割引などで料金表より安くなることが多い一方、特殊な素材や状況により追加料金がかかることもあると記載しています。",
            },
          },
          {
            heading: "保証の対象になるもの・ならないもの",
            paras: [
              "ガラスコーティングの保証も、主に剥がれや施工不良が対象です。傷やへこみ、天災による損傷は対象外とする会社が多く、保証書の記載が条件になる場合もあります。",
            ],
            table: {
              head: ["会社", "保証の対象", "対象外とされる例"],
              rows: [
                ["S-STYLE", "保証期間内の剥がれ・めくれを回数制限なく無料修繕。湿気過多による硬化不良で被膜が部分的に白く濁った場合も無料修繕", "表面に入る傷、フローリング自体のへこみ・欠損。使用上の誤り、天災など"],
                ["クリーンエクスプレス", "施工不良、塗りムラ・カスレ・塗り残し、異物の混入・剥がれ、塗膜の密着不良による剥がれ", "保証ページに対象外の列挙はなし"],
                ["ジェブ（EPCOAT／EPCOAT-M）", "除光液・シンナー・洗剤などの付着による白濁や剥がれ、意図的な過失以外で著しく剥がれた場合、カスレ・塗り残し、密着不良による剥がれ、紫外線による著しい劣化", "意図的な過失による剥がれや損傷、施工年月日や施工責任者の記入がないもの、感覚で左右される美観性の艶、天災、売却に伴う名義変更"],
                ["FSSCOAT", "水滴の放置による溶け出し・剥がれ、飲料・食品の付着時の剥がれ、塗り残し・カスレ、密着不良による剥がれなど（通常の生活で発生した場合）", "重量物の落下による損傷、ペットのツメによるキズ、床材の劣化や損傷に伴う剥がれ、日焼けの黄変など"],
                ["ベルカーサ", "10年間の塗膜剥がれや異物混入など施工不良", "よくある質問の回答では対象外の列挙はなし"],
              ],
              caption: "ピュアコートは、強い衝撃や落下物による損傷、家具の引きずりなどによる傷、自然災害や水漏れなど外的要因、故意または著しい不適切使用を、保証対象外となる場合の例として挙げています。",
            },
            note: (
              <>
                保証書の読み方は<Link href="/know/coating-warranty/" className="underline">コーティングの保証と点検</Link>で詳しく扱っています。
              </>
            ),
          },
          {
            heading: "施工後の時間と、施工時の注意",
            list: [
              "ピュアコート：歩行可能になるまで約8〜12時間（UVは数時間、シリコンは約24時間）。家具の設置は48〜72時間ほど空けるのが安全としています。",
              "クリーンエクスプレス（プレミアムガラス）：翌日の引越しも可能だが、すり傷が入りやすいため施工2日目以降の引越しをすすめています。",
              "FSSCOAT（SDCOAT）：常温硬化の塗料のため、施工翌日に引きずる作業はすすめられないとしています。溶剤系塗料のため施工時にニオイが発生し、硬化後は発生しないと記載しています。",
              "S-STYLE：ガラスコーティングは湿度反応型で、乾燥中に部分的に湿気過多になると、ごくまれに被膜が白く濁ることがあり、その場合は無料修繕としています。",
            ],
          },
          {
            heading: "「ガラス」の名称だけで比べない",
            paras: [
              "クリーンエクスプレスは、現在のガラスフロアコーティングが出回る前にはシリコンコーティングがガラスコーティングと呼ばれていた時代もあり、現在でもシリコンコーティングをガラスコーティングという会社も存在すると記載しています。同じ「ガラス」の名称でも、成分や保証の年数は製品ごとに異なります。",
              "比較するときは、製品名、保証年数と保証の対象、使える洗剤や薬剤、歩行・家具の設置までの時間を同じ項目で各社に確認すると、違いが分かりやすくなります。",
              "床材への施工可否は、施工会社と床材メーカーで案内が異なることがあります。たとえばジェブは施工可能床材の一覧に大建工業の床材を掲載していますが、DAIKENは上の注意のとおり、同社の床材にフロアコーティングを行わないよう案内しています。床材メーカーの案内を確認したうえで判断してください。",
            ],
            note: (
              <>
                UV硬化型との違いは<Link href="/service/uv-coating/" className="underline">UVフロアコーティング</Link>、種類の整理は<Link href="/know/coating-types/" className="underline">フロアコーティングの種類の違い</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/service/floor-coating/", label: "フロアコーティングの費用・業者選び" }}
        secondary={{ href: "/service/uv-coating/", label: "UVフロアコーティングと比較" }}
        related={[
          { href: "/company/s-style/", label: "S-STYLE" },
          { href: "/company/cleanexpress/", label: "クリーンエクスプレス" },
          { href: "/company/purecoat/", label: "ピュアコート" },
          { href: "/company/belcasa/", label: "ベルカーサ" },
          { href: "/company/jeb/", label: "ジェブ（EPCOAT）" },
          { href: "/company/fsscoat/", label: "FSSCOAT" },
          { href: "/know/coating-warranty/", label: "コーティングの保証と点検" },
          { href: "/service/wet-area-coating/", label: "水まわりコーティング" },
          { href: "/know/wax-or-coating/", label: "ワックスかコーティングか" },
          { href: "/maker/daiken/", label: "DAIKENの床のお手入れ" },
          { href: "/maker/lixil/", label: "LIXILの床のお手入れ" },
        ]}
        sources={[
          { label: "S-STYLE「プレミアムナノ30 ガラスコーティング」", href: "https://www.s-style-coating.com/flooring/premium-nano-30/", checked: "2026年11月1日" },
          { label: "S-STYLE「プレミアムコート ガラスフロアコーティング」", href: "https://www.s-style-coating.com/flooring/premium/", checked: "2026年11月1日" },
          { label: "S-STYLE「フロアコーティング価格 費用相場・料金表」", href: "https://www.s-style-coating.com/price/", checked: "2026年11月1日" },
          { label: "S-STYLE「フロアコーティングの保証について　無料修繕保証」", href: "https://www.s-style-coating.com/warranty/", checked: "2026年11月1日" },
          { label: "クリーンエクスプレス「ガラスフロアコーティング」", href: "https://www.cleanexpress.co.jp/glassfloorcoating/", checked: "2026年11月1日" },
          { label: "クリーンエクスプレス「プレミアムガラスフロアコーティング」", href: "https://www.cleanexpress.co.jp/premiumglassfloorcoating/", checked: "2026年11月1日" },
          { label: "クリーンエクスプレス「CleanExpressの保証制度」", href: "https://www.cleanexpress.co.jp/warranty/", checked: "2026年11月1日" },
          { label: "ピュアコート「フロアコーティング 価格・料金表」", href: "https://floorcoating.co.jp/price/", checked: "2026年11月1日" },
          { label: "ピュアコート「よくある質問」", href: "https://floorcoating.co.jp/faq/", checked: "2026年11月1日" },
          { label: "ベルカーサ公式サイト（トップページの料金表・よくある質問）", href: "https://belcasa.jp/", checked: "2026年11月1日" },
          { label: "ジェブ「安心の10年保証について」", href: "https://epcoat.net/service/epcoat-warranty.html", checked: "2026年11月1日" },
          { label: "ジェブ「フロアコーティング【EPCOAT】について」", href: "https://epcoat.net/service/epcoat/", checked: "2026年11月1日" },
          { label: "ジェブ「フロアコーテイングの価格について」", href: "https://epcoat.net/service/floor-price.html", checked: "2026年11月1日" },
          { label: "ジェブ「フロアコーティング施工可能床材」", href: "https://epcoat.net/service/epcoat/flooring.html", checked: "2026年11月1日" },
          { label: "FSSCOAT「無機質ガラスコーティング - SDCOAT」", href: "https://www.professional-coating-bsl.co.jp/floor_glasscoat.html", checked: "2026年11月1日" },
          { label: "FSSCOAT「保証内容」", href: "https://www.professional-coating-bsl.co.jp/info_warranty.html", checked: "2026年11月1日" },
          ...MAKER_COATING_SOURCES,
        ]}
      />
    </>
  );
}
