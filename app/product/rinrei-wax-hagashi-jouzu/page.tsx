import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const faqs = [
  {
    q: "ワックスはがし上手はどんな床に使えますか？",
    a: "リンレイは用途を、フローリング床（樹脂塗装された木製の床）とビニール製の床（クッションフロア等）としています。水がしみこむ床（白木等）と、他社ワックスを使用した床には使えないとしています。",
  },
  {
    q: "フローリングにワックスはがし剤を使ってもよいですか？",
    a: "床材メーカーによって扱いが異なります。パナソニック・LIXIL・ノダはワックスはく離剤を使わないよう案内しています。朝日ウッドテックは、剥離剤で除去することは可能としつつ、変色のおそれがあるため注意し、強アルカリ性のものは使わないよう案内しています。お使いの床材のメーカーの案内を先に確認してください。",
  },
  {
    q: "1本でどのくらいの広さに使えますか？",
    a: "リンレイの公式ページでは、500mLで約10㎡（標準使用量の場合）とされています。使用量の目安は1㎡当たり50mLです。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "リンレイ「ワックスはがし上手」で自分で剥離する前に｜使える床と床材メーカーの注意",
  alternates: { canonical: "/product/rinrei-wax-hagashi-jouzu/" },
  description:
    "リンレイ「ワックスはがし上手」は、古くなったワックス膜を落とす家庭用のワックスはがし専用洗剤（アルカリ性・500mLで約10㎡）です。使える床・使えない床と手順に加え、パナソニック・LIXIL・ノダははく離剤を使わないよう案内している点など、使う前の確認事項を公式情報で整理しました。",
};

export default function WaxHagashiJouzuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumbParent="ワックス製品"
        crumb="リンレイ ワックスはがし上手"
        h1="リンレイ「ワックスはがし上手」で自分で剥離する前に｜使える床と床材メーカーの注意"
        lead={
          <>
            <p className="mb-3">
              「ワックスはがし上手」は、株式会社リンレイの家庭用の<strong>ワックスはがし専用洗剤</strong>です。古くなって汚れたり、シミになってしまったワックス膜をはがすことができるとしています。
              液性はアルカリ性で、用途はフローリング床（樹脂塗装された木製の床）とビニール製の床（クッションフロア等）です。
            </p>
            <p>
              ただし、<strong>床材メーカーの中には、ワックスはく離剤を使わないよう案内しているところがあります</strong>（パナソニック・LIXIL・ノダ）。このページでは、リンレイ公式の製品ページと床材メーカーの案内をもとに、使う前に確認しておきたい点を整理しています。
            </p>
          </>
        }
        notice="このページはリンレイ公式の製品ページと、各床材メーカーの公式の案内（いずれも2026年11月1日確認）をもとにしています。価格は公式の製品ページに掲載がないため記載していません。"
        sections={[
          {
            heading: "製品の概要",
            tone: "amber",
            table: {
              head: ["項目", "公式の表示"],
              rows: [
                ["品名", "住宅用合成洗剤"],
                ["液性", "アルカリ性"],
                ["成分", "界面活性剤（2％ポリオキシエチレンアルキルエーテル）、溶剤、アルカリ剤"],
                ["正味量", "500mL"],
                ["使用量の目安", "1㎡当たり50mL（キャップ1杯約12mL）。1本で約10㎡（標準使用量の場合）"],
                ["付属品", "専用スポンジ"],
              ],
            },
          },
          {
            heading: "使える床・使えない床",
            table: {
              head: ["区分", "リンレイの記載"],
              rows: [
                ["用途", "フローリング床（樹脂塗装された木製の床）、ビニール製の床（クッションフロア等）"],
                ["使えない床", "水がしみこむ床（白木等）、他社ワックスを使用した床"],
              ],
              caption: "「他社ワックスを使用した床」には使えないとされているため、前回どのワックスを塗ったかが分からない場合は注意が必要です。",
            },
          },
          {
            heading: "床材メーカーのはく離剤の扱い",
            paras: [
              "リンレイの用途にフローリング床が含まれていても、床材メーカーがはく離剤を使わないよう案内している場合があります。今回確認した床材メーカーの案内は次のとおりです。",
            ],
            table: {
              head: ["床材メーカー", "はく離剤についての案内"],
              rows: [
                [<Link key="p" href="/maker/panasonic/" className="underline">パナソニック</Link>, "ワックス剥離剤は使用しない。剥離剤を使用すると膨れ、変色などが発生する場合がある。"],
                [<Link key="l" href="/maker/lixil/" className="underline">LIXIL</Link>, "ワックスはく離剤は表面材を傷める原因となるため使用しない。"],
                [<Link key="n" href="/maker/noda/" className="underline">ノダ</Link>, "ワックスの剥離剤はフロア表面塗膜を侵すため、絶対に使用しない。"],
                [<Link key="w" href="/maker/woodtec/" className="underline">朝日ウッドテック</Link>, "ワックス剥離剤で除去することは可能。変色のおそれがあるため使用方法をよく読み十分に注意し、使用後は水で濡らしてよく絞った雑巾で拭き取る。強アルカリ性のものは使用しない。"],
              ],
              caption: "ワックスはがし上手の液性は「アルカリ性」と表示されています（強アルカリ性かどうかの表示はありません）。朝日ウッドテックの床に使う場合は、製品の表示や朝日ウッドテックの窓口で確認してください。",
            },
          },
          {
            heading: "使い方（リンレイの案内）",
            steps: [
              { title: "準備する", body: "必ず炊事用手袋を着用し、天気のよい日を選んで窓を開け、換気をよくします。必ず目立たない部分で変色・シミにならないことを確かめてから使うよう案内されています。" },
              { title: "原液を塗り広げる", body: "床1㎡に対して50mL程をたらし、付属のスポンジで均一に塗り広げます。" },
              { title: "1〜2分置いてこすり落とす", body: "1〜2分間放置した後、付属のスポンジでこすり落とします。一度で取りきれない場合は作業を繰り返します。" },
              { title: "3回以上水拭きして乾かす", body: "ぞうきん等で洗剤分を取り除き、きれいに水洗いしたぞうきんで3回以上水拭きをくり返して完全に洗剤分を取り除き、乾かします。" },
            ],
            after: [
              "一度に広い面積を作業せず、1㎡位ずつ進めるよう案内されています。家具や建具には使用せず、他の洗剤とは混ぜないよう案内されています。",
            ],
          },
          {
            heading: "業者に頼むかの判断",
            paras: [
              "ワックスはがし上手の使用量の目安（1本で約10㎡）と、1㎡ずつ作業して3回以上水拭きする手順から、部屋全体の剥離は手間のかかる作業になります。床材メーカーがはく離剤を使わないよう案内している床や、前回のワックスの種類が分からない床では、自分で剥離する前に床材メーカーか業者に相談するのが安全です。",
            ],
            note: (
              <>
                判断の目安は<Link href="/know/stripping-decision/" className="underline">剥離洗浄を自分でやるか業者に頼むか</Link>、業者の作業内容は<Link href="/service/stripping-wash/" className="underline">剥離洗浄</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/service/stripping-wash/", label: "剥離洗浄の内容を見る" }}
        secondary={{ href: "/know/stripping-decision/", label: "剥離洗浄の判断" }}
        related={[
          { href: "/product/rinrei-all/", label: "リンレイ オール" },
          { href: "/product/rinrei-hightech-flooring-coat/", label: "ハイテクフローリングコート" },
          { href: "/maker/panasonic/", label: "パナソニックの床" },
          { href: "/maker/lixil/", label: "LIXILの床のお手入れ" },
          { href: "/maker/noda/", label: "ノダの床材" },
          { href: "/maker/woodtec/", label: "朝日ウッドテックの床" },
          { href: "/know/recoat-timing/", label: "塗り替え時期の目安" },
          { href: "/cost/diy-vs-pro/", label: "自分でやるか業者か" },
        ]}
        sources={[
          { label: "リンレイ「ワックスはがし上手」（家庭用製品）", href: "https://www.rinrei.co.jp/home_care/wax/06/hagashi_jouzu.html", checked: "2026年11月1日" },
          { label: "パナソニック「木質床材・フローリングのお手入れ（床のお掃除）」", href: "https://sumai.panasonic.jp/support/care/floor/01/", checked: "2026年11月1日" },
          { label: "LIXIL Q&A「フローリング（床材）のワックス」", href: "https://faq.lixil.co.jp/%E3%83%95%E3%83%AD%E3%83%BC%E3%83%AA%E3%83%B3%E3%82%B0%EF%BC%88%E5%BA%8A%E6%9D%90%EF%BC%89%E3%81%AE%E3%83%AF%E3%83%83%E3%82%AF%E3%82%B9-626cd6cb906696001d03676b", checked: "2026年11月1日" },
          { label: "株式会社ノダ「床材についてのよくあるご質問」", href: "https://www.noda-co.jp/support/faq/floor/", checked: "2026年11月1日" },
          { label: "朝日ウッドテック公式サイト「フリーワックス」", href: "https://www.woodtec.co.jp/maintenance/index04/", checked: "2026年11月1日" },
        ]}
      />
    </>
  );
}
