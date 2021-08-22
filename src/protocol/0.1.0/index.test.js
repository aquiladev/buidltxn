const protocol = require('./index');

describe.each([
  {data: {}, error: 'should have required property \'protocol\''},
  {data: {protocol: ''}, error: 'should be equal to one of the allowed values'},
  {data: {protocol: 'www'}, error: 'should be equal to one of the allowed values'},
  {data: {protocol: 'buidltx'}, error: 'should be equal to one of the allowed values'},
  {data: {protocol: 'buidltxn'}, error: 'should have required property \'version\''},
  {data: {protocol: 'buidltxn', version: ''}, error: 'should be equal to one of the allowed values'},
  {
    data: {protocol: 'buidltxn', version: '0'},
    error: 'should be equal to one of the allowed values'
  },
  {
    data: {protocol: 'buidltxn', version: '0.0.0'},
    error: 'should be equal to one of the allowed values'
  },
  {
    data: {protocol: 'buidltxn', version: '0.1.0'},
    error: 'should have required property \'builder\''
  },
  {
    data: {protocol: 'buidltxn', version: '0.1.0', builder: ''},
    error: 'should match pattern "^0x[a-fA-F0-9]{40}$"'
  },
  {
    data: {protocol: 'buidltxn', version: '0.1.0', builder: 'aaa'},
    error: 'should match pattern "^0x[a-fA-F0-9]{40}$"'
  },
  {
    data: {protocol: 'buidltxn', version: '0.1.0', builder: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0'},
    error: 'should have required property \'transaction\''
  },
  {
    data: {
      protocol: 'buidltxn',
      version: '0.1.0',
      builder: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
      transaction: {}
    },
    error: 'should have required property \'to\''
  },
  {
    data: {
      protocol: 'buidltxn',
      version: '0.1.0',
      builder: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
      transaction: {to: ''}
    },
    error: 'should match pattern "^0x[a-fA-F0-9]{40}$"'
  },
  {
    data: {
      protocol: 'buidltxn',
      version: '0.1.0',
      builder: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
      transaction: {to: '11'}
    },
    error: 'should match pattern "^0x[a-fA-F0-9]{40}$"'
  },
  {
    data: {
      protocol: 'buidltxn',
      version: '0.1.0',
      builder: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
      transaction: {to: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0'}
    },
    error: 'should have required property \'data\''
  },
  {
    data: {
      protocol: 'buidltxn',
      version: '0.1.0',
      builder: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
      transaction: {to: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0', data: '11'}
    },
    error: 'should match pattern "^0x[a-fA-F0-9]+$"'
  },
  {
    data: {
      protocol: 'buidltxn',
      version: '0.1.0',
      builder: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
      transaction: {to: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0', data: '0x'}
    },
    error: 'should match pattern "^0x[a-fA-F0-9]+$"'
  },
  {
    data: {
      protocol: 'buidltxn',
      version: '0.1.0',
      builder: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
      transaction: {from: '', to: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0', data: '0x11'}
    },
    error: 'should match pattern "^0x[a-fA-F0-9]{40}$"'
  },
  {
    data: {
      protocol: 'buidltxn',
      version: '0.1.0',
      builder: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
      transaction: {from: '11', to: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0', data: '0x11'}
    },
    error: 'should match pattern "^0x[a-fA-F0-9]{40}$"'
  },
  {
    data: {
      protocol: 'buidltxn',
      version: '0.1.0',
      builder: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
      fragment: {},
      transaction: {
        from: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
        to: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
        data: '0x11'
      }
    },
    error: 'should have required property \'inputs\''
  },
  {
    data: {
      protocol: 'buidltxn',
      version: '0.1.0',
      builder: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
      fragment: {inputs: []},
      transaction: {
        from: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
        to: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
        data: '0x11'
      }
    },
    error: 'should have required property \'name\''
  },
  {
    data: {
      protocol: 'buidltxn',
      version: '0.1.0',
      builder: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
      fragment: {inputs: [], name: ''},
      transaction: {
        from: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
        to: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
        data: '0x11'
      }
    },
    error: 'should have required property \'outputs\''
  },
  {
    data: {
      protocol: 'buidltxn',
      version: '0.1.0',
      builder: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
      fragment: {inputs: [], name: '', outputs: []},
      transaction: {
        from: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
        to: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
        data: '0x11'
      }
    },
    error: 'should have required property \'stateMutability\''
  },
  {
    data: {
      protocol: 'buidltxn',
      version: '0.1.0',
      builder: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
      fragment: {inputs: [], name: '', outputs: [], stateMutability: ''},
      transaction: {
        from: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
        to: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
        data: '0x11'
      }
    },
    error: 'should have required property \'type\''
  },
  {
    data: {
      protocol: 'buidltxn',
      version: '0.1.0',
      builder: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
      fragment: {inputs: [], name: '', outputs: [], stateMutability: '', type: ''},
      transaction: {
        from: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
        to: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
        data: '0x11'
      }
    },
    error: 'should be equal to one of the allowed values'
  },
  {
    data: {
      protocol: 'buidltxn',
      version: '0.1.0',
      builder: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
      fragment: {inputs: [], name: '', outputs: [], stateMutability: '', type: 'event'},
      transaction: {
        from: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
        to: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
        data: '0x11'
      }
    },
    error: 'should be equal to one of the allowed values'
  },
])('shouls fail', ({data, error}) => {
  test(`${JSON.stringify(data)}`, () => {
    const {valid, errors} = protocol.validate(data);
    expect(valid).toBe(false);
    expect(errors).toHaveLength(1);
    expect(errors[0].message).toBe(error);
  });
});

test('should successed', () => {
  const data = {
    protocol: 'buidltxn',
    version: '0.1.0',
    builder: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
    fragment: {inputs: [], name: '', outputs: [], stateMutability: '', type: 'function'},
    transaction: {
      from: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
      to: '0xf10326c1c6884b094e03d616cc8c7b920e3f73e0',
      data: '0x11'
    }
  };
  const {valid} = protocol.validate(data);
  expect(valid).toBe(true);
})
