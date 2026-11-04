"use client";

import Link from "next/link";
import { useState } from "react";
import { YkMark } from "./top/YkLogo";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white text-[#2A2018] border-b border-[#DDD4C6] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label="床メンテナンス110番 トップページ">
          <YkMark size={36} />
          <span className="font-bold text-[19px] tracking-[0.06em] leading-tight">
            床メンテナンス<span className="text-[#6B4423]">110番</span>
          </span>
        </Link>

        {/* PR Label */}
        <span className="hidden sm:inline-block border border-[#A8977F] text-[#5C5142] text-xs font-bold px-2 py-1 rounded-[2px]">
          PR・広告掲載あり
        </span>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold">
          <Link href="/ranking/" className="hover:text-[#6B4423] transition-colors">
            ランキング
          </Link>
          <Link href="/floor/flooring/" className="hover:text-[#6B4423] transition-colors">
            床種別ガイド
          </Link>
          <Link href="/service/wax/" className="hover:text-[#6B4423] transition-colors">
            サービス紹介
          </Link>
          <Link href="/cost/price/" className="hover:text-[#6B4423] transition-colors">
            料金目安
          </Link>
          <Link
            href="/ranking/"
            className="bg-[#6B4423] text-white px-4 py-2 rounded-[4px] font-bold hover:bg-[#4A2E17] transition-colors"
          >
            業者を探す
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C8945C]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#DDD4C6]">
          <nav className="flex flex-col px-4 py-3 gap-3 text-sm font-medium">
            <span className="inline-block border border-[#A8977F] text-[#5C5142] text-xs font-bold px-2 py-1 rounded-[2px] w-fit">
              PR・広告掲載あり
            </span>
            <Link href="/ranking/" onClick={() => setMenuOpen(false)} className="hover:text-[#6B4423] transition-colors py-2 border-b border-[#DDD4C6]">
              ランキング
            </Link>
            <Link href="/floor/flooring/" onClick={() => setMenuOpen(false)} className="hover:text-[#6B4423] transition-colors py-2 border-b border-[#DDD4C6]">
              床種別ガイド
            </Link>
            <Link href="/service/wax/" onClick={() => setMenuOpen(false)} className="hover:text-[#6B4423] transition-colors py-2 border-b border-[#DDD4C6]">
              サービス紹介
            </Link>
            <Link href="/cost/price/" onClick={() => setMenuOpen(false)} className="hover:text-[#6B4423] transition-colors py-2 border-b border-[#DDD4C6]">
              料金目安
            </Link>
            <Link
              href="/ranking/"
              onClick={() => setMenuOpen(false)}
              className="bg-[#6B4423] text-white px-4 py-3 rounded-[4px] font-bold text-center hover:bg-[#4A2E17] transition-colors mt-1"
            >
              業者を探す
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
