export default function Contacts() {
  return (
    <section id="contacts" className="bg-neutral-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          Контакты
        </h2>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Левая колонка */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-amber-500">
                Телефон
              </h3>
              <p className="mt-2 text-lg text-white">
                8 (906) 985-15-55
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-amber-500">
                Город
              </h3>
              <p className="mt-2 text-lg text-white">
                Междуреченск
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://t.me/+79069851555"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#229ED9] px-6 py-4 font-semibold text-white transition hover:opacity-90"
              >
                💬 Написать в Telegram
              </a>

              <a
                href="#"
                className="rounded-xl bg-amber-500 px-6 py-4 font-semibold text-black transition hover:bg-amber-400"
              >
                📱 Написать в MAX
              </a>
            </div>
          </div>

          {/* Правая колонка */}
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-10">
            <h3 className="mb-6 text-2xl font-bold text-white">
              Работаем с выездом к клиенту
            </h3>

            <p className="mb-8 leading-8 text-neutral-400">
              Мы не принимаем клиентов в офисе. Все консультации, замеры и
              обсуждение проекта проводим у вас дома или на объекте.
            </p>

            <div className="space-y-4">
              <div className="rounded-xl bg-neutral-800 p-4">
                📏 Бесплатный замер
              </div>

              <div className="rounded-xl bg-neutral-800 p-4">
                📝 Консультация на месте
              </div>

              <div className="rounded-xl bg-neutral-800 p-4">
                🚗 Выезд по Междуреченску и ближайшим районам
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}