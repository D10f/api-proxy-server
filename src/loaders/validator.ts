import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';

const ajv = new Ajv({
  allErrors: true,
  removeAdditional: 'all'
});

ajvErrors(ajv);

export default ajv;
