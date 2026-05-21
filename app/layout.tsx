import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const noto = Noto_Sans_JP({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "床メンテナンス110番 | プロの床クリーニング業者比較・口コミ",
    template: "%s | 床メンテナンス110番",
  },
  description:
    "床メンテナンス110番は、フローリング・大理石・カーペットなど床種別の専門業者を比較・口コミで探せるサービスです。ワックスがけ・フロアコーティング・傷補修など費用相場も掲載。",
  keywords: "床メンテナンス, フローリング, ワックスがけ, フロアコーティング, 床クリーニング, 業者比較",
  metadataBase: new URL("https://yuka-maintenance-110.com"),
  alternates: { canonical: "/" },
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "床メンテナンス110番",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className={`${noto.variable} antialiased min-h-screen flex flex-col bg-[#FFFBEB]`}>
        <SiteHeader />
        <main className="flex-1">{children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"床メンテナンス\",\"url\":\"https://yuka-maintenance-deploy.pages.dev/\",\"logo\":\"https://yuka-maintenance-deploy.pages.dev/favicon.ico\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"株式会社MediaX\",\"url\":\"https://mediax.biz\"},\"sameAs\":[\"https://yuka-maintenance-deploy.pages.dev/about/\"]}" }}
        />
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
