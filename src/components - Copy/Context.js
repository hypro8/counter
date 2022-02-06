import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSettingOn, setIsSettingOn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSetting = () => {
    console.log("open setting clicked");
    setIsSettingOn(true);
  };

  const closeSetting = () => {
    console.log("close setting clicked");
    setIsSettingOn(false);
  };

  const openSidebar = () => {
    console.log("open sidebar clicked");
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    console.log("close sidebar clicked");
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSettingOn,
        openSetting,
        closeSetting,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// * use custom hook here:
// ! must use "use" at beginning of name
// ! to use React Hooks, it must either be a Component, or a custom Hook.
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
