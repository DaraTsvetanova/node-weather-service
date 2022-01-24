require("dotenv").config();
const fs = require("fs");
const weather = require("./weather");

const weatherService = weather(process.env.API_KEY);
const cities = process.env.CITIES.split(",");

async function main() {
  const result = await Promise.all(
    cities.map((city) => weatherService.getWeatherForCity(city))
  );

  console.log(cities);

  fs.writeFileSync("./output.txt", JSON.stringify(result));
}

main();
