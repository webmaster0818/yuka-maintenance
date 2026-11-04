import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const CHECKED = "2026年11月4日";

const faqs = [
  {
    q: "フローリングの上でホットカーペットを直接使ってもよいですか？",
    a: "ホットカーペット対応の床材かどうかで変わります。EIDAI・ウッドワンは、対応していない床材では床との間に熱がこもりヒビ割れのもとになるとして、断熱性のあるシートやカーペットを間に敷くよう案内しています。対応床材でもウッドワンは隙間が発生することはあるとしています。",
  },
  {
    q: "冬にフローリングのすき間やひび割れが出るのはなぜですか？",
    a: "EIDAIは、木質フローリングは水分変化でわずかに伸び縮みし、エアコンなどを長時間連続して使うと室内が乾燥しすぎて継ぎ目にすき間があいたり表面割れが生じたりすることがあると説明しています。パナソニック・ウッドワンは、望ましい湿度を45～70％としています。",
  },
  {
    q: "床暖房の上にラグを敷いてもよいですか？",
    a: "パナソニックは、床暖房の上にカーペットなど放熱を妨げるものを置かないよう案内しています。ウッドワンも、床暖房のあるフローリングの上にはマットやカーペットを置かないよう記載しています。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "ホットカーペット・暖房器具でフローリングは傷む？｜ひび割れ・すき間を防ぐ方法をメーカー公式で確認",
  alternates: { canonical: "/know/heater-hot-carpet-floor/" },
  description:
    "ホットカーペット、温風ヒーター、冷蔵庫の熱風、エアコンの乾燥でフローリングにひび割れやすき間が出るのを防ぐ方法と、床暖房の上に敷く物の注意を、パナソニック・EIDAI・ウッドワン・朝日ウッドテック・サンゲツの公式の案内から整理しました。",
};

export default function HeaterHotCarpetFloorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumb="暖房器具・ホットカーペットと床"
        h1="ホットカーペット・暖房器具でフローリングは傷む？｜ひび割れ・すき間を防ぐ方法をメーカー公式で確認"
        lead={
          <>
            <p className="mb-3">
              パナソニックは、ひび割れは<strong>湿度や温度変化による床材の伸縮</strong>によって起こると説明しています。
            </p>
            <p>
              暖房器具の熱が直接床に当たること、ホットカーペットの熱がこもること、エアコンで室内が乾燥しすぎることが、ひび割れやすき間の原因として挙げられています。
            </p>
          </>
        }
        notice={`このページはパナソニック・EIDAI・ウッドワン・朝日ウッドテック・サンゲツの公式のお手入れの案内（いずれも${CHECKED}確認）をもとにしています。`}
        sections={[
          {
            heading: "熱源ごとの注意（メーカーの案内）",
            tone: "amber",
            table: {
              head: ["熱源", "起きること", "対策"],
              rows: [
                ["ホットカーペット・電気カーペット", "床材との間に熱がこもり、ヒビ割れや継ぎ目の隙間が発生することがある（ウッドワン・EIDAI）。床のひび割れや変色を起こす場合がある（パナソニック）", "対応床材以外は、断熱性のあるシートやカーペットを間に敷く（ウッドワン・EIDAI）。朝日ウッドテックは、床との間にカーペット等を敷いて熱をやわらげるよう案内。パナソニックは例として毛足のない3mm以上の厚みのカーペットやフェルトを挙げている"],
                ["温風ヒーター・反射式ストーブ", "熱風や熱気が直接当たると、ヒビ割れや変色、継ぎ目の隙間のもと（ウッドワン・EIDAI）", "小さなマットなどを敷いて保護する（ウッドワン・EIDAI・パナソニック）。朝日ウッドテックは、温風が直接当たらないようカーペット等を敷くよう案内"],
                ["冷蔵庫の熱風", "直接床に当たるとヒビ割れや変色のもと（EIDAI・パナソニック）", "マットなどを敷いて保護する（EIDAI・パナソニック・ウッドワン）"],
                ["エアコン（乾燥）", "長時間連続して使うと室内が乾燥しすぎ、継ぎ目のすき間や表面割れが生じることがある（EIDAI・ウッドワン・パナソニック）", "加湿器などで適度な湿気を補う。望ましい湿度は45～70％（パナソニック・ウッドワン）"],
              ],
            },
          },
          {
            heading: "ホットカーペット対応の床材でも",
            paras: [
              "ウッドワン・EIDAIは、ホットカーペット対応の床材について、直接使用してもヒビ割れが起こりにくい仕様だと説明しています。ウッドワンは、対応床材でも隙間が発生することはあるとしています。",
              "お使いの床材が対応しているかは、床材の品番や取扱説明書、施工した業者に確認してください。",
            ],
          },
          {
            heading: "床暖房のある部屋",
            list: [
              "床暖房の上にカーペットなど放熱を妨げるものを置かないでください。熱がこもり、ひび割れ・変形・収縮・変色の原因になります（パナソニック）。",
              "ウッドワンも、床暖房のあるフローリングの上にはマットやカーペットを置かないよう案内しています。ヒビ割れや継ぎ目の隙間のもとになるとしています。",
              "ワックスがけは、床暖房の電源を切り、床が冷えてから行います（パナソニック・ウッドワン）。",
            ],
            note: (
              <>
                床暖房の床にワックスをかける手順は<Link href="/know/floor-heating-wax/" className="underline">床暖房の床とワックス</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "加湿器を使うときの注意",
            paras: [
              "加湿器の吹出口近くの床が水ぬれすると、変色やひび割れが起こることがあります。パナソニック・EIDAI・ウッドワンは、加湿器の位置を高くするか吹出口の向きを変え、ぬれた場合はすぐに拭き取るよう案内しています。",
            ],
            note: (
              <>
                水ぬれの対策は<Link href="/know/floor-water-damage/" className="underline">水こぼし・結露から床を守る</Link>にまとめています。
              </>
            ),
          },
          {
            heading: "フロアタイル・ビニル床の場合",
            paras: [
              "サンゲツは家庭用フロアタイルについて、熱によって変退色・溶融する可能性があるとしています。温風ヒーターの吹き出し口には断熱できるマットを置き、温風が直接当たらないようにするよう案内しています。ホットカーペットなど暖房器具の熱が長時間加わると、変質や変色、突き上げや膨れの原因になるとしています。",
            ],
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/know/floor-heating-wax/", label: "床暖房の床とワックスを見る" }}
        secondary={{ href: "/know/daily-care/", label: "日常の手入れを見る" }}
        related={[
          { href: "/know/floor-water-damage/", label: "水こぼし・結露から床を守る" },
          { href: "/know/floor-sunlight-fade/", label: "床の日焼け・色あせ" },
          { href: "/know/floor-scratch-prevention/", label: "床の傷・へこみを防ぐ" },
          { href: "/maker/woodone/", label: "ウッドワンの床材のお手入れ" },
          { href: "/maker/sangetsu/", label: "サンゲツの床材のお手入れ" },
        ]}
        sources={[
          { label: "パナソニック「床への気配り」（木質床材・フローリングのお手入れ）", href: "https://sumai.panasonic.jp/support/care/floor/02/", checked: CHECKED },
          { label: "パナソニック「床暖房・階段・手すりのお手入れ」", href: "https://sumai.panasonic.jp/support/care/floor/04/", checked: CHECKED },
          { label: "永大産業（EIDAI）「木質フローリング快適生活マニュアル」（PDF）", href: "https://www.eidai.com/contact/oteire/pdf/K1892609.pdf", checked: CHECKED },
          { label: "ウッドワン「木質床材お手入れマニュアル」（床材全般・PDF）", href: "https://www.woodone.co.jp/static/digitalcatalog/pdf/461_F-AL.pdf", checked: CHECKED },
          { label: "朝日ウッドテック「生活される上でのご注意」", href: "https://www.woodtec.co.jp/maintenance/index05/", checked: CHECKED },
          { label: "サンゲツ「ご家庭でのフロアタイルの『お手入れ方法』と『使用上のご注意』」（PDF）", href: "https://contents.sangetsu.co.jp/doc/technical-data/%E3%83%95%E3%83%AD%E3%82%A2%E3%82%BF%E3%82%A4%E3%83%AB_%E3%81%94%E5%AE%B6%E5%BA%AD%E3%81%A7%E3%81%AE%E3%81%94%E4%BD%BF%E7%94%A8%E4%B8%8A%E3%81%AE%E6%B3%A8%E6%84%8F.pdf", checked: CHECKED },
        ]}
      />
    </>
  );
}
