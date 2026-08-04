export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 text-center md:flex-row md:text-left">

        <div>
          <h2 className="text-2xl font-bold text-white">
            M <span className="text-amber-500">Furniture</span>
          </h2>

          <p className="mt-2 text-neutral-500">
            Корпусная мебель на заказ
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-white">
            📞 8 (906) 985-15-55
          </p>

          <p className="text-white">
            📍 Междуреченск
          </p>

          <a
            href="https://t.me/+79069851555"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 transition hover:text-amber-400"
          >
            Telegram
          </a>
        </div>

        <div>
          <p className="text-sm text-neutral-500">
            © 2026 M Furniture
          </p>

          <p className="mt-1 text-sm text-neutral-600">
            Все права защищены
          </p>
        </div>

      </div>
    </footer>
  );
}