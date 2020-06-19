// Core
const { resolve } = require('path')
const fs = require('fs')

// Constants
const SRC_GENERAL = resolve(__dirname, '../../src-general')
const SRC_ONE = resolve(__dirname)
const BUILD_DESTINATION = resolve(__dirname, '../../wwwroot')


// Config
module.exports = () => {
  return {
    mode: 'development',
    entry: SRC_GENERAL,
    output: {
      path: BUILD_DESTINATION,
      filename: 'one.js'
    }
  }
}
