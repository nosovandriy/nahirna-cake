"use client";

import Image from "next/image";

import { useCatalog } from "app/data-catalog/data";
import BreadCrumbs from "@breadcrumb/breadcrumbs";

const Catalog = () => {
  const { catalog } = useCatalog();

  return (
    <>
      <section className="flex flex-col gap-10">
        <BreadCrumbs />
        <h2>Каталог</h2>
        <div className="grid grid-cols-3 gap-10">
          {catalog.map((cake) => (
            <div key={cake.id} className="flex flex-col gap-4">
              <Image
                src={cake.imageTitle}
                alt={cake.description}
                width={408}
                height={408}
              />
              <h3>{cake.title}</h3>
              <p className="font-sans text-2xl font-medium text-themeBrown-100">
                {`від ${cake.price * cake.weight[0]} грн`}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Catalog;
