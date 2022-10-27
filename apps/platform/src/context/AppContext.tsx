/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";

interface IAppContextProvider {
  openSideBar: boolean;
  setOpenSideBar: (status: boolean) => void;
}

const AppContext = React.createContext<IAppContextProvider>({
  openSideBar: false,
  setOpenSideBar: () => {},
});

// eslint-disable-next-line @typescript-eslint/ban-types
export const AppContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [openSideBar, setOpenSideBar] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        // Set window width/height to state
        if (window.innerWidth > 960) {
          setOpenSideBar(false);
        }
      }

      window.addEventListener("resize", handleResize);
      handleResize();
    }

    // if (localStorage.theme == "dark") {
    document.documentElement.classList.add("dark");
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.theme = "dark";
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const toggleDarkMode = () => {
  //   if (
  //     localStorage.theme === "dark" ||
  //     (!("theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     document.documentElement.classList.remove("dark");
  //     document.documentElement.removeAttribute("data-theme");
  //     localStorage.theme = "light";
  //   } else {
  //     document.documentElement.classList.add("dark");
  //     document.documentElement.setAttribute("data-theme", "dark");
  //     localStorage.theme = "dark";
  //   }
  // };

  return (
    <AppContext.Provider
      value={{
        openSideBar,
        setOpenSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext hook must be used inside AppContextProvider");
  }

  return context;
};
