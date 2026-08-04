"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Заявка успешно отправлена!");

        setName("");
        setPhone("");
        setMessage("");
      } else {
        alert("❌ Ошибка отправки.");
      }
    } catch (error) {
      alert("❌ Ошибка соединения.");
    }

    setLoading(false);
  }

  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-4 text-center text-4xl font-bold text-white">
          Получить расчет стоимости
        </h2>

        <p className="mb-12 text-center text-neutral-400">
          Оставьте заявку, и мы свяжемся с вами.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-3xl border border-neutral-800 bg-neutral-900 p-8"
        >
          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-xl border border-neutral-700 bg-neutral-950 p-4 text-white outline-none focus:border-amber-500"
          />

          <input
            type="tel"
            placeholder="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full rounded-xl border border-neutral-700 bg-neutral-950 p-4 text-white outline-none focus:border-amber-500"
          />

          <textarea
            rows={5}
            placeholder="Что вы хотите изготовить?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full rounded-xl border border-neutral-700 bg-neutral-950 p-4 text-white outline-none focus:border-amber-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-amber-500 py-4 text-lg font-semibold text-black transition hover:bg-amber-400 disabled:opacity-60"
          >
            {loading ? "Отправляем..." : "Отправить заявку"}
          </button>
        </form>
      </div>
    </section>
  );
}