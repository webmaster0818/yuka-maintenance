import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";
import MakerCoatingCaution, { MAKER_COATING_SOURCES } from "@/app/components/MakerCoatingCaution";

const faqs = [
  {
    q: "UVフロアコーティングとは何ですか？",
    a: "塗ったコーティング剤に紫外線（UV）を照射して硬化させる工法です。クリーンエクスプレスは、通常のフロアコーティングが自然乾燥で徐々に硬化するのに対し、UVフロアコーティングは専用機械で紫外線を照射して塗料を硬化させると説明しています。",
  },
  {
    q: "UVフロアコーティングの保証は何年ですか？",
    a: "会社と製品によって異なります。2026年11月1日に各社の公式ページで確認した範囲では、S-STYLEのUVコートとクリーンエクスプレスのUVフロアコートEcoが30年保証、ピュアコートのハイグレードUVコートが30年、エコプロコートが新築20年・既築10年です。保証の対象は各社とも剥がれや施工不良などで、生活でついた傷や床材自体のへこみは対象外としている会社があります。",
  },
  {
    q: "施工後すぐに生活できますか？",
    a: "エコプロコートは「UV照射で即日入居・使用可」、クリーンエクスプレスは施工当日から生活が可能と案内しています。ピュアコートは歩行可能になるまでの目安を数時間後とし、家具の設置は施工後48〜72時間ほど空けるのが安全としています。",
  },
  {
    q: "クッションフロアなど塩ビ系の床にもできますか？",
    a: "おそうじ本舗は、UVコーティングは塩ビ系の床材に施工できないと案内しています。ピュアコートも、クッションフロアなどの床材は施工対象外としています。床材ごとの可否は依頼先に確認してください。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "UVフロアコーティングの保証年数と料金｜6社の公式情報を比較",
  alternates: { canonical: "/service/uv-coating/" },
  description:
    "UVフロアコーティングは紫外線で塗膜を硬化させる工法です。S-STYLE・クリーンエクスプレス・ピュアコートは30年、エコプロコートは新築20年・既築10年の保証。料金・歩行できるまでの時間・保証の対象外を、各社の公式ページ（2026年11月1日確認）で比較し、DAIKEN・LIXILの注意もあわせて掲載しています。",
};

export default function UvCoatingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumbParent="サービス一覧"
        crumb="UVフロアコーティング"
        h1="UVフロアコーティングの保証年数と料金｜6社の公式情報を比較"
        lead={
          <>
            <p className="mb-3">
              UVフロアコーティングは、塗ったコーティング剤に<strong>紫外線（UV）を照射して硬化させる</strong>工法です。照射して固めるため、各社とも施工後すぐに歩ける点を特徴に挙げています。
            </p>
            <p>
              当サイトの掲載社のうち、UVコーティングを公式サイトに掲載している6社を比較しました。保証年数は<strong>S-STYLE・クリーンエクスプレス・ピュアコートが30年、エコプロコートが新築20年・既築10年</strong>です。床材メーカーの中には、フロアコーティングをしないよう案内している会社もあるため、先に下の注意をご確認ください。
            </p>
          </>
        }
        notice="料金・保証・施工条件は、各社の公式ページ（2026年11月1日確認）の記載です。キャンペーン価格や新築向けの割引価格を含むため、正式な金額は見積もりで確認してください。"
        caution={<MakerCoatingCaution className="mb-8" />}
        sections={[
          {
            heading: "UVコーティングを扱う6社の保証と料金",
            tone: "amber",
            table: {
              head: ["会社（製品名）", "保証", "公式に掲載されている料金"],
              rows: [
                ["S-STYLE（UVコート）", "30年保証", "リビング1畳 7,500円（税別・通常価格）、新築未入居価格 5,600円。その他の部屋1畳 7,500円（同）、新築未入居 5,000円。基本施工費 50,000円（税別・通常価格、新築未入居はサービス）"],
                ["クリーンエクスプレス（UVフロアコートEco）", "30年保証", "一般的な一戸建て住宅で20万円〜30万円程。フローリング面積70㎡の場合は約28万円"],
                ["ピュアコート（ハイグレードUVコート）", "30年", "33m²（20帖）までの基本料金 148,500円（通常価格）、ご新築割引キャンペーン価格 132,000円。20帖からの1m²単価 4,500円（新築割引 4,000円）。いずれも税別"],
                ["エコプロコート（UVフロアコーティング）", "新築20年／既築10年", "公式サイトに価格表の掲載なし（見積もり）"],
                ["FSSCOAT（UV-SCOAT）", "保証ページは「耐久年数に合わせた施工保証」と記載（年数の記載なし）。製品ページの耐久年数は30年以上", "金額の一覧は掲載なし（見積もり）"],
                ["おそうじ本舗（UVコーティング）", "公式ページに「耐久性や耐薬品性等は当社調べであり、保証するものではございません。」と記載", "1帖あたり 12,100円（税込）。サービス時間は約8時間（20帖の場合）"],
              ],
              caption: "S-STYLEの料金は1畳＝1.65m²換算で、新築未入居価格はご新築1年未満が対象と記載されています。ピュアコートのトップページにはUVコーティングのLDK・廊下の価格として148,000円の表記もあり、表は料金ページ（/price/）の記載に合わせています。",
            },
          },
          {
            heading: "保証の対象になるもの・ならないもの",
            paras: [
              "UVコーティングの保証は、主にコーティングの剥がれや施工不良を対象にしています。生活でついた傷や、物を落としたときのへこみは対象外としている会社があります。",
            ],
            table: {
              head: ["会社", "保証の対象", "対象外・有料とされる例"],
              rows: [
                ["S-STYLE", "保証期間内の剥がれ・めくれを回数制限なく無料修繕。施工中の髪の毛などの混入、ひび割れも保証で無料修繕", "表面に入る傷、フローリング自体のへこみ・欠損。使用上の誤り、天災、保証書の提示がない場合など"],
                ["クリーンエクスプレス", "施工不良、塗りムラ・カスレ・塗り残し、異物の混入・剥がれ、塗膜の密着不良による剥がれ", "保証ページに対象外の列挙はなし"],
                ["FSSCOAT", "水滴の放置による溶け出し・剥がれ、飲料・食品の付着時の剥がれ、塗り残し・カスレ、密着不良による剥がれなど（通常の生活で発生した場合）", "重量物の落下による損傷、ペットのツメによるキズ、床材の劣化や損傷に伴う剥がれ、日焼けの黄変など"],
              ],
              caption: "エコプロコート・ピュアコートの保証内容の詳細は、今回確認したページでは年数のみの記載です。おそうじ本舗は耐久性を保証するものではないと記載しています。",
            },
            note: (
              <>
                保証書の読み方は<Link href="/know/coating-warranty/" className="underline">コーティングの保証と点検</Link>で詳しく扱っています。
              </>
            ),
          },
          {
            heading: "施工後に歩ける時間と、施工できない床",
            list: [
              "エコプロコート：「UV照射で即日入居・使用可」と記載。",
              "クリーンエクスプレス：紫外線照射で瞬時に硬化するため、施工当日から生活が可能と記載。入居済みの住宅でも施工可能としています。",
              "S-STYLE：紫外線照射による硬化のため、施工後すぐに歩行が可能と記載。",
              "ピュアコート：UVコーティングは数時間後に歩行可能。ただし家具の設置は施工後48〜72時間ほど空けるのが安全としています。ロフトやグルニエ、クッションフロアなどの床材は施工対象外です。",
              "おそうじ本舗：塩ビ系の床材には施工できないと記載。コーティング剤の種類によっては乾燥に約1時間かかる場合があるとしています。",
            ],
            note: "既存の床にワックスが塗られている場合、剥離作業が必要になり、追加費用がかかることがあります（ピュアコート・S-STYLEの料金ページに記載）。",
          },
          {
            heading: "選ぶ前に知っておきたい点",
            paras: [
              "クリーンエクスプレスは、UVフロアコーティングの注意点として、施工費用がシリコンやガラスより高価になること、光沢が強すぎると感じる場合があること、非常に強靭な塗膜のため部分補修は可能でも全体を剥がして再施工するのは困難なことを挙げています。紫外線を照射する機械は一般販売されていないため、DIYでは施工できないとも記載しています。",
              "光沢は製品によって選べる場合があります。エコプロコートは高光沢・微光沢・ペット専用の製品、おそうじ本舗は光沢のあるタイプとないタイプの2種類を案内しています。",
              "床材への施工可否は、施工会社と床材メーカーで案内が異なることがあります。たとえばクリーンエクスプレスは、UVフロアコーティングのQ&Aで大建工業の床材（サンロードアート・ルームアートなど）にも施工が可能と回答していますが、DAIKENは上の注意のとおり、同社の床材にフロアコーティングを行わないよう案内しています。床材メーカーの案内を確認したうえで判断してください。",
            ],
            note: (
              <>
                ガラス系との違いは<Link href="/service/glass-coating/" className="underline">ガラスフロアコーティング</Link>、種類の整理は<Link href="/know/coating-types/" className="underline">フロアコーティングの種類の違い</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/service/floor-coating/", label: "フロアコーティングの費用・業者選び" }}
        secondary={{ href: "/service/glass-coating/", label: "ガラスフロアコーティングと比較" }}
        related={[
          { href: "/company/s-style/", label: "S-STYLE" },
          { href: "/company/cleanexpress/", label: "クリーンエクスプレス" },
          { href: "/company/purecoat/", label: "ピュアコート" },
          { href: "/company/ecoprocoat/", label: "エコプロコート" },
          { href: "/company/fsscoat/", label: "FSSCOAT" },
          { href: "/company/osoujihonpo/", label: "おそうじ本舗" },
          { href: "/know/coating-warranty/", label: "コーティングの保証と点検" },
          { href: "/know/wax-or-coating/", label: "ワックスかコーティングか" },
          { href: "/maker/daiken/", label: "DAIKENの床のお手入れ" },
          { href: "/maker/lixil/", label: "LIXILの床のお手入れ" },
        ]}
        sources={[
          { label: "S-STYLE「UVフロアコーティング UVコート」", href: "https://www.s-style-coating.com/flooring/uv/", checked: "2026年11月1日" },
          { label: "S-STYLE「フロアコーティング価格 費用相場・料金表」", href: "https://www.s-style-coating.com/price/", checked: "2026年11月1日" },
          { label: "S-STYLE「フロアコーティングの保証について　無料修繕保証」", href: "https://www.s-style-coating.com/warranty/", checked: "2026年11月1日" },
          { label: "クリーンエクスプレス「UVフロアコーティングなら国産塗料のUVフロアコートEco」", href: "https://www.cleanexpress.co.jp/uvcoating/", checked: "2026年11月1日" },
          { label: "クリーンエクスプレス「CleanExpressの保証制度」", href: "https://www.cleanexpress.co.jp/warranty/", checked: "2026年11月1日" },
          { label: "ピュアコート「フロアコーティング 価格・料金表」", href: "https://floorcoating.co.jp/price/", checked: "2026年11月1日" },
          { label: "ピュアコート「よくある質問」", href: "https://floorcoating.co.jp/faq/", checked: "2026年11月1日" },
          { label: "ピュアコート公式サイト（トップページ）", href: "https://floorcoating.co.jp/", checked: "2026年11月1日" },
          { label: "エコプロコート公式サイト（トップページ）", href: "https://www.ecoprocoat.co.jp/", checked: "2026年11月1日" },
          { label: "エコプロコート「国内トップクラスの品質と実績」", href: "https://www.ecoprocoat.co.jp/about/?id=quality-guarantee", checked: "2026年11月1日" },
          { label: "FSSCOAT「UVコーティング｜UV-SCOAT」", href: "https://www.professional-coating-bsl.co.jp/floor_uvscoat.html", checked: "2026年11月1日" },
          { label: "FSSCOAT「保証内容」", href: "https://www.professional-coating-bsl.co.jp/info_warranty.html", checked: "2026年11月1日" },
          { label: "FSSCOAT「価格について」", href: "https://www.professional-coating-bsl.co.jp/info_pricelist.html", checked: "2026年11月1日" },
          { label: "おそうじ本舗「UVコーティング・リフォーム」", href: "https://www.osoujihonpo.com/house-cleaning/coating/uv-coating/", checked: "2026年11月1日" },
          ...MAKER_COATING_SOURCES,
        ]}
      />
    </>
  );
}
