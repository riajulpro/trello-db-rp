"use client";
import { ReactNode, createContext, useState } from "react";

type ContextValueType = {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  Menu: boolean;
};

export const MenuProvider = createContext<ContextValueType>({
  setMenu: () => {},
  Menu: false,
});

const MenuStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [Menu, setMenu] = useState<boolean>(true);

  const contextValue = {
    Menu,
    setMenu,
  };

  return (
    <MenuProvider.Provider value={contextValue}>
      {children}
    </MenuProvider.Provider>
  );
};

export default MenuStateProvider;
