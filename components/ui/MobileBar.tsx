"use client";

import { Phone, Send } from "lucide-react";

export default function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-800 bg-black/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-2">
        <a
          href="tel:89069851555"
          className="flex items-center justify-center gap-2 py-4 text-white transition hover:bg-neutral-900"
        >
          <Phone size={20} className="text-amber-500" />
          <span className="font-medium">Позвонить</span>
        </a>

        <a
          href="https://t.me/+79069851555"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-amber-500 py-4 font-semibold text-black transition hover:bg-amber-400"
        >
          <Send size={20} />
          <span>Telegram</span>
        </a>
      </div>
    </div>
  );
}