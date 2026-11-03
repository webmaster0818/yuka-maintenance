import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const faqs = [
  {
    q: "床用ワックスに使用期限はありますか？",
    a: "リンレイは、特に使用期限はないものの、保管状況により腐敗したり内容物が変質したりするとしています。異臭などがなければ使えるとしています。",
  },
  {
    q: "残ったワックスはどう保管しますか？",
    a: "リンレイは、一度容器から出したワックスは元の容器に戻さず、フタをしっかり締めて冷暗所に保管するよう案内しています。DAIKENは、凍結させないこと、古いワックスと新しいワックスをボトルで混ぜて保管しないことも挙げています。",
  },
  {
    q: "使い切れなかったワックスはどう捨てますか？",
    a: "リンレイは、布や新聞紙に含ませて燃えるゴミとして出し、空き容器はお住まいの地域の廃棄方法に従うよう案内しています。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "床用ワックスの使用期限・保管・捨て方｜リンレイ・DAIKENの公式の案内",
  alternates: { canonical: "/know/wax-storage-disposal/" },
  description:
    "床用ワックスに使用期限はあるか、残ったワックスの保管場所、使い切れないワックスの捨て方を、リンレイのよくある質問・製品ページとDAIKEN「DKワックスネオ」の使用方法から整理しました。使った道具の洗い方もまとめています。",
};

export default function WaxStorageDisposalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumb="ワックスの保管と処分"
        h1="床用ワックスの使用期限・保管・捨て方｜リンレイ・DAIKENの公式の案内"
        lead={
          <>
            <p className="mb-3">
              リンレイは、床用ワックスに<strong>特に使用期限はない</strong>としています。ただし保管状況によって腐敗・変質することがあり、異臭などがなければ使えるとしています。
            </p>
            <p>
              残ったワックスは容器に戻さず、フタを締めて冷暗所に保管します。捨てるときは布や新聞紙に含ませて燃えるゴミに出すよう案内されています。
            </p>
          </>
        }
        notice="このページはリンレイのよくある質問・製品ページと、DAIKEN「DKワックスネオ」の使用方法（いずれも2026年11月3日確認）をもとにしています。"
        sections={[
          {
            heading: "保管のしかた",
            tone: "amber",
            table: {
              head: ["項目", "メーカーの案内"],
              rows: [
                ["容器から出したワックス", "元の容器に戻さない（リンレイ・DAIKEN）。"],
                ["保管場所", "フタをしっかり締めて冷暗所に保管する（リンレイ・DAIKEN）。"],
                ["避ける場所", "凍結するおそれのある場所、直射日光の当たる所、火気の近く、40℃以上の高温になる所には保管しない（リンレイ「オール」製品ページ）。"],
                ["凍結", "凍結させない（DAIKEN）。"],
                ["混ぜて保管", "古いワックスと新しいワックスをボトルに混ぜて保管することは絶対にしない（DAIKEN）。"],
                ["置き場所", "子供の手の届く所やペットがいたずらする所に置かない（リンレイ）。"],
              ],
            },
          },
          {
            heading: "使用期限と、使う前の確認",
            paras: [
              "リンレイは、ワックスに特に使用期限はないとしています。保管状況により腐敗したり内容物が変質したりするため、異臭などがないかを確認してから使います。",
              "成分が異なるワックスを混ぜて使うと白化したりムラになるとしています。残りが少ないからといって別のワックスと混ぜないでください。",
            ],
            note: (
              <>
                混ぜて白くなった場合は<Link href="/trouble/wax-whitening/" className="underline">ワックスが白くなる原因と直し方</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "捨て方",
            list: [
              "残ったワックスは、布や新聞紙に含ませて燃えるゴミとして出します（リンレイ）。",
              "空き容器は、お住まいの地域の廃棄方法に従います（リンレイ）。分別区分は自治体の案内で確認してください。",
            ],
          },
          {
            heading: "使った道具の手入れ",
            list: [
              "ワックスがけに使った布やモップなどは、乾かないうちに水洗いし、日陰干しします。一度固まると元に戻せないとしています（リンレイ）。",
              "トレイやワイパー、モップ糸なども、液が乾かないうちに水洗いします。使い捨ての取り替えシートは除きます（リンレイ）。",
              "使用後の雑巾は、乾かないうちによく水洗いして乾かせば再度利用できるとしています（DAIKEN）。",
            ],
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/service/wax/", label: "ワックスがけを業者に頼む" }}
        secondary={{ href: "/cost/diy-vs-pro/", label: "DIYと業者依頼の比較" }}
        related={[
          { href: "/product/rinrei-wax-compare/", label: "リンレイ家庭用ワックスの比較" },
          { href: "/product/rinrei-all/", label: "リンレイ オール" },
          { href: "/product/daiken-dk-wax-neo/", label: "DAIKEN DKワックスネオ" },
          { href: "/trouble/wax-spot-repair/", label: "足跡・髪の毛・シミの部分補修" },
          { href: "/know/wax-types/", label: "ワックスの種類と選び方" },
        ]}
        sources={[
          { label: "株式会社リンレイ「ワックス製品について」のよくある質問", href: "https://www.rinrei.co.jp/home_care/question/", checked: "2026年11月3日" },
          { label: "株式会社リンレイ「オール」（使用上の注意）", href: "https://www.rinrei.co.jp/home_care/wax/02/all.html", checked: "2026年11月3日" },
          { label: "DAIKENパーツショップ「お手入れ製品：DKワックスネオのご使用方法」", href: "https://www.daiken.jp/service/s/report_03", checked: "2026年11月3日" },
        ]}
      />
    </>
  );
}
