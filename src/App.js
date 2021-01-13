import React from "react";
import './App.css';
import Search from "./Search";
import Location from "./Location";
import Temperature from "./Temperature";

export default function App() {
  return (
    <div className="weather-app rounded">
      <Search />
      <Location />
      <Temperature />
    </div>
  );
}
