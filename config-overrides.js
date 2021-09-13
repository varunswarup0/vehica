const {
  override,
  babelInclude
} = require('customize-cra');
const path = require('path');
const fs = require('fs');

module.exports = override(
  babelInclude([
    path.resolve('src'), // make sure you link your own source
    fs.realpathSync('node_modules/@coreui/react')
  ])
);