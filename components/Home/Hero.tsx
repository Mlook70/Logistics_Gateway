"use client";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title1: "بوابة التوصيل",
    title2: "اللوجيستية",
    desc: "نقدم أفضل خدمات التوصيل والشحن مع ضمان الوصول الآمن والسريع لجميع أنحاء المملكة",
    image: "/bg.png",
  },
  {
    id: 2,
    title1: "حلول لوجستية",
    title2: "متكاملة",
    desc: "نصل بخدماتنا إلى جميع أنحاء المملكة بسرعة واحترافية عالية",
    image: "/services_bg.jpg",
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto change slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center px-6 fade-in overflow-hidden"
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Content */}
          <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
              <span className="block mb-4">{slide.title1}</span>
              <span className="text-[#A5CD39]">{slide.title2}</span>
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed text-white">
              {slide.desc}
            </p>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-10 flex gap-3 justify-center w-full z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              current === index ? "bg-[#A5CD39]" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
