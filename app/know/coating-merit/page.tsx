import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const CHECKED = "2026年11月20日";

const faqs = [
  {
    q: "フロアコーティングのメリットは何ですか？",
    a: "施工会社の公式サイトで共通して挙げられているのは、傷・汚れがつきにくくなる、水や薬品に強くなる、滑りにくくなる、長期間ワックスがけが不要になる、の4点です。どの程度かは商品ごとに異なり、保証年数・硬度・滑りにくさの数値などで示している会社があります。",
  },
  {
    q: "日焼け（色あせ）も防げますか？",
    a: "カラーはよくある質問で、フロアコーティングには多少の反射効果はあるものの、日焼け防止の効果はほとんどないと回答しています。紫外線対策には窓ガラスフィルムをすすめています。",
  },
  {
    q: "ワックスと比べて費用面のメリットはありますか？",
    a: "アップライフは、ワックスは半年〜1年ごとの塗り直しが必要で、そのたびに費用がかかるのに対し、コーティングは一度の施工で長期間保護できると案内しています。ただし初期費用はコーティングのほうが高く、比べる年数によって差は変わります。",
  },
  {
    q: "メリットがあっても、やめたほうがよい床はありますか？",
    a: "DAIKEN・LIXIL・ノダは、自社の床材にフロアコーティングを使わないよう案内しています。LIXILは使用に伴う不具合を保証対象外としています。メリットを検討する前に、床材のメーカーの案内を確認してください。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "フロアコーティングのメリット｜施工会社5社が示す保証・硬度・滑りにくさと、その条件",
  alternates: { canonical: "/know/coating-merit/" },
  description:
    "フロアコーティングのメリットを、グッドライフ・ジェブ・カラー・ドッグランコーティング・アップライフの公式サイト（2026年11月20日確認）で比べました。各社がメリットの裏付けとして示す保証年数・硬度・滑りにくさ・入居までの時間と、メリットに当たらない点・床材メーカーの案内をまとめています。",
};

export default function CoatingMeritPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumb="フロアコーティングのメリット"
        h1="フロアコーティングのメリット｜施工会社5社が示す保証・硬度・滑りにくさと、その条件"
        lead={
          <>
            <p className="mb-3">
              施工会社の公式サイトで共通して挙げられているメリットは、<strong>傷・汚れがつきにくい／水や薬品に強い／滑りにくい／長期間ワックスがけが不要</strong>の4点です。裏付けとして、保証年数（20〜35年）、表面硬度（9H・8H）、滑り抵抗値などを示している会社があります。
            </p>
            <p>
              一方で、<strong>日焼け防止の効果はほとんどない</strong>と回答している会社もあり、床材メーカーのDAIKEN・LIXIL・ノダはフロアコーティングを使わないよう案内しています。メリットは、商品ごとの条件と床材の案内をあわせて確かめることが大切です。
            </p>
          </>
        }
        notice={`このページは、施工会社5社の公式サイトの商品案内・よくある質問・保証内容と、床材メーカーの案内（いずれも${CHECKED}確認）をもとに、当サイトが並べたものです。施工会社の案内は、各社がコーティングをすすめる立場で書いたものです。`}
        sections={[
          {
            heading: "各社がメリットの裏付けとして示している内容",
            tone: "amber",
            table: {
              head: ["メリット", "公式に示されている内容（会社）"],
              rows: [
                ["傷がつきにくい", "グッドライフ「色」は表面硬度9H、「クリスタル」は硬度8H（従来のガラスコーティングは7Hと比較）と記載（グッドライフ）"],
                ["長持ちする", "保証はクリスタル35年・色／光30年・松／竹20年（グッドライフ）。施工完了時から20〜30年の製品保証（アップライフ）。EPCOATは30年以上の耐久性と案内（ジェブ）"],
                ["滑りにくい", "ガラスコーティングの滑り抵抗値は一般的なフローリングの約1.5倍、市販のペット用ワックスの約1.3倍と記載（ドッグランコーティング）。滑り止め効果がペットの関節への負担軽減につながると案内（カラー）"],
                ["水・薬品に強い", "「光」「色」は塩素系の薬品にも耐性があると記載（グッドライフ）。お子様がいる家庭には塩素系の掃除材が使えるUVコーティングをすすめると回答（カラー）"],
                ["すぐ入居できる", "UV照射で硬化させる種類は施工後すぐに入居可能、自然乾燥の種類は重い家具の設置を中1日ほど空けるよう案内（アップライフ）。EPCOATは当日の夜から入室、荷物の搬入は翌日以降（ジェブ）"],
                ["傷ついたときの補修", "お客様による傷も「1回10箇所まで×2回無料補修」（アップライフ）。2023年12月以降の施工は生活上のキズを2年に1回まで無償補修（グッドライフ）"],
              ],
              caption: "数値・年数は各社の公式ページの記載です。測り方や保証の対象は会社ごとに異なるため、横並びの優劣比較には使えません。",
            },
          },
          {
            heading: "メリットに当たらない点・条件つきの点",
            list: [
              "日焼け防止：カラーは、多少の反射効果はあるものの日焼け防止の効果はほとんどないと回答し、紫外線対策には窓ガラスフィルムをすすめています",
              "艶の調整：グッドライフは、商品の光沢のカスタマイズはできないと回答しています。艶は商品選びの段階で決まります",
              "剥がせるコーティング：カラーは、剥がせるコーティングは耐久性が5年未満であることが多いと回答しています。剥がしやすさと長持ちは両立しにくい点に注意が必要です",
              "床材メーカーの保証：DAIKEN・LIXIL・ノダは自社の床材にフロアコーティングを使わないよう案内し、LIXILは使用に伴う不具合を保証対象外としています",
            ],
          },
          {
            heading: "メリットを確かめるときに見ること",
            list: [
              "保証年数だけでなく、保証の対象（膜の剥がれ・めくれ、生活のキズなど）と回数を保証書で確認する",
              "「傷に強い」「滑りにくい」の根拠として、硬度や滑り抵抗値などの数値が示されているかを見る",
              "入居までの時間と、家具・荷物を入れられる日を確認する（UV照射か自然乾燥かで異なる）",
              "床材のメーカーと品番を確かめ、メーカーがフロアコーティングをどう案内しているかを読む",
            ],
            note: (
              <>
                注意点の側から整理したページは<Link href="/know/coating-demerit/" className="underline">フロアコーティングのデメリット</Link>、ワックスとの選び分けは<Link href="/know/wax-or-coating/" className="underline">ワックスとフロアコーティングのどちらを検討するか</Link>、保証書の見方は<Link href="/know/coating-warranty/" className="underline">フロアコーティングの保証</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/service/floor-coating/", label: "フロアコーティングの業者を見る" }}
        secondary={{ href: "/know/coating-demerit/", label: "デメリットも確かめる" }}
        related={[
          { href: "/know/coating-demerit/", label: "フロアコーティングのデメリット" },
          { href: "/know/wax-or-coating/", label: "ワックスとフロアコーティングの比較" },
          { href: "/know/coating-warranty/", label: "フロアコーティングの保証" },
          { href: "/know/matte-coating/", label: "つや消しのフロアコーティング" },
          { href: "/company/goodlife/", label: "グッドライフ" },
          { href: "/company/uplife/", label: "アップライフ" },
        ]}
        sources={[
          { label: "グッドライフ公式「フロアコーティングの商品一覧」", href: "https://www.good-life.co.jp/product/", checked: CHECKED },
          { label: "グッドライフ公式「保証内容」", href: "https://www.good-life.co.jp/quality/", checked: CHECKED },
          { label: "グッドライフ公式「Q&A」", href: "https://www.good-life.co.jp/qa/", checked: CHECKED },
          { label: "ジェブ公式「EPCOAT」トップページ（よくある質問）", href: "https://epcoat.net/", checked: CHECKED },
          { label: "ジェブ公式「EPCOAT-M（マット）」", href: "https://epcoat.net/service/epcoat-m.html", checked: CHECKED },
          { label: "カラー公式「よくある質問」", href: "https://www.uv-colors.jp/faq/all", checked: CHECKED },
          { label: "ドッグランコーティング公式「よくある質問」", href: "https://dogrun-coating.com/faq/", checked: CHECKED },
          { label: "アップライフ公式「フロアコーティングのよくある質問」", href: "https://uplife.biz/faq/", checked: CHECKED },
          { label: "アップライフ公式「工事までの流れ」", href: "https://uplife.biz/flow/", checked: CHECKED },
          { label: "DAIKEN よくあるご質問「床材のお手入れ方法一覧」", href: "https://faq.daiken.jp/faq/show/3189?site_domain=user", checked: CHECKED },
          { label: "LIXIL Q&A「フローリングにフロアコーティングしてもよいですか。」", href: "https://faq.lixil.co.jp/%E3%83%95%E3%83%AD%E3%83%BC%E3%83%AA%E3%83%B3%E3%82%B0%E3%81%AB%E3%83%95%E3%83%AD%E3%82%A2%E3%82%B3%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%97%E3%81%A6%E3%82%82%E3%82%88%E3%81%84%E3%81%A7%E3%81%99%E3%81%8B%E3%80%82-63c8e03b6876c9001d3bfb52", checked: CHECKED },
          { label: "ノダ「よくあるご質問（床材）」", href: "https://www.noda-co.jp/support/faq/floor/", checked: CHECKED },
        ]}
      />
    </>
  );
}
