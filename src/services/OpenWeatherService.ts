import needle from 'needle';
import config from '../config';
import { validateOpenWeatherResponse } from '../validators';
import { OpenWeatherMapAPIResponse } from '../interfaces';

export class OpenWeatherRequestObject {
  constructor(private readonly url: URL) {}

  public getURL() {
    return `${this.url.href}appid=${config.API_KEY}`;
    // return this.url.href + 'appid=' + config.API_KEY;
  }
}

export class OpenWeatherResponseObject {
  constructor(public readonly response: OpenWeatherMapAPIResponse) {
    // Silently verifies the response structure and removes additional props
    validateOpenWeatherResponse(response);
  }
}

export default {

  // async getWeatherData(request: OpenWeatherRequestObject): Promise<needle.NeedleResponse> {
  async getWeatherData(request: OpenWeatherRequestObject): Promise<OpenWeatherResponseObject> {
    const response = await needle('get', request.getURL());
    return new OpenWeatherResponseObject(response.body);
  },

};
