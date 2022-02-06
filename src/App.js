import logo from "./logo.svg";
import "./App.css";
import MainCounter from "./components/MainCounter";
import MainHeader from "./components/Header";
import SettingBar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [sideOpen, setSideOpen] = useState(true);
  return (
    <main className="main-section">
      <MainHeader />
      <MainCounter side={sideOpen} setSide={setSideOpen} />
      {/* <SettingBar side={sideOpen} /> */}
    </main>
  );
}

export default App;
