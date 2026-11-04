import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const CHECKED = "2026年11月4日";

const faqs = [
  {
    q: "小さな傷は自分で直せますか？",
    a: "ノダ・EIDAI・パナソニックは、軽微な傷は床材と同系色の補修用クレヨンや色づけペンを塗り込み、余分を布で拭き取ると目立たなくできると案内しています。朝日ウッドテックは、水拭きで消える程度の浅いすり傷にはクリアーの床用ブラッシュペンを使う方法を紹介しています。",
  },
  {
    q: "どのくらいの傷から業者に頼むべきですか？",
    a: "朝日ウッドテックは、直径5～10mm以下程度の傷や凹みなら自分で補修できるが、それより大きいものは部分的な張り替えなど専門業者でないとできないとしています。DAIKENは、傷がひどい場合や補修してもきれいに直らない場合は専門の補修業者に依頼するよう案内しています。",
  },
  {
    q: "床材メーカーに補修を頼めますか？",
    a: "ノダは、同社では補修の施工を受けておらず、施工した業者に対応を依頼するよう案内しています。連絡できない場合は近くのリフォーム業者に相談するよう記載しています。EIDAIは、傷の程度がひどい場合は購入した施工店、マンション管理会社、引き渡しを受けたゼネコンへの相談を案内しています。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "フローリングの傷・へこみの補修｜自分で直せる範囲と業者に頼む目安をメーカー公式で確認",
  alternates: { canonical: "/trouble/floor-scratch-repair/" },
  description:
    "フローリングのすり傷・凹み傷・えぐれ傷・表面シートの剥がれの補修方法と、自分で直せる範囲、業者に頼む目安を、朝日ウッドテック・パナソニック・DAIKEN・ノダ・EIDAIの公式の案内から整理しました。",
};

export default function FloorScratchRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumbParent="症状別の対処"
        crumb="床の傷・へこみの補修"
        h1="フローリングの傷・へこみの補修｜自分で直せる範囲と業者に頼む目安をメーカー公式で確認"
        lead={
          <>
            <p className="mb-3">
              朝日ウッドテックは、<strong>直径5～10mm以下程度</strong>の傷や凹みなら自分で補修できるとし、それより大きいものは専門業者に依頼するよう案内しています。
            </p>
            <p>
              市販の補修用品は傷を消すものではなく、目立ちにくくするためのものです（朝日ウッドテック）。傷の種類ごとに、メーカーが案内している方法をまとめました。
            </p>
          </>
        }
        notice={`このページは朝日ウッドテック・パナソニック・DAIKEN・ノダ・EIDAIの公式のお手入れの案内（いずれも${CHECKED}確認）をもとにしています。`}
        sections={[
          {
            heading: "傷の種類と補修の方法",
            tone: "amber",
            table: {
              head: ["傷の種類", "メーカーが案内している方法"],
              rows: [
                ["水拭きで消える程度の浅いすり傷", "床用ブラッシュペン（クリアー）で塗り、目立たなくする（朝日ウッドテック）"],
                ["水拭きしても消えないすり傷", "周辺の床と同じ色合いの床用ブラッシュペンで塗る（朝日ウッドテック）"],
                ["さらに細かいスリ傷", "ワックスがけで目立たなくできる。ただしワックスがけの必要がない床材（同社のライブナチュラルプレミアム）では、ツヤが上がり本来の仕上がりと異なってくる（朝日ウッドテック）"],
                ["凹み傷（化粧面が剥がれていない）", "クリア色のスティックを電池コテで溶かして傷に盛り、ヘラで平らにして、リキッドサンドペーパーで平滑にする（DAIKEN）。パナソニックは透明色のハードスティックをホットナイフで溶かす方法を案内"],
                ["引っ掻き傷・えぐれ傷（化粧面が剥がれた）", "床と同色のスティックを溶かして盛り、平らにしてから同色のマーカーで木目を描く（DAIKEN・パナソニック）"],
                ["中度の凹み傷・端部の欠け傷", "同じ色合いの補修用パテを温めて埋め、ヘラで余分をすき取り、ブラッシュペンで木目を描く（朝日ウッドテック）。端部の欠けは同色ペンシルで塗り込む（DAIKEN）"],
                ["軽微な傷", "同系色の補修カラーや市販の補修用クレヨンを塗り込み、余分を布で拭き取る（ノダ・EIDAI・パナソニック）"],
              ],
              caption: "補修用品は、ホームセンターなどで市販されている色の近いものを使うよう案内されています（DAIKEN）。",
            },
          },
          {
            heading: "表面シートが剥がれてきた場合",
            paras: [
              "DAIKENは、表面シートの剥がれについて状態別に案内しています。シートが残っている場合は、樹脂と木材を接着できる市販の接着剤を塗って圧着します。シートが残っておらず軽微な場合は、近似色のパテや補修用クレヨン、補修ペンで目立たないようにする方法があります。",
              "広範囲に剥がれている場合は補修が困難で、剥がれた床材の張替え、部屋全体の張替え、新しい床材の上張りが必要になる場合があるとしています。建築業者やリフォーム業者への相談を案内しています。",
            ],
          },
          {
            heading: "業者に頼む目安と依頼先",
            list: [
              "大きな凹み傷や深く引きずったような傷は、自分で修復することが困難です（朝日ウッドテック）。",
              "傷がひどい場合や、補修してもきれいに直らない場合は専門の補修業者に依頼します（DAIKEN）。パナソニックは、大きな傷には市販の床材凹み傷用リペアキットか専門業者への依頼を推奨しています。",
              "大きな傷は、表面単板の貼り替えや補修材を溶かして埋める方法がありますが、ノダは現場の補修を受けておらず、専門業者への依頼を案内しています。",
              "依頼先は、まず床を施工した業者や施工店です（ノダ・EIDAI）。EIDAIはマンション管理会社や引き渡しを受けたゼネコンも挙げています。",
            ],
            note: (
              <>
                補修を業者に頼む場合の作業内容は<Link href="/service/scratch-repair/" className="underline">傷補修</Link>、傷を付けないための対策は<Link href="/know/floor-scratch-prevention/" className="underline">フローリングの傷・へこみを防ぐには</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "補修する前の注意",
            list: [
              "各補修用品の使用上の注意をよく読み、色目は目立ちにくい場所で確認してから使います（朝日ウッドテック）。",
              "床材の柄の場所によっては色が合わない場合があります（パナソニック）。朝日ウッドテックは、天然木の床材は色が完全に合うものが少ないため、色を混ぜて使うことを勧めています。",
              "パナソニックは、補修用部材「クレヨンパテ」は補修後に色が取れたり靴下などに付着したりする場合があるとしています。",
              "タバコやアイロンの焦げ跡は一度つくと取れないとEIDAIは記載しています。補修は施工店などへの相談を案内しています。",
            ],
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/service/scratch-repair/", label: "傷補修の内容を見る" }}
        secondary={{ href: "/know/floor-sanding/", label: "床の研磨（サンディング）を見る" }}
        related={[
          { href: "/know/floor-scratch-prevention/", label: "床の傷・へこみを防ぐ" },
          { href: "/know/pet-floor-care/", label: "ペットと暮らす床の手入れ" },
          { href: "/trouble/floor-stain-removal/", label: "床のシミ・汚れの落とし方" },
          { href: "/maker/woodtec/", label: "朝日ウッドテックの床のお手入れ" },
          { href: "/maker/daiken/", label: "DAIKENの床のお手入れ" },
          { href: "/maker/panasonic/", label: "パナソニックのフローリングのお手入れ" },
        ]}
        sources={[
          { label: "朝日ウッドテック「フローリング・床 傷や凹みの補修方法とアイテム」", href: "https://www.woodtec.co.jp/maintenance/index03/", checked: CHECKED },
          { label: "パナソニック「キズの補修」（木質床材・フローリングのお手入れ）", href: "https://sumai.panasonic.jp/support/care/floor/03/", checked: CHECKED },
          { label: "DAIKEN よくあるご質問「床材の補修方法を教えてほしいのですが？」", href: "https://faq.daiken.jp/faq/show/209?site_domain=user", checked: CHECKED },
          { label: "DAIKEN よくあるご質問「床材の表面シートが剥がれてきたのですが、補修方法を教えてほしい。」", href: "https://faq.daiken.jp/faq/show/3849?site_domain=user", checked: CHECKED },
          { label: "株式会社ノダ「床材についてのよくあるご質問」", href: "https://www.noda-co.jp/support/faq/floor/", checked: CHECKED },
          { label: "永大産業（EIDAI）「木質フローリング快適生活マニュアル」（PDF）", href: "https://www.eidai.com/contact/oteire/pdf/K1892609.pdf", checked: CHECKED },
        ]}
      />
    </>
  );
}
