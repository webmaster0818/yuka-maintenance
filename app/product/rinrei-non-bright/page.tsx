import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const faqs = [
  {
    q: "ノンブライトはどんな床に使えますか？",
    a: "リンレイは用途を「ツヤ消しタイプのフローリング床（樹脂塗装された低光沢の木製床）」としています。油加工された床、ロウタイプのワックスを使用した床、塗装されていない木床（白木床等）、ビニール製の床、石床などには使えないとしています。",
  },
  {
    q: "耐久性と乾燥時間は？",
    a: "リンレイの公式の製品ページでは、耐久性は約6ヶ月、乾燥時間は約30分と表示されています。初めて塗るときは合計2回塗ります。",
  },
  {
    q: "どの床材メーカーが推奨していますか？",
    a: "ウッドワンが、艶消しの仕上げの床材（無垢ピノアースのレギュラー塗装・クラフト仕上げ、艶消し仕上げの商品）の推奨ワックスとして挙げています。" +
      "朝日ウッドテックも、ナチュラルマット・マット塗装、ピュアハード塗装、シートの床の推奨ワックスとして挙げています。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "リンレイ「ノンブライト」とは｜ツヤ消しの床に使うワックスと推奨する床材メーカー",
  alternates: { canonical: "/product/rinrei-non-bright/" },
  description:
    "リンレイ「ノンブライト」は、樹脂塗装された低光沢の木製床向けのツヤ消しタイプの水性樹脂ワックスです（耐久性 約6ヶ月・乾燥 約30分）。ウッドワンと朝日ウッドテックが推奨ワックスに挙げています。使える床・使えない床、使い方、床材メーカーの指定を公式の案内から整理しました。",
};

export default function NonBrightPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumbParent="ワックス製品"
        crumb="リンレイ ノンブライト"
        h1="リンレイ「ノンブライト」とは｜ツヤ消しの床に使うワックスと推奨する床材メーカー"
        lead={
          <>
            <p className="mb-3">
              「ノンブライト」は、株式会社リンレイの家庭用の水性（樹脂系）ワックスで、<strong>ツヤ消しタイプのフローリング床（樹脂塗装された低光沢の木製床）</strong>用です。
              リンレイは、フローリング本来の風合いを保つツヤ消しタイプで、ツヤは出ないがワックス効果は発揮されるとしています。
            </p>
            <p>
              床材メーカーでは、<strong>ウッドワン</strong>と<strong>朝日ウッドテック</strong>が推奨ワックスとして挙げています。
            </p>
          </>
        }
        notice="このページはリンレイ公式の製品ページと、ウッドワン・朝日ウッドテックの公式の案内（いずれも2026年11月2日確認）をもとにしています。価格は公式の製品ページに掲載がないため記載していません。"
        sections={[
          {
            heading: "製品の概要",
            tone: "amber",
            table: {
              head: ["項目", "公式の表示"],
              rows: [
                ["品名", "床用ワックス（製品名 ノンブライト）"],
                ["種類", "水性（樹脂系）"],
                ["成分", "合成樹脂（アクリル樹脂、ウレタン樹脂）、水"],
                ["正味量", "500mL"],
                ["使用量の目安", "1㎡あたり10mL（1本で約30畳分）"],
                ["耐久性", "約6ヶ月"],
                ["乾燥時間", "約30分"],
                ["性能表（5段階）", "ツヤ 0／耐キズ性 3／塗りやすさ 4"],
                ["使える床（アイコン表示）", "フローリング、UV塗装"],
              ],
              caption: "性能表の星の数は、リンレイ公式の製品ページの表示を数値にしたものです（ツヤは星なし）。",
            },
          },
          {
            heading: "使える床・使えない床",
            table: {
              head: ["区分", "リンレイの記載"],
              rows: [
                ["用途", "ツヤ消しタイプのフローリング床（樹脂塗装された低光沢の木製床）"],
                ["使えない床", "油加工された床（オイルステイン・ロウ仕上げ等）、ロウタイプのワックスを使用した床、塗装されていない木床（白木床等）、ウルシ等特殊な床、ビニール製の床、土足で歩く床、石床"],
              ],
            },
            after: [
              "同じリンレイの「フローリング専用ワックス つやなし」も低光沢の木製床用ですが、耐久性の表示は約1年、正味量は1Lです。どちらを使うかは、床材メーカーの指定を確認してください。",
            ],
          },
          {
            heading: "床材メーカーの推奨指定",
            table: {
              head: ["床材メーカー", "ノンブライトを推奨している床"],
              rows: [
                [<Link key="wo" href="/maker/woodone/" className="underline">ウッドワン</Link>, "無垢ピノアースのレギュラー塗装・クラフト仕上げ（浮造り加工のため艶消しのワックスを推奨）、艶消し仕上げの商品（レギュラー塗装・GCコート）。同じ枠で「フローリング専用ワックスつやなし」「ハイテクフローリングコートつや消し20・40」（業務用）も推奨"],
                [<Link key="wt" href="/maker/woodtec/" className="underline">朝日ウッドテック</Link>, "ナチュラルマット・マット塗装、ピュアハード塗装、シートの床（ヘリンボーンは対象外）"],
              ],
            },
            after: [
              "今回確認した永大産業・ノダ・DAIKENの公式の案内では、ノンブライトは推奨品として挙げられていません。ウッドワンのプロテクト塗装・UV塗装・GCαコートの床など、艶のある床の推奨品は「ハイテクフローリングコート」です。",
            ],
          },
          {
            heading: "使い方",
            steps: [
              { title: "汚れと油分を落とす", body: "「オール床クリーナー（別売）」等の床用洗剤で汚れや油分等を拭き取ります。" },
              { title: "水拭きしてよく乾かす", body: "床の洗剤分を取り除き、よく乾かします。" },
              { title: "容器をよく振る", body: "液が分離するタイプのため、キャップを閉めた状態で約10秒容器をよく振ります。" },
              { title: "薄くムラなく塗り、乾かす（約30分）", body: "塗布具や布にしみ込ませ、薄くムラなく塗り広げます（厚塗りは避ける）。初めて塗るときは合計2回塗ります。2回目もよく振ってから使います。カラ拭きは必要ありません。" },
            ],
            after: [
              "水分の放置やアルコール・薬剤・食器用洗剤の付着により、ワックス膜が白くなったり剥がれたりする場合があるため、すぐに拭き取るよう案内されています。ムラやすべりの原因になるため化学ぞうきん等は使わないよう案内されています。",
            ],
            note: (
              <>
                白くなった場合の対処は<Link href="/trouble/wax-whitening/" className="underline">ワックスが白くなる原因と直し方</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/maker/woodone/", label: "ウッドワンの推奨ワックスを見る" }}
        secondary={{ href: "/service/wax/", label: "ワックスがけの内容を見る" }}
        related={[
          { href: "/product/rinrei-flooring-wax-tsuyanashi/", label: "フローリング専用ワックスつやなし" },
          { href: "/product/rinrei-hightech-flooring-coat/", label: "ハイテクフローリングコート" },
          { href: "/maker/woodtec/", label: "朝日ウッドテックの床" },
          { href: "/maker/woodone/", label: "ウッドワンの床材のお手入れ" },
          { href: "/know/wax-types/", label: "ワックスの種類と選び方" },
          { href: "/know/recoat-timing/", label: "塗り替え時期の目安" },
          { href: "/trouble/wax-darkening/", label: "ワックスが黒ずむ・ムラになる" },
          { href: "/floor/flooring/", label: "フローリングのガイド" },
        ]}
        sources={[
          { label: "リンレイ「ノンブライト」（家庭用製品）", href: "https://www.rinrei.co.jp/home_care/wax/02/non_bright.html", checked: "2026年11月2日" },
          { label: "ウッドワン「木質床材お手入れマニュアル」（床材全般・PDF）", href: "https://www.woodone.co.jp/static/digitalcatalog/pdf/461_F-AL.pdf", checked: "2026年11月2日" },
          { label: "朝日ウッドテック公式サイト「フリーワックス」", href: "https://www.woodtec.co.jp/maintenance/index04/", checked: "2026年11月2日" },
        ]}
      />
    </>
  );
}
