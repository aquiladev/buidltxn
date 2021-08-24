const composeFunctions = (abi) => {
  return abi
    .filter(fragment => fragment.type === 'function')
    .reduce((obj, fragment) => {
      const selector = `${fragment.name}(${fragment.inputs.map(x => `${x.type}`).join(',')})`;
      if(obj[selector]) {
        throw new Error(`Function with ${selector} selector already present`);
      }
      obj[selector] = fragment;
      return obj;
    }, {});
}

module.exports = { composeFunctions };
