import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import companies from "@/data/companies.json";

export const metadata = {
  title: "床メンテナンス施工後に起こりうる症状と依頼前の取り決め",
  alternates: { canonical: "/know/after-work-trouble/" },
  description:
    "ワックスがけやコーティングの施工後に起こりうる症状と考えられる原因、依頼前に書面で残しておきたい項目、保険・保証の確認方法、不具合に気づいたときの連絡手順を整理しました。",
};

/** companies.json の features 表記を機械的に照合するだけで、掲載社データは改変しない */
const insuranceMentioned = companies.filter((c) =>
  c.features.some((f) => f.includes("保険") || f.includes("保証"))
);

/** description に「マッチング」「一括比較」の記載がある掲載社を機械的に抽出 */
const matchingType = companies.filter(
  (c) => c.description.includes("マッチング") || c.description.includes("一括比較")
);
const otherType = companies.filter((c) => !matchingType.includes(c));

const symptoms = [
  {
    t: "白っぽく濁る・くもる",
    b: "乾燥が十分でない状態で次の工程に進んだ場合や、湿度の高い条件で施工した場合に起こりうるとされます。発生条件は薬剤や床材によって異なります。",
  },
  {
    t: "ムラ・塗り筋が見える",
    b: "塗布量が均一でない、下地の汚れが残っていたなどが原因として考えられます。光の入り方によって目立ち方が変わるため、時間帯を変えて確認します。",
  },
  {
    t: "部分的にはがれる",
    b: "床材と薬剤の相性、または既存のワックス層の処理が不十分だった場合に起こりうるとされます。歩行の多い動線で先に現れることがあります。",
  },
  {
    t: "以前より滑りやすい／滑りにくい",
    b: "仕上がりの質感が変わることで、体感が変わる場合があります。高齢者や小さな子どもがいる場合は、施工前に希望を伝えておきます。",
  },
  {
    t: "家具の跡や設置位置のずれ",
    b: "家具を動かす作業が伴う場合に起こりえます。誰が移動するか、元の位置に戻すかを事前に決めておくと防ぎやすくなります。",
  },
  {
    t: "においが残る",
    b: "使用する薬剤によっては作業後しばらくにおいが残る場合があります。換気の方法と、いつから通常どおり使えるかを確認しておきます。",
  },
];

const documentItems = [
  { t: "作業範囲", b: "部屋名や図面で、どの部屋のどこまでを施工するかを明記します。収納内部・脱衣所・廊下を含むかどうかは特に曖昧になりがちです。" },
  { t: "作業内容と工程", b: "洗浄のみか、剥離を行うか、ワックスを何工程塗るかなど。工程が違えば金額も仕上がりも変わります。" },
  { t: "使用する薬剤の種類", b: "床材との相性を後から検証できるよう、製品名や種類を残してもらいます。" },
  { t: "家具移動の担当", b: "業者が行うのか依頼者が行うのか、対象となる家具の範囲も含めて決めます。" },
  { t: "金額の内訳と追加費用の条件", b: "現地調査後に金額が変わる可能性があるなら、どういう場合にいくら変わるのかを確認します。" },
  { t: "作業後に使えるようになる時期", b: "歩行や家具の再設置がいつから可能かは、工法・薬剤・季節によって変わります。目安を書面で示してもらいます。" },
  { t: "不具合があった場合の対応", b: "手直しの可否、申し出の期限、連絡先を確認しておきます。" },
];

