import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';
import paramsSchema from './validateParams';

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
