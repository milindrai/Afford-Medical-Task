import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem('weatherSearchHistory');
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  const handleSearch = async (city) => {
    try {
      const response = await fetch(`/api/weather?city=${city}`);
      if (!response.ok) {
        setError("City not found");
        setWeatherData(null);
        return;
      }
      const data = await response.json();
      setWeatherData(data);
      setError("");
      
      const newHistory = [city, ...searchHistory.filter(h => h !== city)].slice(0, 5);
      setSearchHistory(newHistory);
      localStorage.setItem('weatherSearchHistory', JSON.stringify(newHistory));
    } catch (err) {
      console.error(err);
      setError("Error fetching weather data");
    }
  };

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`app ${isDark ? 'dark' : ''}`}>
      <div className="card">
        <button className="theme-toggle" onClick={toggleTheme}>
          <img 
            src={`/images/${isDark ? 'sun' : 'moon'}.png`} 
            alt="Toggle theme" 
          />
        </button>
        <SearchBar 
          onSearch={handleSearch} 
          isDark={isDark} 
          searchHistory={searchHistory}
        />
        {error && <div className="error">{error}</div>}
        {weatherData && <WeatherCard data={weatherData} />}
      </div>
    </div>
  );
};

export default App;