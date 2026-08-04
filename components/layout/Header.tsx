"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-black/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Логотип */}
        <Link href="/" className="text-2xl font-bold text-white">
          M <span className="text-amber-500">Furniture</span>
        </Link>

        {/* Меню */}
        <nav className="hidden gap-8 text-sm font-medium md:flex">
          <a
            href="#portfolio"
            className="text-neutral-300 transition hover:text-amber-500"
          >
            Работы
          </a>

          <a
            href="#reviews"
            className="text-neutral-300 transition hover:text-amber-500"
          >
            Отзывы
          </a>

          <a
            href="#contacts"
            className="text-neutral-300 transition hover:text-amber-500"
          >
            Контакты
          </a>
        </nav>

        {/* Кнопка */}
        <a
          href="#contacts"
          className="rounded-xl bg-amber-500 px-5 py-3 font-semibold text-black transition hover:bg-amber-400"
        >
          Получить расчет
        </a>
      </div>
    </header>
  );
}



