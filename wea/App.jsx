import React from "react";
import './App.css'
import CityName from './Components/CityName';
import CurrentDay from './Components/CurrentDay';
import CurrentTime from "./Components/CurrentTime";
import WeatherCondition from './Components/WeatherCondition';
import HumidityLevel from './Components/HumidityLevel';
import ForecastNextWeek from "./Components/ForecastNextWeek";

function App() {
    return (
        <div className="App">
            <CityName />
            <CurrentDay />
            <CurrentTime />
            <WeatherCondition />
            <HumidityLevel />
            <ForecastNextWeek />


        </div>
    );
}

export default App;