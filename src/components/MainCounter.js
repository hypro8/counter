import React from "react";
import SingleCounter from "./SingleCounter";
import { FaCog } from "react-icons/fa";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useGlobalContext } from "./Context";

const MainCounter = () => {
  const {
    listContext,
    isSettingOn,
    openSetting,
    closeSetting,
    handle_clearall_ctx,
    handle_add_counter_ctx,
  } = useGlobalContext();

  return (
    <section className="main-counter">
      {listContext.map((item) => {
        return <SingleCounter item={item} key={item.id} />;
      })}
      <div className="main-counter-setting">
        <div
          className={`${
            isSettingOn
              ? "setting-wrapper setting-switch-on"
              : "setting-wrapper"
          }`}
        >
          <div className="setting-switch">
            <i onClick={openSetting}>
              <FaCog />
            </i>
          </div>
          <div className="setting-panel">
            <div className="setting-functions">
              <div className="add-counter">
                <button
                  className="btn-add-counter"
                  onClick={handle_add_counter_ctx}
                >
                  add new counter
                </button>
              </div>
              <div className="clear-all">
                <button className="btn-clear-all" onClick={handle_clearall_ctx}>
                  clear all
                </button>
              </div>
            </div>
            <i className="close_setting_icon" onClick={closeSetting}>
              <AiOutlineCloseSquare />
            </i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCounter;
