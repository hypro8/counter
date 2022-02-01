import React, { useState } from "react";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const SingleCounter = ({
  item,
  handlePlus,
  handleMinus,
  handleInput,
  handleSingleClear,
  handleCounterName,
  handleCounterSelect,
}) => {
  // const [counterRead, setCounterRead] = useState(0);
  // const [list, setList] = useState(getLocalStorage());

  const handleUserInputValue = (inputValue) => {
    if (isNaN(inputValue)) {
      console.log("input value is not a num");
    } else if (inputValue === null || inputValue === "") {
      console.log("value is null");
      handleInput(item.id, 0);
    } else {
      handleInput(item.id, parseInt(inputValue));
    }
  };

  const input_counter_name = (inputName) => {
    if (inputName === null || inputName === "") {
      console.log("input cannot be null or empty");
      // handleCounterName(item.id, "enter counter name...");
      handleCounterName(item.id, inputName);
    } else {
      handleCounterName(item.id, inputName);
    }
  };

  return (
    <article className={`single-counter ${item.selected ? "selected" : null}`}>
      <div
        className="single-counter-container"
        onClick={() => handleCounterSelect(item.id)}
      >
        <button
          className="btn-clear-counter"
          onClick={() => handleSingleClear(item.id)}
        >
          clear
        </button>
        <div className="single-counter-name">
          <input
            type="text"
            name=""
            className="counter-name"
            onChange={(e) => input_counter_name(e.target.value)}
            value={item.name}
            placeholder="enter name..."
          />
        </div>
        <div className="counter-panel">
          <button
            className="btn-counter-control"
            onClick={() => handleMinus(item.id)}
          >
            -
          </button>
          <input
            type="text"
            className="counter-display"
            value={item.count}
            onChange={(e) => {
              handleUserInputValue(e.target.value);
            }}
            placeholder="0"
          />
          <button
            className="btn-counter-control"
            onClick={(e) => handlePlus(e, item.id)}
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
};

export default SingleCounter;
