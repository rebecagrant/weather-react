import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="row mb-4 form-search">
      <form className="col-6">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a city.."
          autoComplete="off"
        />  
      </form>
      <form className="col-auto">
        <button type="submit" className="btn btn-dark button1">
          <i className="fas fa-search" />
        </button>
        <button type="button" className="btn btn-dark">
          Current Location
        </button>
      </form>
    </div>
  );
}
