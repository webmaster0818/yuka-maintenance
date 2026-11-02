import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const faqs = [
  {
    q: "ワックスを塗ったところが黒く濁ってきたのはなぜですか？",
    a: "リンレイは、ワックスを何層も塗り重ねると、重ねられたワックスの間に汚れが入り込んで黒く濁ったりすることがあるとし、3回以上塗り重ねる場合は注意しながら作業するよう案内しています。",
  },
  {
    q: "ワックスがムラになるのはなぜですか？",
    a: "リンレイは、ワックスの塗布量が多いと均一に塗れずムラになり、塗布後にゴシゴシこすると跡が残ってムラになるとしています。一方向に塗るよう案内しています。",
  },
  {
    q: "二度塗りしたらツヤがなくなったのはなぜですか？",
    a: "リンレイは、はじめに塗った膜がしっかり乾燥してから塗り重ねるよう案内しています。乾燥が充分でないとツヤが出なかったり、はじめに塗ったワックス膜のツヤが下がることがあるとしています。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "床のワックスが黒ずむ・ムラになる原因｜塗り重ね・塗りすぎ・乾燥不足のメーカー公式の案内",
  alternates: { canonical: "/trouble/wax-darkening/" },
  description:
    "ワックスを塗った床の黒ずみ・ムラ・ツヤが出ない原因を、リンレイ・ノダ・ウッドワンの公式の案内から整理しました。何層もの塗り重ねで汚れが入り込む、塗布量が多い、こすって塗る、乾燥前の二度塗り、普段歩かない場所の膜厚など、原因ごとの直し方をまとめています。",
};

export default function WaxDarkeningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumbParent="症状別の対処"
        crumb="ワックスが黒ずむ・ムラになる"
        h1="床のワックスが黒ずむ・ムラになる原因｜塗り重ね・塗りすぎ・乾燥不足のメーカー公式の案内"
        lead={
          <>
            <p className="mb-3">
              リンレイは、ワックスを<strong>何層も塗り重ねると、重ねられたワックスの間に汚れが入り込んで黒く濁る</strong>ことがあるとしています。
              ムラについては、塗布量が多いこと、塗布後にゴシゴシこすることを原因に挙げています。
            </p>
            <p>
              塗り重ねで起きた黒ずみは、上から塗り足しても解消しません。ワックスの膜を落としてから塗り直すのが案内されている対処です。
            </p>
          </>
        }
        notice="このページはリンレイ・ノダ・ウッドワンの公式の案内（いずれも2026年11月2日確認）をもとにしています。"
        sections={[
          {
            heading: "症状と原因（メーカーの案内）",
            tone: "amber",
            table: {
              head: ["症状", "原因（メーカーの案内）"],
              rows: [
                ["黒く濁る", "何層も塗り重ねると、重ねられたワックスの間に汚れが入り込んで黒く濁ることがある。3回以上塗り重ねる場合は注意する（リンレイ）。"],
                ["普段歩かない場所の色が変わる", "廊下の端や机の下等、普段歩かないところはワックスが摩耗しないため、何度もワックスがけすると膜厚が増して色が変わって見えることがある（ノダ）。"],
                ["ムラになる", "塗布量が多いと均一に塗れずムラになる。塗布後にゴシゴシこすると跡が残ってムラになる（リンレイ）。ワックスの塗りすぎで床材表面が白く濁ったり、ワックスがムラになる（ウッドワン）。"],
                ["ツヤが出ない・下がる", "はじめに塗った膜が乾燥しないうちに塗り重ねると、ツヤが出なかったり、はじめに塗った膜のツヤが下がることがある（リンレイ）。"],
                ["ツヤが落ち汚れが目立つ", "ツヤがなくなり塗膜の汚れが目立ち始めたら、床用洗剤で汚れを落としてからワックスを塗る（リンレイ）。"],
                ["すり傷が目立つ", "濃色系の床材は光沢の加減でワックスのすり傷が目立つ場合がある（ウッドワン）。"],
              ],
            },
          },
          {
            heading: "直し方",
            list: [
              "汚れが目立つ程度なら、リンレイは「オール床クリーナー」で汚れを落としてからワックスを塗るよう案内しています。",
              "古いワックスの膜がはがれているときは、「オール床クリーナー」で古い膜をはがしてから塗り直すよう案内しています（リンレイ）。",
              "部分的な跡・シミは、マスキングテープで囲んで養生し、「オール床クリーナー」か「ワックスはがし上手」で一度はがしてから塗り替えるよう案内しています（リンレイ）。",
            ],
            after: [
              "何層にも重なった膜をまとめて落とす作業は、業者の剥離洗浄の対象です。ただし、ノダとウッドワンは剥離剤を使用しないよう案内しているため、依頼する前に床材メーカーの案内を業者に伝えてください。",
            ],
            note: (
              <>
                業者に頼むかの判断は<Link href="/know/stripping-decision/" className="underline">剥離の判断</Link>、作業内容は<Link href="/service/stripping-wash/" className="underline">剥離洗浄</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "塗り方で防ぐ",
            steps: [
              { title: "薄く一方向に塗る", body: "板目に沿って一方向に軽くなでるように薄くムラなく塗り広げます。特に樹脂ワックスは、ゴシゴシこするとムラの原因になります（リンレイ）。" },
              { title: "使用量の目安を守る", body: "ノダは使用量の目安を10ml/㎡としています。リンレイの家庭用ワックスも製品ページで1㎡当たり10mLを目安としています。" },
              { title: "重ね塗りは乾いてから", body: "前に塗ったワックスを必ず乾かしてから塗布します（ウッドワン・リンレイ）。" },
              { title: "普段歩かない場所は塗る回数を減らす", body: "ノダは、普段歩かないところは膜厚が増して色が変わって見えることがあるため、塗り過ぎに注意するよう案内しています。" },
            ],
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/service/stripping-wash/", label: "剥離洗浄の内容を見る" }}
        secondary={{ href: "/service/wax/", label: "ワックスがけの内容を見る" }}
        related={[
          { href: "/trouble/wax-whitening/", label: "ワックスが白くなる" },
          { href: "/trouble/wax-sticky/", label: "ワックスがベタつく" },
          { href: "/trouble/wax-peeling/", label: "ワックスがはがれる" },
          { href: "/trouble/wax-slippery/", label: "ワックスを塗って滑る" },
          { href: "/know/recoat-timing/", label: "塗り替え時期の目安" },
          { href: "/know/skip-wax/", label: "ワックスをかけない場合" },
          { href: "/maker/noda/", label: "ノダの床材のお手入れ" },
          { href: "/product/rinrei-all/", label: "リンレイ オール" },
        ]}
        sources={[
          { label: "株式会社リンレイ「ワックス製品について」のよくある質問", href: "https://www.rinrei.co.jp/home_care/question/", checked: "2026年11月2日" },
          { label: "株式会社リンレイ「フローリング専用ワックス」（家庭用製品・使用量の目安）", href: "https://www.rinrei.co.jp/home_care/wax/02/flooring_wax.html", checked: "2026年11月2日" },
          { label: "株式会社ノダ「床材についてのよくあるご質問」", href: "https://www.noda-co.jp/support/faq/floor/", checked: "2026年11月2日" },
          { label: "ウッドワン「木質床材お手入れマニュアル」（床材全般・PDF）", href: "https://www.woodone.co.jp/static/digitalcatalog/pdf/461_F-AL.pdf", checked: "2026年11月2日" },
        ]}
      />
    </>
  );
}
