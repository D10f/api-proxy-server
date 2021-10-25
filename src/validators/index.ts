import Ajv from 'ajv';
import paramsSchema from './validateParams';

const ajv = new Ajv({
  removeAdditional: 'all'
});

export const validateParams = ajv.compile(paramsSchema);
