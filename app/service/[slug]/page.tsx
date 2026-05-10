import { notFound } from "next/navigation";
import Breadcrumb from "@/app/components/Breadcrumb";
import services from "@/data/services.json";
import Link from "next/link";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name}の費用・業者選び方 | 床メンテナンス110番`,
    description: `${service.name}の費用相場・作業工程・メリット・デメリットを解説。${service.avgCost}。専門業者に依頼する際のポイントも紹介。`,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Breadcrumb
        items={[
          { label: "サービス一覧" },
          { label: service.name },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#92400E] to-[#78350F] text-white rounded-2xl p-8 mb-6">
          <h1 className="text-3xl font-bold mb-3">{service.name}</h1>
          <p className="text-[#FDE68A] text-lg mb-4">{service.shortDescription}</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <div className="text-[#FDE68A] text-xs">平均費用</div>
              <div className="font-bold text-white">{service.avgCost}</div>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <div className="text-[#FDE68A] text-xs">所要時間</div>
              <div className="font-bold text-white">{service.duration}</div>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <div className="text-[#FDE68A] text-xs">推奨頻度</div>
              <div className="font-bold text-white">{service.frequency}</div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="font-bold text-[#1C1917] mb-3">{service.name}とは？</h2>
          <p className="text-[#57534E] leading-relaxed">{service.description}</p>
          <div className="mt-4 pt-4 border-t border-[#F0ECE8]">
            <h3 className="text-sm font-bold text-[#1C1917] mb-2">対応する床材</h3>
            <div className="flex flex-wrap gap-2">
              {service.targetFloors.map((f) => (
                <span key={f} className="bg-[#92400E]/10 text-[#92400E] text-sm px-3 py-1 rounded-full font-medium">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="bg-[#FFFBEB] border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#92400E]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            作業の流れ
          </h2>
          <div className="relative">
            {service.process.map((step, i) => (
              <div key={i} className="flex gap-4 mb-4 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-[#92400E] text-white text-sm font-bold rounded-full flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  {i < service.process.length - 1 && (
                    <div className="w-0.5 h-full bg-[#92400E]/20 mt-1 flex-1 min-h-4"></div>
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <p className="text-sm text-[#57534E] pt-1.5">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Merits */}
          <div className="bg-[#059669]/5 border border-[#059669]/20 rounded-xl p-5">
            <h2 className="font-bold text-[#059669] mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              メリット
            </h2>
            <ul className="space-y-2">
              {service.merits.map((m) => (
                <li key={m} className="flex items-start gap-2 text-sm text-[#374151]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#059669] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {m}
                </li>
              ))}
            </ul>
          </div>

          {/* Demerits */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-5">
            <h2 className="font-bold text-red-700 mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              デメリット
            </h2>
            <ul className="space-y-2">
              {service.demerits.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-red-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#F59E0B] rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-[#92400E] mb-2">
            {service.name}を依頼できる業者を探す
          </h2>
          <p className="text-sm text-[#78350F] mb-4">
            実績豊富なプロの業者に相談して、最適な施工プランを提案してもらいましょう。
          </p>
          <Link
            href="/ranking/"
            className="inline-block bg-[#92400E] text-white font-bold py-3 px-8 rounded-full hover:bg-[#78350F] transition-colors"
          >
            業者ランキングを見る
          </Link>
          <p className="text-xs text-[#92400E] mt-3 font-medium">※当サイトはPR・広告を含みます</p>
        </div>

        {/* Other Services */}
        <div className="mt-8">
          <h3 className="font-bold text-[#1C1917] mb-4">他のサービスも見る</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/service/${s.slug}/`}
                  className="border border-[#D6D3D1] rounded-lg p-3 text-center hover:border-[#F59E0B] transition-colors text-sm font-medium text-[#1C1917] hover:text-[#92400E]"
                >
                  {s.name}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
