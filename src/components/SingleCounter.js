import React from "react";
import { useGlobalContext } from "./Context";

const SingleCounter = ({ item }) => {
  const { handle_counter_functions_ctx, handle_user_input_ctx } =
    useGlobalContext();

  return (
    <article
      className={`${
        item.selected ? "single-counter selected" : "single-counter"
      }`}
    >
      <div
        className="single-counter-container"
        onClick={(e) => handle_counter_functions_ctx(e, item.id, "select")}
      >
        <button
          className="btn-clear-counter"
          onClick={(e) => handle_counter_functions_ctx(e, item.id, "clear")}
        >
          clear
        </button>
        <div className="single-counter-name">
          <input
            type="text"
            name=""
            className={`${
              item.selected ? "counter-name selected-bcg-01" : "counter-name"
            }`}
            onChange={(e) =>
              handle_user_input_ctx(item.id, e.target.value, "enterName")
            }
            value={item.name}
            placeholder="enter name..."
          />
        </div>
        <div className="counter-panel">
          <div className="counter-control">
            <button
              className="btn-counter-control"
              onClick={(e) => handle_counter_functions_ctx(e, item.id, "minus")}
            >
              -
            </button>
          </div>
          <input
            type="text"
            className={`${
              item.selected
                ? "counter-display selected-bcg-01"
                : "counter-display "
            }`}
            value={item.count}
            onChange={(e) => {
              handle_user_input_ctx(item.id, e.target.value, "enterCountValue");
            }}
            placeholder="0"
          />
          <div className="counter-control">
            <button
              className="btn-counter-control"
              onClick={(e) => handle_counter_functions_ctx(e, item.id, "plus")}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleCounter;
