const React = require('react');
const Image = require('react-native').Image;
const flags = require('./flags');

const Flag = function (options) {
  const size = options.size || 64;
  const code = options.code;
  const type = options.type || 'shiny';
  const style = options.style || {};
  const flag = flags[type]["icons" + size][code];
  const unknownFlag = flags[type]["icons" + size]['unknown'];

  return React.createElement(Image, {
    source: flag || unknownFlag,
    style: [{ width: size, height: size }, style]
  }, null);
};

module.exports = Flag;
