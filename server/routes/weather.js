const express = require("express");
const fetch = require("node-fetch");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const config = {
    city: req.query.city,
    apiKey: process.env.OPENWEATHER_API_KEY
  };

  if (!config.apiKey || config.apiKey.length !== 32) {
    console.error('Invalid OpenWeather API key format');
    return res.status(500).json({ error: "Invalid API key format" });
  }

  if (!config.city) {
    console.error('Error: City parameter is missing');
    return res.status(400).json({ error: "City is required" });
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${config.city}&appid=${config.apiKey}&units=metric`;

  try {
    console.log('Attempting API call for city:', config.city);
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!response.ok) {
      console.error('OpenWeather API Error:', {
        status: response.status,
        message: data.message,
        city: config.city
      });

      if (response.status === 401) {
        return res.status(401).json({
          error: "Invalid API key. Please verify your OpenWeather API key."
        });
      }

      return res.status(response.status).json({
        error: data.message || "Failed to fetch weather data"
      });
    }

    console.log('Successfully fetched weather data for:', config.city);
    res.json(data);

  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;