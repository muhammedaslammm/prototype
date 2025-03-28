import React from "react";
import Navbar from "./components/Navbar";
import "./styles/clientApp.css";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
