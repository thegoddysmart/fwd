import React from "react";
import sunnyCloudy from "../assets/sunny_cloudy.png";
import sunny from "../assets/sunny.png";
import cloudy from "../assets/cloudy.png";
import rainy from "../assets/rainy.png";
import windy from "../assets/windy.png";

const ForecastNextWeek = () => {
    return (
        <div>
            <div className="forecast">
                <p>Forecast Next Week</p>
            </div>
            
            <div className="separator"></div>

            <div className="icons">
                <div className="day-icon">
                    <p>Sun</p>
                    <img src={rainy} alt="rainy icon" />
                </div>
                <div className="day-icon">
                    <p>Mon</p>
                    <img src={sunnyCloudy} alt="sunny icon" />
                </div>
                <div className="day-icon">
                    <p>Tues</p>
                    <img src={sunny} alt="sunny icon" />
                </div>
                <div className="day-icon">
                    <p>Wed</p>
                    <img src={windy} alt="windy icon" />
                </div>
                <div className="day-icon">
                    <p>Thurs</p>
                    <img src={cloudy} alt="cloudy icon" />
                </div>
                <div className="day-icon">
                    <p>Fri</p>
                    <img src={rainy} alt="rainy icon" />
                </div>
                <div className="day-icon">
                    <p>Sat</p>
                    <img src={windy} alt="windy icon" />
                </div>
            </div>
        </div>
    );
};

export default ForecastNextWeek;