"use client";

import BreadCrumbs from "@breadcrumb/breadcrumbs";
import CatalogData from "@catalog-data/catalog-data";

const Catalog = () => {
  return (
    <section>
      <BreadCrumbs />
      <div className="my-12 flex flex-col">
        <CatalogData />
      </div>
    </section>
  );
};

export default Catalog;
