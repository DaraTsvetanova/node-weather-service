require("dotenv").config();
const express = require("express");
const weather = require("./weather");

const app = express();
const weatherService = weather(process.env.API_KEY);
const cities = process.env.CITIES.split(",");
const port = 3000;

app.get("/", async (req, res) => {
  const result = await Promise.all(
    cities.map((city) => weatherService.getWeatherForCity(city))
  );
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
