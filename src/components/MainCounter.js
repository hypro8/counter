import React, { useEffect, useState } from "react";
import SingleCounter from "./SingleCounter";

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

const MainCounter = () => {
  // easy way to generate unique IDs
  // const generateID = () => {
  //   return new Date().getTime().toString();
  // };
  // return (generatedID = new Date().getTime().toString());

  // const [list, setList] = useState(getLocalStorage());
  const [list, setList] = useState(getLocalStorage());

  const handle_Plus_Click = (e, id) => {
    e.stopPropagation();
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1, selected: true };
      } else {
        return { ...item, selected: false };
      }
    });
    setList(newList);
    console.log("plus clicked");
  };

  const handle_Minus_Click = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count - 1 };
      } else {
        return item;
      }
    });
    setList(newList);
  };

  const handle_Count_Input = (id, inputValue) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, count: inputValue };
      } else {
        return item;
      }
    });
    setList(newList);
  };

  const handle_clear_btn = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, count: 0 };
      } else {
        return item;
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

  const selectSpecificCounter = (id) => {
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
            handlePlus={handle_Plus_Click}
            handleMinus={handle_Minus_Click}
            handleInput={handle_Count_Input}
            handleSingleClear={handle_clear_btn}
            handleCounterName={handle_counter_name}
            handleCounterSelect={selectSpecificCounter}
            key={item.id}
          />
        );
      })}
      <button className="btn-add-counter" onClick={handle_add_counter}>
        add new counter
      </button>
      <button className="btn-clear-all" onClick={clearAll}>
        clear all
      </button>
    </section>
  );
};

export default MainCounter;
