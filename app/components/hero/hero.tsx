"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <main id="hero" className="mt-20 flex h-full w-full items-center justify-center">
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-10 self-center">
          <Image
            src="/assets/logo.svg"
            alt="https://nahirnacake.com.ua/"
            width={543}
            height={164}
            priority
          />
          <h3>
            Подаруйте собі шматочок
            <br></br>
             справжнього блаженства - спробуйте наш чізкейк!
          </h3>
          <button className="primaryButton">Каталог</button>
        </div>
        <div>
          <Image
            src="/assets/image/6.png"
            alt="https://nahirnacake.com.ua/"
            width={730}
            height={750}
            priority
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
