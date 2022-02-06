import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

// easy way to generate unique IDs
const generateID = () => {
  return new Date().getTime().toString();
};

const generatedDefaultCounter = () => {
  return { id: generateID(), count: 0, name: "", selected: false };
};

const initiateList = () => {
  return [generatedDefaultCounter()];
};

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return initiateList();
  }
};

const AppProvider = ({ children }) => {
  const [listContext, setList] = useState(getLocalStorage());
  const [isSettingOn, setIsSettingOn] = useState(false);

  const openSetting = () => {
    console.log("open setting clicked");
    setIsSettingOn(true);
  };
  const closeSetting = () => {
    console.log("close setting clicked");
    setIsSettingOn(false);
  };

  // const openSidebar = () => {
  //   console.log("open sidebar clicked");
  //   setIsSidebarOpen(true);
  // };
  // const closeSidebar = () => {
  //   console.log("close sidebar clicked");
  //   setIsSidebarOpen(false);
  // };

  const handle_counter_functions_ctx = (e, id, func) => {
    e.stopPropagation();
    closeSetting();
    const newList = listContext.map((item) => {
      if (item.id === id) {
        if (func === "plus") {
          return { ...item, count: item.count + 1, selected: true };
        } else if (func === "minus") {
          return { ...item, count: item.count - 1, selected: true };
        } else if (func === "clear") {
          return { ...item, count: 0, selected: true };
        } else if (func === "select") {
          return { ...item, selected: true };
        } else {
          console.log("error: unsupport function...");
        }
      } else {
        return { ...item, selected: false };
      }
    });
    setList(newList);
    console.log("functions clicked");
  };

  const handle_user_input_ctx = (id, userInput, func) => {
    const newList = listContext.map((item) => {
      if (item.id === id) {
        if (func === "enterName") {
          return { ...item, name: userInput, selected: true };
        } else if (func === "enterCountValue") {
          if (isNaN(userInput)) {
            console.log("input value is not a num");
            return { ...item, selected: true };
          } else if (userInput === null || userInput === "") {
            return { ...item, count: 0, selected: true };
          } else {
            return { ...item, count: parseInt(userInput), selected: true };
          }
        } else {
          console.log("Unexpected user input: check user input.");
        }
      } else {
        return { ...item, selected: false };
      }
    });
    setList(newList);
  };

  const handle_clearall_ctx = () => {
    setList(initiateList());
  };

  const handle_add_counter_ctx = () => {
    if (listContext.length >= 5) {
      console.log("list length greater than five");
    } else {
      const newCounter = generatedDefaultCounter();
      setList([...listContext, newCounter]);
    }
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(listContext));
    console.log("localstorage get item", localStorage.getItem("list"));
  }, [listContext]);

  return (
    <AppContext.Provider
      value={{
        listContext,
        isSettingOn,
        openSetting,
        closeSetting,
        handle_counter_functions_ctx,
        handle_clearall_ctx,
        handle_add_counter_ctx,
        handle_user_input_ctx,
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
