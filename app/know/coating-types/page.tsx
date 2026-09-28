import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata = {
  title: "フロアコーティングの種類の違い｜膜の素材別の考え方と確認事項",
  alternates: { canonical: "/know/coating-types/" },
  description:
    "フロアコーティングはUV硬化・ガラス・シリコン・ウレタンなど呼び名が分かれます。膜の素材と固め方という2つの軸での整理、仕上がりの確認方法、手直しできるかという観点、保証書で見る項目をまとめました。",
};

const materials = [
  {
    t: "ウレタン系と呼ばれるもの",
    b: "樹脂の膜をつくる考え方で、住宅用として広く案内されています。つやの出方や質感は製品によって幅があります。",
  },
  {
    t: "シリコン系と呼ばれるもの",
    b: "ケイ素を含む成分で膜をつくる考え方です。仕上がりの質感や施工の手順が他と異なると案内されることがあります。",
  },
  {
    t: "ガラス系と呼ばれるもの",
    b: "ガラス質の膜をつくるという考え方で案内される区分です。同じ「ガラス」の名称でも製品ごとに構成が異なります。",
  },
  {
    t: "UV硬化型と呼ばれるもの",
    b: "塗った後に紫外線を当てて固める工法を指す呼び名です。膜の素材ではなく固め方を指しているため、他の区分と並列に比べると混乱しやすい点に注意します。",
  },
];

const glossChecks = [
  "施工事例の写真を、明るい部屋と暗い部屋の両方で見せてもらう",
  "つやの段階に選択肢があるか、あるなら何段階かを聞く",
  "見本板（サンプル）を自宅に持ってきてもらえるか確認する",
  "いま住んでいる家の床の色味で、仕上がりがどう変わるかを説明してもらう",
  "写真は加工されていないものかを確認する",
];

const repairView = [
  {
    t: "部分的な手直しができるか",
    b: "生活の中でついた傷を後から直せるかどうかは、製品と工法によって扱いが変わります。直せる場合の方法と費用の考え方を聞いておきます。",
  },
  {
    t: "手直しした部分が周囲と合うか",
    b: "部分補修が可能でも、周囲と質感やつやがそろうとは限りません。差が出る可能性について説明を受けておきます。",
  },
  {
    t: "取り除きたくなったときにどうするか",
    b: "膜を取り除く作業ができるのか、その場合に床材へどんな影響があるのかは、施工前に聞いておきたい点です。",
  },
  {
    t: "その後のお手入れ方法に指定があるか",
    b: "使ってはいけない洗剤や道具が指定されていることがあります。日常の掃除の方法が変わるかどうかを確認します。",
  },
];

const warrantyChecks: [string, string][] = [
  ["保証の対象になる範囲", "膜そのものの不具合が対象なのか、床材の変化まで含むのかを確認します。"],
  ["対象外とされる事由", "生活の中でついた傷、水漏れ、家具による凹みなど、免責の書き方を読みます。"],
  ["保証を受けるための条件", "指定された手入れ方法を守ることが条件になっている場合があります。"],
  ["申し出るときの手順と窓口", "施工した会社に直接連絡するのか、別の窓口があるのかを確認します。"],
  ["会社が変わった場合の扱い", "施工会社が事業を終了した場合にどうなるのかも、事前に聞いておける項目です。"],
  ["書面の形式", "口頭ではなく書面で受け取れるか、保証書の控えをもらえるかを確認します。"],
];

