import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const CHECKED = "2026年11月28日";

const faqs = [
  {
    q: "玄関マットやカーペットを両面テープで床に留めてもよいですか？",
    a:
      "永大産業（EIDAI）とパナソニックは、カーペットや玄関マットなどの固定に粘着テープ（ガムテープ・両面テープ）を使わないよう案内しています。" +
      "はがすときなどにフローリング表面を傷めるもとになるためです。" +
      "朝日ウッドテックも、マットなどを固定する粘着テープなどのゴム類は色移りや成分の溶出のおそれがあるとして、使用を避けるよう案内しています。",
  },
  {
    q: "テープをはがしたら、フローリングの表面が一緒にはがれてしまいました。",
    a:
      "表面のシートや塗装がはがれた場合は、テープ跡ではなく表面の傷みとして扱います。" +
      "DAIKENは、表面シートがはがれてきた床材について、補修の方法を案内しています。" +
      "範囲が広いときや張り替えを考えるときは、永大産業の案内のとおり、購入した施工店・マンション管理会社などに相談してください。",
  },
  {
    q: "テープの代わりに何を使えばよいですか？",
    a:
      "パナソニックは、粘着テープの代わりに市販の滑り止めシートなどを使うよう案内しています。" +
      "一方で永大産業とLIXILは、滑り止め機能付き・滑り止め加工のシートやマットは裏面材の成分が溶け出して表面に付着し、変色などを起こすおそれがあるとしています。" +
      "使う前に、お使いの床材の取扱説明書で使える製品を確かめてください。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "床に貼ったテープをはがしたら表面が傷んだ・跡が残った｜粘着テープとフローリングの注意を床材メーカーの公式資料で確認",
  alternates: { canonical: "/trouble/floor-tape-damage/" },
  description:
    "玄関マットやカーペットを留めたガムテープ・両面テープをはがしたらフローリングの表面が傷んだ、跡や色が残ったときに、" +
    "何が起きているか、どう防ぐか、どこに相談するかを、永大産業（EIDAI）・パナソニック・朝日ウッドテック・DAIKEN・LIXILの公式資料から整理しました。",
};

export default function FloorTapeDamagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumbParent="症状別の対処"
        crumb="床に貼ったテープで表面が傷んだ"
        h1="床に貼ったテープをはがしたら表面が傷んだ・跡が残った｜粘着テープとフローリングの注意を床材メーカーの公式資料で確認"
        lead={
          <>
            <p className="mb-3">
              ガムテープや両面テープで玄関マット・カーペットを床に留めると、
              <strong>はがすときなどにフローリング表面を傷めるもとになる</strong>と永大産業（EIDAI）は説明しています。
              パナソニックも、カーペットや玄関マットなどの固定に粘着テープを使わないよう案内し、
              テープをはがすときに床表面を傷める可能性があるとしています。
            </p>
            <p>
              朝日ウッドテックは、マットなどを固定する粘着テープなどのゴム類について、
              <strong>色移りや成分の溶出のおそれ</strong>があるとして、使用を避けるよう案内しています。
              すでに表面がはがれた場合は表面の傷みとして補修を考え、跡や色が残った場合は、
              洗剤や溶剤を使う前にお使いの床材の取扱説明書で使える洗剤を確かめてください。
            </p>
          </>
        }
        notice={`このページは永大産業（EIDAI）「木質フローリング快適生活マニュアル」、パナソニックの木質床材のお手入れ情報、朝日ウッドテックの床のお手入れ情報、DAIKENのお客様サポート、LIXILの床材取扱い説明書（いずれも${CHECKED}確認）をもとにしています。テープの粘着剤の残りを取る方法は、今回確認した各社の資料には記載がありませんでした。床材の品番によって注意事項は異なります。`}
        sections={[
          {
            heading: "粘着テープについての各社の説明",
            table: {
              head: ["メーカー", "資料の説明"],
              rows: [
                [
                  "永大産業（EIDAI）",
                  "カーペットや玄関マットなどの固定に粘着テープ（ガムテープ・両面テープ）の使用は避ける。はがす時などにフローリング表面を傷めるもとになる",
                ],
                [
                  "パナソニック",
                  "ガムテープや両面テープをカーペットや玄関マットなどの固定に使用しない。テープをはがすときに床表面を傷める可能性がある。市販の滑り止めシートなどを使う",
                ],
                [
                  "朝日ウッドテック",
                  "カーペットや玄関マットなどを固定する粘着テープなどゴム類は、色移りや成分の溶出のおそれがある。使用を避ける",
                ],
              ],
              caption: "どの資料も、テープ跡を後から元に戻す方法は示しておらず、使わないことを案内しています。",
            },
          },
          {
            heading: "はがしたあとの状態ごとの見方",
            list: [
              "表面のシートや塗装が一緒にはがれた：テープ跡ではなく表面の傷みです。DAIKENは表面シートがはがれてきた床材の補修方法を案内しています（表面のはがれのページで整理しています）。",
              "跡や色が残った：朝日ウッドテックの説明のとおり、テープなどのゴム類からの色移りや成分の溶出のことがあります。マットの裏面材でも、永大産業とLIXILは成分が溶け出して変色などを起こすおそれがあるとしています。",
              "粘着剤がべたついて残った：取り方は今回確認した各社の資料に記載がありません。こすったり溶剤を使ったりする前に、取扱説明書で使える洗剤を確かめるか、メーカーの窓口に相談してください。",
            ],
          },
          {
            heading: "跡を見つけたとき・これから防ぐとき",
            tone: "amber",
            steps: [
              {
                title: "無理にこすらず、床材の品番と取扱説明書を確かめる",
                body: "永大産業・パナソニックは、テープをはがすときに表面を傷めることがあるとしています。残った跡を強くこすったり刃物で削ったりすると、表面の傷みが広がることがあります。",
              },
              {
                title: "マットやカーペットはテープで留めない",
                body: "永大産業・パナソニック・朝日ウッドテックは、カーペットや玄関マットの固定に粘着テープを使わないよう案内しています。パナソニックは、代わりに市販の滑り止めシートなどを使うよう案内しています。",
              },
              {
                title: "滑り止め付きの製品は、床材の取扱説明書で使えるか確かめる",
                body: "永大産業とLIXILは、滑り止め機能付き・滑り止め加工のシートやマットの裏面材の成分が溶け出して、変色やつや変化などを起こすおそれがあるとしています。",
              },
              {
                title: "表面がはがれた・範囲が広いときは施工した会社に相談する",
                body: "永大産業は、使用中のフローリングについて、購入した施工店・マンション管理会社・引き渡しを受けたゼネコンに確認するよう案内しています。LIXILも、修理・お手入れの相談はまず販売店・工事店へとしています。",
              },
            ],
            note: (
              <>
                表面がはがれた場合は<Link href="/trouble/floor-surface-peeling/" className="underline">フローリングの表面がはがれる・めくれる</Link>、
                マットの裏面やゴムによる変色は<Link href="/trouble/mat-rubber-discoloration/" className="underline">マットやゴムの跡で床が変色した</Link>にまとめています。
              </>
            ),
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/know/floor-symptoms/", label: "床の症状の切り分け方を見る" }}
        secondary={{ href: "/trouble/floor-surface-peeling/", label: "フローリングの表面のはがれを見る" }}
        related={[
          { href: "/know/floor-symptoms/", label: "床の症状の切り分け方" },
          { href: "/trouble/floor-surface-peeling/", label: "フローリングの表面がはがれる・めくれる" },
          { href: "/trouble/mat-rubber-discoloration/", label: "マットやゴムの跡で床が変色した" },
          { href: "/trouble/floor-stain-removal/", label: "床のシミ・汚れの落とし方" },
          { href: "/trouble/floor-scratch-repair/", label: "フローリングの傷・へこみの補修" },
          { href: "/maker/eidai/", label: "永大産業の床のお手入れ" },
          { href: "/maker/panasonic/", label: "パナソニックの床のお手入れ" },
        ]}
        sources={[
          { label: "永大産業（EIDAI）「木質フローリング快適生活マニュアル」（PDF）", href: "https://www.eidai.com/contact/oteire/pdf/K1892609.pdf", checked: CHECKED },
          { label: "パナソニック「床への気配り｜木質床材・フローリングのお手入れ」", href: "https://sumai.panasonic.jp/support/care/floor/02/", checked: CHECKED },
          { label: "朝日ウッドテック「生活される上でのご注意｜床のお手入れ」", href: "https://www.woodtec.co.jp/maintenance/index05/", checked: CHECKED },
          { label: "DAIKEN お客様サポート「床材の表面シートが剥がれてきたのですが、補修方法を教えてほしい。」", href: "https://faq.daiken.jp/faq/show/3849?site_domain=user", checked: CHECKED },
          { label: "LIXIL「床材 取扱い説明書」MAP-6（PDF）", href: "https://assets.lixil.com/content/dam/lixil-assets/manual/oldmpi/2020/MDD_871180.pdf", checked: CHECKED },
        ]}
      />
    </>
  );
}
