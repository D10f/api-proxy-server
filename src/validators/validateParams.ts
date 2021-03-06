import ajv from '../loaders/validator';

const paramsSchema = {
  type: 'object',
  required: [ 'q' ],
  properties: {
    q: {
      type: 'string',
      minLength: 2,
      maxLength: 30
    },
    mode: {
      type: 'string',
      enum: [ 'xml', 'html', 'json' ],
      default: 'json'
    },
    units: {
      type: 'string',
      enum: [ 'standard', 'metric', 'imperial' ],
      default: 'standard'
    },
    lang: {
      type: 'string',
      enum: [
        'af',
        'al',
        'ar',
        'az',
        'bg',
        'ca',
        'cz',
        'da',
        'de',
        'el',
        'en',
        'eu',
        'fa',
        'fi',
        'fr',
        'gl',
        'he',
        'hi',
        'hr',
        'hu',
        'id',
        'it',
        'ja',
        'kr',
        'la',
        'lt',
        'mk',
        'no',
        'nl',
        'pl',
        'pt',
        'pt_br',
        'ro',
        'ru',
        'sv,',
        'sk',
        'sl',
        'sp,',
        'sr',
        'th',
        'tr',
        'ua,',
        'vi',
        'zh_cn',
        'zh_tw',
        'zu'
      ],
    },
  },
  errorMessage: {
    properties: {
      q: "City name, state code and country code divided by comma. Please refer to ISO 3166 for the state codes or country codes.",
      mode: "Possible values are xml, html and json",
      units: "Possible values are standard, metric and imperial",
      lang: "Invalid language selected. Please refer to https://openweathermap.org/current#multi for the available languages codes",
    },
  },
};

export default (input: object) => {
  const validate = ajv.compile(paramsSchema);
  validate(input);
  return validate.errors;
}
