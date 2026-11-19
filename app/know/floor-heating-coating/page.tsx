import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const CHECKED = "2026年11月20日";

const faqs = [
  {
    q: "床暖房の床にフロアコーティングはできますか？",
    a: "施工会社4社（グッドライフ・カラー・森のしずく・ドッグランコーティング）は、いずれも床暖房の床に施工できると案内しています。一方で、DAIKEN・LIXIL・ノダは、床暖房かどうかに関係なく自社の床材にフロアコーティングを使わないよう案内しています。床材のメーカーと品番を確かめてから判断します。",
  },
  {
    q: "施工の日は床暖房を使えますか？",
    a: "森のしずくは、冬場でガスの床暖房の場合は、可能であれば開通しておくよう案内しています。施工中・乾燥中に床暖房をつけてよいかは、コーティングの種類によって異なる可能性があるため、依頼する会社に確認してください。",
  },
  {
    q: "コーティングをすると床暖房の熱が伝わりにくくなりますか？",
    a: "今回確認した施工会社4社の公式ページには、熱の伝わり方についての記載はありませんでした。森のしずくは「コーティング自体は熱を遮断するものではありません」とし、床材の耐熱温度はメーカーに確認するよう案内しています。",
  },
  {
    q: "床暖房の床にワックスをかける場合は？",
    a: "ワックスの場合は、床暖房を切って床面を冷ましてから塗るなど、床材・ワックスのメーカーが手順を案内しています。詳しくは床暖房の床のワックスがけのページをご覧ください。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "床暖房の床にフロアコーティングはできる？施工会社4社と床材メーカーの案内を比較",
  alternates: { canonical: "/know/floor-heating-coating/" },
  description:
    "床暖房の床にフロアコーティングをしてよいかを、施工会社4社（グッドライフ・カラー・森のしずく・ドッグランコーティング）と床材メーカー（DAIKEN・LIXIL・ノダ・パナソニック）の公式の案内（2026年11月20日確認）で比べました。施工日の準備と、依頼前に確かめることをまとめています。",
};

export default function FloorHeatingCoatingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumb="床暖房の床のフロアコーティング"
        h1="床暖房の床にフロアコーティングはできる？施工会社4社と床材メーカーの案内を比較"
        lead={
          <>
            <p className="mb-3">
              施工会社の案内では<strong>「床暖房の床にも施工できる」</strong>が共通しています。グッドライフは全商品が床暖房に対応、カラー・森のしずくは問題なく施工できる、ドッグランコーティングは施工でき、むしろすすめると案内しています。
            </p>
            <p>
              ただし、<strong>DAIKEN・LIXIL・ノダは、床暖房かどうかに関係なく自社の床材にフロアコーティングを使わないよう案内</strong>しています。床暖房対応のフローリングでも、まず床材のメーカーと品番を確かめ、そのメーカーの案内と保証の扱いを読むことが出発点です。
            </p>
          </>
        }
        notice={`このページは、施工会社4社のよくある質問と、床材メーカー4社のお手入れの案内・よくある質問（いずれも${CHECKED}確認）をもとに、当サイトが並べたものです。お使いの床材・床暖房の機種ごとの可否は、各メーカーと依頼先の施工会社にご確認ください。`}
        sections={[
          {
            heading: "施工会社4社の案内",
            tone: "amber",
            table: {
              head: ["施工会社", "床暖房の床についての公式の案内"],
              rows: [
                ["グッドライフ", "「弊社のフロアコーティングは全て床暖房に対応しております」と記載"],
                ["カラー", "フロアコーティングは耐熱性にも優れているので、床暖房でも問題なく施工できると記載"],
                ["森のしずく", "床暖房・床冷房のフローリングでも問題ないと記載。施工できないフローリングがあるため、事前に床材のメーカー名・商品名を伝えるよう案内。コーティング剤は200℃ほどの熱に対応するが、コーティング自体は熱を遮断するものではないと注記"],
                ["ドッグランコーティング", "施工でき、すすめると記載。床暖房用のフローリングは通常の床材より乾燥させた状態で、湿気に弱く水分を吸収しやすいため、水分の浸入を防ぐのに有効と説明。床暖房の温度差によるひび割れの不具合事例はないと記載"],
              ],
              caption: "施工会社の案内は、各社がコーティングをすすめる立場で書いたものです。",
            },
          },
          {
            heading: "床材メーカーの案内",
            table: {
              head: ["メーカー", "フロアコーティングについての公式の案内"],
              rows: [
                ["DAIKEN", "「フロアーコーティングは行わないでください」。床材表面の剥がれ、膨れ、白化、粉吹き、変色、床鳴り、ひび割れ等の不具合の出るおそれがあると記載"],
                ["LIXIL", "はがれ・膨れ・粉吹き・変色・ひび割れ等の不具合が発生するおそれがあるため使用しないよう案内"],
                ["ノダ", "フロアコーティング剤（厚塗り表面コート剤）は、剥がれ、白化、粉吹き、変色、床鳴り、ひび割れ等の不具合が発生するおそれがあるため使用しないよう案内"],
                ["パナソニック", "不具合が発生する場合があるため、使用する場合はコーティング業者やメーカーに確認するよう案内"],
              ],
              caption: "いずれも床暖房の床に限った案内ではなく、各社の床材全般のお手入れの案内です。製品によって案内が異なる場合があります。",
            },
          },
          {
            heading: "依頼する前に確かめること",
            list: [
              "取扱説明書・仕様書で、床材のメーカーと品番、床暖房の方式（温水式・電気式など）を確認する",
              "床材メーカーがフロアコーティングをどう案内しているか、コーティングした場合の床材の保証の扱いを確認する",
              "依頼先の施工会社に床材のメーカー名・商品名を伝え、施工できる床かを確認する（森のしずくは施工できないフローリングがあると案内）",
              "施工当日と乾燥中に床暖房をつけてよいか、何日後から使えるかを施工会社に確認する",
              "冬場の施工でガスの床暖房を使う場合は、ガスの開通が必要か確認する（森のしずくは可能であれば開通を依頼）",
            ],
            note: (
              <>
                床暖房の床にワックスをかける場合の手順は<Link href="/know/floor-heating-wax/" className="underline">床暖房の床のワックスがけ</Link>、コーティング全般の注意点は<Link href="/know/coating-demerit/" className="underline">フロアコーティングのデメリット</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/service/floor-coating/", label: "フロアコーティングの業者を見る" }}
        secondary={{ href: "/know/floor-heating-wax/", label: "床暖房の床のワックスがけ" }}
        related={[
          { href: "/know/floor-heating-wax/", label: "床暖房の床のワックスがけ" },
          { href: "/know/coating-demerit/", label: "フロアコーティングのデメリット" },
          { href: "/know/sheet-flooring-coating/", label: "シートフローリングのコーティング" },
          { href: "/company/goodlife/", label: "グッドライフ" },
          { href: "/company/color/", label: "カラー" },
          { href: "/company/morinoshizuku/", label: "森のしずく" },
          { href: "/company/dogrun-coating/", label: "ドッグランコーティング" },
        ]}
        sources={[
          { label: "グッドライフ公式「Q&A」", href: "https://www.good-life.co.jp/qa/", checked: CHECKED },
          { label: "カラー公式「よくある質問」", href: "https://www.uv-colors.jp/faq/all", checked: CHECKED },
          { label: "森のしずく公式「よくある質問」", href: "https://www.morinosizuku.com/faq/", checked: CHECKED },
          { label: "ドッグランコーティング公式「よくある質問」", href: "https://dogrun-coating.com/faq/", checked: CHECKED },
          { label: "DAIKEN よくあるご質問「床材のお手入れ方法一覧」", href: "https://faq.daiken.jp/faq/show/3189?site_domain=user", checked: CHECKED },
          { label: "LIXIL Q&A「フローリングにフロアコーティングしてもよいですか。」", href: "https://faq.lixil.co.jp/%E3%83%95%E3%83%AD%E3%83%BC%E3%83%AA%E3%83%B3%E3%82%B0%E3%81%AB%E3%83%95%E3%83%AD%E3%82%A2%E3%82%B3%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%97%E3%81%A6%E3%82%82%E3%82%88%E3%81%84%E3%81%A7%E3%81%99%E3%81%8B%E3%80%82-63c8e03b6876c9001d3bfb52", checked: CHECKED },
          { label: "ノダ「よくあるご質問（床材）」", href: "https://www.noda-co.jp/support/faq/floor/", checked: CHECKED },
          { label: "パナソニック「床のお掃除（木質床材・フローリングのお手入れ）」", href: "https://sumai.panasonic.jp/support/care/floor/01/", checked: CHECKED },
        ]}
      />
    </>
  );
}
