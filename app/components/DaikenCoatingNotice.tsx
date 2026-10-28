// 2026-10-28 okina 承認：DAIKEN が公式で「フロアーコーティングは行わないでください」としている件を、コーティング関連ページに注意として掲載
export const DAIKEN_COATING_SOURCE = {
  label: "DAIKEN よくあるご質問「床材のお手入れ方法一覧」",
  href: "https://faq.daiken.jp/faq/show/3189?site_domain=user",
  checked: "2026年10月28日",
};

export default function DaikenCoatingNotice({ className = "mb-6" }: { className?: string }) {
  return (
    <aside className={`bg-red-50 border border-red-200 rounded-xl px-5 py-4 text-sm text-[#7F1D1D] leading-relaxed ${className}`} aria-label="床材メーカーの注意">
      <p className="font-bold mb-1">DAIKENの床材には、フロアコーティングを行わないよう案内されています</p>
      <p>
        床材メーカーのDAIKENは、同社の床材について「フロアーコーティングは行わないでください」と案内しています。床材表面の剥がれ・膨れ・白化・粉吹き・変色・床鳴り・ひび割れなどの不具合が出るおそれがあるためです。コーティングを依頼する前に、床材のメーカーと品番を確認し、メーカーの案内に従ってください。
      </p>
      <p className="mt-2 text-xs text-[#991B1B]">
        出典：
        <a href={DAIKEN_COATING_SOURCE.href} target="_blank" rel="noopener noreferrer" className="underline">{DAIKEN_COATING_SOURCE.label}</a>
        （{DAIKEN_COATING_SOURCE.checked}確認）
      </p>
    </aside>
  );
}
