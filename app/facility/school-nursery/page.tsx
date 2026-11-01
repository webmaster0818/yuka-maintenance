import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const faqs = [
  {
    q: "教室の床のワックスがけはどんな手順ですか？",
    a: "リンレイの学校向け手順書では、机などを運び出してゴミを取り、洗剤で洗浄して汚水を回収し、水拭き（ビニル床は2回、木床は3回）のあと30分以上乾燥させ、樹脂ワックスを塗って乾燥、もう一度塗って乾燥させる流れです。ワックスの量は一教室当り1Lが目安としています。",
  },
  {
    q: "木の床の教室に樹脂ワックスを塗ってもよいですか？",
    a: "床の仕上げによります。リンレイは「油加工された木床や油性ワックスなどロウを主成分としたワックスが塗られた木床の場合、樹脂ワックスを塗ることはできません。」と記載しています。UV樹脂加工された木床には、フローリング専用樹脂ワックス「ハイテクフローリングコート」をすすめています。",
  },
  {
    q: "休校日や休園日に合わせて作業してもらえますか？",
    a: "依頼先によります。たとえばオスモ＆エーデルは、学校・幼稚園の木製フローリング再生について、週末や休園日・休校日など園や学校のスケジュールに合わせて日程を調整すると案内しています。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "学校・保育園の床のワックスがけと木の床の再生｜教室ごとの手順と業者に伝えること",
  alternates: { canonical: "/facility/school-nursery/" },
  description:
    "学校・保育園の床は、教室の木質パネル、廊下の塩ビシート、図書室のカーペットなど場所で床材が変わります。リンレイの学校向け手順書（ワックスは一教室当り1Lが目安・2回塗り）、木の床に樹脂ワックスを塗れない場合、オスモ＆エーデルの木製フローリング再生などを公式情報（2026年11月1日確認）で整理しました。",
};

export default function SchoolNurseryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumbParent="施設別の床清掃"
        crumb="学校・保育園"
        h1="学校・保育園の床のワックスがけと木の床の再生｜教室ごとの手順と業者に伝えること"
        lead={
          <>
            <p className="mb-3">
              学校や保育園の床は、<strong>教室は木質パネル、廊下は塩ビシート、図書室はカーペット</strong>というように、場所で床材が変わります。ワックスメーカーのリンレイは、ビニル床と木床の教室それぞれについて、樹脂ワックスを塗る手順を公開しています。
            </p>
            <p>
              木の床は、表面の仕上げによって樹脂ワックスを塗れない場合があります。傷やささくれが目立つ木の床は、研磨して塗り直す「再生」という選択肢もあります。
            </p>
          </>
        }
        notice="このページは、リンレイの業務用サイト「学校・幼保育園・学習塾」「学校清掃のポイント」と手順書（PDF）、オスモ＆エーデル、当サイト掲載社の公式サイト（いずれも2026年11月1日確認）をもとにしています。"
        sections={[
          {
            heading: "場所ごとの床材（リンレイの分類）",
            tone: "amber",
            table: {
              head: ["使用場所", "床材"],
              rows: [
                ["教室床", "木質パネル"],
                ["廊下", "塩ビシート"],
                ["図書室", "カーペット"],
              ],
              caption: "リンレイ業務用サイトの「学校・幼保育園・学習塾」のページの記載です。遊戯室・多目的室、トイレなども使用場所として挙げられています。",
            },
          },
          {
            heading: "教室の樹脂ワックス塗布の手順（リンレイ手順書）",
            paras: [
              "リンレイは「学校清掃のポイント」のページで、ビニル床と木床の教室について、初めて樹脂ワックスを塗る手順書を公開しています。主な違いは次のとおりです。",
            ],
            table: {
              head: ["項目", "ビニル床の教室", "木床の教室"],
              rows: [
                ["洗浄", "洗剤を塗り広げて5分程度置き、ポリッシャーと洗浄パッド（緑）で洗浄。汚水を回収", "洗剤を塗り広げ、ポリッシャーと洗浄パッド（赤）で洗浄。洗剤を濡らし過ぎないようにし、洗浄後は直ちに汚水を回収"],
                ["水拭き", "ゆるく絞ったモップで1回、固く絞ったモップで2回", "固く絞ったモップで3回"],
                ["乾燥", "30分以上", "30分以上"],
                ["ワックス", "一教室当り1Lが目安。乾燥後、もう一度一教室当り1L", "モップに浸み込ませ、木目に沿って塗る。一教室当り1Lが目安で2回"],
                ["乾燥の目安", "30〜40分程度（雨の日などは1.5倍位長め）", "30〜40分程度（雨の日などは1.5倍位長め）"],
              ],
              caption: "雨の日や気温が低い日はワックスの乾きが悪く仕上がりにも影響するため、できるだけ天気のよい日に行うと記載されています。手順書には「この作業は大人が行ってください」との注記があります。",
            },
          },
          {
            heading: "木の床で確かめること",
            list: [
              "リンレイの木床の手順書には「油加工された木床や油性ワックスなどロウを主成分としたワックスが塗られた木床の場合、樹脂ワックスを塗ることはできません。」と記載されています。",
              "UV樹脂加工された木床には、密着性に優れたフローリング専用樹脂ワックス「ハイテクフローリングコート」をすすめています。",
              "ワックスを塗布していない場合は床面に汚れがしみ込んでいるため、汚れが除去しきれないと仕上がりが悪くなるとしています。",
              "ビニル床の手順書では、油性ワックス等を塗布してから3ヶ月程度しか経過していない場合には、完全に除去しきれないことがあると記載しています。",
            ],
            note: (
              <>
                オイル仕上げの床の手入れは<Link href="/maker/osmo/" className="underline">オスモカラー塗装の床のお手入れ</Link>、指定されたワックスについては<Link href="/product/rinrei-hightech-flooring-coat/" className="underline">ハイテクフローリングコート</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "傷んだ木の床を研磨して塗り直す（フローリング再生）",
            paras: [
              "オスモ＆エーデルは、学校・幼稚園・保育園などの木製フローリングを対象に、張り替えずに研磨と再塗装で再生するサービスを案内しています。公式ページの施工の流れは次のとおりです。",
            ],
            steps: [
              { title: "現地確認・床の状態確認", body: "傷み具合や床材の状態、施工範囲を確認し、週末や休園日・休校日など園や学校のスケジュールに合わせて日程を調整します。" },
              { title: "専用研磨機械による研磨", body: "床表面を研磨して、傷や汚れ、古い塗膜、ささくれを除去します。研磨時に発生する木粉は集じんします。" },
              { title: "専用オスモカラーで再塗装", body: "木の状態や空間に合わせ、オスモカラー床用塗料を2回塗装します。" },
            ],
            note: "研磨や塗り直しの考え方は、住宅向けの解説ですが「フローリングの研磨」のページでも扱っています。",
          },
          {
            heading: "コーティングの実績を公表している掲載社",
            paras: [
              "FSSCOATは、UVコーティング「UV-SCOAT」の施工物件として保育園（山形県）を公式ページに掲載しています。エコプロコートは、住宅だけでなく病院や保育園などでも多数の実績があると記載しています。コーティングを検討する場合は、床材メーカーの案内も確認してください。",
            ],
            note: (
              <>
                各社の保証と料金は<Link href="/service/uv-coating/" className="underline">UVフロアコーティング</Link>で比較しています。
              </>
            ),
          },
          {
            heading: "業者に依頼するときに伝えること",
            list: [
              "教室・廊下・遊戯室など場所ごとの床材と面積",
              "木の床の仕上げ（UV樹脂加工か、オイル仕上げか）と、今まで塗ってきたワックスの種類",
              "作業できる日（休校日・休園日・長期休暇）と、机や遊具を運び出す担当",
              "乾燥にかかる時間と、雨天の場合の扱い",
            ],
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/service/wax/", label: "ワックスがけの費用・業者選び" }}
        secondary={{ href: "/know/floor-sanding/", label: "フローリングの研磨" }}
        related={[
          { href: "/maker/osmo/", label: "オスモカラー塗装の床" },
          { href: "/product/rinrei-hightech-flooring-coat/", label: "ハイテクフローリングコート" },
          { href: "/floor/chemical-floor/", label: "Pタイル・長尺シート" },
          { href: "/know/muku-floor-care/", label: "無垢フローリングの手入れ" },
          { href: "/service/stripping-wash/", label: "剥離洗浄" },
          { href: "/facility/hospital-care-facility/", label: "病院・高齢者施設の床清掃" },
          { href: "/company/fsscoat/", label: "FSSCOAT" },
        ]}
        sources={[
          { label: "リンレイ「学校・幼保育園・学習塾」（施設・使用場所から製品を探す）", href: "https://www.rinrei.co.jp/prouse/use_facility/school/", checked: "2026年11月1日" },
          { label: "リンレイ「学校清掃のポイント」", href: "https://www.rinrei.co.jp/prouse/virtual_maintenance_labo/school_cleaning_point/", checked: "2026年11月1日" },
          { label: "リンレイ「【ビニル床教室のそうじ】初めての樹脂ワックス塗布」（PDF）", href: "https://www.rinrei.co.jp/prouse_dl/virtual_maintenance_labo/school_cleaning_point/school_point_3.pdf", checked: "2026年11月1日" },
          { label: "リンレイ「【木床教室のそうじ】初めての樹脂ワックス塗布」（PDF）", href: "https://www.rinrei.co.jp/prouse_dl/virtual_maintenance_labo/school_cleaning_point/school_point_4.pdf", checked: "2026年11月1日" },
          { label: "オスモ＆エーデル「学校・幼稚園の木製フローリング再生」", href: "https://osmo-edel.jp/lp/flooring-repair/", checked: "2026年11月1日" },
          { label: "FSSCOAT「UVコーティング｜UV-SCOAT」", href: "https://www.professional-coating-bsl.co.jp/floor_uvscoat.html", checked: "2026年11月1日" },
          { label: "エコプロコート「国内トップクラスの品質と実績」", href: "https://www.ecoprocoat.co.jp/about/?id=quality-guarantee", checked: "2026年11月1日" },
        ]}
      />
    </>
  );
}
