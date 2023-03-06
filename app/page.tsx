import About from "@about/about";
import Hero from "@hero/hero";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["cyrillic"] });

export default function Home() {
  return (
    <div className={raleway.className}>
      <Hero />
      <About />
    </div>
  );
}
