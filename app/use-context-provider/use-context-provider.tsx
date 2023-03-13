"use client";

import React, { useState } from 'react';
// import { EmailNotificationStep } from 'types/EmailNotificationStep';

export const ContextProvider = React.createContext({
  isOpenPopUpBasket: true,
  setIsOpenPopUpBasket: (isOpen: boolean) => {},
});

export const ModalProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isOpenPopUpBasket, setIsOpenPopUpBasket] = useState(true);

  const contextValue = {
    isOpenPopUpBasket,
    setIsOpenPopUpBasket,
  };

  console.log(isOpenPopUpBasket);

  return (
    <ContextProvider.Provider value={contextValue}>
      {children}
    </ContextProvider.Provider>
  );
}
