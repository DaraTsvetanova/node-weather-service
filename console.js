const weather = require("./weather");
require("dotenv").config();

const weatherService = weather(process.env.API_KEY);
const cities = process.env.CITIES.split(",");

async function main() {
  const result = await Promise.all(
    cities.map((city) => weatherService.getWeatherForCity(city))
  );
  console.log(result);
}

main();
