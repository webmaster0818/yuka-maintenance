import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata = {
  title: "フローリングワックスの塗り替え時期の目安｜製品の耐久性と床のサインで判断",
  alternates: { canonical: "/know/recoat-timing/" },
  description:
    "フローリングワックスの塗り替え時期は、使っている製品の耐久性の表示が目安です。リンレイの家庭用ワックスは製品により約1ヶ月〜約2年と公表されています。耐久性の一覧と、つや・感触・汚れの落ち方など床に出る塗り替えのサイン、塗り重ねと剥離の分かれ目をご説明します。",
};

const visualSigns = [
  {
    t: "つやが場所によってそろわない",
    b: "同じ部屋でも、よく歩く場所だけ光り方が鈍くなっていることがあります。窓際に立って床を斜めから見ると、つやの差が分かりやすくなります。",
  },
  {
    t: "うっすらと白っぽく見える部分がある",
    b: "膜が細かく傷ついていると、光が乱反射して白っぽく見えることがあります。拭いても取れない白さは、汚れではなく膜側の状態を示している場合があります。",
  },
  {
    t: "膜のふちが線状に見える",
    b: "膜がめくれかけると、境目が細い線のように見えることがあります。家具の脚まわりや出入口付近で見つかりやすい変化です。",
  },
  {
    t: "黄色みやくすみが出てきた",
    b: "重ね塗りを続けた床では、層が厚くなるにつれて色味が変わって見えることがあります。部屋の隅と中央で色を見比べると差が分かります。",
  },
];

const touchSigns = [
  {
    t: "歩いたときに足裏が引っかかる",
    b: "膜が均一でなくなると、場所によって感触が変わることがあります。素足で歩いて違和感のある場所を覚えておくと、業者に説明しやすくなります。",
  },
  {
    t: "拭き掃除で汚れが落ちにくくなった",
    b: "同じ手順で拭いているのに前より手間がかかると感じる場合、表面の状態が変わってきている可能性があります。",
  },
  {
    t: "同じ場所にすぐ汚れが目立つ",
    b: "膜が傷んで細かい凹凸ができると、汚れが入り込みやすくなることがあります。掃除の直後でも同じ箇所が気になるかどうかを見ます。",
  },
  {
    t: "モップの滑り方が場所で変わる",
    b: "清掃時の道具の動きに差が出るのも手がかりの一つです。感覚的な変化ですが、日常的に掃除している人ほど気づきやすい変化です。",
  },
];

const durability: [string, string][] = [
  ["つやピカワックス シート（シートタイプ）", "約1ヶ月"],
  ["つやピカワックス（スプレータイプ）", "約3ヶ月"],
  ["オールワックスシート（シートタイプ）", "約4ヶ月"],
  ["オール（ベーシックな樹脂ワックス）", "約6ヶ月"],
  ["高光沢樹脂ワックス", "約6ヶ月"],
  ["ハイテクフローリングコート", "約6ヶ月"],
  ["フローリング専用ワックス", "約1年"],
  ["ハイプロテクトワックス", "約1年"],
  ["スーパーグロス", "約1年"],
  ["防水タフコート", "約1年"],
  ["ウルトラタフコート", "約2年"],
];

const roomFactors = [
  ["人の通る量", "廊下や出入口付近など、通行の多い場所ほど表面への負担が集中します。"],
  ["椅子・家具の動き", "キャスター付きの椅子を使う場所や、頻繁に動かす家具の下では変化が出やすくなります。"],
  ["水や汚れのかかりやすさ", "台所やダイニングなど、水分や油分がかかりやすい場所は他の部屋と同じようには扱えません。"],
  ["日光の当たり方", "直射日光が入る場所と入らない場所では、見え方の変化にも差が出ることがあります。"],
  ["前回の施工範囲", "前回まとめて施工していない部屋がある場合、そもそも状態がそろっていません。"],
];

