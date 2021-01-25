import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="container">
      <h1 className="row justify-content-center mt-5">Weather Forecast</h1>
      <div className="weather-app rounded">
        <Weather />
      </div>
      <footer className="row justify-content-center">
        <div>
          <a href="https://github.com/rebecagrant/weather-react" target="_blank" rel="noopener noreferrer">Open-sourced code</a> by Rebeca Grant
        </div>
      </footer>
      
    </div>
  );
}