export default function AfterWorkTroublePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "床メンテナンスの基礎知識" },
          { label: "施工後のトラブル対策" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-3">
            床メンテナンス施工後に起こりうる症状と、依頼前の取り決め
          </h1>
          <p className="text-[#57534E] leading-relaxed">
            床の施工は、仕上がったあとに気づく点が出てくることがあります。多くは
            <strong>依頼前の取り決めをはっきりさせておくことで、相談しやすくなります</strong>。
            このページでは、起こりうる症状と考えられる原因、依頼前に書面で残したい項目、そして実際に気づいたときの進め方を整理しました。
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-900 mb-8">
          <strong>注意:</strong>{" "}
          症状の原因は床材・薬剤・施工条件によって異なり、ここでの説明は一般的に挙げられる可能性を整理したものです。個別の判断は施工した会社や専門家にご相談ください。
        </div>

        {/* H2-1 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-4">
            施工後に起こりうる症状と考えられる原因
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {symptoms.map((s) => (
              <div key={s.t} className="flex gap-3">
                <div className="w-2 h-2 bg-[#92400E] rounded-full mt-2 shrink-0"></div>
                <div>
                  <div className="font-bold text-sm text-[#1C1917]">{s.t}</div>
                  <p className="text-sm text-[#57534E] mt-0.5 leading-relaxed">{s.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* H2-2 */}
        <div className="bg-[#FFFBEB] border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            依頼前に書面で残しておきたい項目
          </h2>
          <p className="text-sm text-[#57534E] mb-4">
            口頭の説明だけだと、あとから認識の違いが起きやすくなります。見積書や作業指示書に次の項目が入っているかを確認し、足りなければ追記を依頼します。
          </p>
          <div className="space-y-3">
            {documentItems.map((d, i) => (
              <div key={d.t} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-[#F0ECE8]">
                <span className="w-6 h-6 bg-[#92400E] text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <div>
                  <div className="font-bold text-sm text-[#1C1917]">{d.t}</div>
                  <p className="text-sm text-[#57534E] mt-0.5 leading-relaxed">{d.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* H2-3 : データ駆動 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            保険・保証の記載がある掲載社をデータで確認する
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-4">
            作業中に床や家財を傷つけてしまった場合に備え、損害賠償保険に加入しているかを確認しておくと安心です。
            当サイトが掲載している{companies.length}社の特徴データのうち、保険・保証に関する記載があるのは次の
            {insuranceMentioned.length}社です。
          </p>
          <div className="space-y-3 mb-4">
            {insuranceMentioned.map((c) => (
              <div
                key={c.slug}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border border-[#F0ECE8] rounded-lg p-3 bg-[#FAFAF9]"
              >
                <Link
                  href={`/company/${c.slug}/`}
                  className="font-bold text-sm text-[#92400E] hover:underline whitespace-nowrap"
                >
                  {c.name}
                </Link>
                <div className="flex flex-wrap gap-2">
                  {c.features
                    .filter((f) => f.includes("保険") || f.includes("保証"))
                    .map((f) => (
                      <span
                        key={f}
                        className="text-xs bg-[#059669]/10 text-[#059669] px-2 py-1 rounded-full font-medium"
                      >
                        {f}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-900">
            <strong>重要:</strong>{" "}
            上記は当サイトが保有する掲載データ上の記載の有無を機械的に抽出したものです。
            <strong>記載がない会社が保険に加入していない、という意味ではありません。</strong>
            加入の有無・補償の範囲・免責の条件は会社ごとに異なるため、依頼前に各社へ直接ご確認ください。
          </div>
        </div>

        {/* H2-4 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-4">
            不具合に気づいたときの連絡の手順
          </h2>
          <div className="space-y-3">
            {[
              { t: "すぐに写真を撮る", b: "症状が出ている箇所を、全体が分かる写真と近くで撮った写真の両方で記録します。日付が残る形で保存しておきます。" },
              { t: "自分で手を加えない", b: "洗剤でこすったり削ったりすると、原因の切り分けが難しくなります。まずは状態を変えずに連絡します。" },
              { t: "施工した会社へ連絡する", b: "作業日・担当者名・症状・気づいた日を伝えます。見積書や作業指示書の控えを手元に用意しておくとやり取りが早く進みます。" },
              { t: "対応内容を記録に残す", b: "電話で話した場合も、合意した内容をメールなど文字で残しておくと、後から確認できます。" },
              { t: "解決しない場合の相談先を知っておく", b: "当事者間で折り合いがつかない場合は、お住まいの自治体の消費生活センターなど公的な相談窓口を利用する方法があります。" },
            ].map((s, i) => (
              <div key={s.t} className="flex items-start gap-3">
                <span className="w-6 h-6 bg-[#92400E] text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <div className="font-bold text-sm text-[#1C1917]">{s.t}</div>
                  <p className="text-sm text-[#57534E] mt-0.5 leading-relaxed">{s.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* H2-5 : データ駆動 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-8">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            申込先と施工者が別になる場合の問い合わせ先
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-4">
            申し込んだ窓口と、実際に作業をする事業者が同じとは限りません。別々の場合、不具合の連絡先がどちらになるのかを申し込み時点で確認しておく必要があります。
            当サイトの掲載データでは、サービス概要に「マッチング」「一括比較」の記載がある会社が{matchingType.length}社あります。
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="border border-[#F0ECE8] rounded-lg p-4 bg-[#FAFAF9]">
              <div className="font-bold text-sm text-[#1C1917] mb-2">
                見積もり比較・マッチングの記載がある（{matchingType.length}社）
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {matchingType.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/company/${c.slug}/`}
                    className="text-xs bg-[#FFFBEB] text-[#92400E] px-3 py-1.5 rounded-full border border-[#F59E0B]/30 hover:border-[#F59E0B] transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
              <p className="text-xs text-[#57534E] leading-relaxed">
                実際に作業を行うのは、紹介・成約した事業者になります。不具合の一次窓口が運営側か施工事業者かを、申し込み前に確認しておきましょう。
              </p>
            </div>
            <div className="border border-[#F0ECE8] rounded-lg p-4 bg-[#FAFAF9]">
              <div className="font-bold text-sm text-[#1C1917] mb-2">
                上記の記載がない掲載社（{otherType.length}社）
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {otherType.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/company/${c.slug}/`}
                    className="text-xs bg-[#FFFBEB] text-[#92400E] px-3 py-1.5 rounded-full border border-[#F59E0B]/30 hover:border-[#F59E0B] transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
              <p className="text-xs text-[#57534E] leading-relaxed">
                フランチャイズや加盟店の形をとる会社では、作業を行うのが加盟店になることがあります。この場合も、連絡先が本部か店舗かを確認しておくと安心です。
              </p>
            </div>
          </div>
          <p className="text-xs text-[#78716C]">
            ※ 上記の区分は、掲載データの説明文に含まれる語句を機械的に分類したものです。各社の実際の契約形態やアフター対応の体制を評価したものではありません。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="/cost/price/"
            className="flex-1 bg-[#92400E] text-white font-bold py-3 px-6 rounded-full text-center hover:bg-[#78350F] transition-colors"
          >
            料金相場を確認する
          </Link>
          <Link
            href="/review/"
            className="flex-1 border-2 border-[#92400E] text-[#92400E] font-bold py-3 px-6 rounded-full text-center hover:bg-[#FFFBEB] transition-colors"
          >
            各社の口コミ・評判を見る
          </Link>
        </div>

        <div>
          <h2 className="font-bold text-[#1C1917] mb-4">あわせて読みたい</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/know/no-wax-floor/", label: "ワックス不可の床材" },
              { href: "/area/tokyo/", label: "東京都で比較" },
              { href: "/service/stripping-wash/", label: "剥離洗浄" },
              { href: "/cost/diy-vs-pro/", label: "DIY vs プロ" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="border border-[#D6D3D1] rounded-lg p-3 text-center hover:border-[#F59E0B] transition-colors text-sm font-medium text-[#1C1917] hover:text-[#92400E]"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
