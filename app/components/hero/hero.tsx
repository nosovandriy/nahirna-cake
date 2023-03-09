"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative mb-28 h-[70vh]">
      <h1 className="relative z-50 pt-40 pb-8">
        Спробуйте наші
        <br />
        найсмачніші чізкейки
        {/* Найсмачніші
          <br />
          чізкейки в Тернополі */}
      </h1>
      <h4 className="relative z-50 pb-8">
        Десерти виготовлено тільки
        <br />з якісних та натуральних продуктів
      </h4>
      <button className="primaryButton">Перейти в каталог</button>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <Image
          src="/assets/hero-main.png"
          alt="cheesecake ternopil Nahirna"
          width={408}
          height={606}
          priority
        />
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 transform">
        <Image
          src="/assets/hero-small.png"
          alt="cheesecake ternopil Nahirna"
          width={296}
          height={360}
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
