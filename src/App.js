import React from "react";

import './App.css';

import Search from "./Search";
import Location from "./Location";
import Temperature from "./Temperature";



export default function App() {
  return (
    <div className="container">

      <div className="row justify-content-center mt-5">
        <h1>Weather Forecast</h1>
      </div>
      <div className="weather-app rounded">
        <Search />
        <Location />
        <Temperature />
      </div>
      <footer className="row justify-content-center">
        <div>
          <a href="https://github.com/rebecagrant/weather-react" target="_blank" rel="noopener noreferrer">Open-sourced code</a> by Rebeca Grant
        </div>
      </footer>
      
    </div>
  );
}
