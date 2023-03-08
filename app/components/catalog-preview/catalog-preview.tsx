"use client";

import CatalogData from "@catalog-data/catalog-data";

const CatalogPreview = () => {
  const isFullCatalog = false;
  return (
    <section className="flex flex-col my-28">
      <CatalogData isFullCatalog={isFullCatalog} />
      <button className="secondaryButton mx-auto mt-10">Більше</button>
    </section>
  );
};

export default CatalogPreview;
