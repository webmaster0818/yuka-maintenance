import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const CHECKED = "2026年11月4日";

const faqs = [
  {
    q: "ペットがフローリングで粗相をしたら、どう拭けばよいですか？",
    a: "EIDAI・朝日ウッドテックは、固く絞った雑巾などですぐに拭き取るよう案内しています。EIDAIは、排泄物を放置すると水にぬれた状態以上にヒビ割れやシミ、変色の恐れがあるとしています。",
  },
  {
    q: "ペットのよだれが固まって取れないときは？",
    a: "EIDAIは、唾液を放置すると固化して固く絞った雑巾ではきれいに拭き取れない場合があり、その際は住居用洗剤（中性）を含ませた雑巾で拭き取るよう案内しています。",
  },
  {
    q: "ペット向けのフローリングなら傷や滑りの心配はありませんか？",
    a: "ノダ・EIDAIは、ペット向けの製品でも傷や汚れがまったく付かないわけではない、すべてのペットの歩行に最適とは限らないと記載しています。EIDAIは、犬が走り回る場合や、爪や肉球まわりの毛の手入れを怠った場合は滑ることがあるとしています。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "ペットと暮らすフローリングの手入れ｜排泄物・よだれ・爪の傷をメーカー公式で確認",
  alternates: { canonical: "/know/pet-floor-care/" },
  description:
    "犬や猫と暮らす家のフローリングで、排泄物・よだれの拭き取り方、爪による傷、ペット向け床材の注意点を、EIDAI・パナソニック・朝日ウッドテック・ウッドワン・ノダの公式の案内から整理しました。",
};

export default function PetFloorCarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumb="ペットと暮らす床の手入れ"
        h1="ペットと暮らすフローリングの手入れ｜排泄物・よだれ・爪の傷をメーカー公式で確認"
        lead={
          <>
            <p className="mb-3">
              床材メーカーは、ペットの排泄物を<strong>放置するとシミや変色の原因になる</strong>として、すぐに拭き取るよう案内しています。
            </p>
            <p>
              爪による傷は、どのメーカーも「付くことがある」と記載しています。ペット向けの床材でも、傷や滑りがまったく起きないわけではありません。
            </p>
          </>
        }
        notice={`このページはEIDAI・パナソニック・朝日ウッドテック・ウッドワン・ノダの公式のお手入れの案内（いずれも${CHECKED}確認）をもとにしています。`}
        sections={[
          {
            heading: "排泄物・よだれへの対応（メーカー別）",
            tone: "amber",
            table: {
              head: ["メーカー", "排泄物", "そのほか"],
              rows: [
                ["EIDAI", "放置すると水にぬれた状態以上にヒビ割れやシミ、変色の恐れ。直ちに固く絞った雑巾で拭き取る", "唾液が固化した場合は住居用洗剤（中性）を含ませた雑巾で拭き取る"],
                ["パナソニック", "放置するとシミ・変色の原因。すぐに拭き取る", "ペット用トイレの周辺にマットなどを敷くことを勧めている"],
                ["朝日ウッドテック", "固く絞った雑巾などですぐに拭き取る。放置するとシミ・汚染が発生する", "—"],
                ["ウッドワン", "放置するとシミや変色する場合がある。すぐに拭き取る", "—"],
              ],
              caption: "EIDAIはシートフローリングについて、排泄物を放置すると継ぎ目から水分が浸透し、変色、膨れ、すき間、表面はがれが起こる場合があるとしています。",
            },
          },
          {
            heading: "ペット用トイレのまわり",
            list: [
              "トイレの周辺にはマットなどを敷くよう勧められています（EIDAI・パナソニック）。",
              "マットを長期間敷いたままにすると、湿気がこもりシミになる可能性があります。EIDAIは、定期的に位置を変えるよう案内しています。",
              "マットの固定にガムテープや両面テープを使うと、はがすときに床表面を傷めるもとになります（EIDAI・パナソニック・ウッドワン）。",
            ],
          },
          {
            heading: "爪による傷と、外から持ち込む砂",
            list: [
              "ペットの爪で床表面を傷つける場合があります（EIDAI・朝日ウッドテック・ウッドワン）。パナソニックは、ペットの爪やおもちゃの引きずりでひっかき傷が発生するおそれがあるとしています。",
              "ペットが屋外から室内に入る場合、砂やゴミが残っていると傷が付いたり、目地に入って取れなくなったりします（EIDAI）。",
            ],
            note: (
              <>
                付いた傷の直し方は<Link href="/trouble/floor-scratch-repair/" className="underline">フローリングの傷・へこみの補修</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "ペット向けの床材を選ぶ・使うとき",
            paras: [
              "ノダは、すべりにくい加工と耐アンモニア塗装の床材を、ペット対応の床材として案内しています。ペットの粗相によるふん尿やよだれによる床面の変色・ツヤ変化を抑えるとしたうえで、まったく滑らないわけではなく、傷や汚れがまったく付かないわけでもないと記載しています。",
              "EIDAIは、犬の肉球のすべり抵抗値を考慮した「パートナーワン」について、すべてのペットの歩行に最適とは限らないとしています。ワックスを塗ると防滑性など本来の性能が損なわれる、滑り止め付きのスリッパは表面の摩耗を早めるため使用しない、ほかのフローリングと同じ床面で使うと滑りやすさの違いでつまずく危険がある、といった注意も記載しています。",
            ],
          },
          {
            heading: "ワックスを塗る前に",
            paras: [
              "ペットの滑り対策としてワックスやコーティングを考える場合は、床材メーカーがワックスを認めているかを先に確かめてください。ワックス不要の床材や、ワックスを塗ると性能が損なわれる床材があります。",
            ],
            note: (
              <>
                ワックス後に滑る場合は<Link href="/trouble/wax-slippery/" className="underline">ワックスを塗って滑るとき</Link>、ワックスが要らない床の見分け方は<Link href="/know/no-wax-floor/" className="underline">ワックス不要の床</Link>をご覧ください。
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
          { href: "/know/floor-scratch-prevention/", label: "床の傷・へこみを防ぐ" },
          { href: "/trouble/floor-stain-removal/", label: "床のシミ・汚れの落とし方" },
          { href: "/trouble/wax-slippery/", label: "ワックスを塗って滑る" },
          { href: "/maker/eidai/", label: "EIDAIのフローリング" },
          { href: "/maker/noda/", label: "ノダの床材のお手入れ" },
        ]}
        sources={[
          { label: "永大産業（EIDAI）「木質フローリング快適生活マニュアル」（PDF）", href: "https://www.eidai.com/contact/oteire/pdf/K1892609.pdf", checked: CHECKED },
          { label: "パナソニック「床への気配り」（木質床材・フローリングのお手入れ）", href: "https://sumai.panasonic.jp/support/care/floor/02/", checked: CHECKED },
          { label: "朝日ウッドテック「生活される上でのご注意」", href: "https://www.woodtec.co.jp/maintenance/index05/", checked: CHECKED },
          { label: "ウッドワン「木質床材お手入れマニュアル」（床材全般・PDF）", href: "https://www.woodone.co.jp/static/digitalcatalog/pdf/461_F-AL.pdf", checked: CHECKED },
          { label: "株式会社ノダ「床材についてのよくあるご質問」", href: "https://www.noda-co.jp/support/faq/floor/", checked: CHECKED },
        ]}
      />
    </>
  );
}
