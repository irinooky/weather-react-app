import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project is created by{""}
          <a href="instagram.com/irinooky/" target="_blank">
            {" "}
            Irina Bernaz
          </a>{" "}
          and is
          <a
            href="https://github.com/irinooky/weather-react-app"
            target="_blank"
            className=""
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
