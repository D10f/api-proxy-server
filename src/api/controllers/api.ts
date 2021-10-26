import { RequestHandler } from 'express';
import OpenWeatherService, { OpenWeatherRequestObject } from '../../services/OpenWeatherService'
import config from '../../config';

export const getApiKey: RequestHandler = async (req, res) => {

  const url = new URL(config.API_URL);

  for (let option in req.query) {
    url.search += `${option}=${req.query[option]}&`;
  }

  const response = await OpenWeatherService.getWeatherData(new OpenWeatherRequestObject(url));

  res.status(200).json(response);
};
