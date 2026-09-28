import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata = {
  title: "ワックス・コーティング後の床の日常の手入れ｜避けたい掃除方法",
  alternates: { canonical: "/know/daily-care/" },
  description:
    "施工した床を普段どう扱うかで、次に業者へ相談するまでの間の見え方が変わります。膜を削らない掃除の考え方、掃除機やワイパーの使い方、水拭きと洗剤で起きやすい失敗、家具やラグが原因でつく跡、業者に確認しておく項目を整理しました。",
};

const dryTools = [
  {
    t: "掃除機のヘッドの当て方",
    b: "床に強く押しつけたまま前後させると、ヘッドの縁が同じ場所をこすり続けます。軽く接する程度で動かし、ヘッドに砂や小石をかみ込んでいないかを時々確認します。",
  },
  {
    t: "フローリングワイパーのシートの向き",
    b: "乾いたシートで先にほこりと砂を取ってから、必要に応じて湿らせた工程に進みます。砂が残ったまま押し広げると、細かい線状の跡が残る原因になります。",
  },
  {
    t: "玄関と動線でのほこりの持ち込み",
    b: "外から入る砂は、膜を削る側の要因になります。玄関マットや、砂が落ちやすい場所での一時的な足ふきを組み合わせると、床に届く量を減らせます。",
  },
  {
    t: "ロボット掃除機を使う場合",
    b: "毎日同じ経路を通ると、通り道だけ見え方が変わることがあります。家具の配置を変えたときは走行範囲も見直し、段差の乗り上げで角が当たっていないかを見ておきます。",
  },
];

const wetMistakes = [
  {
    t: "水分を多く含んだまま拭く",
    b: "しぼりが足りない状態で拭くと、継ぎ目に水が入り込むことがあります。かたくしぼる、拭いたあとに乾いた布で追う、といった手順を決めておきます。",
  },
  {
    t: "用途の違う洗剤を薄めて使う",
    b: "台所用・浴室用など床向けと案内されていない洗剤を使うと、膜の状態を変えてしまう場合があります。床に使ってよいと書かれている製品かを、表示で確かめてください。",
  },
  {
    t: "アルコールや漂白剤で部分的に拭く",
    b: "その場所だけ見え方が変わってしまうことがあります。汚れを落としたい気持ちで強い薬剤に手が伸びやすいところですが、目立たない場所で試してから判断します。",
  },
  {
    t: "スチームを当てる",
    b: "熱と水分を同時に加えることになります。床材と施工の種類によっては想定されていない使い方になるため、使う前に施工した会社と床材メーカーの案内を確認します。",
  },
  {
    t: "研磨材入りのスポンジやメラミン系でこする",
    b: "汚れと一緒に膜も削れます。部分的にこすった場所だけ質感が変わり、あとから全体をそろえにくくなります。",
  },
  {
    t: "こぼしたものを時間が経ってから拭く",
    b: "気づいた時点で取り除くほうが、後の手当てが軽く済みます。特に色のついた液体は、放置すると跡が残る場合があります。",
  },
];

const furnitureItems = [
  {
    t: "椅子やテーブルの脚",
    b: "引きずると線状の跡が残ります。フェルトなどの保護材を貼る方法がありますが、粘着が残る製品もあるため、はがしたあとの状態まで考えて選びます。",
  },
  {
    t: "キャスター付きの椅子",
    b: "同じ範囲を繰り返し転がるため、その場所だけ先に変化が出やすくなります。チェアマットを敷く場合は、敷いた面と敷いていない面で見え方の差が出ることも想定しておきます。",
  },
  {
    t: "ラグ・カーペットの裏の素材",
    b: "滑り止めの加工によっては、長期間同じ場所に敷いたときに跡が残ることがあります。時々位置をずらす、裏の素材を確認してから敷く、といった扱いにします。",
  },
  {
    t: "重い家電の設置面",
    b: "接している部分に荷重がかかり続けます。移動させるときは持ち上げる、当て板を使うなど、引きずらない方法を決めておきます。",
  },
  {
    t: "観葉植物の鉢と受け皿",
    b: "受け皿に水がたまったままになると、接している部分に水分が残り続けます。鉢の下に台を置いて風が通るようにする方法があります。",
  },
  {
    t: "日差しが強く当たる場所",
    b: "窓際だけ見え方が変わることがあります。カーテンやブラインドで直射を和らげると、部屋の中での差が出にくくなります。",
  },
];

