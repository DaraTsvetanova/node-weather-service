const weather = require("./weather");

const weatherService = weather(process.env.API_KEY);
const cities = process.env.cities;

const result = await Promise.all(
  cities.map((city) => weatherService.getWeatherForCity(city))
);

console.log(result);
