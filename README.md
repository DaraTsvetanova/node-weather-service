# Weather service with NodeJS

**Version 1.0.0**

Node application which core functionality is to return the correct date/time in a given city and it's current weather based on the city name input.

A homework on NodeJS topic for the internal Junior JavaScript Program at EPAM Systems.

## Installation:

```bash
npm install
npm run start:server
```

## Configouration:

Copy the env.example file and create your own .env file with your API KEY for the WeatherAPI and a city or cities of your choice

Example:

```
API_KEY=yourkey;
CITIES=Sofia,London,Washington,Sydney;
```

## Starting the application

- For logging weather data to the console run:

```bash
npm run start:console
```

- For logging weather data to the browser run:

```bash
npm run start:server
```

- For logging weather data to the output.txt file run:

```bash
npm run start:file
```

## Libraries used:

- Express.js
- axios
- nodemon
- dotenv
