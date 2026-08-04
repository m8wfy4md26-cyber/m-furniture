"use client";

import Image from "next/image";
import { useState } from "react";

const works = [
  {
    image: "/images/Izobrazhenie_PNG.png",
    title: "Кухня",
  },
  {
    image: "/images/l-UgknnmY7r-hA9GfPx5JZrA6KDis4qoCJ6WVJ1joxm_QjkRlmPzte4DkXQeVOm0rYPTuwM4DuE5q6YIxLqOGkFy.jpg",
    title: "Тумба",
  },
  {
    image: "/images/ffff1111.jpg",
    title: "Шкаф-купе",
  },
  {
    image: "/images/IZqvFEfVwil_LiDzxxxePxeEVQKMbDiJyygiVCigw-wZczxR5SfdM6cbGr7O40wgML2vQppHqRdYvrK8a--GPjMf.jpg",
    title: "Гардеробная",
  },
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="portfolio" className="bg-neutral-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          Наши работы
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {works.map((work) => (
            <div
              key={work.title}
              onClick={() => setSelectedImage(work.image)}
              className="cursor-pointer overflow-hidden rounded-2xl bg-neutral-900 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-64">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">
                  {work.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative h-[85vh] w-full max-w-6xl">
            <Image
              src={selectedImage}
              alt="Работа"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}