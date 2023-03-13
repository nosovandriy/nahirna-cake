"use client";

import CatalogData from "@catalog-data/catalog-data";
import Link from "next/link";

const CatalogPreview = () => {
  const isFullCatalog = false;
  return (
    <section className="flex flex-col my-28">
      <CatalogData isFullCatalog={isFullCatalog} />
      <Link href={"/catalog"} className="mx-auto mt-10">
      <button className="secondaryButton h-[42px] text-center">Більше</button>
      </Link>
    </section>
  );
};

export default CatalogPreview;
