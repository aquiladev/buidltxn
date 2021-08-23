const protocol_0_1_0 = require('./0.1.0');

class ProtocolsManager {
  protocols = [
    protocol_0_1_0
  ]

  getProtocol = () => {
    return this.protocols[0];
  }

  findProtocol = (name, version) => {
    return this.protocols.find(x => x.name === name && x.version === version);
  }
}

module.exports = new ProtocolsManager();
