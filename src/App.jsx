import React from "react";
import "./App.css";
import Search from "./Search";
import CurrentConditions from "./CurrentConditions";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <hr />
        <CurrentConditions />
        <Forecast />
        <hr />
        <Footer />
      </div>
    </div>
  );
}
