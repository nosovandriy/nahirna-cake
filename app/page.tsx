import About from "@about/about";
import Hero from "@hero/hero";
import CatalogPreview from "@catalog-preview/catalog-preview";
import CatalogItem from "./catalog/catalog-item-page/catalog-item-page";
import { PopUpBasket } from "@pop-up-basket/pop-up-basket";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      {/* <About /> */}
      {/* <CatalogPreview /> */}
      <CatalogItem />
      <PopUpBasket />
    </>
  );
}
