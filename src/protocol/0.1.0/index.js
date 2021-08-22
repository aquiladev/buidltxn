const Ajv = require('ajv');

const schema = require('./schema.json');

module.exports = {
  validate: (data) => {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    return {
      valid: validate(data),
      errors: validate.errors,
    };
  }
}
