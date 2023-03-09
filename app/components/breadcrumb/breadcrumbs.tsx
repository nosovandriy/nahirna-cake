"use client";

import { ArrowRightSmall } from "@icons/arrow-right-small";
import { Home } from "@icons/home";

const BreadCrumbs = () => {
  return (
    <section className="mt-12 flex cursor-pointer gap-6 hover:fill-themeBrown-100">
      <div className="flex fill-themeBrown-100 duration-300 hover:scale-110">
        <Home />
      </div>
      <div className="cursor-default fill-themeGray-30">
        <ArrowRightSmall />
      </div>
      <div>
        <p className="font-subTitle border-b border-transparent text-themeBrown-100 duration-300 hover:scale-110 hover:border-themeBrown-100">
          Каталог
        </p>
      </div>
    </section>
  );
};

export default BreadCrumbs;
