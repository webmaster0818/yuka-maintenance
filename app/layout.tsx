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
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
