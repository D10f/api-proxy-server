import { RequestHandler } from 'express';
import OpenWeatherService, { OpenWeatherRequestObject, OpenWeatherResponseObject } from '../../services/OpenWeatherService'
import mapCodeToError from '../../services/ErrorService';
import config from '../../config';

export const getApiKey: RequestHandler = async (req, res, next) => {

  // Build a new URL object with the provided query paramters
  const url = new URL(config.API_URL);

  for (let option in req.query) {
    url.search += `${option}=${req.query[option]}&`;
  }

  // Make the API response
  const response = await OpenWeatherService.getWeatherData(new OpenWeatherRequestObject(url));

  // Error Checking
  if (response.body.cod !== 200) {
    return next(mapCodeToError(response.body.cod, response.body.message));
  }

  // Send response to client
  res.status(200).json(
    new OpenWeatherResponseObject(response.body)
  );
};
