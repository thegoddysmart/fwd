import React from "react";
import sunnyCloudy from "../assets/sunny_cloudy.png";

const CityName = () => {
    return (
        <div>
            <div className="weather-icon">
                <img src={sunnyCloudy} alt="sunny icon" />
            </div>
            <div className="city-name">
                <h1>Accra</h1>
            </div>
        </div>
    );
};

export default CityName;
