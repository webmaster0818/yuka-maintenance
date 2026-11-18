import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const CHECKED = "2026年11月18日";

const faqs = [
  {
    q: "ペットのツメによる傷はフロアコーティングの保証で直してもらえますか？",
    a: "会社によって異なります。FSSCOATは、ペットのツメや歩行によるキズや損傷を、保証期間中でも原則として有料補修としています。森のしずくは、生活上でついたキズを無償で補修するアフターメンテナンス型の保証としています（新築は30年間）。",
  },
  {
    q: "ペットのおしっこでコーティングがはがれた場合は保証の対象ですか？",
    a: "FSSCOATは、ペットの排泄物などの付着時の剥がれを保証の対象としていますが、12時間以上の糞尿の放置は原則として有料補修としています。ジェブは、サンディングコートの保証書でペットのオシッコや嘔吐物などの染みを保証対象外としています。",
  },
  {
    q: "コーティングをすればおしっこを放置しても大丈夫ですか？",
    a: "森のしずくは、耐薬品効果でおしっこに含まれるアンモニアやアルコール消毒に対応するとしつつ、フローリングの目地部分への尿など大量の水分の放置は腐食を防ぐことができないと記載しています。汚したらすぐに拭き取ることが前提です。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "ペット向けフロアコーティングの保証で確認すること｜ツメ傷・おしっこの扱いを3社の公式保証で比較",
  alternates: { canonical: "/know/pet-coating/" },
  description:
    "ペットのいる家でフロアコーティングを選ぶときは、ツメ傷やおしっこが保証の対象かどうかを確認します。森のしずく・FSSCOAT・ジェブの公式の保証内容（2026年11月18日確認）を項目ごとに並べて比較しました。",
};

export default function PetCoatingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumb="ペット向けフロアコーティング"
        h1="ペット向けフロアコーティングの保証で確認すること｜ツメ傷・おしっこの扱いを3社の公式保証で比較"
        lead={
          <>
            <p className="mb-3">
              ペットのいる家でフロアコーティングを依頼するときは、<strong>ツメによる傷と、おしっこ・嘔吐物が保証の対象になるかどうか</strong>を確認します。
              公式の保証内容を見ると、扱いは会社によって分かれています。FSSCOATは<strong>ペットのツメや歩行によるキズを原則として有料補修</strong>とし、森のしずくは<strong>生活上でついたキズを無償で補修</strong>する保証としています。
            </p>
            <p>
              おしっこについても、排泄物の付着による剥がれを保証の対象とする会社、染みを保証対象外とする会社があります。どの会社でも、長時間の放置は保証や効果の対象外とされていることが多いため、汚したらすぐに拭き取ることが前提になります。
            </p>
          </>
        }
        notice={`このページは森のしずく・FSSCOAT・ジェブの公式の保証内容とペット向けの案内（いずれも${CHECKED}確認）をもとに、当サイトが項目ごとに並べたものです。保証の詳細は契約時の保証書でご確認ください。`}
        sections={[
          {
            heading: "ペットに関する保証の扱い（3社の比較）",
            tone: "amber",
            table: {
              head: ["項目", "森のしずく", "FSSCOAT", "ジェブ（EPCOAT／サンディングコート）"],
              rows: [
                ["保証の考え方", "施工不良に加え、生活上でついたキズを無償で補修するアフターメンテナンス型（新築30年・中古10年）", "コーティングの耐久年数に合わせた施工保証", "EPCOATは10年保証（施工品質証明書を発行）"],
                ["ツメ・歩行によるキズ", "生活上のキズとして無償補修の対象（30年間・回数無制限と記載）", "原則として有料補修", "サンディングコートは「生活によるすり減り・凹みキズ」を保証対象外と記載"],
                ["おしっこ・排泄物", "ペット向けの案内で、耐薬品効果でアンモニアやアルコール消毒に対応としつつ、目地への尿など大量の水分の放置は腐食を防げないと記載", "ペットの排泄物などの付着時の剥がれは保証の対象。12時間以上の糞尿の放置は原則として有料補修", "サンディングコートは「ペットのオシッコや嘔吐物、水分などの染み」を保証対象外と記載。EPCOATの保証対象外の項目にはペットに関する記載なし"],
                ["保証の対象外・有料補修の例", "フローリング自体の大きな破損や床鳴りなど床内部の構造上の問題、引っ越し・内装工事で他の業者がつけたキズ", "突起物や重量物の落下による損傷は原則として有料補修、日焼けの黄変は保証対象外", "意図的な過失による剥がれや損傷、天災などによる損傷など"],
              ],
              caption: "各社の公式の保証内容ページを当サイトが要約したものです。製品によって保証の内容が異なる場合があります。",
            },
          },
          {
            heading: "見積もりのときに確認すること",
            list: [
              "ツメによる傷・すり減りが、保証期間中に無償で補修されるか、有料か",
              "おしっこ・嘔吐物による剥がれや染みが保証の対象か。放置した時間による条件があるか",
              "補修の回数や範囲に制限があるか（森のしずくは回数無制限と記載）",
              "保証書に施工日と施工責任者が記入されるか（ジェブは記入がない場合を保証対象外、FSSCOATは原則として有料補修としています）",
            ],
          },
          {
            heading: "コーティングをしても日頃から気をつけること",
            paras: [
              "森のしずくは、ペット向けの案内で、ノンスリップ効果によって犬の足腰の負担を軽減できるとしています。一方で、目地部分への尿など大量の水分の放置は腐食を防ぐことができないと記載しています。",
              "コーティングの有無にかかわらず、排泄物やよだれはすぐに拭き取ります。床材メーカーが案内している拭き取り方は、別のページにまとめています。",
            ],
            note: (
              <>
                床材メーカーの案内は<Link href="/know/pet-floor-care/" className="underline">ペットと暮らすフローリングの手入れ</Link>、コーティング全般の保証の見方は<Link href="/know/coating-warranty/" className="underline">フロアコーティングの保証</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/service/floor-coating/", label: "フロアコーティングの業者を見る" }}
        secondary={{ href: "/know/pet-floor-care/", label: "ペットと暮らす床の手入れを見る" }}
        related={[
          { href: "/know/pet-floor-care/", label: "ペットと暮らす床の手入れ" },
          { href: "/know/coating-warranty/", label: "コーティングの保証" },
          { href: "/know/coating-types/", label: "フロアコーティングの種類" },
          { href: "/company/morinoshizuku/", label: "森のしずく" },
          { href: "/company/fsscoat/", label: "FSSCOAT" },
          { href: "/company/jeb/", label: "ジェブ（EPCOAT）" },
        ]}
        sources={[
          { label: "森のしずく公式「ペットにやさしいコーティング」", href: "https://www.morinosizuku.com/services/pet/", checked: CHECKED },
          { label: "森のしずく公式「保証内容」", href: "https://www.morinosizuku.com/services/warranty/", checked: CHECKED },
          { label: "FSSCOAT公式「保証内容」", href: "https://www.professional-coating-bsl.co.jp/info_warranty.html", checked: CHECKED },
          { label: "ジェブ公式「安心の10年保証について」", href: "https://epcoat.net/service/epcoat-warranty.html", checked: CHECKED },
        ]}
      />
    </>
  );
}
