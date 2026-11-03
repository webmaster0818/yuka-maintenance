import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const faqs = [
  {
    q: "床暖房のフローリングにワックスはかけられますか？",
    a: "かけられます。リンレイ・EIDAI・ウッドワン・DAIKENは、いずれも床暖房の電源（スイッチ）を切り、床面が冷めてからワックスを塗るよう案内しています。",
  },
  {
    q: "床暖房をつけたままワックスを塗るとどうなりますか？",
    a: "EIDAIは、床暖房中に行うとフローリング表面のヒビ割れ、変色などの原因や、床暖房パネルの故障の原因になるとしています。ウッドワンも同様に、床暖房パネルの故障やヒビ割れ、変色の原因になるとしています。",
  },
  {
    q: "塗ったあと、いつから床暖房をつけてよいですか？",
    a: "EIDAIとリンレイ（オール・ハイテクフローリングコートなど）は、ワックスが完全に乾くまで床暖房を使用しないよう案内しています。リンレイの性能表の乾燥時間は約30分ですが、よくある質問ではおよそ30分〜1時間としています。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "床暖房の床にワックスをかけるとき｜電源・乾燥・使えるワックスのメーカー公式の案内",
  alternates: { canonical: "/know/floor-heating-wax/" },
  description:
    "床暖房のフローリングにワックスをかける手順と注意を、リンレイ・EIDAI・ウッドワン・DAIKENの公式の案内から整理しました。電源を切って床面を冷ます理由、乾くまで床暖房を使わないこと、目地に溜めない塗り方をまとめています。",
};

export default function FloorHeatingWaxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumb="床暖房の床のワックスがけ"
        h1="床暖房の床にワックスをかけるとき｜電源・乾燥・使えるワックスのメーカー公式の案内"
        lead={
          <>
            <p className="mb-3">
              床暖房の床にもワックスはかけられます。メーカー各社の案内は共通していて、<strong>床暖房の電源を切り、床面が冷めてから塗る</strong>ことです。
            </p>
            <p>
              EIDAIとリンレイは、ワックスが完全に乾くまで床暖房を使わないよう案内しています。
            </p>
          </>
        }
        notice="このページはリンレイ・EIDAI・ウッドワン・DAIKENの公式の案内（いずれも2026年11月3日確認）をもとにしています。"
        sections={[
          {
            heading: "メーカー別の案内",
            tone: "amber",
            table: {
              head: ["メーカー", "床暖房の床でのワックスがけ"],
              rows: [
                ["リンレイ（よくある質問）", "床暖房の電源を切り、床面が冷めてからワックスを塗布し、自然乾燥させる。ワックスが目地に溜まらないよう厚塗りは避ける。"],
                ["リンレイ（製品ページ）", "床暖房は電源を切り、床面が冷めてから使う。オール・ハイテクフローリングコートなどは、ワックスが乾くまで床暖房を使用しないとしている。"],
                ["EIDAI", "床暖房のスイッチを切り、表面が冷えてから行う。ワックスが完全に乾くまで床暖房のスイッチは入れない。床暖房中に行うとヒビ割れ、変色、床暖房パネルの故障の原因。"],
                ["ウッドワン", "床暖房用フローリングのお手入れは、スイッチを切り表面が冷えてから行う。床暖房中の作業は床暖房パネルの故障、ヒビ割れ、変色などの原因。"],
                ["DAIKEN（DKワックスネオ）", "床暖房は電源を切り、床面が冷めてからワックスを使用する。"],
              ],
            },
          },
          {
            heading: "手順（メーカーの案内をまとめたもの）",
            steps: [
              { title: "床暖房を切って床面を冷ます", body: "電源を切り、床面が冷めるのを待ちます（リンレイ・EIDAI・ウッドワン・DAIKEN）。" },
              { title: "汚れと洗剤分を落とす", body: "床用洗剤で汚れを落とし、水拭きで洗剤分を取ってよく乾かします（リンレイ）。洗剤分が残るとワックスの密着が悪くなります（ウッドワン）。" },
              { title: "薄く塗り、目地に溜めない", body: "厚塗りは避け、目地に溜まらないように塗ります（リンレイ）。" },
              { title: "乾くまで床暖房をつけない", body: "自然乾燥させ、ワックスが完全に乾くまで床暖房のスイッチは入れません（リンレイ・EIDAI）。" },
            ],
          },
          {
            heading: "ワックスの選び方",
            paras: [
              "リンレイの「フローリング専用ワックス」と「フローリング専用ワックス つやなし」は、製品ページで「床暖房対応」と表示されています。ほかのリンレイ家庭用樹脂ワックスも、電源を切って床面が冷めてから使う注意つきで案内されています。",
              "床材メーカーが推奨ワックスを指定している場合は、その指定を優先してください。ワックス不要の床材もあります。",
            ],
            note: (
              <>
                製品ごとの違いは<Link href="/product/rinrei-wax-compare/" className="underline">リンレイ家庭用ワックスの比較</Link>、メーカーの指定は<Link href="/maker/eidai/" className="underline">EIDAI</Link>・<Link href="/maker/woodone/" className="underline">ウッドワン</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "季節・室温の条件",
            paras: [
              "リンレイは、室温10℃以下や湿度85％以上のときはワックスの使用を避けるよう案内しています。冬に暖房で室温を上げる場合も、塗っている最中は暖房を切るとしています。",
            ],
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/service/wax/", label: "ワックスがけを業者に頼む" }}
        secondary={{ href: "/know/recoat-timing/", label: "塗り替え時期の目安" }}
        related={[
          { href: "/product/rinrei-wax-compare/", label: "リンレイ家庭用ワックスの比較" },
          { href: "/product/rinrei-flooring-wax-tsuyanashi/", label: "フローリング専用ワックス つやなし" },
          { href: "/trouble/wax-sticky/", label: "ワックスがベタつく" },
          { href: "/trouble/wax-whitening/", label: "ワックスが白くなる" },
          { href: "/product/daiken-dk-wax-neo/", label: "DAIKEN DKワックスネオ" },
          { href: "/know/no-wax-floor/", label: "ワックスができない床材" },
        ]}
        sources={[
          { label: "株式会社リンレイ「ワックス製品について」のよくある質問", href: "https://www.rinrei.co.jp/home_care/question/", checked: "2026年11月3日" },
          { label: "株式会社リンレイ「オール」", href: "https://www.rinrei.co.jp/home_care/wax/02/all.html", checked: "2026年11月3日" },
          { label: "株式会社リンレイ「フローリング専用ワックス」", href: "https://www.rinrei.co.jp/home_care/wax/02/flooring_wax.html", checked: "2026年11月3日" },
          { label: "株式会社リンレイ「フローリング専用ワックス つやなし」", href: "https://www.rinrei.co.jp/home_care/wax/02/flooring_wax_tsuyanashi.html", checked: "2026年11月3日" },
          { label: "永大産業（EIDAI）「木質フローリング快適生活マニュアル」（PDF）", href: "https://www.eidai.com/contact/oteire/pdf/K1892609.pdf", checked: "2026年11月3日" },
          { label: "ウッドワン「木質床材お手入れマニュアル」（床材全般・PDF）", href: "https://www.woodone.co.jp/static/digitalcatalog/pdf/461_F-AL.pdf", checked: "2026年11月3日" },
          { label: "DAIKENパーツショップ「お手入れ製品：DKワックスネオのご使用方法」", href: "https://www.daiken.jp/service/s/report_03", checked: "2026年11月3日" },
        ]}
      />
    </>
  );
}
