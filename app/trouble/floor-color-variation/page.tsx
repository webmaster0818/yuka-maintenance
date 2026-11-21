import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const CHECKED = "2026年11月21日";

const faqs = [
  {
    q: "張ったばかりのフローリングが、板ごとに色の濃さが違います。不良品ですか？",
    a:
      "日本複合・防音床材工業会（JAFMA）は、天然木は同じ樹種でも一本一本個性があり、木目や色調が異なるとしています。" +
      "天然木を使用した木質フローリングではピースごとに濃淡があり、ある程度のバラツキが生じることをあらかじめ理解するよう案内しています。",
  },
  {
    q: "明るい色の床だけ、色の違いが目立つ気がします。",
    a:
      "EIDAI（永大産業）は、天然木の無垢・挽き板・ツキ板は同じ木でもまったく同じ木目・色調にはならず、" +
      "ピースごとに色の濃淡があるとしています。特に明るい色やクリア仕上げの製品は目立つと説明しています。",
  },
  {
    q: "床に黒っぽい点や筋、小さな穴のような模様があります。",
    a:
      "EIDAIは、節（枝が成長した幹に巻き込まれた部分）、入り皮（傷ついた樹皮が巻き込まれた部分）、" +
      "金筋（鉱物質が筋状に堆積したもの）、やに（樹脂が集まったもの）などを天然木の代表的な特長として挙げ、" +
      "小さな節や入り皮もそのまま活かして使用しているとしています。",
  },
  {
    q: "節の部分がへこんだり割れたりしています。",
    a:
      "朝日ウッドテックは「床のメンテナンスブック」で、節や入り皮の部分に凹みや割れが現れる可能性があると記載しています。" +
      "天然木フローリングのキャラクター（特性）として説明しています。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "フローリングの色が板ごとに違う・節や筋があるのは不良？｜天然木の色・柄のバラツキをメーカー・業界団体公式で確認",
  alternates: { canonical: "/trouble/floor-color-variation/" },
  description:
    "張ったフローリングの色が板ごとに違う、黒い点や筋がある、節の部分がへこむ。天然木の木質フローリングで起きる色・柄のバラツキと、節・入り皮・金筋などの特長を、日本複合・防音床材工業会・EIDAI・朝日ウッドテックの公式の案内から整理しました。",
};

export default function FloorColorVariationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumbParent="症状別の対処"
        crumb="床の色・柄のバラツキ"
        h1="フローリングの色が板ごとに違う・節や筋があるのは不良？｜天然木の色・柄のバラツキをメーカー・業界団体公式で確認"
        lead={
          <>
            <p className="mb-3">
              日本複合・防音床材工業会（JAFMA）は、天然木を使用した木質フローリングは<strong>ピースごとに濃淡がある</strong>としています。
              同じ樹種でも一本一本個性があり、木目や色調が異なるのはもちろん、節や斑・入り皮なども天然木ならではの特性と説明しています。
              JAFMAは、ある程度のバラツキが生じることをあらかじめ理解するよう案内しています。
            </p>
            <p>
              EIDAI（永大産業）は、柾目・板目の違いや塗料の吸い込み量によって多少の色の違いが出ることがあり、
              <strong>特に明るい色やクリア仕上げの製品は目立つ</strong>としています。
            </p>
          </>
        }
        notice={`このページは日本複合・防音床材工業会（JAFMA）・EIDAI（永大産業）・朝日ウッドテックの公式の案内（いずれも${CHECKED}確認）をもとにしています。`}
        sections={[
          {
            heading: "色・柄に違いが出る理由（JAFMA・EIDAI）",
            list: [
              "天然木を使用した無垢・挽き板・ツキ板は、同じ木であってもまったく同じ木目・色調にはなりません（EIDAI）。",
              "柾目・板目の違いや塗料の吸い込み量によって、多少の色の違いが出ることがあります（EIDAI）。",
              "EIDAIは、1つのピースの中に濃い部分と淡い部分がある場合もあるとしています。",
              "JAFMAは、こうした個性は人それぞれの嗜好性により長所とされたり短所とされたりするとし、天然素材を有効に使うためある程度のバラツキが生じると説明しています。",
            ],
          },
          {
            heading: "天然木に現れる主な特長（JAFMA・EIDAI・朝日ウッドテック）",
            tone: "amber",
            table: {
              head: ["名前", "公式の説明"],
              rows: [
                ["節（ノット）", "枝が成長した幹に巻き込まれた部分。小さなものはピンノット（葉節）と呼ぶ（朝日ウッドテック）"],
                ["入り皮", "傷ついた部分の樹皮が巻き込まれた部分（JAFMA・EIDAI）"],
                ["白太", "木の辺材部に現れる白っぽい部分（朝日ウッドテック）"],
                ["源平", "1つのピースに赤味と白太が混ざった部分。バーチ材等に多い（JAFMA）"],
                ["金筋", "鉱物質が混入し、筋状に堆積したもの（EIDAI）"],
                ["やに（すじ・つぼ）", "樹脂が細胞の空隙にたまったものがやにつぼ、集まって線状に見えるものがやにすじ（EIDAI）"],
                ["照り（てり）", "木肌の光沢。バーチ（カバ）材独特（JAFMA）"],
                ["虎斑（とらふ）", "オーク材に現れる、虎の縞模様に似た斑模様（JAFMA）"],
              ],
              caption: "EIDAIは、天然木にはこれら以外にも様々な表情が現れるとしています。",
            },
          },
          {
            heading: "節・入り皮の部分のへこみや割れ（朝日ウッドテック）",
            paras: [
              "朝日ウッドテックは「床のメンテナンスブック」の「天然木フローリングのキャラクター」で、節や入り皮の部分に凹みや割れが現れる可能性があると記載しています。",
              "EIDAIも、小さな節や入り皮、木目の曲がりや逆目などは、自然保護などにも配慮してそのまま活かして使用しているとしています。",
            ],
            note: (
              <>
                家具や物を落としてできたへこみ・傷の補修は<Link href="/trouble/floor-scratch-repair/" className="underline">フローリングの傷・へこみの補修</Link>、
                小さな穴から木の粉が出る場合は<Link href="/trouble/floor-insect-holes/" className="underline">フローリングの虫食い</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "使っているうちに色が変わる場合",
            paras: [
              "朝日ウッドテックは、天然木は年月を経る中で太陽光や照明などの光の影響により、色の濃さが増したり薄くなったり様々に変化するとしています。",
              "EIDAIは、光により色が濃くなる「変色」と色があせる「退色」があり、着色した製品よりもクリア仕上げの製品はその差が目立つと説明しています。",
            ],
            note: (
              <>
                窓際やラグの跡で色が変わった場合は<Link href="/know/floor-sunlight-fade/" className="underline">フローリングの日焼け・色あせ</Link>にまとめています。
              </>
            ),
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/know/floor-symptoms/", label: "床の症状の切り分け方を見る" }}
        secondary={{ href: "/know/floor-sunlight-fade/", label: "日焼け・色あせを見る" }}
        related={[
          { href: "/know/floor-symptoms/", label: "床の症状の切り分け方" },
          { href: "/know/floor-sunlight-fade/", label: "フローリングの日焼け・色あせ" },
          { href: "/know/muku-floor-care/", label: "無垢フローリングのお手入れ" },
          { href: "/trouble/floor-scratch-repair/", label: "フローリングの傷・へこみの補修" },
          { href: "/trouble/floor-insect-holes/", label: "フローリングの虫食い" },
          { href: "/maker/eidai/", label: "永大産業の床のお手入れ" },
        ]}
        sources={[
          { label: "日本複合・防音床材工業会 フローリングナビ「色・柄バラツキ」", href: "https://jafma.gr.jp/maintenance/m11/", checked: CHECKED },
          { label: "永大産業（EIDAI）「木質フローリング快適生活マニュアル」（PDF）", href: "https://www.eidai.com/contact/oteire/pdf/K1892609.pdf", checked: CHECKED },
          { label: "朝日ウッドテック「床のメンテナンスブック」（PDF）", href: "https://www.woodtec.co.jp/cms/wp-content/uploads/2023/06/LNPmaintenance_web-4.pdf", checked: CHECKED },
          { label: "朝日ウッドテック公式サイト「天然木フロアの特性による現象」", href: "https://www.woodtec.co.jp/maintenance/index07/", checked: CHECKED },
        ]}
      />
    </>
  );
}
