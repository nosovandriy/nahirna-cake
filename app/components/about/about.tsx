"use client";

import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="grid grid-cols-12 gap-x-10">
      <div className="col-span-3 col-start-1 translate-y-1/2 transform">
        <Image
          src="/assets/about-left.png"
          alt="cheesecake ternopil Nahirna"
          width={296}
          height={360}
          priority
        />
      </div>
      <div className="col-span-4 col-start-5 items-center justify-center">
        <Image
          src="/assets/about-center.png"
          alt="cheesecake ternopil Nahirna"
          width={408}
          height={606}
          priority
        />
      </div>
      <div className="col-span-4 col-start-9 my-auto">
        <h2 className="mb-10">Я - Нагірна Вікторія, шеф кондитер</h2>
        <p className="">
          Любов до своєї справи та до людей. Саме це надихає мене робити нові
          десерти та не зупинятися на досягнутому.
          <br /> <br />
          Для приготування дійсно смачного десерту я відбираю найкращих
          постачальників не тільки з України, а й з усього світу!
          <br /> <br />
          Тут ви ніколи не знайдете замінників масла, шкідливих консерватів чи
          підсилювачів смаку.
        </p>
      </div>
    </section>
    // <section className="relative mb-28 h-[70vh]">
    //   <div className="absolute top-1/2 left-0 -translate-y-1/2 transform">
    //     <Image
    //       src="/assets/hero-small.png"
    //       alt="cheesecake ternopil Nahirna"
    //       width={296}
    //       height={360}
    //       priority
    //     />
    //   </div>
    //   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
    //     <Image
    //       src="/assets/hero-main.png"
    //       alt="cheesecake ternopil Nahirna"
    //       width={408}
    //       height={606}
    //       priority
    //     />
    //   </div>
    //   <h4 className="relative z-50 pb-8">Я - Нагірна Вікторія, шеф кондитер</h4>
    // </section>
  );
};

export default About;
