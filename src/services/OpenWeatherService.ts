import needle from 'needle';
import config from '../config';
import { OpenWeatherMapAPIResponse } from '../interfaces';

export class OpenWeatherRequestObject {
  constructor(private readonly url: URL) {
    this.url = url;
  }

  public getURL() {
    return this.url.href + `appid=${config.API_KEY}`;
  }
}

class OpenWeatherResponseObject {
  constructor(public readonly response: OpenWeatherMapAPIResponse) {
    this.response = response;
    delete this.response.base;
    delete this.response.visibility;
    delete this.response.clouds;
    delete this.response.dt;
    delete this.response.timezone;
    delete this.response.cod;
    delete this.response.name;
    delete this.response.name;
  }
}

export default {

  async getWeatherData(request: OpenWeatherRequestObject): Promise<OpenWeatherResponseObject> {
    const response = await needle('get', request.getURL());
    return new OpenWeatherResponseObject(response.body);
  },

};
