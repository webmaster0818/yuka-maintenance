import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const CHECKED = "2026年11月4日";

const faqs = [
  {
    q: "フローリングに水をこぼしたまま放置するとどうなりますか？",
    a: "EIDAI・ウッドワンは、木質フローリングは本質的に水気を嫌い、長時間ぬれたままにするとヒビ割れやシミ、変色のもとになるとしています。ノダは、水性樹脂系ワックスを塗った床では、水をこぼして放置するとワックスが膨潤して白化すると説明しています。",
  },
  {
    q: "観葉植物の鉢を床に直接置いてもよいですか？",
    a: "EIDAI・朝日ウッドテック・ウッドワンは、鉢には必ず水受け用の皿などを敷くよう案内しています。パナソニックは、深めの水受け皿を使い、床に水がこぼれないようにするよう記載しています。",
  },
  {
    q: "加湿器を床に置くときの注意はありますか？",
    a: "パナソニック・EIDAI・ウッドワンは、加湿器の吹出口近くの床表面が水ぬれし、変色やひび割れを起こすことがあるとして、加湿器の位置を高くするか吹出口の向きを変えるよう案内しています。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "フローリングの水こぼし・結露・観葉植物の水対策｜シミや膨れを防ぐ方法をメーカー公式で確認",
  alternates: { canonical: "/know/floor-water-damage/" },
  description:
    "水をこぼしたとき、窓の結露や雨の吹き込み、観葉植物の鉢、加湿器、キッチン・洗面所の水はねからフローリングを守る方法を、EIDAI・パナソニック・朝日ウッドテック・ウッドワン・ノダ・サンゲツの公式の案内から整理しました。",
};

export default function FloorWaterDamagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumb="水こぼし・結露から床を守る"
        h1="フローリングの水こぼし・結露・観葉植物の水対策｜シミや膨れを防ぐ方法をメーカー公式で確認"
        lead={
          <>
            <p className="mb-3">
              EIDAI・ウッドワンは、木質フローリングは<strong>本質的に水気を嫌う</strong>として、ぬれたらすぐに拭き取るよう案内しています。
            </p>
            <p>
              こぼした水だけでなく、結露、雨の吹き込み、鉢の水、加湿器、ぬれたマットの敷きっぱなしも、シミや変色、膨れの原因として挙げられています。
            </p>
          </>
        }
        notice={`このページはEIDAI・パナソニック・朝日ウッドテック・ウッドワン・ノダ・サンゲツの公式のお手入れの案内（いずれも${CHECKED}確認）をもとにしています。`}
        sections={[
          {
            heading: "水がかかる場面と対策",
            tone: "amber",
            table: {
              head: ["場面", "メーカーの案内"],
              rows: [
                ["水をこぼした", "すぐに拭き取る。長時間ぬれたままにするとヒビ割れやシミ、変色のもと（EIDAI・ウッドワン・朝日ウッドテック）"],
                ["窓・縁側", "雨の吹き込みに注意。ぬれた場合はすぐに拭き取る（朝日ウッドテック・EIDAI・ウッドワン・パナソニック）"],
                ["結露", "長期にわたり結露の水分が床に吸収されるとシミや波打ちが起こる（朝日ウッドテック）。ぬれたまま放置すると、ひび割れ・塗膜の白化・膨れなどの原因（パナソニック）"],
                ["観葉植物", "鉢には必ず水受け用の皿などを敷く（EIDAI・朝日ウッドテック・ウッドワン）。深めの水受け皿を使う（パナソニック）"],
                ["キッチン・洗面所", "水が飛び散るおそれのある場所はマットを敷いて保護する（EIDAI・朝日ウッドテック・ウッドワン・パナソニック）"],
                ["加湿器", "吹出口近くの床が水ぬれして変色やひび割れが起こることがある。位置を高くするか吹出口の向きを変える（パナソニック・EIDAI・ウッドワン）"],
              ],
            },
          },
          {
            heading: "マットを敷くときの注意",
            list: [
              "ウッドワンは、マットをぬれたまま放置するとシミや変色の原因になるため、その都度乾かすよう案内しています。",
              "パナソニックは、洗面所で足ふきマットなどぬれた状態のものを敷いたままにしないよう記載しています。ぬれた傘・雨靴・ぞうきんの放置も、しみ・変色・ふくれの原因として挙げています。",
              "EIDAIは、湿気の高くなる場所で長期間マットやカーペットを敷くと湿気がこもりシミになる可能性があるとして、定期的に位置を変えるよう案内しています。",
            ],
          },
          {
            heading: "ワックスを塗った床が白くなった場合",
            paras: [
              "ノダは、水性樹脂系ワックスを塗った床で水をこぼして放置すると、ワックスが水分で膨潤して白化し、一度取り除かないと元には戻らないとしています。住居用中性洗剤を薄めて布に付けてワックスをはがし、洗剤分が残らないよう水拭きしてから乾拭きで仕上げる方法を案内しています。",
            ],
            note: (
              <>
                白化の原因と直し方は<Link href="/trouble/wax-whitening/" className="underline">ワックスが白くなる</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "シートフローリング・フロアタイルの場合",
            list: [
              "EIDAIはシートフローリングについて、基材に木材を使っているため、長時間ぬれたままにすると継ぎ目から水分が入り込み、膨れ、段差やすき間、表面はがれが起こる場合があるとしています。",
              "サンゲツは家庭用フロアタイルについて、長期間使用しない部屋では換気を心がけるよう案内しています。結露を招き、カビや異臭の発生、剥がれ・反り・膨れにつながる可能性があるとしています。",
              "サンゲツは、水拭きや洗浄の際にタイル目地から水や洗浄液が入り込まないよう、モップやぞうきんを絞って量を調整するよう記載しています。",
            ],
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/know/daily-care/", label: "日常の手入れを見る" }}
        secondary={{ href: "/know/toilet-sanitary-floor/", label: "トイレ・洗面所の床を見る" }}
        related={[
          { href: "/trouble/wax-whitening/", label: "ワックスが白くなる" },
          { href: "/know/steam-mop-floor/", label: "床にスチームモップは使えるか" },
          { href: "/know/heater-hot-carpet-floor/", label: "暖房器具・ホットカーペットと床" },
          { href: "/trouble/floor-stain-removal/", label: "床のシミ・汚れの落とし方" },
          { href: "/maker/noda/", label: "ノダの床材のお手入れ" },
        ]}
        sources={[
          { label: "永大産業（EIDAI）「木質フローリング快適生活マニュアル」（PDF）", href: "https://www.eidai.com/contact/oteire/pdf/K1892609.pdf", checked: CHECKED },
          { label: "パナソニック「床への気配り」（木質床材・フローリングのお手入れ）", href: "https://sumai.panasonic.jp/support/care/floor/02/", checked: CHECKED },
          { label: "朝日ウッドテック「生活される上でのご注意」", href: "https://www.woodtec.co.jp/maintenance/index05/", checked: CHECKED },
          { label: "ウッドワン「木質床材お手入れマニュアル」（床材全般・PDF）", href: "https://www.woodone.co.jp/static/digitalcatalog/pdf/461_F-AL.pdf", checked: CHECKED },
          { label: "株式会社ノダ「床材についてのよくあるご質問」", href: "https://www.noda-co.jp/support/faq/floor/", checked: CHECKED },
          { label: "サンゲツ「ご家庭でのフロアタイルの『お手入れ方法』と『使用上のご注意』」（PDF）", href: "https://contents.sangetsu.co.jp/doc/technical-data/%E3%83%95%E3%83%AD%E3%82%A2%E3%82%BF%E3%82%A4%E3%83%AB_%E3%81%94%E5%AE%B6%E5%BA%AD%E3%81%A7%E3%81%AE%E3%81%94%E4%BD%BF%E7%94%A8%E4%B8%8A%E3%81%AE%E6%B3%A8%E6%84%8F.pdf", checked: CHECKED },
        ]}
      />
    </>
  );
}
