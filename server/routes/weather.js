const express = require("express");
const fetch = require("node-fetch");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const config = {
    city: req.query.city,
    apiKey: process.env.OPENWEATHER_API_KEY || "6d6e58ad87f051bbc43df80ab958a654"
  };

  if (!config.apiKey || config.apiKey.length !== 32) {
    return res.status(500).json({ error: "Invalid API key format" });
  }

  if (!config.city) {
    return res.status(400).json({ error: "City is required" });
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${config.city}&appid=${config.apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!response.ok) {
      if (response.status === 401) {
        return res.status(401).json({
          error: "Invalid API key. Please verify your OpenWeather API key."
        });
      }

      return res.status(response.status).json({
        error: data.message || "Failed to fetch weather data"
      });
    }

    res.json(data);

  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;