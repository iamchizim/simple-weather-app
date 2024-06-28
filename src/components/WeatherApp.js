import { useState, useEffect } from "react";
import WeatherForm from "./WeatherForm";
import WeatherDisplay from "./WeatherDisplay";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (city) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=cacd0413ab2b41e1975170316242306&q=${city}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (city) {
      fetchWeatherData(city);
    }
  }, [city]);
  return (
    <div className="weather-app">
      <WeatherForm setCity={setCity} />
      {loading && <p>Loading...</p>}
      {!loading && error && <p>Error: {error}</p>}
      {!loading && !error && weatherData && (
        <WeatherDisplay weatherData={weatherData} />
      )}
    </div>
  );
};

export default WeatherApp;
