import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const CHECKED = "2026年11月22日";

const faqs = [
  {
    q: "新しいフローリングの部屋で、目がしみたり臭いがしたりします。原因は何ですか？",
    a:
      "日本複合・防音床材工業会（JAFMA）とEIDAI（永大産業）は、閉め切った部屋で目がしみたり臭いを感じたりするのは、" +
      "室内の建材や家具、クロスなどに使用の接着剤、その他から放出されるホルムアルデヒド臭などが原因と考えられるとしています。" +
      "フローリングだけが原因とは限らず、施工直後は特に強く感じることがあると説明しています。",
  },
  {
    q: "臭いはいつまで続きますか？",
    a:
      "JAFMAとEIDAIは、ホルムアルデヒドは空気中に放散（拡散）しやすい性質があり、通気・換気をよくすれば自然と減少するとしています。" +
      "何日でなくなるといった期間は、両者とも示していません。",
  },
  {
    q: "F☆☆☆☆（フォースター）の床材なら、臭いや化学物質は出ませんか？",
    a:
      "EIDAIは、ホルムアルデヒド放散量基準の最上位等級（F☆☆☆☆）の製品であっても、ホルムアルデヒドの放出はゼロではないとしています。" +
      "化学物質過敏症の方はアレルギー症状をおこすことがあるため、住宅設計の際には施工関係者と充分相談するよう案内しています。",
  },
  {
    q: "換気はどのくらいの頻度で行えばよいですか？",
    a:
      "EIDAIは、室内で発生したガスやホコリなどを排出し新鮮な空気を導入するため、1〜2時間に1回換気を行うよう案内しています。" +
      "換気扇を使う場合は、部屋全体の空気が流れるように反対側の窓を開けるとしています（JAFMA・EIDAI）。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "新しいフローリングの臭い・目がしみる原因と対処｜ホルムアルデヒドと換気をメーカー・業界団体・国交省の公式で確認",
  alternates: { canonical: "/trouble/floor-odor/" },
  description:
    "張り替えたばかりのフローリングの部屋で臭いがする、目がしみる。原因と考えられるホルムアルデヒド等の揮発性有機化合物（VOC）、換気の方法と頻度、F☆☆☆☆の意味を、日本複合・防音床材工業会・EIDAI・国土交通省の公式の案内から整理しました。",
};

export default function FloorOdorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumbParent="症状別の対処"
        crumb="新しい床の臭い・目がしみる"
        h1="新しいフローリングの臭い・目がしみる原因と対処｜ホルムアルデヒドと換気をメーカー・業界団体・国交省の公式で確認"
        lead={
          <>
            <p className="mb-3">
              日本複合・防音床材工業会（JAFMA）とEIDAI（永大産業）は、閉め切った部屋で目がしみたり臭いを感じたりするのは、
              <strong>室内の建材や家具、クロスなどに使用の接着剤などから放出されるホルムアルデヒド臭など</strong>が原因と考えられるとしています。
              フローリングだけが原因とは限らず、施工直後は特に強く感じることがあると説明しています。
            </p>
            <p>
              ホルムアルデヒドは空気中に放散しやすい性質があり、<strong>通気・換気をよくすれば自然と減少する</strong>とされています（JAFMA・EIDAI）。
              新築・改装の直後や気温の高い夏、長時間閉め切っていた後は、特にこまめな換気が大切です。
            </p>
          </>
        }
        notice={`このページは日本複合・防音床材工業会（JAFMA）・EIDAI（永大産業）・国土交通省の公式の案内（いずれも${CHECKED}確認）をもとにしています。`}
        sections={[
          {
            heading: "臭いの原因と考えられるもの（JAFMA・EIDAI）",
            list: [
              "室内の建材や家具、クロスなどに使用の接着剤、その他から放出されるホルムアルデヒド臭など（JAFMA・EIDAI）。",
              "木質フローリングやその他の内装建材から、揮発性有機化合物（VOC）が室内空気中に発散されることがあります（JAFMA）。",
              "家具・カーペット・インテリア材からも VOC が発散されることがあります。防虫剤・芳香剤・消臭剤や、ダニ・カビ・ほこり・タバコなども室内空気を汚染するものとして挙げられています（JAFMA）。",
              "EIDAIは、ホルムアルデヒドなどは高温で多く放出されるとしています。",
            ],
          },
          {
            heading: "換気のしかた（JAFMA・EIDAI）",
            tone: "amber",
            table: {
              head: ["項目", "公式の案内"],
              rows: [
                ["換気扇を使うとき", "部屋全体の空気が流れるように、反対側の窓を開ける（JAFMA・EIDAI）"],
                ["頻度", "室内で発生したガスやホコリなどを排出し新鮮な空気を導入するため、1〜2時間に1回換気を行う（EIDAI）"],
                ["新築・リフォームの直後", "換気を充分に行い、拡散させる（JAFMA・EIDAI）"],
                ["室温", "室内温度を上げて強制的に拡散させ、換気を繰り返すと効果的（EIDAI）"],
                ["夏・閉め切った後", "気温の高い夏や長時間密閉状態にしていた後は特に注意し、こまめに換気する（JAFMA・EIDAI）"],
              ],
              caption: "臭いがなくなるまでの期間は、JAFMA・EIDAIとも示していません。",
            },
          },
          {
            heading: "F☆☆☆☆（フォースター）と4VOC の表示",
            paras: [
              "JAFMAは、木質フローリングのホルムアルデヒドについては建築基準法のF☆☆☆☆に対応しているとしています。EIDAIも、JASに規定されたフローリングはホルムアルデヒド放散量基準の最高等級であるF☆☆☆☆に対応していると説明しています。",
              "トルエン・キシレン・スチレン・エチルベンゼンの4物質（4VOC）について、JAFMAは各メーカーのホームページで四物質対応マークのついたものを選ぶよう案内しています。EIDAIは、木質材料から放散される4VOC について業界自主基準適合製品であるとしています。",
              "EIDAIは、F☆☆☆☆対応製品であってもホルムアルデヒドの放出はゼロではないとし、化学物質過敏症の方はアレルギー症状をおこすことがあるため、住宅設計の際には施工関係者と充分相談するよう案内しています。",
            ],
          },
          {
            heading: "建築基準法のシックハウス対策（国土交通省）",
            list: [
              "シックハウス対策に係る法令等は、平成15年（2003年）7月1日に施行されました。",
              "居室を有する建築物には、クロルピリホスを添加した建築材料の使用が禁止されています（建築基準法施行令第20条の6）。",
              "内装の仕上げに使用するホルムアルデヒド発散建築材料は、居室の種類及び換気回数に応じて面積制限を受けます（同第20条の7）。F☆☆☆☆等級のものは規制対象外建築材料で、制限を受けずに用いることができます。",
              "家具等からもホルムアルデヒドが発散されるため、居室を有する全ての建築物に機械換気設備の設置が原則義務付けられています（同第20条の8）。",
            ],
            note: (
              <>
                フロアコーティングやワックスの作業後のにおいについては、<Link href="/know/after-work-trouble/" className="underline">施工後に起こりうる症状と依頼前の取り決め</Link>をご覧ください。
                小さな穴から木の粉が出る場合は<Link href="/trouble/floor-insect-holes/" className="underline">フローリングの虫食い</Link>にまとめています。
              </>
            ),
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/know/floor-symptoms/", label: "床の症状の切り分け方を見る" }}
        secondary={{ href: "/know/after-work-trouble/", label: "施工後に起こりうる症状を見る" }}
        related={[
          { href: "/know/floor-symptoms/", label: "床の症状の切り分け方" },
          { href: "/know/after-work-trouble/", label: "施工後に起こりうる症状と依頼前の取り決め" },
          { href: "/know/new-home-coating/", label: "新築のフロアコーティング" },
          { href: "/trouble/floor-insect-holes/", label: "フローリングの虫食い" },
          { href: "/trouble/floor-color-variation/", label: "フローリングの色・柄のバラツキ" },
          { href: "/maker/eidai/", label: "永大産業の床のお手入れ" },
        ]}
        sources={[
          { label: "日本複合・防音床材工業会 フローリングナビ「臭い・虫食い」", href: "https://jafma.gr.jp/maintenance/m08/", checked: CHECKED },
          { label: "永大産業（EIDAI）「木質フローリング快適生活マニュアル」（PDF）", href: "https://www.eidai.com/contact/oteire/pdf/K1892609.pdf", checked: CHECKED },
          { label: "国土交通省「建築基準法に基づくシックハウス対策について」", href: "https://www.mlit.go.jp/jutakukentiku/build/jutakukentiku_house_tk_000043.html", checked: CHECKED },
        ]}
      />
    </>
  );
}
