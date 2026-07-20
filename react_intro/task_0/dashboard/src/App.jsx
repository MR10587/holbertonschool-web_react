import { useState } from "react";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import holbertonLogo from "./assets/holberton-logo.jpg";
import "./App.css";

function App() {
  return (
    <>
      <div className="App-header">
        <img src={holbertonLogo} alt="holberton logo" width="200px"></img>
        <h1 style={{ color: "#e1003c" }}>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>copyright {new Date().getFullYear()} - Holberton School</p>
      </div>
    </>
  );
}

export default App;
