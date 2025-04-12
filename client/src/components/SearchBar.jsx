import React, { useState } from "react";
import "../styles.css";

const SearchBar = ({ onSearch, isDark, searchHistory }) => {
  const [city, setCity] = useState("");
  const [showHistory, setShowHistory] = useState(false);

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setShowHistory(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleHistoryClick = (historyItem) => {
    setCity(historyItem);
    onSearch(historyItem);
    setShowHistory(false);
  };

  return (
    <div className="search-container">
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setShowHistory(true);
          }}
          onKeyPress={handleKeyPress}
          onFocus={() => setShowHistory(true)}
        />
        <button onClick={handleSearch}>
          <img src="/images/search.png" alt="Search" />
        </button>
      </div>
      {showHistory && searchHistory.length > 0 && (
        <div className="search-history">
          {searchHistory.map((item, index) => (
            <div
              key={index}
              className="history-item"
              onClick={() => handleHistoryClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;