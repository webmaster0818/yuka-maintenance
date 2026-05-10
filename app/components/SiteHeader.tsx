"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#92400E] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 text-[#F59E0B]"
          >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-1.72-1.72V5.25a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v1.79l-5.47-5.47a.75.75 0 00-1.06 0L2.78 11.47a.75.75 0 101.06 1.06l7.63-7.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          <span className="font-bold text-lg leading-tight">
            床メンテナンス<span className="text-[#F59E0B]">110番</span>
          </span>
        </Link>

        {/* PR Label */}
        <span className="hidden sm:inline-block bg-[#F59E0B] text-[#92400E] text-xs font-bold px-2 py-1 rounded">
          PR・広告掲載あり
        </span>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/ranking/" className="hover:text-[#F59E0B] transition-colors">
            ランキング
          </Link>
          <Link href="/floor/flooring/" className="hover:text-[#F59E0B] transition-colors">
            床種別ガイド
          </Link>
          <Link href="/service/wax/" className="hover:text-[#F59E0B] transition-colors">
            サービス紹介
          </Link>
          <Link href="/cost/price/" className="hover:text-[#F59E0B] transition-colors">
            料金目安
          </Link>
          <Link
            href="/ranking/"
            className="bg-[#F59E0B] text-[#92400E] px-4 py-2 rounded-full font-bold hover:bg-[#FCD34D] transition-colors"
          >
            業者を探す
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
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
        <div className="md:hidden bg-[#78350F] border-t border-[#B45309]">
          <nav className="flex flex-col px-4 py-3 gap-3 text-sm font-medium">
            <span className="inline-block bg-[#F59E0B] text-[#92400E] text-xs font-bold px-2 py-1 rounded w-fit">
              PR・広告掲載あり
            </span>
            <Link href="/ranking/" onClick={() => setMenuOpen(false)} className="hover:text-[#F59E0B] transition-colors py-2 border-b border-[#92400E]">
              ランキング
            </Link>
            <Link href="/floor/flooring/" onClick={() => setMenuOpen(false)} className="hover:text-[#F59E0B] transition-colors py-2 border-b border-[#92400E]">
              床種別ガイド
            </Link>
            <Link href="/service/wax/" onClick={() => setMenuOpen(false)} className="hover:text-[#F59E0B] transition-colors py-2 border-b border-[#92400E]">
              サービス紹介
            </Link>
            <Link href="/cost/price/" onClick={() => setMenuOpen(false)} className="hover:text-[#F59E0B] transition-colors py-2 border-b border-[#92400E]">
              料金目安
            </Link>
            <Link
              href="/ranking/"
              onClick={() => setMenuOpen(false)}
              className="bg-[#F59E0B] text-[#92400E] px-4 py-2 rounded-full font-bold text-center hover:bg-[#FCD34D] transition-colors mt-1"
            >
              業者を探す
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
