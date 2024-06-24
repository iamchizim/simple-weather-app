import React from "react";
const WeatherDisplay = ({ weatherData }) => {
  // Check if weatherData and its nested properties are defined
  if (!weatherData || !weatherData.current || !weatherData.location || !weatherData.current.condition) {
    return <p>Weather data is not available.</p>; // Or render a loading spinner, etc.
  }

  const { current, location } = weatherData;
  const { temp_c, condition } = current;
  const { name } = location;

  return (
    <div>
      <h2>Weather in {name}</h2>
      <p>Temperature: {temp_c}°C</p>
      <p>Condition: {condition.text}</p>
      <img src={condition.icon} alt="weather icon" />
    </div>
  );
};

export default WeatherDisplay;
