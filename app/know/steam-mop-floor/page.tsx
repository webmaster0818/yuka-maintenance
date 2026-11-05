import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const faqs = [
  {
    q: "フローリングにスチームモップは使えますか？",
    a: "パナソニック・DAIKEN・ノダ・ウッドワン・EIDAIは、いずれも自社の木質床材にスチームモップやスチーム洗浄機を使わないよう案内しています。理由は水分や熱による変色・ひび割れ・反り・膨れなどです。",
  },
  {
    q: "クッションフロアなどビニル系の床ならスチームクリーナーを使えますか？",
    a: "東リは、熱が瞬間的にあたる程度ならさほど影響はないものの、100℃程度の温熱や水、圧力が長時間あたると変色や変形のおそれがあり、スチーム洗浄を積極的にすすめるものではないとしています。",
  },
  {
    q: "スチームを使ってしまい白くなった場合は？",
    a: "ワックスの膜が白くなったのか、床材そのものが変色したのかで対処が変わります。ワックスの白化は膜を落として塗り直す方法がリンレイなどで案内されていますが、床材の変色・膨れは床材メーカーへの相談が先です。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "床にスチームモップは使える？｜床材メーカー7社の公式の案内",
  alternates: { canonical: "/know/steam-mop-floor/" },
  description:
    "フローリングやクッションフロアにスチームモップ・スチーム洗浄機を使ってよいかを、パナソニック・DAIKEN・ノダ・ウッドワン・EIDAI・LIXIL・東リの公式の案内から一覧にしました。使わない理由と代わりのお手入れ方法もまとめています。",
};

export default function SteamMopFloorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumb="床にスチームモップは使えるか"
        h1="床にスチームモップは使える？｜床材メーカー7社の公式の案内"
        lead={
          <>
            <p className="mb-3">
              木質フローリングのメーカー5社（パナソニック・DAIKEN・ノダ・ウッドワン・EIDAI）は、<strong>スチームモップやスチーム洗浄機を使わないよう</strong>案内しています。
            </p>
            <p>
              ビニル系の床材を扱う東リも、長時間の熱・水・圧力で変色や変形のおそれがあるとして、積極的にはすすめていません。
            </p>
          </>
        }
        notice="このページは各メーカーの公式のお手入れページ・よくある質問・お手入れマニュアル（いずれも2026年11月3日確認）をもとにしています。"
        sections={[
          {
            heading: "メーカー別の案内",
            tone: "amber",
            table: {
              head: ["メーカー（床材）", "スチームの扱い", "理由として挙げているもの"],
              rows: [
                ["パナソニック（木質床材）", "「ウェットタイプのモップ」や「スチームモップ」は使用しない", "水分による変色、ひび割れ、反り"],
                ["DAIKEN（床材）", "湿式タイプのロボット掃除機やスチームモップは使用しない", "変色や捲れ、膨れのおそれ"],
                ["ノダ（木質フロア）", "スチーム洗浄機は使用しない", "突き上げ、膨れ、ひび割れ、カビ、変色、白化等のおそれ"],
                ["ウッドワン（木質床材）", "スチームモップは使用しない。スチーム洗浄機は使用を控える", "水気による変色。突き上げ・ふくれ・ひび割れ・カビ・変色・白化など"],
                ["EIDAI（木質フローリング）", "ウェットタイプ（水を噴きつけるタイプやスチーム洗浄タイプ）は使用しない", "木質フローリングは水に弱いため"],
                ["LIXIL（フローリング）", "スチームを使ったお手入れは原因になる", "フクレやハガレ、変色など"],
                ["東リ（ビニル系の床材）", "スチーム洗浄を積極的にすすめるものではない", "100℃程度の温熱や水、圧力が長時間あたると変色や変形のおそれ"],
              ],
            },
          },
          {
            heading: "代わりのお手入れ（メーカーの案内）",
            list: [
              "日常はから拭きや掃除機で十分としています（パナソニック・ウッドワン）。",
              "から拭きで落ちない汚れは、固く絞ったぞうきんで拭き取ります。パナソニックは、脱水機をかけた後ぐらいの絞り方を目安にしています。",
              "それでも落ちない汚れは、住居用の中性洗剤を少量入れた水で拭き、洗剤分をしっかり拭き取ります（パナソニック・DAIKEN）。",
            ],
            after: [
              "絞らないぞうきんでの水拭きも、ひび割れ・反り・膨れやワックスの白化の原因になるとされています（パナソニック・ウッドワン）。",
            ],
          },
          {
            heading: "スチームで傷んだときの切り分け",
            paras: [
              "表面が白くなったときは、ワックスの膜の白化か、床材そのものの変色かを分けて考えます。ワックスの白化は、膜を落として塗り直す方法が案内されています。",
              "膨れ・反り・すき間など床材そのものの変形は、ワックスやクリーニングでは戻りません。床材メーカーの相談窓口に確認してください。",
            ],
            note: (
              <>
                ワックスの白化は<Link href="/trouble/wax-whitening/" className="underline">ワックスが白くなる原因と直し方</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/know/daily-care/", label: "日常の手入れを見る" }}
        secondary={{ href: "/service/wax/", label: "ワックスがけの内容を見る" }}
        related={[
          { href: "/know/robot-cleaner-floor/", label: "ロボット掃除機と床" },
          { href: "/know/tatami-care/", label: "和紙畳・樹脂畳のお手入れ" },
          { href: "/trouble/wax-whitening/", label: "ワックスが白くなる" },
          { href: "/maker/panasonic/", label: "パナソニックの床のお手入れ" },
          { href: "/maker/daiken/", label: "DAIKENの床のお手入れ" },
          { href: "/maker/noda/", label: "ノダの床材のお手入れ" },
          { href: "/maker/toli/", label: "東リの床材のお手入れ" },
        ]}
        sources={[
          { label: "パナソニック「木質床材・フローリングのお手入れ（床のお掃除）」", href: "https://sumai.panasonic.jp/support/care/floor/01/", checked: "2026年11月3日" },
          { label: "DAIKEN よくあるご質問「床材のお手入れ方法一覧」", href: "https://faq.daiken.jp/faq/show/3189?site_domain=user", checked: "2026年11月3日" },
          { label: "株式会社ノダ「床材についてのよくあるご質問」", href: "https://www.noda-co.jp/support/faq/floor/", checked: "2026年11月3日" },
          { label: "ウッドワン「木質床材お手入れマニュアル」（床材全般・PDF）", href: "https://www.woodone.co.jp/static/digitalcatalog/pdf/461_F-AL.pdf", checked: "2026年11月3日" },
          { label: "永大産業（EIDAI）「木質フローリング快適生活マニュアル」（PDF）", href: "https://www.eidai.com/contact/oteire/pdf/K1892609.pdf", checked: "2026年11月3日" },
          { label: "LIXIL「フローリング・階段等の木製品のお手入れ・お掃除方法」", href: "https://www.lixil.co.jp/support/clean/interior_04.htm", checked: "2026年11月3日" },
          { label: "東リ 床材FAQ「ビニル系の床材にスチームクリーナーは使えますか」", href: "https://www.toli.co.jp/faq/floor/38.html", checked: "2026年11月3日" },
        ]}
      />
    </>
  );
}