export default function CoatingTypesPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "床メンテナンスの基礎知識" },
          { label: "コーティングの種類の違い" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-3">
            フロアコーティングの種類の違い｜膜の素材別の考え方と確認事項
          </h1>
          <p className="text-[#57534E] leading-relaxed">
            フロアコーティングを調べると、ウレタン・シリコン・ガラス・UV硬化といった呼び名が並びます。
            ところがこれらは同じ軸で並んでいるわけではなく、素材を指す言葉と工法を指す言葉が混ざっています。
            このページでは、名前に惑わされずに比較するための整理のしかたと、施工前に確認する項目をまとめます。
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-900 mb-8">
          <strong>先に前提:</strong>{" "}
          同じ区分名でも、製品ごとに構成も仕上がりも異なります。当ページでは、耐久の年数や乾燥にかかる時間といった数値の目安は示しません。実際の性能・条件は、施工する会社が提示する製品の資料と保証書で確認してください。
        </div>

        {/* H2-1 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            コーティングは「膜の素材」と「固め方」で分かれる
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-3">
            比較の前に、呼び名がどちらの軸を指しているかを分けて考えます。素材の名前と工法の名前が並んでいると、
            同じ土俵で比べているつもりが実は比べられていない、ということが起こります。
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {materials.map((x) => (
              <div key={x.t} className="bg-[#FFFBEB] rounded-lg p-4 border border-[#F0ECE8]">
                <div className="font-bold text-sm text-[#92400E] mb-1">{x.t}</div>
                <p className="text-sm text-[#57534E] leading-relaxed">{x.b}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#78716C]">
            見積もりを並べるときは、まず「膜の素材は何か」「どうやって固めるのか」の2点を各社に同じ言い方で聞き、回答をそろえてから比べてください。
          </p>
        </div>

        {/* H2-2 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            仕上がりのつやと質感をどう確認するか
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-3">
            コーティングは一度施工すると、ワックスのように気軽にやり直せるとは限りません。仕上がりの見え方は、契約前に確認しておきたい要素です。
          </p>
          <ul className="space-y-2 text-sm text-[#57534E]">
            {glossChecks.map((t) => (
              <li key={t} className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#92400E] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
          <p className="text-xs text-[#78716C] mt-3">
            床の色味や照明の種類によって見え方は変わります。他所の施工事例がそのまま自宅の仕上がりになるとは限らない点を前提に見てください。
          </p>
        </div>

        {/* H2-3 */}
        <div className="bg-[#FFFBEB] border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            後から手直し・部分補修ができるかという観点
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {repairView.map((x) => (
              <div key={x.t} className="flex gap-3">
                <div className="w-2 h-2 bg-[#92400E] rounded-full mt-2 shrink-0"></div>
                <div>
                  <div className="font-bold text-sm text-[#1C1917]">{x.t}</div>
                  <p className="text-sm text-[#57534E] mt-0.5 leading-relaxed">{x.b}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#78716C] mt-3">
            長く住む前提の住まいほど、施工直後の見た目だけでなく、その後どう付き合っていくかが判断材料になります。
          </p>
        </div>

        {/* H2-4 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            保証書で確認する範囲と免責
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#FFFBEB] border-b border-[#D6D3D1]">
                <tr>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917] whitespace-nowrap">読む項目</th>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917]">確認の観点</th>
                </tr>
              </thead>
              <tbody>
                {warrantyChecks.map(([a, b], i) => (
                  <tr key={a} className={`border-b border-[#F0ECE8] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF9]"}`}>
                    <td className="px-3 py-2 font-medium text-[#1C1917] align-top">{a}</td>
                    <td className="px-3 py-2 text-[#57534E]">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#78716C] mt-3">
            保証の有無や内容は会社ごとに異なります。当サイトが掲載している各社の情報は各社の公表内容をそのまま記載したものであり、保証の適用可否を当サイトが判断することはできません。契約前に必ず書面でご確認ください。
          </p>
        </div>

        {/* H2-5 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            種類名だけで比較できない理由
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                t: "同じ区分名でも中身が違う",
                b: "区分名は業界で厳密に定義された用語として使われているとは限りません。名前が同じでも製品が同じとは限らない前提で読みます。",
              },
              {
                t: "下地処理の内容で結果が変わる",
                b: "既存の膜を取り除くのか、研磨まで行うのかによって、仕上がりも金額も変わります。工程が見積もりに書かれているかを確認します。",
              },
              {
                t: "施工する人の作業が結果を左右する",
                b: "同じ製品でも、施工の手順や環境によって仕上がりに差が出ることがあります。誰が作業するのかを聞いておく価値があります。",
              },
              {
                t: "床材との適合が前提になる",
                b: "床材によっては施工できない、あるいはメーカーの保証対象から外れる場合があります。床材の品番を伝えたうえで可否を確認します。",
              },
            ].map((x) => (
              <div key={x.t} className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#92400E] mt-1 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="font-bold text-sm text-[#1C1917]">{x.t}</div>
                  <p className="text-sm text-[#57534E] mt-0.5 leading-relaxed">{x.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* H2-6 */}
        <div className="bg-[#059669]/5 border border-[#059669]/20 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-bold text-[#059669] mb-3">
            施工前に業者へ渡しておく情報
          </h2>
          <p className="text-sm text-[#374151] leading-relaxed mb-3">
            同じ条件で見積もりを比べるには、こちらから渡す情報もそろえる必要があります。次の内容を一度まとめておくと、複数社への問い合わせが楽になります。
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { t: "床材の種類と品番", b: "分かる範囲でかまいません。取扱説明書や仕様書があれば該当ページを共有します。" },
              { t: "対象とする部屋名と広さ", b: "部屋名で示すと範囲の行き違いが起きにくくなります。" },
              { t: "現在の床の状態", b: "既存の膜があるか、傷や変色があるかを写真で伝えます。" },
              { t: "入居の予定と使える日程", b: "入居前か居住中かで、進め方も段取りも変わります。" },
            ].map((s, i) => (
              <div key={s.t} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-[#F0ECE8]">
                <span className="w-6 h-6 bg-[#059669] text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <div>
                  <div className="font-bold text-sm text-[#1C1917]">{s.t}</div>
                  <p className="text-sm text-[#374151] mt-0.5 leading-relaxed">{s.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="/service/floor-coating/"
            className="flex-1 bg-[#92400E] text-white font-bold py-3 px-6 rounded-full text-center hover:bg-[#78350F] transition-colors"
          >
            フロアコーティングを依頼できる業者を見る
          </Link>
          <Link
            href="/ranking/"
            className="flex-1 border-2 border-[#92400E] text-[#92400E] font-bold py-3 px-6 rounded-full text-center hover:bg-[#FFFBEB] transition-colors"
          >
            掲載社の総合ランキングを見る
          </Link>
        </div>

        <div>
          <h2 className="font-bold text-[#1C1917] mb-4">コーティングを比べる前に読むページ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/know/wax-types/", label: "ワックスの種類" },
              { href: "/know/stripping-decision/", label: "剥離が必要かの判断" },
              { href: "/know/no-wax-floor/", label: "ワックス不可の床材" },
              { href: "/cost/diy-vs-pro/", label: "DIYとプロの比較" },
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
