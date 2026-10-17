import Link from "next/link";
import type { ReactNode } from "react";
import Breadcrumb from "@/app/components/Breadcrumb";

export type KnowSection = {
  heading: string;
  tone?: "white" | "amber" | "green";
  paras?: ReactNode[];
  list?: ReactNode[];
  cards?: { t: string; b: ReactNode }[];
  steps?: { title: string; body: ReactNode }[];
  table?: { head: string[]; rows: ReactNode[][]; caption?: ReactNode };
  after?: ReactNode[];
  note?: ReactNode;
};

export type KnowSource = { label: string; href: string; checked: string };

type Props = {
  crumb: string;
  h1: string;
  lead: ReactNode;
  notice?: ReactNode;
  sections: KnowSection[];
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
  related: { href: string; label: string }[];
  sources?: KnowSource[];
};

const toneClass = {
  white: "bg-white border border-[#D6D3D1]",
  amber: "bg-[#FFFBEB] border border-[#D6D3D1]",
  green: "bg-[#059669]/5 border border-[#059669]/20",
};

function Arrow() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#92400E] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function KnowArticle({ crumb, h1, lead, notice, sections, primary, secondary, related, sources }: Props) {
  return (
    <>
      <Breadcrumb items={[{ label: "床メンテナンスの基礎知識" }, { label: crumb }]} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-3">{h1}</h1>
          <div className="text-[#57534E] leading-relaxed">{lead}</div>
        </div>

        {notice && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-900 mb-8">{notice}</div>
        )}

        {sections.map((s) => (
          <section key={s.heading} className={`${toneClass[s.tone ?? "white"]} rounded-xl p-5 mb-6`}>
            <h2 className={`text-lg font-bold mb-3 ${s.tone === "green" ? "text-[#059669]" : "text-[#1C1917]"}`}>{s.heading}</h2>

            {s.paras?.map((p, i) => (
              <p key={i} className="text-sm text-[#57534E] leading-relaxed mb-3">{p}</p>
            ))}

            {s.list && (
              <ul className="space-y-2 text-sm text-[#57534E] mb-3">
                {s.list.map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Arrow />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            )}

            {s.cards && (
              <div className="grid md:grid-cols-2 gap-4 mb-3">
                {s.cards.map((c) => (
                  <div key={c.t} className="flex gap-3">
                    <div className="w-2 h-2 bg-[#92400E] rounded-full mt-2 shrink-0"></div>
                    <div>
                      <div className="font-bold text-sm text-[#1C1917]">{c.t}</div>
                      <p className="text-sm text-[#57534E] mt-0.5 leading-relaxed">{c.b}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {s.steps && (
              <div className="grid sm:grid-cols-2 gap-3 mb-3">
                {s.steps.map((st, i) => (
                  <div key={st.title} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-[#F0ECE8]">
                    <span className="w-6 h-6 bg-[#92400E] text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0">{i + 1}</span>
                    <div>
                      <div className="font-bold text-sm text-[#1C1917]">{st.title}</div>
                      <p className="text-sm text-[#57534E] mt-0.5 leading-relaxed">{st.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {s.table && (
              <div className="overflow-x-auto mb-3">
                <table className="w-full text-sm">
                  <thead className="bg-[#FFFBEB] border-b border-[#D6D3D1]">
                    <tr>
                      {s.table.head.map((h) => (
                        <th key={h} className="text-left px-3 py-2 font-bold text-[#1C1917] whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {s.table.rows.map((r, i) => (
                      <tr key={i} className={`border-b border-[#F0ECE8] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF9]"}`}>
                        {r.map((c, j) => (
                          <td key={j} className={`px-3 py-2 align-top ${j === 0 ? "font-medium text-[#1C1917]" : "text-[#57534E]"}`}>{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {s.table.caption && <p className="text-xs text-[#78716C] mt-2">{s.table.caption}</p>}
              </div>
            )}

            {s.after?.map((p, i) => (
              <p key={i} className="text-sm text-[#57534E] leading-relaxed mb-3">{p}</p>
            ))}

            {s.note && <p className="text-xs text-[#78716C] mt-1">{s.note}</p>}
          </section>
        ))}

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link href={primary.href} className="flex-1 bg-[#92400E] text-white font-bold py-3 px-6 rounded-full text-center hover:bg-[#78350F] transition-colors">
            {primary.label}
          </Link>
          <Link href={secondary.href} className="flex-1 border-2 border-[#92400E] text-[#92400E] font-bold py-3 px-6 rounded-full text-center hover:bg-[#FFFBEB] transition-colors">
            {secondary.label}
          </Link>
        </div>

        {sources && sources.length > 0 && (
          <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-8">
            <h2 className="font-bold text-[#1C1917] mb-3">出典・確認先</h2>
            <ul className="space-y-1.5 text-xs text-[#57534E]">
              {sources.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#92400E]">{s.label}</a>
                  （{s.checked}確認）
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#78716C] mt-3">
              掲載内容は確認時点の公式情報にもとづきます。料金・保証・お手入れ方法は変更される場合があるため、ご利用前に各社の公式サイトにて最新情報をご確認ください。
            </p>
          </div>
        )}

        <div>
          <h2 className="font-bold text-[#1C1917] mb-4">関連ページ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {related.map((l) => (
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