const escalation = [
  "気になる箇所の写真を撮り、いつごろから気づいたかをメモに残す",
  "同じ部屋の目立たない場所で、普段どおりの掃除をして変化するかを試す",
  "変化がなければ、施工した会社に写真とメモを添えて相談する",
  "施工から日が浅い場合は、手直しの申し出に期限がないかを先に確認する",
  "自分で市販品を塗り足す前に、既存の施工と重ねてよいかを確認する",
];

const askItems = [
  "この床で使ってよい掃除道具と、避けたほうがよい道具はどれか",
  "水拭きをしてよいか。よい場合のしぼり方や頻度の考え方",
  "使ってよい洗剤の種類（製品名または表示の見方）",
  "汚れが落ちないときに、こすってよい範囲はどこまでか",
  "家具の保護材を貼ってよいか。避けたほうがよい粘着の種類はあるか",
  "次に相談するときに、どの状態になったら連絡すればよいか",
];

export default function DailyCarePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "床メンテナンスの基礎知識" },
          { label: "施工後の日常の手入れ" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-3">
            ワックス・コーティング後の床の日常の手入れ｜避けたい掃除方法
          </h1>
          <p className="text-[#57534E] leading-relaxed">
            施工が終わったあとの床は、普段の扱い方によって見え方の変わり方が違ってきます。
            とくに多いのが、<strong>汚れを落とそうとした掃除が、かえって仕上げの膜を削ってしまう</strong>という行き違いです。
            このページでは、日常の手入れで押さえておきたい考え方と、施工した会社に確認しておく項目を整理します。
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-900 mb-8">
          <strong>先に前提:</strong>{" "}
          適切な手入れの方法は、床材の種類と施工した内容によって変わります。ここに書いているのは一般的に挙げられる考え方で、個別の可否は床材メーカーの案内と施工した会社の指示が優先されます。頻度や乾燥にかかる時間などの数値は条件によって変わるため、当ページでは示していません。
        </div>

        {/* H2-1 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            施工後の手入れは「膜を削らない」から考える
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-3">
            ワックスやコーティングを施工した床では、表面に仕上げの層が乗っている状態になります。
            日常の手入れで意識する点は、汚れを落とすことよりも、この層を余計に削らないことにあります。
            考え方としては次の三つに整理できます。
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                t: "削る要因を床に持ち込まない",
                b: "砂やほこりは、歩くたびに表面と擦れます。まず乾いた状態で取り除くのが、いちばん負担の少ない手順です。",
              },
              {
                t: "強い力と強い薬剤に頼らない",
                b: "こする力や薬剤の強さを上げると、汚れと一緒に仕上げの層も落ちます。落ちない汚れは強くするのではなく、相談する対象と考えます。",
              },
              {
                t: "部分的な処置は差を生むと知っておく",
                b: "一か所だけ強く手入れすると、その場所だけ見え方が変わります。全体をそろえるには、結局まとめて手を入れることになります。",
              },
            ].map((x) => (
              <div key={x.t} className="bg-[#FFFBEB] rounded-lg p-4 border border-[#F0ECE8]">
                <div className="font-bold text-sm text-[#92400E] mb-1">{x.t}</div>
                <p className="text-sm text-[#57534E] leading-relaxed">{x.b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* H2-2 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            掃除機とワイパーの使い方で気をつける点
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-4">
            乾いた状態での掃除は、床への負担がもっとも小さい工程です。道具そのものより、当て方と順番のほうが結果に効いてきます。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {dryTools.map((x) => (
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

        {/* H2-3 */}
        <div className="bg-[#FFFBEB] border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            水拭きと洗剤でよくある失敗
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-4">
            相談として挙がりやすいのが、水分と薬剤の扱いです。いずれも「よかれと思ってやった」結果として現れるため、事前に知っておく価値があります。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {wetMistakes.map((x) => (
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
          <p className="text-xs text-[#78716C] mt-3">
            そもそも水や洗剤を使ってよい床かどうかから確かめたい場合は「
            <Link href="/know/no-wax-floor/" className="text-[#92400E] underline">
              ワックスがけができない・不要な床材の見分け方
            </Link>
            」で床材の確かめ方をまとめています。
          </p>
        </div>

        {/* H2-4 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            家具・ラグ・日差しでつく跡への備え
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-4">
            掃除の仕方とは別に、置いてあるものが原因で差が出ることがあります。部屋の中で同じ場所だけ見え方が変わる場合は、この観点で見直してみてください。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {furnitureItems.map((x) => (
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

        {/* H2-5 */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-3">
            気になる箇所が出てきたときに踏む順番
          </h2>
          <p className="text-sm text-[#57534E] leading-relaxed mb-3">
            見え方が変わってきたと感じたら、自分で対処を重ねる前に順番を決めて動くほうが、あとの相談がしやすくなります。
          </p>
          <ol className="space-y-3">
            {escalation.map((t, i) => (
              <li key={t} className="flex items-start gap-3 bg-[#FAFAF9] rounded-lg p-3 border border-[#F0ECE8]">
                <span className="w-6 h-6 bg-[#92400E] text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm text-[#57534E] leading-relaxed">{t}</span>
              </li>
            ))}
          </ol>
          <p className="text-xs text-[#78716C] mt-3">
            塗り直しの相談に進むかどうかの見きわめは「
            <Link href="/know/recoat-timing/" className="text-[#92400E] underline">
              ワックスの塗り替え時期を年数ではなくサインで判断する方法
            </Link>
            」で扱っています。
          </p>
        </div>

        {/* H2-6 */}
        <div className="bg-[#059669]/5 border border-[#059669]/20 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-bold text-[#059669] mb-3">
            引き渡しのときに施工会社へ聞いておく手入れの条件
          </h2>
          <p className="text-sm text-[#374151] leading-relaxed mb-3">
            手入れの方法は、施工した内容に合わせて聞くのがいちばん確実です。作業が終わって引き渡しを受けるときに、次の項目を口頭ではなくメモや書面で残しておくと、あとから確認できます。
          </p>
          <ul className="space-y-2 text-sm text-[#374151]">
            {askItems.map((t) => (
              <li key={t} className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#059669] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
          <p className="text-xs text-[#4B5563] mt-3">
            保証が付く施工では、指定外の手入れを行ったことが保証の対象外の理由になる場合があります。保証書がある場合は、手入れに関する記載も一緒に読んでおいてください。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="/service/regular-maintenance/"
            className="flex-1 bg-[#92400E] text-white font-bold py-3 px-6 rounded-full text-center hover:bg-[#78350F] transition-colors"
          >
            定期メンテナンスの内容を見る
          </Link>
          <Link
            href="/ranking/"
            className="flex-1 border-2 border-[#92400E] text-[#92400E] font-bold py-3 px-6 rounded-full text-center hover:bg-[#FFFBEB] transition-colors"
          >
            総合ランキングを見る
          </Link>
        </div>

        <div>
          <h2 className="font-bold text-[#1C1917] mb-4">日常の手入れとあわせて読むページ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/know/floor-symptoms/", label: "症状から原因を切り分ける" },
              { href: "/know/wax-types/", label: "ワックスの種類と選び方" },
              { href: "/know/after-work-trouble/", label: "施工後のトラブル対策" },
              { href: "/floor/flooring/", label: "フローリングのガイド" },
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
