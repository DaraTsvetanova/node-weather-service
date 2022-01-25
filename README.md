# Weather service with NodeJS

**Version 1.0.0**

Node application which core functionality is to return the correct date/time in a given city and it's current weather based on the city name input.

A homework on NodeJS topic for the internal Junior JavaScript Program at EPAM Systems.

## Installation:

```bash
npm install
npm run start:server
```

## Config setup:

Go to .env and add a city or cities

Example:

```
CITIES = Sofia, London, Washington, Sydney;
```

## How to run

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
