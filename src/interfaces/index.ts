export interface OpenWeatherMapAPIResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    0: {
      id: number;
      main: string;
      description: string;
      icon: string;
    };
  };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  cod: number;
  message?: string;
}
