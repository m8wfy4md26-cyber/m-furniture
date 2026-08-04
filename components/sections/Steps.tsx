const steps = [
  {
    number: "01",
    title: "Заявка",
    text: "Вы оставляете заявку на сайте или связываетесь с нами.",
  },
  {
    number: "02",
    title: "Замер",
    text: "Мы приезжаем, выполняем точные замеры и обсуждаем детали.",
  },
  {
    number: "03",
    title: "Расчет стоимости",
    text: "После замера рассчитываем стоимость, сроки изготовления и согласовываем заказ.",
  },
  {
    number: "04",
    title: "Изготовление",
    text: "Производим мебель на современном оборудовании.",
  },
  {
    number: "05",
    title: "Установка",
    text: "Доставляем и аккуратно устанавливаем мебель у вас дома.",
  },
];

export default function Steps() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-14 text-center text-4xl font-bold text-white">
          Как мы работаем
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 transition hover:border-amber-500"
            >
              <div className="mb-4 text-4xl font-bold text-amber-500">
                {step.number}
              </div>

              <h3 className="mb-3 text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="text-neutral-400">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}