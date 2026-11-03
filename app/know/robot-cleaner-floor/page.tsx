import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const faqs = [
  {
    q: "ロボット掃除機でフローリングに傷はつきますか？",
    a: "EIDAIとウッドワンは、ブラシに小石や異物が噛み込んだ場合や、ものを引きずったまま走行した場合など、使用状況によってはフローリング表面を傷つけることがあるとしています。DAIKENは傷や艶落ちの可能性があるため、ロボット掃除機をお勧めしていません。",
  },
  {
    q: "水拭きタイプ（湿式）のロボット掃除機は使えますか？",
    a: "DAIKENは湿式タイプのロボット掃除機を使用しないよう案内しています。ウッドワンも、水を噴き付けるタイプは水分によるひび割れや変色、継ぎ目からの水分による膨れ・すき間・表面の剥がれが生じることがあるとして、使用を控えるよう案内しています。",
  },
  {
    q: "ワックスがけの直後にロボット掃除機を動かしてもよいですか？",
    a: "EIDAIは、ワックスの乾燥が不充分な場合にロボット掃除機がフローリング表面を傷つけるおそれがあるとしています。ワックスが完全に乾いてから使ってください。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "ロボット掃除機でフローリングは傷つく？｜DAIKEN・ウッドワン・EIDAIの公式の案内",
  alternates: { canonical: "/know/robot-cleaner-floor/" },
  description:
    "ロボット掃除機や水拭きタイプのロボットをフローリングに使うときの注意を、DAIKEN・ウッドワン・EIDAIのお手入れの案内から整理しました。傷・艶落ちが起きる条件、湿式タイプを控える理由、ワックス直後の使い方をまとめています。",
};

export default function RobotCleanerFloorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumb="ロボット掃除機と床"
        h1="ロボット掃除機でフローリングは傷つく？｜DAIKEN・ウッドワン・EIDAIの公式の案内"
        lead={
          <>
            <p className="mb-3">
              床材メーカーは、ロボット掃除機について<strong>使用状況によってはフローリング表面を傷つけたり、艶が落ちたりする</strong>ことがあるとしています。
            </p>
            <p>
              水を噴き付ける湿式タイプは、DAIKEN・ウッドワンとも使用しない・控えるよう案内しています。
            </p>
          </>
        }
        notice="このページはDAIKEN・ウッドワン・EIDAIの公式のお手入れの案内（いずれも2026年11月3日確認）をもとにしています。"
        sections={[
          {
            heading: "メーカー別の案内",
            tone: "amber",
            table: {
              head: ["メーカー", "ロボット掃除機（乾式）", "湿式タイプ"],
              rows: [
                ["DAIKEN", "床材への傷や艶落ちの可能性があるため、お勧めしていない", "変色や捲れ、膨れのおそれがあるため使用しない"],
                ["ウッドワン", "ものを引きずったまま走行したり、ブラシに異物が噛み込んだりすると、表面を傷つけることがある", "水分によるひび割れや変色、継ぎ目からの水分による膨れ・すき間・表面の剥がれがあるため控える"],
                ["EIDAI", "ワックスの乾燥が不充分な場合や、ブラシに小石などが噛み込んだ場合に表面を傷つけるおそれ。艶落ちや幅木の傷も", "ウエットタイプ（水を噴きつけるタイプやスチーム洗浄タイプ）は使用しない"],
              ],
            },
          },
          {
            heading: "使うときに確かめること",
            list: [
              "ブラシに小石や異物が噛み込んでいないか確認します（ウッドワン・EIDAI）。",
              "床に物を置いたまま走らせて、引きずらないようにします（ウッドワン）。",
              "ワックスがけの後は、ワックスが完全に乾いてから使います（EIDAI）。",
              "掃除機の取扱説明書を読んだうえで使うよう案内されています（EIDAI）。",
            ],
          },
          {
            heading: "ワックス・コーティングをした床の場合",
            paras: [
              "ワックスがけやフロアコーティングを業者に頼んだ場合は、施工後いつからロボット掃除機を使えるかを業者に確認してください。ワックスの乾燥時間は製品や天候で変わります。",
            ],
            note: (
              <>
                施工後の手入れは<Link href="/know/daily-care/" className="underline">施工後の日常の手入れ</Link>、スチームの扱いは<Link href="/know/steam-mop-floor/" className="underline">床にスチームモップは使えるか</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/know/daily-care/", label: "日常の手入れを見る" }}
        secondary={{ href: "/service/floor-coating/", label: "フロアコーティングの内容を見る" }}
        related={[
          { href: "/know/steam-mop-floor/", label: "床にスチームモップは使えるか" },
          { href: "/maker/daiken/", label: "DAIKENの床のお手入れ" },
          { href: "/maker/woodone/", label: "ウッドワンの床材のお手入れ" },
          { href: "/maker/eidai/", label: "EIDAIのフローリング" },
          { href: "/product/rinrei-wax-compare/", label: "リンレイ家庭用ワックスの比較" },
        ]}
        sources={[
          { label: "DAIKEN よくあるご質問「床材のお手入れ方法一覧」", href: "https://faq.daiken.jp/faq/show/3189?site_domain=user", checked: "2026年11月3日" },
          { label: "ウッドワン「木質床材お手入れマニュアル」（床材全般・PDF）", href: "https://www.woodone.co.jp/static/digitalcatalog/pdf/461_F-AL.pdf", checked: "2026年11月3日" },
          { label: "永大産業（EIDAI）「木質フローリング快適生活マニュアル」（PDF）", href: "https://www.eidai.com/contact/oteire/pdf/K1892609.pdf", checked: "2026年11月3日" },
        ]}
      />
    </>
  );
}
