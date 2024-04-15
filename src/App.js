import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://portfolio-priyabhoomy.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Priya Bhoomy
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/priyabhoomy-lang/my-react-app-new"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://weather-using-reactbootstrap.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
