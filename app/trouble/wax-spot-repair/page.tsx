import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const faqs = [
  {
    q: "ワックスが乾く前に歩いて足跡が付いたら、どう直しますか？",
    a: "リンレイは、足跡が付いた部分をマスキングテープで囲んで養生し、「オール床クリーナー」か「ワックスはがし上手」で一度ワックスをはがしてから塗り直すよう案内しています。",
  },
  {
    q: "髪の毛を一緒に塗り込んでしまったら？",
    a: "リンレイは、床に残った髪の毛はワックスと一緒に固まり、取っても跡が残るため、前もって必ず取り除くよう案内しています。塗り込んだ場合は、足跡と同じく部分的にはがしてから塗り替えます。",
  },
  {
    q: "こぼしたワックスが固まってしまったら？",
    a: "リンレイは、消毒用のアルコールで溶かして除去するよう案内しています。ただし、その作業で塗られているワックスも一緒にはがれるとしています。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "ワックスに足跡・髪の毛・シミが付いたときの部分的な直し方｜リンレイ公式の案内",
  alternates: { canonical: "/trouble/wax-spot-repair/" },
  description:
    "ワックスを塗った床に足跡・髪の毛・シミが付いた、こぼしたワックスが固まったときの直し方を、リンレイ公式のよくある質問と製品ページから整理しました。マスキングテープで囲んで部分的にはがす手順と、使う洗剤の量をまとめています。",
};

export default function WaxSpotRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumbParent="症状別の対処"
        crumb="足跡・髪の毛・シミの部分補修"
        h1="ワックスに足跡・髪の毛・シミが付いたときの部分的な直し方｜リンレイ公式の案内"
        lead={
          <>
            <p className="mb-3">
              足跡・髪の毛・シミは、その部分だけ<strong>マスキングテープで囲み、ワックスを一度はがしてから塗り直す</strong>のがリンレイの案内です。
            </p>
            <p>
              上から塗り重ねても跡は消えません。こぼして固まったワックスは、消毒用アルコールで溶かして除去するとしています。
            </p>
          </>
        }
        notice="このページはリンレイ公式の「ワックス製品について」のよくある質問と製品ページ（いずれも2026年11月3日確認）をもとにしています。"
        sections={[
          {
            heading: "症状と対処（リンレイの案内）",
            tone: "amber",
            table: {
              head: ["症状", "対処"],
              rows: [
                ["乾く前に歩いて足跡が付いた", "足跡の部分をマスキングテープで囲んで養生し、「オール床クリーナー」か「ワックスはがし上手」で一度はがしてから塗り直す。"],
                ["髪の毛を一緒に塗り込んだ", "髪の毛の部分を同じように養生し、一度はがしてから塗り替える。髪の毛はワックスと一緒に固まり、取っても跡が残る。"],
                ["塗った所にシミを付けた", "シミの部分を同じように養生し、一度はがしてから塗り替える。"],
                ["こぼしたワックスが固まった", "消毒用のアルコールで溶かして除去する。その部分に塗られたワックスも一緒にはがれる。"],
              ],
            },
          },
          {
            heading: "部分的にはがして塗り直す手順",
            steps: [
              { title: "マスキングテープで囲む", body: "跡の部分をマスキングテープで囲んで養生します（リンレイ）。" },
              { title: "はくり剤を塗って待つ", body: "「ワックスはがし上手」は1㎡当たり約50mLをたらして付属のスポンジで塗り広げ、1〜2分置いてからこすり落とします。炊事用手袋を着用し、換気をよくします。" },
              { title: "水拭きで洗剤分を取る", body: "きれいに水洗いしたぞうきんで3回以上水拭きをくり返し、洗剤分を完全に取り除いて乾かします（ワックスはがし上手）。" },
              { title: "薄く塗り直す", body: "同じワックスを薄く一方向に塗り、完全に乾かします。乾く前に重ね塗りするとツヤが出ないことがあります（リンレイ）。" },
            ],
          },
          {
            heading: "はくり剤を使う前の確認",
            list: [
              "「ワックスはがし上手」「オール床クリーナー」は、白木など水がしみこむ床や、他社ワックスを使用した床には使えないとしています。",
              "床材メーカーの中には、剥離剤を使用しないよう案内しているところがあります（ノダ・ウッドワン）。先にメーカーの案内を確認してください。",
              "何層にも重なった膜をまとめて落とす作業は、業者の剥離洗浄の対象です。",
            ],
            note: (
              <>
                剥離を業者に頼むかの判断は<Link href="/know/stripping-decision/" className="underline">剥離の判断</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "防ぐために",
            list: [
              "塗る前に床の髪の毛やゴミを必ず取り除きます（リンレイ）。",
              "乾燥時間はおよそ30分〜1時間で、手で触ってベタつかなくなれば大丈夫としています（リンレイ）。それまでは歩かないようにします。",
              "ワックスの容器の底を床に直接置かないようにします。容器の底面にワックスが付いたまま床に置くと固まるとしています（リンレイ）。",
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
          { href: "/product/rinrei-wax-hagashi-jouzu/", label: "ワックスはがし上手" },
          { href: "/trouble/wax-darkening/", label: "ワックスが黒ずむ・ムラになる" },
          { href: "/trouble/wax-whitening/", label: "ワックスが白くなる" },
          { href: "/trouble/wax-peeling/", label: "ワックスがはがれる" },
          { href: "/know/wax-storage-disposal/", label: "ワックスの保管と処分" },
          { href: "/maker/noda/", label: "ノダの床材のお手入れ" },
        ]}
        sources={[
          { label: "株式会社リンレイ「ワックス製品について」のよくある質問", href: "https://www.rinrei.co.jp/home_care/question/", checked: "2026年11月3日" },
          { label: "株式会社リンレイ「ワックスはがし上手」", href: "https://www.rinrei.co.jp/home_care/wax/06/hagashi_jouzu.html", checked: "2026年11月3日" },
          { label: "株式会社リンレイ「オール床クリーナー」", href: "https://www.rinrei.co.jp/home_care/wax/06/allyukacleaner.html", checked: "2026年11月3日" },
          { label: "株式会社ノダ「床材についてのよくあるご質問」", href: "https://www.noda-co.jp/support/faq/floor/", checked: "2026年11月3日" },
          { label: "ウッドワン「木質床材お手入れマニュアル」（床材全般・PDF）", href: "https://www.woodone.co.jp/static/digitalcatalog/pdf/461_F-AL.pdf", checked: "2026年11月3日" },
        ]}
      />
    </>
  );
}
