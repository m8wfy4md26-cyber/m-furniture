import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
      <div>
        <span className="rounded-full border border-amber-500 px-4 py-1 text-sm text-amber-500">
          Мебель на заказ
        </span>

        <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-7xl">
          Создаем мебель,
          

          которая служит годами
        </h1>

        <p className="mt-6 text-lg text-neutral-300">
          Кухни, шкафы, гардеробные, прихожие и другая корпусная мебель
          по индивидуальным размерам.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black hover:bg-amber-400 transition">
            Получить расчет
          </button>

          <button className="rounded-xl border border-neutral-700 px-8 py-4 hover:border-amber-500 transition">
            Смотреть работы
          </button>
        </div>
      </div>

      <div className="relative h-[600px] overflow-hidden rounded-3xl shadow-2xl">
        <Image
          src="/images/Izobrazhenie_PNG.png"
          alt="Мебель на заказ"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
    </section>
  );
}




