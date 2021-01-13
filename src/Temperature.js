import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="row justify-content-end">
      <div className="col-sm-4">
        <div className="links">
          <img
            src="http://openweathermap.org/img/wn/04n@2x.png"
            className="main-icon"
            alt=""
          />
          <div>
            <div className="float-left">
              <h3 className="degrees">10</h3>
            </div>
            <div className="float-left">
              <a href="" className="active">
                °C
              </a>
              <span>&nbsp;|&nbsp;</span>
              <a href="">°F</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <ul className="list-unstyled">
          <li>
            <strong>Pressure:</strong> 1008 hPa
          </li>
          <li>
            <strong>Humidity:</strong> 71%
          </li>
          <li>
            <strong>Wind:</strong> 8 km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
