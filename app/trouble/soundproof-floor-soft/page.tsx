import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const CHECKED = "2026年11月20日";

const faqs = [
  {
    q: "マンションのフローリングを歩くと、ふわふわ沈む感じがするのは不具合ですか？",
    a:
      "DAIKENは、マンション用の直張防音床材は下階への音の振動を抑えるために裏面に特殊なクッション材を使用しており、" +
      "一般住宅用フロアーと比較すると歩いた時に柔らかく沈むような感じがするとしています。" +
      "防音性能を得るため、構造上ある程度やむを得ない現象と説明しています。",
  },
  {
    q: "防音二重床でも沈む感じはしますか？",
    a:
      "DAIKENは、防音二重床の場合でも歩行時にわずかな揺れや沈みを感じることがあるとしています。" +
      "防音直張り床材ほど沈み込む感じはないものの、多少の沈み込みは防音性能を確保するうえでやむを得ないと説明しています。",
  },
  {
    q: "壁際に置いた家具が傾く、幅木の下にすき間ができるのはなぜですか？",
    a:
      "EIDAI（永大産業）は、直貼り遮音木質フローリングは施工時に壁際の幅木下に際根太を入れる場合と入れない場合があるとしています。" +
      "際根太を入れた場合は壁際に家具を置くと傾く場合があり、入れない場合は壁際を歩いたときや家具を置いたときに幅木の下にすき間が生じると案内しています。",
  },
  {
    q: "防音フローリングにすれば、下の階に音は聞こえなくなりますか？",
    a:
      "日本複合・防音床材工業会（JAFMA）は、防音直張り木質フローリングは階下への音（軽量床衝撃音）を低減するもので、音が消えてなくなるわけではないとしています。" +
      "重量床衝撃音はコンクリートスラブの厚さや建物の躯体の剛性など構造そのものに左右され、この床材では和らげることはできないと説明しています。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "防音フローリングが歩くとふわふわ沈むのは不具合？｜直張り防音床材の歩行感と注意点をメーカー・業界団体公式で確認",
  alternates: { canonical: "/trouble/soundproof-floor-soft/" },
  description:
    "マンションの防音フローリング（直張り防音床材）を歩くと柔らかく沈むのは、裏面のクッション材による構造上の特性とメーカー・業界団体は説明しています。防音二重床との違い、壁際の家具の傾き・幅木下のすき間、防音性能の範囲、家具の脚の保護を、DAIKEN・EIDAI・日本複合・防音床材工業会の公式の案内から整理しました。",
};

export default function SoundproofFloorSoftPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumbParent="症状別の対処"
        crumb="防音フローリングが沈む感じ"
        h1="防音フローリングが歩くとふわふわ沈むのは不具合？｜直張り防音床材の歩行感と注意点をメーカー・業界団体公式で確認"
        lead={
          <>
            <p className="mb-3">
              DAIKENは、マンション用の直張防音床材は下階への音の振動を抑えるために<strong>裏面に特殊なクッション材</strong>を使用しており、
              一般住宅用フロアーと比べると<strong>歩いた時に柔らかく沈むような感じ</strong>がするとしています。
              防音性能を得るための、構造上ある程度やむを得ない現象と説明しています。
            </p>
            <p>
              日本複合・防音床材工業会（JAFMA）とEIDAI（永大産業）も同じ趣旨の説明をしています。
              JAFMAは、逆に転倒時には衝撃を和らげることができるとしています。
            </p>
          </>
        }
        notice={`このページはDAIKEN・EIDAI（永大産業）・日本複合・防音床材工業会（JAFMA）の公式の案内（いずれも${CHECKED}確認）をもとにしています。`}
        sections={[
          {
            heading: "床の工法による沈み方の違い（DAIKEN）",
            tone: "amber",
            table: {
              head: ["工法", "公式の説明"],
              rows: [
                ["直張工法", "コンクリートスラブに接着剤で防音直張り床材を直接施工する。床材裏面のクッションが振動を吸収して防音性能を得る"],
                ["防音二重床工法", "防振脚（スタッド）の上に20mm程度の木質ボードを張り、その上に12mmの合板フロアを施工する。脚先のゴムが振動を吸収する"],
                ["歩いたときの感じ", "防音二重床は防音直張り床材ほど沈み込む感じはないが、わずかな揺れや沈みを感じることがある"],
              ],
              caption: "DAIKENは、いずれも防音性能を確保するうえでやむを得ないものとしています。",
            },
          },
          {
            heading: "壁際の家具の傾き・幅木の下のすき間（EIDAI）",
            paras: [
              "EIDAIは、直貼り遮音木質フローリングは施工時に壁際の幅木下に際根太を入れる場合と入れない場合があるとしています。",
              "際根太を入れた場合は、壁際に家具を置くと傾く場合があります。入れない場合は、壁際を歩いたときや家具を置いたときに幅木の下にすき間が生じます。EIDAIは、これらを構造上避けられないこととして案内しています。",
            ],
          },
          {
            heading: "防音性能の範囲（JAFMA）",
            list: [
              "防音直張り木質フローリングは、階下への音（軽量床衝撃音）を低減するもので、音が消えてなくなるわけではありません。",
              "カタログ等に表示のL値は、JISにもとづき実験室で測定したデータから現場の床衝撃音レベルを推定した値で、保証値ではありません。",
              "重量床衝撃音は、コンクリートスラブの厚さや建物の躯体の剛性など構造そのものに左右され、この床材では和らげることはできません。",
              "床暖房を設置した部屋では、床暖房部分と周辺部分で歩行感が若干異なると感じることがあります。JAFMAは、故障や破損ではなく実使用上は特に問題はないとしています。",
            ],
          },
          {
            heading: "家具を置くときの注意",
            paras: [
              "JAFMAは、椅子やテーブルなどの脚にフェルトや柔らかいゴムキャップなどを付けると、傷を防ぐだけでなく防音上も効果的としています。ただし、ゴムキャップの素材によっては床面に跡が付いたり変色したりするものがあるため注意が必要です。",
              "EIDAIは、冷蔵庫やピアノなどの重量物は脚部が床に直接当たらないよう小幅の保護板などを敷いて重量を分散させ、移動時は引きずらないよう案内しています。家具を長期間同じ場所に置くと跡形がつく恐れがあるとしています。",
            ],
            note: (
              <>
                継ぎ目がこすれて音が出る場合は<Link href="/trouble/floor-squeak/" className="underline">フローリングの床鳴り</Link>、
                へこみの補修は<Link href="/trouble/floor-scratch-repair/" className="underline">フローリングの傷・へこみの補修</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/know/floor-symptoms/", label: "床の症状の切り分け方を見る" }}
        secondary={{ href: "/trouble/floor-squeak/", label: "床鳴りの原因と対処を見る" }}
        related={[
          { href: "/know/floor-symptoms/", label: "床の症状の切り分け方" },
          { href: "/trouble/floor-squeak/", label: "フローリングの床鳴り" },
          { href: "/trouble/floor-scratch-repair/", label: "フローリングの傷・へこみの補修" },
          { href: "/know/heater-hot-carpet-floor/", label: "暖房器具とフローリング" },
          { href: "/maker/daiken/", label: "DAIKENの床のお手入れ" },
          { href: "/maker/eidai/", label: "永大産業の床のお手入れ" },
        ]}
        sources={[
          { label: "DAIKEN よくあるご質問「マンション用の床材（直張防音床材）は、歩くと沈む感じがしますか？」", href: "https://faq.daiken.jp/faq/show/220?site_domain=user", checked: CHECKED },
          { label: "DAIKEN よくあるご質問「マンションの防音二重床（弊社DADスペース等）を歩くと揺れや沈む感じはしますか？」", href: "https://faq.daiken.jp/faq/show/221?site_domain=user", checked: CHECKED },
          { label: "日本複合・防音床材工業会 フローリングナビ「防音フローリング」", href: "https://jafma.gr.jp/maintenance/m13/", checked: CHECKED },
          { label: "日本複合・防音床材工業会 フローリングナビ「傷をつけないために」", href: "https://jafma.gr.jp/maintenance/m02/", checked: CHECKED },
          { label: "永大産業（EIDAI）「木質フローリング快適生活マニュアル」（PDF）", href: "https://www.eidai.com/contact/oteire/pdf/K1892609.pdf", checked: CHECKED },
        ]}
      />
    </>
  );
}