export default function RecoatTimingPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "床メンテナンスの基礎知識" },
          { label: "塗り替え時期の見きわめ" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-3">
            フローリングワックスの塗り替え時期の目安｜製品の耐久性と床のサインで判断
          </h1>
          <p className="text-[#57534E] leading-relaxed mb-3">
            塗り替え時期の目安は、<strong>使っているワックスの容器や公式サイトに表示されている「耐久性」</strong>です。
            家庭用ワックスでは製品によって幅が大きく、たとえばリンレイは、スプレー・シートタイプで約1〜4ヶ月、
            一般的な樹脂ワックスで約6ヶ月〜約1年、耐久性を高めた製品で約2年と公表しています。
          </p>
          <p className="text-[#57534E] leading-relaxed">
            ただし耐久性は目安で、通行の多い場所や水まわりでは早く傷みます。表示の期間が近づいたら、
            このページで紹介する床のサイン（つや・感触・汚れの落ち方）を確認し、塗り重ねでよいのか、
            いったん剥がす必要があるのかを判断してください。
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-900 mb-8">
          <strong>先に前提:</strong>{" "}
          膜の持ちは、使った製品・床材・その家の使い方によって大きく変わります。下の耐久性はメーカーが公表している製品ごとの目安で、すべての床にあてはまる期間ではありません。業者に施工を依頼した場合は、使用したワックスと塗り替えの目安を施工者に確認してください。
        </div>

        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            家庭用ワックスの耐久性の目安（リンレイ公表値）
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F5F5F4] text-[#1C1917]">
                  <th className="px-3 py-2 text-left font-bold">製品（タイプ）</th>
                  <th className="px-3 py-2 text-left font-bold">耐久性</th>
                </tr>
              </thead>
              <tbody>
                {durability.map(([n, d]) => (
                  <tr key={n} className="border-t border-[#E7E5E4]">
                    <td className="px-3 py-2 text-[#57534E]">{n}</td>
                    <td className="px-3 py-2 font-bold text-[#1C1917]">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#78716C] mt-3 leading-relaxed">
            出典：
            <a href="https://www.rinrei.co.jp/home_care/howto/" target="_blank" rel="noopener noreferrer" className="underline">
              リンレイ公式「ワックスの準備から塗り方」
            </a>
            （2026年10月20日確認）。他社の製品は、容器の表示や各メーカーの公式サイトでご確認ください。
          </p>
        </div>

        {/* H2-1 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            「何年もつか」で決めにくい理由
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-3">
            同じ製品を使っても、床の傷み方は住まいごとに違います。年数を基準にすると、次のようなずれが起きます。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                t: "まだ十分なのに塗り重ねてしまう",
                b: "必要のない塗り重ねを続けると層が厚くなり、後で取り除く作業のほうが大がかりになることがあります。",
              },
              {
                t: "傷みが進んでから気づく",
                b: "膜が部分的になくなった状態を放置すると、床材そのものに汚れや傷が及ぶ可能性があります。",
              },
              {
                t: "部屋ごとの差を反映できない",
                b: "家全体を同じ時期に一律で判断すると、痛みの早い場所と遅い場所の差を取りこぼします。",
              },
              {
                t: "前回の施工内容が分からない",
                b: "前回が塗り重ねだったのか、剥がしてからの施工だったのかで、いま必要な作業は変わります。年数だけでは区別できません。",
              },
            ].map((x) => (
              <div key={x.t} className="flex gap-3">
                <div className="w-2 h-2 bg-[#92400E] rounded-full mt-2 shrink-0"></div>
                <div>
                  <div className="font-bold text-sm text-[#1C1917]">{x.t}</div>
                  <p className="text-sm text-[#57534E] mt-0.5 leading-relaxed">{x.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* H2-2 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            見た目に出る塗り替えのサイン
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-3">
            真上からではなく、床に対して斜めの角度から見ると差が分かりやすくなります。照明を消して自然光だけで見る方法もあります。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {visualSigns.map((x) => (
              <div key={x.t} className="bg-[#FFFBEB] rounded-lg p-4 border border-[#F0ECE8]">
                <div className="font-bold text-sm text-[#92400E] mb-1">{x.t}</div>
                <p className="text-sm text-[#57534E] leading-relaxed">{x.b}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#78716C] mt-3">
            見つけた箇所は写真に残しておくと、問い合わせ時に状態を伝えやすくなります。全体の写真と、気になる箇所の近接写真の両方があると説明が通りやすくなります。
          </p>
        </div>

        {/* H2-3 */}
        <div className="bg-[#FFFBEB] border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            歩いたときの感触・清掃のしやすさに出るサイン
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {touchSigns.map((x) => (
              <div key={x.t} className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#92400E] mt-1 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="font-bold text-sm text-[#1C1917]">{x.t}</div>
                  <p className="text-sm text-[#57534E] mt-0.5 leading-relaxed">{x.b}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#78716C] mt-3">
            感触の変化は主観的な手がかりです。単独で判断せず、見た目のサインと合わせて考えてください。
          </p>
        </div>

        {/* H2-4 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            同じ家でも部屋ごとに進み方が変わる理由
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#FFFBEB] border-b border-[#D6D3D1]">
                <tr>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917] whitespace-nowrap">条件</th>
                  <th className="text-left px-3 py-2 font-bold text-[#1C1917]">確認する事項</th>
                </tr>
              </thead>
              <tbody>
                {roomFactors.map(([a, b], i) => (
                  <tr key={a} className={`border-b border-[#F0ECE8] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF9]"}`}>
                    <td className="px-3 py-2 font-medium text-[#1C1917] align-top whitespace-nowrap">{a}</td>
                    <td className="px-3 py-2 text-[#57534E]">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#78716C] mt-3">
            部屋ごとに状態が違う場合、全室を同じ内容で頼むと過不足が出ます。部屋単位で状態を伝え、作業内容を分けられるかを相談してください。
          </p>
        </div>

        {/* H2-5 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            塗り重ねでよい場合と、いったん剥がす必要がある場合
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#059669]/5 border border-[#059669]/20 rounded-lg p-4">
              <div className="font-bold text-sm text-[#059669] mb-2">塗り重ねが検討される状態</div>
              <ul className="space-y-1.5 text-sm text-[#374151]">
                {[
                  "膜がおおむね残っており、つやの低下が中心である",
                  "はがれやめくれが見当たらない",
                  "前回の施工内容と使った製品が分かっている",
                  "色味の変化がまだ気にならない",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-[#059669] shrink-0">・</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="font-bold text-sm text-amber-900 mb-2">剥がす作業が検討される状態</div>
              <ul className="space-y-1.5 text-sm text-amber-900">
                {[
                  "膜がめくれている、部分的になくなっている",
                  "重ね塗りを繰り返して層が厚くなっている",
                  "色味やくすみが全体に広がっている",
                  "過去に何を塗ったか分からず、相性が確認できない",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="shrink-0">・</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-xs text-[#78716C] mt-3">
            剥がす作業を提案されたときの確認点は「
            <Link href="/know/stripping-decision/" className="text-[#92400E] underline">
              剥離洗浄をすすめられたときの判断とリスクの確認
            </Link>
            」でまとめています。
          </p>
        </div>

        {/* H2-6 */}
        <div className="bg-[#FFFBEB] border border-[#D6D3D1] rounded-xl p-5 mb-8">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            判断に迷うときの現地調査の頼み方
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-3">
            自分で見ても決めきれない場合は、作業を前提にせず状態を見てもらう相談から始められます。依頼時には次の情報をそろえておくと話が早くなります。
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { t: "前回の施工時期と内容", b: "分かる範囲でかまいません。塗り重ねだったのか、剥がしてからだったのかが重要な情報になります。" },
              { t: "床材の種類と、分かれば品番", b: "部屋ごとに違う場合は、部屋名とあわせて伝えます。" },
              { t: "気になっている箇所の写真", b: "全体と近接の2枚があると、状態を伝えやすくなります。" },
              { t: "希望する仕上がりと予算の幅", b: "全面か部分かを含め、優先したい点を先に伝えると提案が絞られます。" },
            ].map((s, i) => (
              <div key={s.t} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-[#F0ECE8]">
                <span className="w-6 h-6 bg-[#92400E] text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0">
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

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="/service/wax/"
            className="flex-1 bg-[#92400E] text-white font-bold py-3 px-6 rounded-full text-center hover:bg-[#78350F] transition-colors"
          >
            ワックスがけを依頼できる業者を見る
          </Link>
          <Link
            href="/service/regular-maintenance/"
            className="flex-1 border-2 border-[#92400E] text-[#92400E] font-bold py-3 px-6 rounded-full text-center hover:bg-[#FFFBEB] transition-colors"
          >
            定期メンテナンスの内容を見る
          </Link>
        </div>

        <div>
          <h2 className="font-bold text-[#1C1917] mb-4">塗り替えの検討に役立つページ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/know/wax-types/", label: "ワックスの種類" },
              { href: "/know/stripping-decision/", label: "剥離が必要かの判断" },
              { href: "/know/after-work-trouble/", label: "施工後のトラブル対策" },
              { href: "/cost/price/", label: "料金相場" },
              { href: "/know/skip-wax/", label: "ワックスをかけない場合" },
              { href: "/know/wax-price-official/", label: "ワックスがけ料金の比較" },
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
