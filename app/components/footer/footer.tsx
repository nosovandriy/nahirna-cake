"use client";

import { MenuItems } from "@header/navigation/menuItems";
import { CopyRight } from "@icons/copyright";
import { Logo } from "@logo";
import { iconContacts } from "contacts/default-contacts";
import { IconContext } from "react-icons";

import Link from "next/link";

const Header = () => {
  return (
    <footer>
      <hr className="mx-auto h-px w-full bg-themeBrown-20"></hr>
      <div className="flex items-center justify-between py-4">
        <Logo />
        <div className="mb-6 flex flex-col flex-wrap gap-10 font-text text-lg text-themeGray-100 sm:mb-0">
          <ul className="columns-2 gap-x-36 leading-[40px]">
            <MenuItems className={"hover:underline"} />
          </ul>
        </div>
        <div>
          <div className="item-center m-auto flex max-w-[330px] flex-col justify-between py-4">
            <p className="pb-4 text-lg text-themeGray-100">Соціальні мережі</p>
            <div className="flex gap-5 pb-10">
              {iconContacts.map((iconContact, index) => (
                <Link
                  key={index}
                  href={iconContact.title}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="easy-in cursor-pointer duration-300 hover:scale-110"
                >
                  {iconContact.icon}
                </Link>
              ))}
            </div>

            <div className="flex gap-1 self-center text-center text-sm">
              <p className="text-themeGray-30">
                © NahirnaCake 2023 Всі права захищені.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Header;
