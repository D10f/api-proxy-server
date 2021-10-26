import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';
import paramsSchema from './validateParams';
import openWeatherResponseSchema from './validateOWResponse';

const ajv = new Ajv({
  allErrors: true,
  removeAdditional: 'all'
});

ajvErrors(ajv);

export const validateParams = (input: object) => {
  const validate = ajv.compile(paramsSchema);
  validate(input);
  return validate.errors;
};

export const validateOpenWeatherResponse = (input: object) => {
  const validate = ajv.compile(openWeatherResponseSchema)
  validate(input);
};
