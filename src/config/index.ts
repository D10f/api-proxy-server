import dotenv from 'dotenv';
dotenv.config();

interface configurationObject {
  PORT: number;
  HOST: string;
  API_URL: string;
  API_KEY: string;
}

const config: configurationObject = {
  PORT: Number(process.env.PORT) || 3000,
  HOST: process.env.HOST || '127.0.0.1',
  API_URL: process.env.API_URL || 'https://api.openweathermap.org/data/2.5/weather',
  API_KEY: process.env.API_KEY || '',
};

let option: keyof configurationObject;
for (option in config) {
  if (
    config[option] === undefined ||
    config[option] === null ||
    config[option] === ''
  ) {
    console.error(`Required environment variable ${option} is missing!`);
    process.exit(1);
  }
}

export default config;
