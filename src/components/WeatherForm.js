import React from "react";
import { useState } from "react";

const WeatherForm = (props) => {
     const handleSubmit = (e) => {
        e.preventDefault()
        props.setCity(inputValue)
     }
     return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={event.target.value} placeholder="Enter city name">
            </input>
            <button type="submit">
                Get Weather Information
            </button>
        </form>
     )
}

export default WeatherForm