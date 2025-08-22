require('dotenv').config();
const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = 3000;

const IPINFO_TOKEN = process.env.IPINFO_TOKEN;
const WEATHER_KEY = process.env.WEATHER_KEY;

// Получение локации
app.get("/api/location", async (req, res) => {
  try {
    const response = await fetch(`https://ipinfo.io/json?token=${IPINFO_TOKEN}`);
    if (!response.ok) throw new Error(`Ошибка API: ${response.status}`);

    const data = await response.json();
    res.json({
      city: data.city,
      loc: data.loc
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ошибка при получении города" });
  }
});

// Получение погоды
app.get("/api/weather", async (req, res) => {
  const loc = req.query.loc;
  if (!loc) return res.status(400).json({ error: "Location required" });

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_KEY}&q=${loc.trim()}&days=6&aqi=no&alerts=no&lang=ru`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      console.error("WeatherAPI error:", data);
      return res.status(500).json({ error: "WeatherAPI returned error", details: data });
    }

    res.json(data);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: "Не удалось получить погоду", details: err.message });
  }
});


app.listen(PORT, () => {
  console.log(`Сервер работает на http://localhost:${PORT}`);
});
