import React from "react";

import Search from "./Search";
import Location from "./Location";
import Temperature from "./Temperature";

export default function Weather() {
    return (
        <div className="weather">
        <Search />
        <Location />
        <Temperature />
        </div>

    );
}