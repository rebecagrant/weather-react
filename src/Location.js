import React from "react";
import "./Location.css";

export default function Location() {
  return (
    <div className="row align-self-center">
      <div className="col ml-3">
        <h1 className="city">
          <i className="far fa-compass"></i>
          <span>London</span>
        </h1>
        <h2>Last updated on Saturday 18:18</h2>
        <h2>Broken clouds</h2>
      </div>
    </div>
  );
}
