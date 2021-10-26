import needle from 'needle';
import config from '../config';
import { validateOpenWeatherResponse } from '../validators';
import { OpenWeatherMapAPIResponse } from '../interfaces';

export class OpenWeatherRequestObject {
  constructor(private readonly url: URL) {}

  public getURL() {
    return this.url.href + `appid=${config.API_KEY}`;
  }
}

export class OpenWeatherResponseObject {
  constructor(public readonly response: OpenWeatherMapAPIResponse) {
    // Silently verifies the response types and removes additional fields
    validateOpenWeatherResponse(response);
  }
}

export default {

  async getWeatherData(request: OpenWeatherRequestObject): Promise<needle.NeedleResponse> {
    return await needle('get', request.getURL());
  },

};
