import Hero from "@hero/hero";
// import { Raleway } from "next/font/google";
import CatalogPreview from "@catalog-preview/catalog-preview";

// const raleway = Raleway({ subsets: ["cyrillic"] });

export default function Home() {
  return (
    <>
      <Hero />
      <CatalogPreview />
    </>
  );
}
