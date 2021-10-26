import ajv from '../loaders/validator';

const openWeatherResponseSchema = {
  type: 'object',
  properties: {
    coord: {
      type: 'object',
      properties: {
        lon: { type: 'number' },
        lat: { type: 'number' }
      }
    },
    weather: {
      type: 'array',
      minItems: 1,
      additionalItems: false,
      items: [
        {
          type: 'object',
          properties: {
            id: { type: 'number' },
            main: { type: 'string' },
            description: { type: 'string' },
            icon: { type: 'string' },
          }
        }
      ],
    },
    main: {
      type: 'object',
      properties: {
        temp: { type: 'number' },
        feels_like: { type: 'number' },
        temp_min: { type: 'number' },
        temp_max: { type: 'number' },
        pressure: { type: 'number' },
        humidity: { type: 'number' },
      }
    },
    wind: {
      type: 'object',
      properties: {
        speed: { type: 'number' },
        deg: { type: 'number' }
      }
    },
    sys: {
      type: 'object',
      properties: {
        type: { type: 'number' },
        id: { type: 'number' },
        country: { type: 'string' },
        sunrise: { type: 'number' },
        sunset: { type: 'number' },
      }
    },
    cod: {
      type: 'number'
    }
  }
};

export default (input: object) => {
  const validate = ajv.compile(openWeatherResponseSchema);
  validate(input);
};
