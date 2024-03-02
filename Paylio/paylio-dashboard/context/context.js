"use client";

import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
const { useState, useEffect, createContext } = require("react");

const PaylioContext = createContext();

const PaylioProvider = ({ children }) => {
  const [activeLefMenu, setActiveLefMenu] = useState(true);
  const [getPath, setGetPath] = useState("/");

  const path = usePathname();

  const isDesktopOrLaptop = useMediaQuery({
    query: "(max-width: 1399px)",
  });

  useEffect(() => {
    if (isDesktopOrLaptop) {
      setActiveLefMenu(false);
    } else {
      setActiveLefMenu(true);
    }
  }, [isDesktopOrLaptop]);

  useEffect(() => {
    if (path === "/") {
      setGetPath("/");
    } else {
      setGetPath(path?.split("/")[1]);
    }
  }, [path]);
  return (
    <PaylioContext.Provider
      value={{
        activeLefMenu,
        setActiveLefMenu,
        getPath,
      }}>
      {children}
    </PaylioContext.Provider>
  );
};

export { PaylioContext, PaylioProvider };
