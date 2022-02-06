import React, { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";

const SettingBar = ({ side }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-wrapper">
        <div className="close-wrapper">
          <i>
            <AiOutlineCloseSquare />
          </i>
        </div>
        <div className="sidebar-title">Settings</div>
        <ul className="sidebar-items">
          <li className="sidebar-item">
            <button className="btn-sidebar">button1</button>
          </li>
          <li className="sidebar-item">
            <button className="btn-sidebar">button2</button>
          </li>
          <li className="sidebar-item">
            <button className="btn-sidebar">button3</button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SettingBar;
