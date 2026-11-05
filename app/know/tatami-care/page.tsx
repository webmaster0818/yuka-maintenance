import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const CHECKED = "2026年11月5日";

const faqs = [
  {
    q: "和紙畳は水拭きしてもよいですか？",
    a: "DAIKENは「ダイケン健やかおもて」について、日常は乾いた雑巾で畳の目に沿って乾拭きし、月1回程度かたく絞ったぬれ雑巾で表面を軽く拭くよう案内しています。強くこすると表面が白っぽくなる恐れがあり、水洗いはできません。",
  },
  {
    q: "和紙畳にロボット掃除機やスチームモップは使えますか？",
    a: "DAIKENは、ロボット掃除機は畳の目に沿って掛けられないためお勧めできない、スチームモップなど強い蒸気を用いる掃除機や化学雑巾、ワイパー用シートは使用しないよう案内しています。",
  },
  {
    q: "しょうゆやジュースをこぼしたときは？",
    a: "DAIKENは、すぐ（2〜3分以内）乾いた布でふき取るよう案内しています。セキスイ畳「MIGUSA」は、汚れは濡れ雑巾で落ちやすく、油分は中性洗剤をつけたスポンジで洗い落とすのも一つの方法としています。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "和紙畳・樹脂畳のお手入れ｜掃除機・水拭き・シミ・へこみをメーカー公式で確認",
  alternates: { canonical: "/know/tatami-care/" },
  description:
    "和紙畳（DAIKEN 健やかおもて）と樹脂畳（セキスイ畳 MIGUSA）の掃除機のかけ方、水拭き、こぼした液体や油分の拭き取り、へこみ・こげ跡・すり傷の直し方を、両社の公式のよくある質問から整理しました。",
};

export default function TatamiCarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumb="和紙畳・樹脂畳のお手入れ"
        h1="和紙畳・樹脂畳のお手入れ｜掃除機・水拭き・シミ・へこみをメーカー公式で確認"
        lead={
          <>
            <p className="mb-3">
              和紙畳・樹脂畳の掃除は、<strong>畳の目に沿って掃除機をかけ、乾拭きが基本</strong>です。DAIKENは、ぬれ雑巾で強くこすると表面が白っぽくなる恐れがあるとしています。
            </p>
            <p>
              DAIKENの「健やかおもて」は機械すき和紙をこより状にして樹脂コーティングしたもの、セキスイ畳「MIGUSA」はポリプロピレンと吸湿性炭酸カルシウムを配合したものです。どちらもイ草とは素材が違うため、メーカーの案内に沿って手入れします。
            </p>
          </>
        }
        notice={`このページはDAIKEN（ダイケン健やかおもて・ダイケン畳健やかくん・ここち和座）と積水成型工業（セキスイ畳「MIGUSA」）の公式のよくある質問・取扱説明書（いずれも${CHECKED}確認）をもとにしています。イ草の畳は対象外です。`}
        sections={[
          {
            heading: "日常の掃除（メーカー別）",
            tone: "amber",
            table: {
              head: ["項目", "DAIKEN（健やかおもて）", "セキスイ畳（MIGUSA）"],
              rows: [
                ["掃除機", "畳の目に沿って力を入れずに軽くかける。目に沿わないと毛羽立ちが起こることがあり、濃色は目立ちやすい", "—"],
                ["拭き掃除", "日常は乾いた雑巾で畳の目に沿って乾拭き。月1回程度、かたく絞ったぬれ雑巾で軽く拭く", "汚れは濡れ雑巾で落ちやすい"],
                ["使わないもの", "ロボット掃除機（目に沿って掛けられないためお勧めしない）、スチームモップなど強い蒸気の掃除機、化学雑巾、ワイパー用シート", "—"],
                ["水洗い", "機械すき和紙のため水洗いはできない", "—"],
                ["カビ・ダニ", "掃除機と換気で予防。発生したら水で倍に薄めたキッチン用漂白剤（塩素系）やアルコールでこまめにふき取る", "湿気だけではカビは生えないが、畳の上に栄養物が残っていると発生する。清掃で取り除く"],
              ],
              caption: "「—」は、そのメーカーの公式のよくある質問で該当する記載を確認できなかった項目です。",
            },
          },
          {
            heading: "こぼした・汚したとき",
            list: [
              "しょうゆ・コーヒー・ジュースなどの液体は、すぐ（2〜3分以内）乾いた布でふき取る。強くこすると表面が白っぽくなる（DAIKEN）。",
              "ケチャップ・バター・化粧クリームなど油分を含む汚れは、薄めた中性洗剤を布に含ませ固く絞ってから、すぐにふき取る（DAIKEN）。MIGUSAは、油分は中性洗剤をつけたスポンジで洗い落とすのも一つの方法としています。",
              "シミになった場合、DAIKENは水で倍に薄めたキッチン用漂白剤（塩素系）または「健やかおもて お手入れセット」の洗浄液を綿棒で塗ると、10分程である程度消えていくとしています。",
              "子供や動物の排泄物は、スポンジで水をつけ軽く何度か拭き、色と臭いを薄めて拭い取る（MIGUSA）。",
              "絵の具やクレパスの落書きは、水や溶剤（シンナー、ベンジン）で、畳の目の中に色を入れないよう軽く拭き取る（MIGUSA）。",
            ],
            note: "お手入れセットの洗浄剤は、イ草や畳縁、壁、じゅうたん等に付くと色落ちする場合があります。作業時は換気し、ゴム手袋などを着用するよう取扱説明書に記載があります（DAIKEN）。",
          },
          {
            heading: "へこみ・こげ跡・すり傷",
            list: [
              "家具などのへこみ：軽度なら熱い蒸しタオルやスチームアイロンで蒸らすとある程度復元できる（DAIKEN）。MIGUSAも、凹み跡に蒸しタオルを当てると復元しやすくなるとしています。",
              "へこみの予防：重たいもの・角ばったもの・キャスター付きのものを置くときは当てものをする（DAIKEN）。",
              "タバコのこげ跡：軽度なら紙ヤスリでこすり取り、お手入れセットの補修塗料を塗ればある程度補修できる。こげ跡が深い場合は補修できない場合がある（DAIKEN）。",
              "すり傷：軽度なら紙ヤスリでこすり、補修塗料を塗ればある程度補修できる（DAIKEN）。",
            ],
            note: "傷みのひどい場合は畳店に相談するよう案内されています（DAIKEN）。表替えはイ草畳と同様に畳店で可能ですが、縁なし畳は畳おもてを裏返せない場合があります。",
          },
          {
            heading: "フローリングに置く畳（置き敷きタイプ）",
            paras: [
              "DAIKENは「ここち和座 置き敷きタイプ」について、フローリングに直接置いて使えるとしたうえで、床暖房やホットカーペットの上では使えないと案内しています。こもった熱で、ここち和座やフローリングが変形・変質することがあるためです。",
              "「ここち和座」のおもては撥水性がありますが、長時間放置すると水が染み込み、膨れ等が発生するとしています。",
            ],
            note: (
              <>
                フローリング側の手入れは<Link href="/know/daily-care/" className="underline">日常の手入れ</Link>、ホットカーペットと床の注意は<Link href="/know/heater-hot-carpet-floor/" className="underline">ホットカーペット・暖房器具と床</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/know/daily-care/", label: "日常の手入れを見る" }}
        secondary={{ href: "/maker/daiken/", label: "DAIKENの床のお手入れを見る" }}
        related={[
          { href: "/know/robot-cleaner-floor/", label: "ロボット掃除機と床" },
          { href: "/know/steam-mop-floor/", label: "床にスチームモップは使えるか" },
          { href: "/trouble/floor-stain-removal/", label: "床のシミ・汚れの落とし方" },
          { href: "/know/heater-hot-carpet-floor/", label: "ホットカーペット・暖房器具と床" },
          { href: "/maker/daiken/", label: "DAIKENの床のお手入れ" },
        ]}
        sources={[
          { label: "DAIKEN よくあるご質問「ダイケン畳健やかくん（健やかおもて）の日常のお手入れ方法は？」", href: "https://faq.daiken.jp/faq/show/2135?site_domain=user", checked: CHECKED },
          { label: "DAIKEN よくあるご質問（畳：カビ・ダニ 243／しょうゆやジュース 244／油分 245）", href: "https://faq.daiken.jp/faq/show/244?site_domain=user", checked: CHECKED },
          { label: "DAIKEN よくあるご質問（畳：凹み 205／こげ跡 206／すり傷 368／表替え 34）", href: "https://faq.daiken.jp/faq/show/205?site_domain=user", checked: CHECKED },
          { label: "DAIKEN よくあるご質問（スチームモップ・化学雑巾・ワイパー用シート 3684／ロボット掃除機 567／水洗い 428）", href: "https://faq.daiken.jp/faq/show/3684?site_domain=user", checked: CHECKED },
          { label: "DAIKEN よくあるご質問（ここち和座 置き敷き 36・425・426）", href: "https://faq.daiken.jp/faq/show/425?site_domain=user", checked: CHECKED },
          { label: "DAIKEN「ダイケン健やかおもて『お手入れセット』使用方法」（取扱説明書・PDF）", href: "https://www.daiken.jp/service/pdf/public/538.pdf", checked: CHECKED },
          { label: "積水成型工業 セキスイ畳「MIGUSA」よくあるご質問", href: "https://www.sekisuimigusa.jp/faq.html", checked: CHECKED },
        ]}
      />
    </>
  );
}
