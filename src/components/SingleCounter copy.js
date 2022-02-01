import React, { useState } from "react";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const SingleCounter = () => {
  const [counterRead, setCounterRead] = useState(0);
  const [list, setList] = useState(getLocalStorage());

  const handlePlusClick = (e) => {
    e.preventDefault();
    setCounterRead(counterRead + 1);
  };

  const handleMinusClick = (e) => {
    e.preventDefault();

    setCounterRead(counterRead - 1);
  };

  const handleUserInputValue = (inputValue) => {
    console.log(counterRead);
    console.log(typeof counterRead);
    if (isNaN(inputValue)) {
      console.log("input value is not a num");
    } else if (inputValue == null || inputValue == "") {
      console.log("value is null");
    } else {
      setCounterRead(parseInt(inputValue));
    }
  };
  return (
    <section className="single-counter">
      <div className="single-counter-container">
        <div className="single-counter-name">
          <span className="sc-name">1st counter</span>
        </div>
        <div className="counter-panel">
          <form>
            <button className="btn-minus" onClick={(e) => handleMinusClick(e)}>
              -
            </button>
            <input
              type="text"
              className="counter-display"
              value={counterRead}
              onChange={(e) => {
                handleUserInputValue(e.target.value);
              }}
              placeholder="0"
            />
            <button className="btn-plus" onClick={(e) => handlePlusClick(e)}>
              +
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SingleCounter;
