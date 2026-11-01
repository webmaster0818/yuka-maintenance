// 2026-11-01 追加：床材メーカー（DAIKEN・LIXIL）がフロアコーティングについて公式に案内している文言を、そのまま引用する注意枠
export const MAKER_COATING_SOURCES = [
  {
    label: "DAIKEN よくあるご質問「床材のお手入れ方法一覧」",
    href: "https://faq.daiken.jp/faq/show/3189?site_domain=user",
    checked: "2026年11月1日",
  },
  {
    label: "LIXIL Q&A「フローリングにフロアコーティングしてもよいですか。」",
    href: "https://faq.lixil.co.jp/%E3%83%95%E3%83%AD%E3%83%BC%E3%83%AA%E3%83%B3%E3%82%B0%E3%81%AB%E3%83%95%E3%83%AD%E3%82%A2%E3%82%B3%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%97%E3%81%A6%E3%82%82%E3%82%88%E3%81%84%E3%81%A7%E3%81%99%E3%81%8B%E3%80%82-63c8e03b6876c9001d3bfb52",
    checked: "2026年11月1日",
  },
];

export default function MakerCoatingCaution({ className = "mb-6" }: { className?: string }) {
  const [daiken, lixil] = MAKER_COATING_SOURCES;
  return (
    <aside className={`bg-red-50 border border-red-200 rounded-xl px-5 py-4 text-sm text-[#7F1D1D] leading-relaxed ${className}`} aria-label="床材メーカーの注意">
      <p className="font-bold mb-2">床材メーカーの中には、フロアコーティングをしないよう案内している会社があります</p>
      <p className="mb-2">
        <strong>DAIKEN</strong>：「フロアーコーティングは行わないでください。床材表面の剥がれ、膨れ、白化、粉吹き、変色、床鳴り、ひび割れ等の不具合の出る恐れがあります。」
        <span className="block text-xs text-[#991B1B] mt-1">
          出典：<a href={daiken.href} target="_blank" rel="noopener noreferrer" className="underline">{daiken.label}</a>（{daiken.checked}確認）
        </span>
      </p>
      <p className="mb-2">
        <strong>LIXIL</strong>：「フロアコーティングは本来の性能や品質を損なう場合があり、はがれ・膨れ・粉吹き・変色・ひび割れ等の不具合が発生する恐れがございますので使用しないで下さい。ご使用に伴う不具合は保証対象外となります。」
        <span className="block text-xs text-[#991B1B] mt-1">
          出典：<a href={lixil.href} target="_blank" rel="noopener noreferrer" className="underline">{lixil.label}</a>（{lixil.checked}確認）
        </span>
      </p>
      <p>
        今回確認した施工会社の保証内容は、いずれもコーティングの剥がれや施工不良などを対象としたもので、床材そのものの保証とは別のものです。依頼する前に床材のメーカーと品番を確認し、メーカーの案内を読んでください。
      </p>
    </aside>
  );
}
