import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-[#1C1917] text-[#D6D3D1] mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-[#F59E0B]"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-1.72-1.72V5.25a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v1.79l-5.47-5.47a.75.75 0 00-1.06 0L2.78 11.47a.75.75 0 101.06 1.06l7.63-7.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              <span className="font-bold text-white">
                床メンテナンス<span className="text-[#F59E0B]">110番</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-[#A8A29E]">
              床の専門家があなたの床メンテナンスをサポート。業者比較から費用相場まで、役立つ情報をお届けします。
            </p>
            <div className="mt-4 inline-block bg-[#92400E] text-[#FCD34D] text-xs font-bold px-2 py-1 rounded">
              PR・広告掲載あり
            </div>
          </div>

          {/* Business Info */}
          <div>
            <h3 className="font-bold text-white mb-3 text-sm">業者情報</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ranking/" className="hover:text-[#F59E0B] transition-colors">おすすめランキング</Link></li>
              <li><Link href="/ranking/cheap/" className="hover:text-[#F59E0B] transition-colors">激安ランキング</Link></li>
              <li><Link href="/company/osoujihonpo/" className="hover:text-[#F59E0B] transition-colors">おそうじ本舗</Link></li>
              <li><Link href="/company/duskin/" className="hover:text-[#F59E0B] transition-colors">ダスキン</Link></li>
              <li><Link href="/company/bears/" className="hover:text-[#F59E0B] transition-colors">ベアーズ</Link></li>
            </ul>
          </div>

          {/* Floor Guides */}
          <div>
            <h3 className="font-bold text-white mb-3 text-sm">床種別ガイド</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/floor/flooring/" className="hover:text-[#F59E0B] transition-colors">フローリング</Link></li>
              <li><Link href="/floor/cushion-floor/" className="hover:text-[#F59E0B] transition-colors">クッションフロア</Link></li>
              <li><Link href="/floor/tile/" className="hover:text-[#F59E0B] transition-colors">タイル</Link></li>
              <li><Link href="/floor/marble/" className="hover:text-[#F59E0B] transition-colors">大理石</Link></li>
              <li><Link href="/floor/carpet/" className="hover:text-[#F59E0B] transition-colors">カーペット</Link></li>
            </ul>
          </div>

          {/* Services & Info */}
          <div>
            <h3 className="font-bold text-white mb-3 text-sm">サービス・費用</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/service/wax/" className="hover:text-[#F59E0B] transition-colors">ワックスがけ</Link></li>
              <li><Link href="/service/floor-coating/" className="hover:text-[#F59E0B] transition-colors">フロアコーティング</Link></li>
              <li><Link href="/service/stripping-wash/" className="hover:text-[#F59E0B] transition-colors">剥離洗浄</Link></li>
              <li><Link href="/cost/price/" className="hover:text-[#F59E0B] transition-colors">料金相場</Link></li>
              <li><Link href="/cost/diy-vs-pro/" className="hover:text-[#F59E0B] transition-colors">DIY vs プロ比較</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#44403C] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-4 text-xs text-[#A8A29E]">
            <Link href="/terms/" className="hover:text-[#F59E0B] transition-colors">利用規約</Link>
            <Link href="/privacy/" className="hover:text-[#F59E0B] transition-colors">プライバシーポリシー</Link>
            <Link href="/content-policy/" className="hover:text-[#F59E0B] transition-colors">コンテンツポリシー</Link>
          </div>
          <p className="text-xs text-[#78716C]">
            &copy; {new Date().getFullYear()} 床メンテナンス110番. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
