import {
  Ruler,
  ShieldCheck,
  Hammer,
  BadgeDollarSign,
} from "lucide-react";

const advantages = [
  {
    icon: Ruler,
    title: "Индивидуальные размеры",
    text: "Изготавливаем мебель точно под размеры вашего помещения.",
  },
  {
    icon: Hammer,
    title: "Качественные материалы",
    text: "Используем надежную фурнитуру и проверенные материалы.",
  },
  {
    icon: ShieldCheck,
    title: "Собственное производство",
    text: "Контролируем качество на каждом этапе изготовления мебели.",
  },
  {
    icon: BadgeDollarSign,
    title: "Честная цена",
    text: "Стоимость фиксируется до начала изготовления.",
  },
];

export default function Advantages() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          Почему выбирают M Furniture
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-amber-500 hover:shadow-xl hover:shadow-amber-500/10"
            >
              <div className="mb-4">
                <item.icon size={42} className="text-amber-500" />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="text-neutral-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}