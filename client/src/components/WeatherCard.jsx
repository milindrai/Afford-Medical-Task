import React from "react";
import "../styles.css";

const WeatherCard = ({ data }) => {
  const weatherIconMap = {
    Clouds: "clouds.png",
    Clear: "clear.png",
    Rain: "rain.png",
    Drizzle: "drizzle.png",
    Mist: "mist.png",
  };

  const icon = weatherIconMap[data.weather[0].main] || "default.png";

  return (
    <div className="weather">
      <img src={`/images/${icon}`} className="weather-icon" alt="Weather" />
      <h1 className="temp">{Math.round(data.main.temp)}°C</h1>
      <h2 className="city">{data.name}</h2>
      <div className="details">
        <div className="col">
          <img src="/images/humidity.png" alt="Humidity" />
          <div>
            <p className="humidity">{data.main.humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="col">
          <img src="/images/wind.png" alt="Wind" />
          <div>
            <p className="wind">{data.wind.speed} km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
