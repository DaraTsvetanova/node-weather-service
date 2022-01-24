const URL = "http://api.weatherapi.com/v1/current.json";
const axios = require("axios");

const createWeatherService = (apiKey) => {
  const endpoint = `${URL}?key=${apiKey}`;

  return {
    getWeatherForCity: async (city) => {
      try {
        const response = await axios.get(`${endpoint}&q=${city}`);
        return {
          date: response.data.location.localtime,
          location: response.data.location.name,
          currentWeather: response.data.current.temp_c,
        };
      } catch (err) {
        console.log(err.message);
        console.error("Something went wrong");
      }
    },
  };
};

module.exports = createWeatherService;
