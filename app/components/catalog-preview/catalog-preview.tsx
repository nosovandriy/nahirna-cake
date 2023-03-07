"use client";

import Image from "next/image";

import { useCatalog } from "app/data-catalog/data";

const CatalogPreview = () => {
  const { catalog } = useCatalog();

  return (
    <section className="flex flex-col items-center gap-10">
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
            <h2>{cake.title}</h2>
            <p className="text-2xl font-medium text-themeBrown-100">
              від 780 грн
            </p>
          </div>
        ))}
      </div>
      <button className="secondaryButton">Більше</button>
    </section>
  );
};

export default CatalogPreview;
