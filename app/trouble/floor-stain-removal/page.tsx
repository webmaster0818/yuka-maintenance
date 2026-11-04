import Link from "next/link";
import KnowArticle from "@/app/components/KnowArticle";

const CHECKED = "2026年11月4日";

const faqs = [
  {
    q: "フローリングに子どもがマジックで落書きをしました。",
    a: "EIDAIは、クレヨン・マジック・水性インキなどはアルコールまたはシミ抜き用ベンジンを含ませた布で軽く速やかに拭き取るよう案内しています。朝日ウッドテックも、マジックや絵の具は早めに家庭用洗剤、またはアルコール、ベンジンなどを含ませた布で拭き取るよう記載しています。",
  },
  {
    q: "毛染め液や靴墨が床に付いたら落とせますか？",
    a: "EIDAIと朝日ウッドテックは、毛染め剤・パーマ液・靴墨の汚れは取れないとしています。使うときは床にビニールやカバーなどを敷くよう案内しています。",
  },
  {
    q: "コーヒーをこぼして時間がたったシミは取れますか？",
    a: "ノダは、こぼしてすぐなら水か住居用中性洗剤を含ませて固く絞った雑巾で拭き取れるが、時間がたって塗装面の下に浸透した場合はシミを取ることはできないとしています。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata = {
  title: "フローリングのシミ・汚れの落とし方｜落書き・しょう油・毛染め・皮脂汚れをメーカー公式で確認",
  alternates: { canonical: "/trouble/floor-stain-removal/" },
  description:
    "フローリングやクッションフロアに付いたマジックの落書き、コーヒー・しょう油、毛染め液、皮脂汚れの落とし方と、使ってはいけない洗剤を、EIDAI・朝日ウッドテック・DAIKEN・パナソニック・ノダ・東リの公式の案内から整理しました。",
};

export default function FloorStainRemovalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KnowArticle
        crumbParent="症状別の対処"
        crumb="床のシミ・汚れの落とし方"
        h1="フローリングのシミ・汚れの落とし方｜落書き・しょう油・毛染め・皮脂汚れをメーカー公式で確認"
        lead={
          <>
            <p className="mb-3">
              床材メーカーの案内に共通するのは、<strong>こぼしたらすぐに拭き取る</strong>ことです。時間がたって床材に浸透した汚れや、毛染め液・靴墨の汚れは取れないとされています。
            </p>
            <p>
              汚れの種類ごとに、メーカーが案内している拭き取り方をまとめました。ワックスを塗った床では、洗剤やアルコールでワックスが一緒にはがれることがあります。
            </p>
          </>
        }
        notice={`このページはEIDAI・朝日ウッドテック・DAIKEN・パナソニック・ウッドワン・ノダ・東リ・サンゲツ・リンレイの公式のお手入れの案内（いずれも${CHECKED}確認）をもとにしています。`}
        sections={[
          {
            heading: "汚れの種類別の落とし方",
            tone: "amber",
            table: {
              head: ["汚れ", "メーカーの案内"],
              rows: [
                ["コーヒー・しょう油・調味料", "長時間放置するとシミや変色が生じるおそれ。すぐに拭き取る（パナソニック・ウッドワン）。固く絞った雑巾か中性洗剤を含ませた雑巾で拭き取る（朝日ウッドテック）"],
                ["クレヨン・マジック・水性インキ", "アルコールまたはシミ抜き用ベンジンを含ませた布で軽く速やかに拭き取る（EIDAI）。マジック・絵の具は早めに家庭用洗剤、アルコール、ベンジンなどで（朝日ウッドテック）"],
                ["毛染め剤・パーマ液・靴墨", "汚れは取れない。使うときは床にビニールやカバーを敷く（EIDAI・朝日ウッドテック）。放置すると取れなくなる（パナソニック）"],
                ["タバコのヤニ", "アルコールを染み込ませた布などで拭き取る。焦げ跡は一度つくと取れない（パナソニック）"],
                ["皮脂汚れ", "通常の手入れで取れない皮脂汚れは床専用クリーナーで。ワックスが塗られていない場合に限る（朝日ウッドテック）"],
                ["ひどい汚れ全般", "中性の住宅用洗剤や床用クリーナーで落ちない場合は、アルコール（エタノール）を含ませたぞうきんで拭く（DAIKEN）"],
                ["施工時の接着剤", "乾かないうちに乾いた布で拭き取る。固まった場合はカッター等で削り取るしかなく、艶は元通りにならない恐れ（ノダ）"],
              ],
            },
          },
          {
            heading: "使ってはいけない洗剤・薬品",
            list: [
              "パナソニックは、住居用中性洗剤以外の洗剤は使用しないよう案内しています。アルカリ性・酸性の洗剤は床材が変色する場合があるとしています。",
              "DAIKENは、強アルカリ性のクリーナーは変色する場合があるため使わないよう案内しています。シンナーやベンジン、漂白剤などは適切な濃度に薄める必要があり、使う場合は補修業者やクリーニング業者とよく相談するよう記載しています。",
              "EIDAIは、各種薬品やアルカリ性洗剤（カビ取り剤など）、灯油などをこぼすと変色する恐れがあるとしています。",
              "洗剤を使った後は、洗剤分を残さないよう固く絞った雑巾で拭き取ります。パナソニックは、洗剤が残っていると変色・ひび割れなどが生じる場合があるとしています。",
            ],
          },
          {
            heading: "ワックスを塗った床の場合",
            paras: [
              "朝日ウッドテックは、皮脂汚れ用のクリーナーについて、ワックスが塗布されているとワックスを剥がしてしまいムラになるとしています。リンレイも、アルコールを含んだ液を床に付いたまま放置するとワックスが白く濁る、消毒用のアルコールで固まったワックスを除去すると塗られたワックスも一緒にはがれると説明しています。",
              "汚れと一緒にワックスがはがれた場合は、その部分だけワックスをはがして塗り直す方法があります。",
            ],
            note: (
              <>
                部分的な塗り直しは<Link href="/trouble/wax-spot-repair/" className="underline">ワックスに足跡・シミが付いたときの直し方</Link>、白く濁った場合は<Link href="/trouble/wax-whitening/" className="underline">ワックスが白くなる</Link>をご覧ください。
              </>
            ),
          },
          {
            heading: "クッションフロア・フロアタイルの場合",
            list: [
              "東リは、調理などで飛び散った油が残って床がべたべたするときは、お湯に中性洗剤を溶かし、雑巾を固く絞って拭くよう案内しています。こびりついた汚れには、プラスチック床用・ビニル床用などと表示のある床用クリーナーや家庭用洗剤を希釈して使い、後で洗剤分を拭き取るとしています。",
              "サンゲツは家庭用フロアタイルについて、インクやソース、化学薬品などをこぼしたときはすぐに濡れたぞうきんで拭き取るよう案内しています。",
              "ゴム製品が原因の黄色や濃い茶色の変色（ゴム汚染）は、一旦変色すると除去できないと東リは説明しています。",
            ],
          },
          {
            heading: "よくある質問",
            cards: faqs.map((f) => ({ t: f.q, b: f.a })),
          },
        ]}
        primary={{ href: "/know/daily-care/", label: "日常の手入れを見る" }}
        secondary={{ href: "/service/stripping-wash/", label: "剥離洗浄の内容を見る" }}
        related={[
          { href: "/trouble/wax-spot-repair/", label: "足跡・髪の毛・シミの部分補修" },
          { href: "/know/pet-floor-care/", label: "ペットと暮らす床の手入れ" },
          { href: "/know/floor-water-damage/", label: "水こぼし・結露から床を守る" },
          { href: "/maker/daiken/", label: "DAIKENの床のお手入れ" },
          { href: "/maker/toli/", label: "東リの床材のお手入れ" },
        ]}
        sources={[
          { label: "永大産業（EIDAI）「木質フローリング快適生活マニュアル」（PDF）", href: "https://www.eidai.com/contact/oteire/pdf/K1892609.pdf", checked: CHECKED },
          { label: "朝日ウッドテック「生活される上でのご注意」", href: "https://www.woodtec.co.jp/maintenance/index05/", checked: CHECKED },
          { label: "朝日ウッドテック「皮脂汚れ」", href: "https://www.woodtec.co.jp/maintenance/index02/", checked: CHECKED },
          { label: "DAIKEN よくあるご質問「床材にひどい汚れがついた時のお手入れ方法は？」", href: "https://faq.daiken.jp/faq/show/222?site_domain=user", checked: CHECKED },
          { label: "パナソニック「床のお掃除」（木質床材・フローリングのお手入れ）", href: "https://sumai.panasonic.jp/support/care/floor/01/", checked: CHECKED },
          { label: "パナソニック「床への気配り」（木質床材・フローリングのお手入れ）", href: "https://sumai.panasonic.jp/support/care/floor/02/", checked: CHECKED },
          { label: "ウッドワン「木質床材お手入れマニュアル」（床材全般・PDF）", href: "https://www.woodone.co.jp/static/digitalcatalog/pdf/461_F-AL.pdf", checked: CHECKED },
          { label: "株式会社ノダ「床材についてのよくあるご質問」", href: "https://www.noda-co.jp/support/faq/floor/", checked: CHECKED },
          { label: "リンレイ「よくあるご質問」（家庭用ワックス）", href: "https://www.rinrei.co.jp/home_care/question/", checked: CHECKED },
          { label: "東リ 床材FAQ「クッションフロアのお手入れ方法について」", href: "https://www.toli.co.jp/faq/floor/11.html", checked: CHECKED },
          { label: "サンゲツ「ご家庭でのフロアタイルの『お手入れ方法』と『使用上のご注意』」（PDF）", href: "https://contents.sangetsu.co.jp/doc/technical-data/%E3%83%95%E3%83%AD%E3%82%A2%E3%82%BF%E3%82%A4%E3%83%AB_%E3%81%94%E5%AE%B6%E5%BA%AD%E3%81%A7%E3%81%AE%E3%81%94%E4%BD%BF%E7%94%A8%E4%B8%8A%E3%81%AE%E6%B3%A8%E6%84%8F.pdf", checked: CHECKED },
        ]}
      />
    </>
  );
}
