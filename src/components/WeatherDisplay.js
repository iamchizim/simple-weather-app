import React from "react";
const WeatherDisplay = ({current, location}) => {
 return(
    <div>
        <h2>
            Weather in {location.name}
        </h2>
        <p>Temperature: {current.temp_c}°C</p>
        <p>Condition: {current.conditon.text}</p>
        <img src={current.conditon.icon} alt="weather icon"></img>
    </div>
 )
}