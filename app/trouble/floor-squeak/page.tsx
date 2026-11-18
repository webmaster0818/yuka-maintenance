import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const CHECKED = "2026年11月18日";

const faqs = [
  {
    q: "フローリングを歩くとギシギシ・ミシミシ鳴るのはなぜですか？",
    a: "DAIKENは、原因の一つとしてフロアーの継ぎ目部分がこすれて音が出ていることを挙げています。木が湿気を吸ったり吐いたりして伸び縮みすることが影響しており、ある程度はやむを得ない現象で、性能・使用上の問題はないとしています。",
  },
  {
    q: "床鳴りは季節で変わりますか？",
    a: "日本複合・防音床材工業会は、防音直張りフローリングについて、湿度が高くなり木質部が伸びると継ぎ目がこすれて音が出ることがあり、換気や除湿で湿度が下がれば床鳴りが和らぐ場合があると説明しています。",
  },
  {
    q: "ワックスがけで床鳴りすることはありますか？",
    a: "EIDAIは、ワックスを多量に塗布した場合や水気の多いお手入れをした場合にも床鳴りが起こるとしています。DAIKENも、ワックスや表面コート剤（フロアーコーティング）の塗布、下地条件などで発生する場合があるとしています。",
  },
  {
    q: "音が気になるときはどこに相談すればよいですか？",
    a: "DAIKENは、どうしても音が気になる場合は、施工した建築業者や専門の補修会社（リペア会社）への相談を案内しています。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "フローリングの床鳴り（ギシギシ・ミシミシ）の原因と対処｜すき間・突き上げもメーカー公式で確認",
  alternates: { canonical: "/trouble/floor-squeak/" },
  description:
    "フローリングを歩くとギシギシ・ミシミシ鳴る原因、季節による変化、ワックスや水気との関係、継ぎ目のすき間・突き上げ、相談先を、DAIKEN・EIDAI・日本複合・防音床材工業会の公式の案内から整理しました。",
};

export default function FloorSqueakPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumbParent="症状別の対処"
        crumb="フローリングの床鳴り"
        h1="フローリングの床鳴り（ギシギシ・ミシミシ）の原因と対処｜すき間・突き上げもメーカー公式で確認"
        lead={
          <>
            <p className="mb-3">
              床材メーカーのDAIKENは、床を踏んだときのギシギシ・ミシミシという音について、原因の一つは<strong>フロアーの継ぎ目部分がこすれて音が出ていること</strong>だとしています。
              木が湿気を吸ったり吐いたりして伸び縮みすることが影響しており、ある程度はやむを得ない現象で、商品の性能・使用上は特に問題はないと案内しています。
            </p>
            <p>
              一方で、水をこぼして長く放置した場合や水気の多いお手入れ、ワックスや表面コート剤の塗布、下地条件などでも起こる場合があるとしています（DAIKEN）。
              どうしても音が気になる場合は、施工した建築業者や専門の補修会社（リペア会社）への相談が案内されています。
            </p>
          </>
        }
        notice={`このページはDAIKEN・EIDAI（永大産業）・日本複合・防音床材工業会の公式の案内（いずれも${CHECKED}確認）をもとにしています。`}
        sections={[
          {
            heading: "床鳴りの原因として公式に挙げられているもの",
            tone: "amber",
            table: {
              head: ["原因", "公式の説明"],
              rows: [
                ["継ぎ目のこすれ（木の伸び縮み）", "木の調湿機能による伸び縮みで、フローリングの継ぎ目がすれて音が出ることがある。特性上やむを得ない現象で、性能・使用上は問題ない（DAIKEN・EIDAI）"],
                ["湿度が高い時期", "防音直張りフローリングは、湿度が上がって木質部が伸びると継ぎ目がこすれて音が出ることがある。換気や除湿で湿度が下がると和らぐ場合がある（日本複合・防音床材工業会）"],
                ["水気・水こぼし", "水をこぼして長時間放置した場合や、水気の多いお手入れをした場合にも起こる可能性がある（DAIKEN・EIDAI）"],
                ["ワックス・表面コート剤", "ワックスを多量に塗布した場合にも起こる（EIDAI）。ワックスや表面コート剤（フロアーコーティング）の塗布で発生する場合がある（DAIKEN）"],
                ["下地条件", "下地条件などでも発生する場合がある（DAIKEN・日本複合・防音床材工業会）"],
              ],
              caption: "防音直張りフローリングは木質部と特殊クッション材の2層構造で、歩くと木質部が上下に動くと説明されています（日本複合・防音床材工業会）。",
            },
          },
          {
            heading: "自分でできること",
            list: [
              "床にこぼした水分は、乾いた雑巾などですぐに拭き取ります（DAIKEN）。",
              "水気の多いお手入れやワックスの多量塗布を避け、正しいお手入れ方法で手入れします（EIDAI）。",
              "湿度が高い時期は、換気や除湿で湿度が下がると床鳴りが和らぐ場合があります（日本複合・防音床材工業会）。",
              "それでも音が気になる場合は、施工した建築業者や専門の補修会社（リペア会社）に相談します（DAIKEN）。",
            ],
            note: (
              <>
                ワックスの種類と選び方は<Link href="/know/wax-types/" className="underline">床用ワックスの種類</Link>、コーティングについてメーカーが案内している注意は<Link href="/maker/daiken/" className="underline">DAIKENの床のお手入れ</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "継ぎ目のすき間（目すき）・突き上げ",
            paras: [
              "日本複合・防音床材工業会は、床材の伸び縮みに伴って、反りや突き上げ（継ぎ目部分が盛り上がる現象）、目すき（継ぎ目部分にすき間ができる現象）が生じることがあるとしています。木材の特性上、ある程度やむを得ない現象と説明しています。",
              "EIDAIは、梅雨から夏場の湿気の多い時期はフローリングが伸び、冬場や床暖房を使っているときは縮むとしています。特に床暖房の使用時はすき間があきやすく、使用しなくなると徐々にフローリングが伸びてすき間が小さくなると案内しています。DAIKENも、床暖房の使用時は継ぎ目に若干のすき間があくことがあり、使用しなくなると徐々にすき間が小さくなると案内しています。",
            ],
            note: (
              <>
                暖房器具やエアコンの乾燥によるすき間・ひび割れの防ぎ方は<Link href="/know/heater-hot-carpet-floor/" className="underline">ホットカーペット・暖房器具とフローリング</Link>、水による膨れは<Link href="/know/floor-water-damage/" className="underline">水こぼし・結露から床を守る</Link>にまとめています。
              </>
            ),
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/know/floor-symptoms/", label: "床の症状の切り分け方を見る" }}
        secondary={{ href: "/know/wax-types/", label: "床用ワックスの種類を見る" }}
        related={[
          { href: "/know/floor-symptoms/", label: "床の症状の切り分け方" },
          { href: "/know/heater-hot-carpet-floor/", label: "暖房器具とフローリング" },
          { href: "/know/floor-water-damage/", label: "水こぼし・結露から床を守る" },
          { href: "/trouble/floor-scratch-repair/", label: "フローリングの傷・へこみの補修" },
          { href: "/maker/daiken/", label: "DAIKENの床のお手入れ" },
          { href: "/maker/eidai/", label: "永大産業の床のお手入れ" },
        ]}
        sources={[
          { label: "DAIKEN よくあるご質問「床材を踏んだときに、ギシギシ・ミシミシといった音がするのですが？」", href: "https://faq.daiken.jp/faq/show/210?site_domain=user", checked: CHECKED },
          { label: "DAIKEN よくあるご質問「床暖房が入っているフロアーの継ぎ目に、隙間ができることはありますか？」", href: "https://faq.daiken.jp/faq/show/215?site_domain=user", checked: CHECKED },
          { label: "日本複合・防音床材工業会 フローリングナビ「床鳴り」", href: "https://jafma.gr.jp/maintenance/m10/", checked: CHECKED },
          { label: "日本複合・防音床材工業会 フローリングナビ「反り・突き上げ・目すき」", href: "https://jafma.gr.jp/maintenance/m09/", checked: CHECKED },
          { label: "永大産業（EIDAI）「木質フローリング快適生活マニュアル」（PDF）", href: "https://www.eidai.com/contact/oteire/pdf/K1892609.pdf", checked: CHECKED },
        ]}
      />
    </>
  );
}
