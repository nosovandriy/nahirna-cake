"use client";

import { useContext } from "react";
import Image from "next/legacy/image";
import classNames from "classnames";
import { PopUpOverlay } from "@pop-up-overlay/pop-up-overlay";
import { ContextProvider } from "@provider/use-context-provider";
import { CloseIcon } from "@icons/close";
import { DeleteIcon } from "@icons/delete";
import { Add, Remove } from "@icons/add-remove";

export const PopUpBasket = () => {
  const { isOpenPopUpBasket, setIsOpenPopUpBasket } =
    useContext(ContextProvider);

  console.log(isOpenPopUpBasket);

  return (
    <PopUpOverlay
      isOpenPopUpBasket={isOpenPopUpBasket}
      setIsOpenPopUpBasket={setIsOpenPopUpBasket}
    >
      {isOpenPopUpBasket && (
        <div className="flex h-[548px] w-[744px] flex-col gap-10 rounded-[20px] bg-themeCaramel p-8">
          <div className="flex items-center justify-between">
            <h2>Ваші товари</h2>
            <div
              className="cursor-pointer fill-themeGray-60 transition duration-500 hover:rotate-180"
              onClick={() => setIsOpenPopUpBasket(false)}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="min-h-[200px] min-w-[200px]">
              <Image
                src="/assets/catalogTest.png"
                alt="cheesecake ternopil Nahirna"
                width={200}
                height={200}
              />
            </div>
            <div className="w-full">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center">
                  <h3 className="mr-4">Шоколадний фереро</h3>
                  <button className="sizeButton">1,2 кг</button>
                </div>
                <div className="cursor-pointer fill-themeGray-60">
                  <DeleteIcon />
                </div>
              </div>
              <div className="mb-5">
                <div className="flex items-center justify-between">
                  <p className="text-lg">Ціна</p>
                  <p className="text-2xl font-medium text-themeBrown-100">
                    780 грн
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <p className="text-lg">Кількість</p>
                  <div className="flex justify-between gap-3 rounded-[4px] border border-themeBrown-20 py-1 px-3 text-base font-normal text-themeGray-100">
                    <Remove />
                    <p className="text-themeGray-100">1</p>
                    <div>
                      <Add />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-lg">Сума</p>
                  <p className="text-2xl font-medium text-themeBrown-100">
                    1560 грн
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-[58px] w-full items-center justify-between border-t border-themeBrown-20">
            <h3>Загалом</h3>
            <p className=" text-[32px] font-medium text-themeBrown-100">
              1560 грн
            </p>
          </div>
          <div className="flex justify-between">
            <button className="secondaryButton">Продовжити покупку</button>
            <button className="primaryButton">Оформити замовлення</button>
          </div>
        </div>
      )}
    </PopUpOverlay>
  );
};
