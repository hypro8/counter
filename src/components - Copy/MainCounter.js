import React, { useEffect, useState } from "react";
import SingleCounter from "./SingleCounter";
import { FaCog } from "react-icons/fa";
import { AiOutlineCloseSquare } from "react-icons/ai";

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

const MainCounter = ({ side, setSide }) => {
  // easy way to generate unique IDs
  // const generateID = () => {
  //   return new Date().getTime().toString();
  // };
  // return (generatedID = new Date().getTime().toString());

  // const [list, setList] = useState(getLocalStorage());
  // console.log(side);
  const [list, setList] = useState(getLocalStorage());

  const handle_counter_functions = (e, id, func) => {
    e.stopPropagation();
    const newList = list.map((item) => {
      if (item.id === id) {
        if (func === "plus") {
          return { ...item, count: item.count + 1, selected: true };
        } else if (func === "minus") {
          return { ...item, count: item.count - 1, selected: true };
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

  const handle_counter_input = (id, inputValue) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, count: inputValue };
      } else {
        return item;
      }
    });
    setList(newList);
  };

  const handle_clear_btn = (e, id) => {
    e.stopPropagation();
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, count: 0, selected: true };
      } else {
        return { ...item, selected: false };
      }
    });
    setList(newList);
  };

  const handle_add_counter = () => {
    if (list.length >= 5) {
      console.log("list length greater than five");
    } else {
      const newCounter = generatedDefaultCounter();
      setList([...list, newCounter]);
      console.log(list);
    }
  };

  const handle_counter_name = (id, nameInput) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, name: nameInput };
      } else {
        return item;
      }
    });
    setList(newList);
  };

  const clearAll = () => {
    setList(initiateList());
  };

  const select_specific_counter = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, selected: true };
      } else {
        return { ...item, selected: false };
      }
    });
    setList(newList);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
    console.log("localstorage get item", localStorage.getItem("list"));
  }, [list]);

  return (
    <section className="main-counter">
      {list.map((item) => {
        console.log(item);
        return (
          <SingleCounter
            item={item}
            handleFunctions={handle_counter_functions}
            handleInput={handle_counter_input}
            handleSingleClear={handle_clear_btn}
            handleCounterName={handle_counter_name}
            handleCounterSelect={select_specific_counter}
            key={item.id}
          />
        );
      })}
      <div className="main-counter-setting">
        <div
          className={`${
            !side ? "setting-wrapper setting-switch-on" : "setting-wrapper"
          }`}
        >
          <div className="setting-switch">
            <i onClick={() => setSide(!side)}>
              <FaCog />
            </i>
          </div>
          <div className="setting-panel">
            <div className="setting-functions">
              <div className="add-counter">
                <button
                  className="btn-add-counter"
                  onClick={handle_add_counter}
                >
                  add new counter
                </button>
              </div>
              <div className="clear-all">
                <button className="btn-clear-all" onClick={clearAll}>
                  clear all
                </button>
              </div>
            </div>
            <i onClick={() => setSide(!side)}>
              <AiOutlineCloseSquare />
            </i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCounter;
