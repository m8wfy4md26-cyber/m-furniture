export default function Reviews() {
  const reviews = [
    {
      name: "Александр",
      text: "Заказывали кухню по индивидуальному проекту. Всё выполнено точно по размерам, качество материалов отличное. Монтаж прошёл быстро и аккуратно.",
    },
    {
      name: "Марина",
      text: "Очень довольны новой гардеробной. Учли все наши пожелания, помогли с выбором материалов и выполнили заказ точно в срок",
    },
    {
      name: "Андрей",
      text: "рофессиональный подход на всех этапах — от замера до установки. Получили именно ту мебель, которую хотели",
    },
  ];

  return (
    <section id="reviews" className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          Отзывы клиентов
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
  key={review.name}
  className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20"
>
  <div className="mb-4 flex">
    <span className="text-amber-500 text-xl">★★★★★</span>
  </div>

  <p className="mb-6 text-neutral-300 italic">
    "{review.text}"
  </p>

  <h3 className="text-lg font-semibold text-white">
    {review.name}
  </h3>
</div>
          ))}
        </div>
      </div>
    </section>
  );
}