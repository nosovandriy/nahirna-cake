import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["cyrillic"] });

export default function Home() {
  return (
    <div className={raleway.className}>
      <div className="hidden">page main</div>
    </div>
  );
}
