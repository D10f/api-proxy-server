import { RequestHandler } from 'express';
import OpenWeatherService, { OpenWeatherRequestObject } from '../../services/OpenWeatherService'
import mapCodeToError from '../../services/ErrorService';
import config from '../../config';

export const getApiKey: RequestHandler = async (req, res, next) => {

  // Build a new URL object with the provided query paramters
  const url = new URL(config.API_URL);
  for ( const [ key, value ] of Object.entries(req.query) ) {
    url.search += `${key}=${value}&`;
  }

  // Make the API request
  const response = await OpenWeatherService.getWeatherData(
    new OpenWeatherRequestObject(url)
  );

  // Error Checking
  if (response.response.cod !== 200) {
    return next(mapCodeToError(response.response.cod, response.response.message!));
  }

  // Send response to client
  res.status(200).json(response);
};
