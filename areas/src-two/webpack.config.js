const { resolve } = require('path')
const SRC_GENERAL = resolve(__dirname, '../../src-general')
const SRC_TWO = resolve(__dirname)
const BUILD_DESTINATION = resolve(__dirname, '../../wwwroot')
module.exports = () => {
  return {
    mode: 'development',
    entry: SRC_GENERAL,
    output: {
      path: BUILD_DESTINATION,
      filename: 'two.js'
    }
  }
}
