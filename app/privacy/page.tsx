import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata = {
  title: "プライバシーポリシー | 床メンテナンス110番",
  description: "床メンテナンス110番のプライバシーポリシーです。個人情報の取り扱いについてご説明します。",
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "プライバシーポリシー" }]} />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-2">プライバシーポリシー</h1>
        <p className="text-sm text-[#78716C] mb-8">最終更新日: 2026年4月1日</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-3 border-l-4 border-[#92400E] pl-3">1. 基本方針</h2>
            <p className="text-sm text-[#57534E] leading-relaxed">
              床メンテナンス110番（以下「当サイト」）は、ユーザーの個人情報保護を重要な責務と考えており、個人情報保護法をはじめとする関連法規を遵守し、個人情報の適切な取り扱いに努めます。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-3 border-l-4 border-[#92400E] pl-3">2. 収集する情報</h2>
            <p className="text-sm text-[#57534E] leading-relaxed mb-3">当サイトでは以下の情報を収集する場合があります。</p>
            <ul className="space-y-2 text-sm text-[#57534E]">
              <li className="flex items-start gap-2">
                <span className="text-[#92400E] font-bold shrink-0">・</span>
                アクセスログ（IPアドレス、ブラウザ情報、訪問ページ等）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#92400E] font-bold shrink-0">・</span>
                Cookieを通じて収集される情報
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#92400E] font-bold shrink-0">・</span>
                Google Analyticsによるアクセス解析データ
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-3 border-l-4 border-[#92400E] pl-3">3. Cookieの使用</h2>
            <p className="text-sm text-[#57534E] leading-relaxed mb-3">
              当サイトではCookieを使用しています。Cookieはブラウザに保存される小さなテキストファイルです。以下の目的で使用します。
            </p>
            <ul className="space-y-2 text-sm text-[#57534E]">
              <li className="flex items-start gap-2">
                <span className="text-[#92400E] font-bold shrink-0">・</span>
                サイトの利便性向上および利用状況の分析
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#92400E] font-bold shrink-0">・</span>
                広告配信の最適化（Google AdSense等）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#92400E] font-bold shrink-0">・</span>
                アフィリエイトプログラムのトラッキング
              </li>
            </ul>
            <p className="text-sm text-[#57534E] mt-3">
              ブラウザの設定からCookieを無効にすることができますが、一部のサービスが正常に動作しない場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-3 border-l-4 border-[#92400E] pl-3">4. Google Analyticsについて</h2>
            <p className="text-sm text-[#57534E] leading-relaxed">
              当サイトはアクセス解析にGoogle Analyticsを使用しています。Google Analyticsはトラフィックデータの収集のためにCookieを使用しています。トラフィックデータは匿名で収集されており、個人を特定するものではありません。詳細はGoogleのプライバシーポリシーをご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-3 border-l-4 border-[#92400E] pl-3">5. 広告配信について</h2>
            <p className="text-sm text-[#57534E] leading-relaxed">
              当サイトはGoogle AdSenseおよびアフィリエイトプログラムを利用した広告を掲載しています。これらのサービスはCookieを使用してユーザーの興味に基づいた広告を表示することがあります。広告の配信停止については各サービスの設定ページからオプトアウトが可能です。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-3 border-l-4 border-[#92400E] pl-3">6. 第三者への提供</h2>
            <p className="text-sm text-[#57534E] leading-relaxed">
              当サイトは、法令に基づく場合を除き、ユーザーの個人情報を第三者に提供することはありません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-3 border-l-4 border-[#92400E] pl-3">7. セキュリティ</h2>
            <p className="text-sm text-[#57534E] leading-relaxed">
              当サイトは、SSL（TLS）暗号化通信により、通信データの保護に努めています。ただし、インターネット上の通信における完全な安全性を保証するものではありません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-3 border-l-4 border-[#92400E] pl-3">8. プライバシーポリシーの変更</h2>
            <p className="text-sm text-[#57534E] leading-relaxed">
              本ポリシーは、法令の変更や社会情勢の変化に応じて改定することがあります。変更後のポリシーは当ページに掲載した時点から適用されます。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-3 border-l-4 border-[#92400E] pl-3">9. お問い合わせ</h2>
            <p className="text-sm text-[#57534E] leading-relaxed">
              プライバシーポリシーに関するお問い合わせは、当サイトのお問い合わせフォームよりご連絡ください。
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
