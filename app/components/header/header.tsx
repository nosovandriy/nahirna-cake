"use client";

import { useEffect, useState } from "react";
import classNames from "classnames";

import { Logo } from "@logo";
import { MenuItems } from "./navigation/menuItems";
import { ShoppingCart } from "@icons/shopping-cart";
import { MobileMenu } from "@icons/mobile-menu";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [navigationShadow, setNavigationShadow] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setNavigationShadow(true);
      } else {
        setNavigationShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <header
      className={classNames("static z-[100] h-20 w-full", {
        "shadow-xl": navigationShadow,
      })}
    >
      <nav className="flex h-full items-center justify-between">
        <div className="md:hidden" onClick={handleShowMobileMenu}>
          <MobileMenu />
        </div>
        <Logo handleShowMobileMenu={handleShowMobileMenu} />
        <ul className="hidden gap-10 lg:flex">
          <MenuItems
            className={
              "border-b border-transparent hover:border-themeBrown-100"
            }
          />
        </ul>
        <div className="flex cursor-pointer fill-themeGray-60 duration-300 hover:scale-110 hover:fill-themeBrown-100 ml-[120px]">
          <ShoppingCart />
        </div>
      </nav>
      <div
        className={
          showMobileMenu ? "fixed left-0 top-0 h-screen w-full md:hidden" : ""
        }
      >
        <div
          className={
            showMobileMenu
              ? "fixed left-0 top-0 flex h-screen w-[85%] flex-col bg-[#ecf0f3] p-6 duration-500 ease-in sm:w-[60%] md:w-[45%]"
              : "fixed left-[-110%] top-0 p-10 duration-500 ease-in"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Logo handleShowMobileMenu={handleShowMobileMenu} />

              <div
                className="my-4 cursor-pointer rounded-full border-b border-gray-300 p-3 shadow-lg shadow-gray-400"
                onClick={handleShowMobileMenu}
              >
                <ShoppingCart />
              </div>
            </div>
            <div className="my-4 border-b border-gray-300"></div>
          </div>
          <div className="flex flex-grow flex-col">
            <ul className="uppercase">
              <MenuItems
                className={"py-3 text-sm"}
                onClick={handleShowMobileMenu}
              />
            </ul>
          </div>
          <div>
            <p className="uppercase tracking-widest text-[#5651e5]">
              Let&apos;s Connect
            </p>
            <div
              className="my-12 flex w-full items-center justify-between sm:w-[80%]"
              onClick={handleShowMobileMenu}
            >
              {/* <IconItems /> */}
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-auto h-px w-full bg-themeBrown-20"></hr>
    </header>
  );
};

export default Header;
