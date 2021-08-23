const Ajv = require('ajv');

const schema = require('./schema.json');

class Protocol {
  name = 'buidltxn'
  version = '0.1.0'

  validate = (data) => {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    return {
      valid: validate(data),
      errors: validate.errors,
    };
  }

  build = (builder, fragment, transaction) => {
    const data = {
      protocol: this.name,
      version: this.version,
      builder,
      fragment,
      transaction
    };
    const {valid, errors} = this.validate(data);
    if(!valid) {
      throw errors.length ? errors[0] : new Error('Validation error');
    }
    return data;
  }
}

module.exports = new Protocol();
