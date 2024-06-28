import React from "react";
import { useState } from "react";

const WeatherForm = (props) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      props.setCity(inputValue.trim());
      setInputValue("");
    }
  };
  return (
    <form className="weather-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Enter city name"
      ></input>
      <button type="submit">Get Weather Information</button>
    </form>
  );
};

export default WeatherForm;
