"use client";

import Image from "next/image";

const About = () => {
  return (
    <section className="flex w-full items-center justify-center mt-20">
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-10 self-center">
          <Image
            src="/assets/image/7.png"
            alt="Hahirha Victoria with cheesecake"
            width={520}
            height={468}
          />
        </div>
        <div>
          <h1>Про мене</h1>
          <h2>Я - Нагірна Вікторія, шеф кондитер</h2>
          <p>
            Любов до своєї справи та до людей. Саме це надихає мене робити нові
            десерти та не зупинятися на досягнутому. Для приготування дійсно
            смачного десерту я відбираю найкращих постачальників не тільки з
            України, а й з усього світу! Використовую бельгільський та німецький
            шоколад найкращих брендів Callebaut та Lubeca, італійське борошно
            манітоба,бельгійські вершки Debic, натуральні фруктові пюре для
            яскравих начинок, відбірні горіхи та горіхові пасти. Тут ви ніколи
            не знайдете замінників масла, шкідливих консерватів чи підсилювачів
            смаку.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
