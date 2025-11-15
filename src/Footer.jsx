import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        This project is coded by
        <a
          href="https://github.com/mkmelhundley-code"
          target="_blank"
          rel="noopener noreferrer"
        >
          Melissa Hundley
        </a>
        , is open-sourced on
        <a
          href="https://github.com/mkmelhundley-code/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        , and hosted on
        <a
          href="https://react-weather-app-chi-eight.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel
        </a>
      </footer>
    </div>
  );
}
