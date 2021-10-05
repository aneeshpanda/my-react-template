import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Template</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <code>
          Initialised with Axios, React Cookie, React Router DOM, Prettier,
          ESLint, Husky.
        </code>
      </header>
    </div>
  );
}

export default App;
