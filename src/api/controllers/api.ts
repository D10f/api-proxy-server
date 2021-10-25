import { RequestHandler } from 'express';
import needle from 'needle';
import config from '../../config';

export const getApiKey: RequestHandler = async (req, res) => {

  const url = new URL(config.API_URL);

  for (let option in req.query) {
    url.search += `${option}=${req.query[option]}&`;
  }

  url.search += `appid=${config.API_KEY}`;

  // Through OpenWeatherService
  const response = await needle('get', url.href);
  const data = response.body;
  res.status(200).json(data);
};
