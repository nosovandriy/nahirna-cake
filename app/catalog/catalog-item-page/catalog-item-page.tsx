"use client";

import BreadCrumbs from "@breadcrumb/breadcrumbs";
import { Add, Remove } from "@icons/add-remove";
import Carousel from "./carousel/carousel";

const CatalogItem = () => {
  return (
    <section>
      <BreadCrumbs />
      <div className="mt-10 grid grid-cols-12 gap-x-10">
        <div className="col-span-6 col-start-1 max-h-[724px]">
          <Carousel />
        </div>
        <div className="col-span-6 col-start-7 mb-[120px]">
          <h2 className="mb-6 text-themeGray-100">Шоколадний фереро</h2>
          <p className="mb-8 font-sans text-3xl font-medium text-themeBrown-100">
            780 грн
          </p>
          <div className="mb-8 flex gap-4">
            <button className="sizeButton">Оберіть розмір</button>
            <button className="notActiveSizeButton">1,2 кг</button>
            <button className="notActiveSizeButton">1,5 кг</button>
            <button className="notActiveSizeButton">1,8 кг</button>
            <button className="notActiveSizeButton">2 кг</button>
          </div>
          <div>
            <p className="mb-8">
              Мигдально - фініковий корж. Основа приготована з свіжих ягід
              чорниці , горіхів кеш‘ю , кокосового молока. Зовсім не схожий на
              класичний чізкейк , але це не пристойно смачно.
            </p>
          </div>
          <div className="mb-8 flex items-center gap-6">
            <p className="text-sm">Кількість</p>
            <div className="flex justify-between gap-3 rounded-[10px] border border-themeBrown-20 py-1 px-3 text-base font-normal text-themeGray-100">
              <Remove /> <p className="text-themeGray-100">1</p>
              <div>
                <Add />
              </div>
            </div>
          </div>
          <button className="primaryButton mb-10">Додати в кошик</button>
          <p className="pb-4 text-xl font-medium">Склад та алергени</p>
          <p className="pb-6">
            шифоновий ванільний бісквіт, грушево-лимонний курд, карамелізовані
            яблука з ноткою кориці, покриття - вершковий кремчіз.
          </p>
          <p className="pb-4 text-xl font-medium text-themeBrown-100">
            Умови зберігання
          </p>
          <p className="pb-6">
            СТРОК ПРИДАТНОСТІ: 3 доби
            <br />
            УМОВИ ЗБЕРІГАННЯ: при температурі від +2 до +6˚С
          </p>
        </div>
      </div>
    </section>
  );
};

export default CatalogItem;
