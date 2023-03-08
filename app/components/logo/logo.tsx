import Image from "next/image";
import Link from "next/link";

type Props = {
  handleShowMobileMenu?: () => void;
};

export const Logo: React.FC<Props> = ({ handleShowMobileMenu }) => {
  return (
    <Link href="/#hero" className="cursor-pointer hover:scale-110 duration-300" onClick={handleShowMobileMenu}>
      <Image
        src="/assets/logo.svg"
        alt="https://nahirnacake.com.ua/"
        width={145}
        height={45}
        priority
      />
    </Link>
  );
};
