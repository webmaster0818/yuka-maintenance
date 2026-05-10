import { notFound } from "next/navigation";
import Breadcrumb from "@/app/components/Breadcrumb";
import floors from "@/data/floors.json";
import Link from "next/link";

export async function generateStaticParams() {
  return floors.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const floor = floors.find((f) => f.slug === slug);
  if (!floor) return {};
  return {
    title: `${floor.name}のメンテナンス方法・費用相場 | 床メンテナンス110番`,
    description: `${floor.name}のメンテナンス方法を徹底解説。費用相場${floor.avgCost}、推奨サービス・注意点など専門情報を掲載。`,
  };
}

export default async function FloorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const floor = floors.find((f) => f.slug === slug);
  if (!floor) notFound();

  const difficultyColor =
    floor.difficulty === "低"
      ? "bg-[#059669]/10 text-[#059669]"
      : floor.difficulty === "中"
      ? "bg-[#F59E0B]/10 text-[#B45309]"
      : "bg-red-100 text-red-700";

  return (
    <>
      <Breadcrumb
        items={[
          { label: "床種別ガイド" },
          { label: floor.name },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#92400E] to-[#78350F] text-white rounded-2xl p-8 mb-6">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={`text-xs font-bold px-2 py-1 rounded-full ${difficultyColor}`}>
              難易度: {floor.difficulty}
            </span>
            <span className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded-full">
              目安周期: {floor.maintenanceCycle}
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-3">{floor.name}のメンテナンスガイド</h1>
          <p className="text-[#FDE68A] leading-relaxed">{floor.description}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <div className="text-[#FDE68A] text-xs">平均費用</div>
              <div className="font-bold text-white">{floor.avgCost}</div>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <div className="text-[#FDE68A] text-xs">メンテナンス周期</div>
              <div className="font-bold text-white">{floor.maintenanceCycle}</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Characteristics */}
          <div className="bg-white border border-[#D6D3D1] rounded-xl p-5">
            <h2 className="font-bold text-[#1C1917] mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#92400E]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              {floor.name}の特徴
            </h2>
            <ul className="space-y-2">
              {floor.characteristics.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-[#57534E]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#92400E] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Recommended Services */}
          <div className="bg-[#FFFBEB] border border-[#D6D3D1] rounded-xl p-5">
            <h2 className="font-bold text-[#1C1917] mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#F59E0B]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              おすすめサービス
            </h2>
            <div className="flex flex-wrap gap-2">
              {floor.recommendedServices.map((s) => (
                <span key={s} className="bg-[#F59E0B]/10 text-[#92400E] text-sm font-medium px-3 py-1.5 rounded-full border border-[#F59E0B]/30">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Maintenance Tips */}
        <div className="bg-white border border-[#D6D3D1] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-[#1C1917] mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#059669]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            メンテナンスのポイント
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {floor.maintenanceTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#059669]/5 rounded-lg p-3">
                <span className="w-6 h-6 bg-[#059669] text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <p className="text-sm text-[#57534E]">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cautions */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-red-800 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            注意事項
          </h2>
          <ul className="space-y-2">
            {floor.cautions.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-red-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-[#F59E0B] rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-[#92400E] mb-2">
            {floor.name}のメンテナンスをプロに依頼する
          </h2>
          <p className="text-sm text-[#78350F] mb-4">
            専門業者に依頼することで、より美しく長持ちする床に仕上がります。
          </p>
          <Link
            href="/ranking/"
            className="inline-block bg-[#92400E] text-white font-bold py-3 px-8 rounded-full hover:bg-[#78350F] transition-colors"
          >
            おすすめ業者ランキングを見る
          </Link>
        </div>

        {/* Other Floors */}
        <div className="mt-8">
          <h3 className="font-bold text-[#1C1917] mb-4">他の床種別ガイドも見る</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {floors
              .filter((f) => f.slug !== floor.slug)
              .map((f) => (
                <Link
                  key={f.slug}
                  href={`/floor/${f.slug}/`}
                  className="border border-[#D6D3D1] rounded-lg p-3 text-center hover:border-[#F59E0B] transition-colors text-sm font-medium text-[#1C1917] hover:text-[#92400E]"
                >
                  {f.name}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
