import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Content from "./components/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
