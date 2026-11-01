import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const faqs = [
  {
    q: "ハイテクフローリングコートはどんな床に使えますか？",
    a: "リンレイは用途を「WPC加工、高硬度UV塗装、鏡面仕上げ塗装等の樹脂塗装された木床」としています。フッ素樹脂・シリコン樹脂塗装の木床、油加工された床、塗装されていない床（白木床等）、化学床、石床などには使えないとしています。",
  },
  {
    q: "ハイテクフローリングコートの耐久性と乾燥時間は？",
    a: "リンレイの公式の製品ページでは、耐久性は約6ヶ月、乾燥時間は約30分と表示されています。初めて塗るときは合計2回塗り、2回目以降は1回塗りです。",
  },
  {
    q: "どの床材メーカーがハイテクフローリングコートを推奨していますか？",
    a: "今回確認した範囲では、永大産業（光沢のある一部の製品）、朝日ウッドテック（ピュアハード塗装・シートフローリング）、ノダ（艶を高く仕上げる場合）が推奨品として名前を挙げています。DAIKENは同社の「DKワックスネオ」を指定しています。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "リンレイ「ハイテクフローリングコート」とは｜使える床・耐久性と床材メーカーの推奨状況",
  alternates: { canonical: "/product/rinrei-hightech-flooring-coat/" },
  description:
    "リンレイ「ハイテクフローリングコート」は、樹脂塗装された木床用の水性樹脂ワックスです（耐久性 約6ヶ月・乾燥 約30分・1Lで約60畳分）。使える床・使えない床と、永大産業・朝日ウッドテック・ノダが推奨品に挙げている床材を、公式の案内をもとに整理しました。",
};

export default function HightechFlooringCoatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumbParent="ワックス製品"
        crumb="リンレイ ハイテクフローリングコート"
        h1="リンレイ「ハイテクフローリングコート」とは｜使える床・耐久性と床材メーカーの推奨状況"
        lead={
          <>
            <p className="mb-3">
              「ハイテクフローリングコート」は、株式会社リンレイの家庭用の<strong>水性（樹脂系）の床用ワックス</strong>です。
              用途は、WPC加工、高硬度UV塗装、鏡面仕上げ塗装等の<strong>樹脂塗装された木床</strong>で、公式の性能表では耐久性 約6ヶ月、乾燥時間 約30分と表示されています。
            </p>
            <p>
              リンレイは「多くの床材メーカー推奨の樹脂ワックス」と紹介しており、今回確認した床材メーカーでは、永大産業・朝日ウッドテック・ノダが推奨品として名前を挙げています。ただし、推奨の対象は床材の製品や仕上げごとに異なるため、お使いの床材のメーカーの案内とあわせてご確認ください。
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
                ["品名", "床用ワックス"],
                ["種類", "水性（樹脂系）"],
                ["成分", "合成樹脂（アクリル樹脂・ウレタン樹脂）、水"],
                ["正味量", "1L"],
                ["使用量の目安", "約60畳分（1㎡当たり10mL）。初めて塗るとき2回塗り、2回目以降1回塗り"],
                ["耐久性", "約6ヶ月"],
                ["乾燥時間", "約30分"],
                ["性能表（5段階）", "ツヤ 3／耐キズ性 3／塗りやすさ 4"],
                ["使える床（アイコン表示）", "フローリング、UV塗装"],
              ],
              caption: "性能表の星の数は、リンレイ公式の製品ページの表示を数値にしたものです。",
            },
          },
          {
            heading: "使える床・使えない床",
            table: {
              head: ["区分", "リンレイの記載"],
              rows: [
                ["用途", "WPC加工、高硬度UV塗装、鏡面仕上げ塗装等の樹脂塗装された木床"],
                ["使えない床", "フッ素樹脂、シリコン樹脂塗装の木床、油加工された床（オイルステイン・ロウ仕上げ等）、油性ワックス等を使用した床、塗装されていない床（白木床等）、化学床、ゴム床タイル、リノリューム、リノタイル、特殊な床（ウルシ仕上げ等）、土足で歩く床、石床"],
              ],
            },
            after: [
              "リンレイは特長として、UV塗装・鏡面塗装のフローリングにも高密着性・高耐水性を発揮すること、ワックス皮膜が抗菌性を発揮すること、ウレタン樹脂の配合でキズ・シミ・汚れから保護することを挙げています。",
            ],
          },
          {
            heading: "床材メーカーの推奨状況",
            paras: ["床材メーカーの公式の案内で、ハイテクフローリングコートがどう扱われているかをまとめました。"],
            table: {
              head: ["床材メーカー", "推奨の対象", "確認先"],
              rows: [
                ["永大産業（EIDAI）", "推奨品3品の一つ（高光沢・業務用と家庭用）。適応ワックスとして指定されているのは、銘樹・プレシャスセレクション、ハイホットユニーク（以上ワックスフリー）、銘樹ダイレクト、ダイレクトハイホット45プラス（以上ワックスがけができる製品）。", <Link key="e" href="/maker/eidai/" className="underline">永大産業のページ</Link>],
                ["朝日ウッドテック", "ピュアハード塗装フローリング、シートフローリング。", <Link key="w" href="/maker/woodtec/" className="underline">朝日ウッドテックのページ</Link>],
                ["ノダ", "艶を高く仕上げる場合。水拭き後のワックス掛けでは「木質床材用樹脂ワックス、もしくはハイテクフローリングコート」を使うよう案内。", <Link key="n" href="/maker/noda/" className="underline">ノダのページ</Link>],
                ["DAIKEN", "ワックスは同社の「DKワックスネオ」を指定。艶を抑えたい場合は「ハイテクフローリングコートつや消し20」（ハイテクフローリングコートとは別製品）を勧めている。", <Link key="d" href="/maker/daiken/" className="underline">DAIKENのページ</Link>],
                ["パナソニック", "公式のお手入れページでは銘柄の指定なし（水性樹脂タイプ、ニス塗り木質床用・塗装木質床用の表示のものを推奨）。", <Link key="p" href="/maker/panasonic/" className="underline">パナソニックのページ</Link>],
              ],
              caption: "永大産業は、低光沢の製品には「フローリング専用ワックスつやなし」または「ハイテクフローリングコートつや消し20」を指定しています。艶の高い仕上がりになるため、低光沢の床にハイテクフローリングコートを使う指定にはなっていません。",
            },
          },
          {
            heading: "使い方",
            steps: [
              { title: "汚れと油分を落とす", body: "「オール床クリーナー（別売）」等の床用洗剤で汚れや油分等を拭き取ります。" },
              { title: "水拭きしてよく乾かす", body: "床の洗剤分を水拭きで取り除き、よく乾かします。" },
              { title: "薄くムラなく塗る", body: "布や市販のワックス専用塗布具等にしみ込ませ、薄くムラなく塗り広げます。厚塗りは避け、直接床にまかないよう案内されています。" },
              { title: "完全に乾かす（約30分）", body: "ツヤ出しのためのカラ拭きはいりません。初めて塗るときは合計2回塗ります。" },
            ],
            after: [
              "普段のお手入れは、固く絞ったぞうきんでの水拭きです。ムラやすべりの原因になるため、化学ぞうきん等は使わないよう案内されています。床暖房は電源を切り、床面が冷めてから使い、ワックスが乾くまで床暖房を使わないよう案内されています。",
            ],
          },
          {
            heading: "業者に頼む場合",
            paras: [
              "床材メーカーがハイテクフローリングコートを指定している場合は、業者に依頼するときにも銘柄を伝え、その製品で施工できるか確認しておくと、床材に合わないワックスでの施工を避けやすくなります。見積もりの段階で使用するワックスの銘柄を確認しておくと安心です。",
            ],
            note: (
              <>
                見積もりで確認する項目は<Link href="/know/estimate-reading/" className="underline">見積書の読み方</Link>で解説しています。
              </>
            ),
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/service/wax/", label: "ワックスがけの内容を見る" }}
        secondary={{ href: "/know/wax-types/", label: "ワックスの種類と選び方" }}
        related={[
          { href: "/product/rinrei-flooring-wax-tsuyanashi/", label: "フローリング専用ワックスつやなし" },
          { href: "/product/daiken-dk-wax-neo/", label: "DKワックスネオ" },
          { href: "/maker/eidai/", label: "永大産業の適応ワックス" },
          { href: "/maker/woodtec/", label: "朝日ウッドテックの床" },
          { href: "/maker/noda/", label: "ノダの床材" },
          { href: "/know/recoat-timing/", label: "塗り替え時期の目安" },
          { href: "/know/no-wax-floor/", label: "ワックス不要の床の見分け方" },
          { href: "/cost/diy-vs-pro/", label: "自分でやるか業者か" },
        ]}
        sources={[
          { label: "リンレイ「ハイテクフローリングコート」（家庭用製品）", href: "https://www.rinrei.co.jp/home_care/wax/02/high-tech_flooring.html", checked: "2026年11月1日" },
          { label: "永大産業（EIDAI）「フローリングワックス対応一覧」", href: "https://www.eidai.com/product/flooring/index3.html", checked: "2026年11月1日" },
          { label: "朝日ウッドテック公式サイト「フリーワックス」", href: "https://www.woodtec.co.jp/maintenance/index04/", checked: "2026年11月1日" },
          { label: "株式会社ノダ「床材についてのよくあるご質問」", href: "https://www.noda-co.jp/support/faq/floor/", checked: "2026年11月1日" },
          { label: "DAIKEN よくあるご質問「床材のお手入れ方法一覧」", href: "https://faq.daiken.jp/faq/show/3189?site_domain=user", checked: "2026年11月1日" },
          { label: "パナソニック「木質床材・フローリングのお手入れ（床のお掃除）」", href: "https://sumai.panasonic.jp/support/care/floor/01/", checked: "2026年11月1日" },
        ]}
      />
    </>
  );
}
