import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="row mb-4 justify-content-md-center">
      <div className="col-6 city">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a city.."
          autoComplete="off"
        />
      </div>
      <form className="col-auto">
        <button type="submit" className="btn btn-dark button1">
          <i className="fas fa-search" />
        </button>
      </form>
      <form className="col-auto">
        <button type="button" className="btn btn-dark">
          Current Location
        </button>
      </form>
    </div>
  );
}
