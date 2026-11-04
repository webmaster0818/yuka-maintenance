import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const CHECKED = "2026年11月4日";

const faqs = [
  {
    q: "窓際のフローリングだけ色が変わってきました。不具合ですか？",
    a: "パナソニック・EIDAI・ウッドワンは、天然木を使った床材は日光や紫外線などで徐々に色が変わる性質があると説明しています。EIDAIは、光により色が濃くなる「変色」と色があせる「退色」があり、光が当たる箇所と当たらない箇所で色合いに差が生じることがあるとしています。",
  },
  {
    q: "日焼けを防ぐにはどうすればよいですか？",
    a: "パナソニック・EIDAI・朝日ウッドテック・ウッドワンとも、カーテンやブラインドなどで直射日光をできるだけ遮るよう案内しています。",
  },
  {
    q: "ラグを敷いていた所だけ色が違います。",
    a: "ウッドワンは、マットやカーペットを置くと周囲と比べて色差が発生することがあるとしています。EIDAIも、カーペットや家具で光が当たらない箇所との色合いに差が生じることがあると記載しています。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "フローリングの日焼け・色あせは防げる？｜直射日光と色の変化をメーカー公式で確認",
  alternates: { canonical: "/know/floor-sunlight-fade/" },
  description:
    "窓際のフローリングの日焼け・色あせ・変色はなぜ起きるのか、防ぐ方法と、ラグや家具の跡で色差が出る理由を、パナソニック・EIDAI・朝日ウッドテック・ウッドワン・サンゲツの公式の案内から整理しました。",
};

export default function FloorSunlightFadePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumb="床の日焼け・色あせ"
        h1="フローリングの日焼け・色あせは防げる？｜直射日光と色の変化をメーカー公式で確認"
        lead={
          <>
            <p className="mb-3">
              パナソニックは、窓からの直射日光が長時間当たると<strong>日焼けによる変色や色あせ、ひび割れ</strong>のおそれがあるとしています。
            </p>
            <p>
              一方で、天然木の床材は使ううちに光や熱で少しずつ色が変わる性質があると、複数のメーカーが説明しています。防げる変化と、素材の性質による変化を分けて考えると判断しやすくなります。
            </p>
          </>
        }
        notice={`このページはパナソニック・EIDAI・朝日ウッドテック・ウッドワン・サンゲツの公式のお手入れの案内（いずれも${CHECKED}確認）をもとにしています。`}
        sections={[
          {
            heading: "直射日光による影響（メーカー別）",
            tone: "amber",
            table: {
              head: ["メーカー", "起きること", "対策"],
              rows: [
                ["パナソニック", "日焼けによる変色や、色あせ、ひび割れのおそれ", "カーテンなどで直射日光をできるだけ遮る"],
                ["EIDAI", "窓際など直射日光が長時間当たると、日焼けによる変色やヒビ割れが生じやすくなる", "カーテンやブラインドなどで直射日光を遮る"],
                ["ウッドワン", "日焼けの進み方が異なるため色のムラが発生したり、ヒビ割れが生じやすくなったりする", "カーテンやブラインド等で直射日光を遮る"],
                ["朝日ウッドテック", "（割れを起こりにくくするための注意として記載）", "カーテン等で直射日光をできるだけ遮る"],
                ["サンゲツ（家庭用フロアタイル）", "長時間直射日光が当たる場所では変退色する可能性", "カーテン・ブラインドなどで日よけをする"],
              ],
            },
          },
          {
            heading: "天然木の色の変化は素材の性質",
            list: [
              "EIDAIは、天然木を使用した製品には光により色が濃くなる「変色」や、色があせる「退色」という性質があるとしています。",
              "パナソニックは、床材表面は熱や光により変色や退色を起こし、使用とともに深みのある色合いに変化していくと説明しています。",
              "ウッドワンは、使用している間に日光や紫外線などで徐々に色が変わることがあり、これも天然木特有の性質だとしています。",
            ],
          },
          {
            heading: "ラグ・家具の跡で色差が出る",
            paras: [
              "光が当たる箇所と、カーペットや家具で光が当たらない箇所では色合いに差が生じることがあります（EIDAI）。ウッドワンも、マットやカーペットを置くと周囲と比べて色差が発生することがあるとしています。",
              "ウッドワンは、すべり止め機能付きのマットは裏面が転写してシミや変色をする可能性があるため、定期的に位置を変えるよう案内しています。",
            ],
          },
          {
            heading: "業者に相談する前に確かめること",
            paras: [
              "メーカーは、日焼けや変色・退色を、天然木の床材そのものの性質として説明しています。",
              "一方で、ワックスの黒ずみや白化など、表面の膜の不具合で色が違って見えている場合もあります。まず症状を切り分けてから依頼先を選んでください。",
            ],
            note: (
              <>
                症状の切り分けは<Link href="/know/floor-symptoms/" className="underline">床の気になる症状の原因</Link>、ワックスの黒ずみは<Link href="/trouble/wax-darkening/" className="underline">ワックスが黒ずむ・ムラになる</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/know/floor-symptoms/", label: "症状の原因を切り分ける" }}
        secondary={{ href: "/know/daily-care/", label: "日常の手入れを見る" }}
        related={[
          { href: "/know/floor-scratch-prevention/", label: "床の傷・へこみを防ぐ" },
          { href: "/know/heater-hot-carpet-floor/", label: "暖房器具・ホットカーペットと床" },
          { href: "/know/muku-floor-care/", label: "無垢フローリングの手入れ" },
          { href: "/maker/panasonic/", label: "パナソニックのフローリングのお手入れ" },
          { href: "/maker/woodone/", label: "ウッドワンの床材のお手入れ" },
        ]}
        sources={[
          { label: "パナソニック「床への気配り」（木質床材・フローリングのお手入れ）", href: "https://sumai.panasonic.jp/support/care/floor/02/", checked: CHECKED },
          { label: "パナソニック「知っておきたい木の特性」", href: "https://sumai.panasonic.jp/support/care/floor/05/", checked: CHECKED },
          { label: "永大産業（EIDAI）「木質フローリング快適生活マニュアル」（PDF）", href: "https://www.eidai.com/contact/oteire/pdf/K1892609.pdf", checked: CHECKED },
          { label: "朝日ウッドテック「生活される上でのご注意」", href: "https://www.woodtec.co.jp/maintenance/index05/", checked: CHECKED },
          { label: "ウッドワン「木質床材お手入れマニュアル」（床材全般・PDF）", href: "https://www.woodone.co.jp/static/digitalcatalog/pdf/461_F-AL.pdf", checked: CHECKED },
          { label: "サンゲツ「ご家庭でのフロアタイルの『お手入れ方法』と『使用上のご注意』」（PDF）", href: "https://contents.sangetsu.co.jp/doc/technical-data/%E3%83%95%E3%83%AD%E3%82%A2%E3%82%BF%E3%82%A4%E3%83%AB_%E3%81%94%E5%AE%B6%E5%BA%AD%E3%81%A7%E3%81%AE%E3%81%94%E4%BD%BF%E7%94%A8%E4%B8%8A%E3%81%AE%E6%B3%A8%E6%84%8F.pdf", checked: CHECKED },
        ]}
      />
    </>
  );
}
