import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const faqs = [
  {
    q: "手指消毒のアルコールで床のワックスが白くなるのはなぜですか？",
    a: "ワックスメーカーのリンレイは、アルコール消毒剤（エタノール）によってワックスの表面が白くなる現象を「白化」と呼び、病院や商業施設の入口などで問題になりやすいとしています。白化した部分を修復するスプレー剤や、アルコールで白くなりにくい樹脂ワックス・コーティング剤を業務用製品として案内しています。",
  },
  {
    q: "病室など通行を止めにくい場所でもワックスがけはできますか？",
    a: "リンレイは病院向けの速乾タイプ樹脂ワックス「NEW アルテクト速乾」を、通行制限のしにくい病室、廊下などでも短時間で作業が完了する製品として案内しています。ただし完全に乾燥するまでは歩行を避けるよう記載しています。作業できる時間帯と範囲は依頼先と相談してください。",
  },
  {
    q: "病院・高齢者施設の床清掃に対応する業者はありますか？",
    a: "当サイトの掲載社では、ワクスクリーンが法人向けの床面清掃の対応施設としてクリニック・老健施設を挙げています。エコプロコートは、住宅だけでなく病院や保育園などでも多数の実績があると公式サイトに記載しています。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "病院・高齢者施設の床清掃｜アルコールで白くなるワックスと業者に伝えること",
  alternates: { canonical: "/facility/hospital-care-facility/" },
  description:
    "病院・高齢者施設の床は、通路・病室・食堂の塩ビシート、汚物処理室や浴室のタイルなど場所で床材が変わり、手指消毒のアルコールでワックスが白くなる「白化」が起きやすい場所です。リンレイの業務用製品情報と掲載社の公式情報（2026年11月1日確認）をもとに、業者に依頼するときの確認事項を整理しました。",
};

export default function HospitalCareFacilityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumbParent="施設別の床清掃"
        crumb="病院・高齢者施設"
        h1="病院・高齢者施設の床清掃｜アルコールで白くなるワックスと業者に伝えること"
        lead={
          <>
            <p className="mb-3">
              病院・高齢者施設では、<strong>手指消毒のアルコールが床に落ちて、ワックスの表面が白くなる（白化）</strong>ことがあります。ワックスメーカーのリンレイは、白化を修復する製品や、アルコールで白くなりにくいワックス・コーティング剤を病院向けに案内しています。
            </p>
            <p>
              また、通路・病室・食堂は塩ビシート、汚物処理室や浴室はタイルというように、場所によって床材が変わります。業者に依頼する前に、場所ごとの床材と、作業できる時間帯を整理しておくと見積もりがそろいやすくなります。
            </p>
          </>
        }
        notice="このページは、リンレイの業務用製品情報（施設・使用場所から製品を探す、各製品ページ）と、当サイト掲載社の公式サイト（いずれも2026年11月1日確認）をもとにしています。製品名は施設で使われる例として挙げたもので、使用する製品は依頼先が床材と状態を見て選びます。"
        sections={[
          {
            heading: "場所ごとの床材（リンレイの分類）",
            tone: "amber",
            paras: [
              "リンレイ業務用サイトの「病院・高齢者施設」のページでは、使用場所ごとに次の床材を示しています。",
            ],
            table: {
              head: ["使用場所", "床材"],
              rows: [
                ["通路", "ポリウレタン加工リノリウム"],
                ["入居者個室", "塩ビシート"],
                ["倉庫・リネン室", "塩ビシート"],
                ["食堂・談話室", "塩ビシート"],
                ["脱衣所", "塩ビシート"],
                ["汚物処理室", "タイル"],
                ["介護浴室・浴室", "防滑タイル"],
              ],
              caption: "リノリウムは、後述するアルテクト速乾・プロテクションコートtype Aの「使えない素材」に挙げられています。床材によって使える製品が変わるため、場所ごとの床材を業者に伝えてください。",
            },
          },
          {
            heading: "手指消毒のアルコールによるワックスの白化",
            paras: [
              "リンレイは、消毒用エタノールで白くなったワックスについて、ショッピングモール、病院、飲食店、公共施設、ホテルなどで起きるものとして、次の製品を業務用に案内しています。",
            ],
            table: {
              head: ["製品", "リンレイの案内"],
              rows: [
                ["アルコール消毒剤で白くなった床ワックスの修復剤 クリア リコーティング", "白化した箇所に1〜2プッシュ噴霧し、乾燥させるスプレー剤。乾燥中はウエス等での拭き上げや歩行を禁止。大理石、ライムストーン等の石灰岩には使用しないよう記載。"],
                ["NEW アルテクト速乾（病院用ワックス）", "消毒用エタノールに耐性を有し、通行制限のしにくい病室、廊下などでも短時間で作業完了する速乾性樹脂ワックス。抗菌剤配合。用途はビニル系床タイル・床シートなどの化学床材で、ゴム床タイル、リノリウム、リノタイルには使えません。"],
                ["FPC プロテクションコートtype A", "水系1液ウレタンコーティング剤。アルコール系手指消毒剤による床ワックスの白化に対して非常に高い耐性があり、次亜塩素酸ナトリウムなどの薬剤にも強いとしています。ゴム床タイル、リノリウム、リノタイルには使えません。"],
              ],
              caption: "アルテクト速乾は「他の種類（水性、乳化性、油性ワックスタイプ）のフロアーポリッシュを使用してきた床には塗布しないでください。大変滑りやすくなり危険です。」と記載しています。今まで使ってきたワックスの種類も業者に伝えます。",
            },
          },
          {
            heading: "コーティングを検討する場合",
            paras: [
              "住宅向けのフロアコーティング会社にも、消毒への強さを挙げている製品があります。クリーンエクスプレスは、同社のガラスフロアコーティングは消毒用アルコールや次亜塩素酸水では溶けないとし、プレミアムガラスフロアコーティングは住宅や店舗、施設などのフローリングに対応すると記載しています。エコプロコートは、住宅だけでなく病院や保育園などでも多数の実績があると記載しています。",
              "ただし、床材メーカーの中にはフロアコーティングをしないよう案内している会社があります。コーティングを検討する場合は、床材のメーカーと品番を確認してから依頼してください。",
            ],
            note: (
              <>
                メーカーの案内は<Link href="/service/glass-coating/" className="underline">ガラスフロアコーティング</Link>のページに引用しています。
              </>
            ),
          },
          {
            heading: "業者に依頼するときに伝えること",
            list: [
              "場所ごとの床材（塩ビシート、リノリウム、タイルなど）と面積",
              "手指消毒剤を置いている場所と、白化が目立つ範囲",
              "今まで使ってきたワックスの種類と、前回の剥離洗浄の時期",
              "作業できる時間帯と、通行を止められる範囲（病室・廊下は通行を止めにくいことがあります）",
              "乾燥までの時間と、歩行を再開できる時間の見込み",
            ],
            note: (
              <>
                当サイトの掲載社では、ワクスクリーンが法人向け床面清掃の対応施設としてクリニック・老健施設を公式サイトに挙げ、定期的な通常洗浄と剥離洗浄を行うと記載しています。依頼の流れは<Link href="/know/store-office-floor/" className="underline">店舗・事務所の床清掃</Link>、作業の種類は<Link href="/service/regular-maintenance/" className="underline">定期メンテナンス</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/service/regular-maintenance/", label: "定期メンテナンスの内容を見る" }}
        secondary={{ href: "/know/store-office-floor/", label: "店舗・事務所の床清掃" }}
        related={[
          { href: "/floor/chemical-floor/", label: "Pタイル・長尺シート" },
          { href: "/service/stripping-wash/", label: "剥離洗浄" },
          { href: "/service/glass-coating/", label: "ガラスフロアコーティング" },
          { href: "/know/toilet-sanitary-floor/", label: "トイレ・洗面所の床" },
          { href: "/facility/school-nursery/", label: "学校・保育園の床清掃" },
          { href: "/facility/office/", label: "オフィスの床清掃" },
          { href: "/company/waksclean/", label: "ワクスクリーン" },
          { href: "/company/ecoprocoat/", label: "エコプロコート" },
        ]}
        sources={[
          { label: "リンレイ「病院・高齢者施設」（施設・使用場所から製品を探す）", href: "https://www.rinrei.co.jp/prouse/use_facility/hospital/", checked: "2026年11月1日" },
          { label: "リンレイ「アルコール消毒剤で白くなった床ワックスの修復剤 クリア リコーティング」", href: "https://www.rinrei.co.jp/prouse/pro_care/floor_wax/flooring_special/clear_recoating.html", checked: "2026年11月1日" },
          { label: "リンレイ「NEW アルテクト速乾」", href: "https://www.rinrei.co.jp/prouse/pro_care/floor_wax/hospital_maintenance/new_altect_sokkan.html", checked: "2026年11月1日" },
          { label: "リンレイ「FPC プロテクションコートtype A」", href: "https://www.rinrei.co.jp/prouse/pro_care/floor_coat/fpc/fpc_protection_coat_type_a.html", checked: "2026年11月1日" },
          { label: "クリーンエクスプレス「ガラスフロアコーティング」", href: "https://www.cleanexpress.co.jp/glassfloorcoating/", checked: "2026年11月1日" },
          { label: "クリーンエクスプレス「プレミアムガラスフロアコーティング」", href: "https://www.cleanexpress.co.jp/premiumglassfloorcoating/", checked: "2026年11月1日" },
          { label: "エコプロコート「国内トップクラスの品質と実績」", href: "https://www.ecoprocoat.co.jp/about/?id=quality-guarantee", checked: "2026年11月1日" },
          { label: "ワクスクリーン「床面清掃」", href: "https://waksclean.jp/hojin/regular_cleaning-floor/", checked: "2026年11月1日" },
        ]}
      />
    </>
  );
}
