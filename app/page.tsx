import Image from "next/image";
import Advantages from "@/components/sections/Advantages";
import Portfolio from "@/components/sections/Portfolio";
import Steps from "@/components/sections/Steps";
import Reviews from "@/components/sections/Reviews";
import ContactForm from "@/components/sections/ContactForm";
import Contacts from "@/components/sections/Contacts";
import Footer from "@/components/sections/Footer";
import FloatingTelegram from "@/components/ui/FloatingTelegram";
import MobileBar from "@/components/ui/MobileBar";
export default function HomePage() {
  return (
    <main className="flex-1 bg-neutral-950 text-white">
      <section className="mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
  <div>
    <span className="rounded-full border border-amber-500 px-4 py-1 text-sm text-amber-500">
      Мебель на заказ
    </span>

    <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-7xl">
      Корпусная мебель
      

      <span className="text-amber-500">на заказ</span>
    </h1>

    <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
      Изготавливаем кухни, шкафы, гардеробные, прихожие и другую
      корпусную мебель по индивидуальным размерам с бесплатным замером
      и профессиональной установкой.
    </p>

    <div className="mt-10 flex flex-wrap gap-4">
      <button className="rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400">
        Получить расчет
      </button>

      <button className="rounded-xl border border-neutral-700 px-8 py-4 transition hover:border-amber-500">
        Смотреть работы
      </button>
    </div>

    <div className="mt-10 grid gap-4 sm:grid-cols-3">
      <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4 text-center">
        <p className="text-2xl text-amber-500">✓</p>
        <p className="mt-2 text-sm text-white">
          Бесплатный замер
        </p>
      </div>

      <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4 text-center">
        <p className="text-2xl text-amber-500">✓</p>
        <p className="mt-2 text-sm text-white">
          Индивидуальные размеры
        </p>
      </div>

      <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4 text-center">
        <p className="text-2xl text-amber-500">✓</p>
        <p className="mt-2 text-sm text-white">
          Гарантия качества
        </p>
      </div>
    </div>
  </div>

  <div className="relative h-[600px] overflow-hidden rounded-3xl shadow-2xl">
    <Image
      src="/images/Izobrazhenie_PNG.png"
      alt="Мебель на заказ"
      fill
      priority
      className="object-cover transition-transform duration-700 hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

    <div className="absolute bottom-8 left-8">
      <span className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-black">
        Более 10 лет опыта
      </span>
    </div>
  </div>
</section>

       <Advantages />
<Portfolio />
<Reviews />
<ContactForm />
<Steps />
<Contacts />
<Footer />

<FloatingTelegram />
<MobileBar />
</main>




  );
}