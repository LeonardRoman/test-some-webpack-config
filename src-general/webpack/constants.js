const { resolve } = require('path')
const { path: PROJECT_ROOT } = require('app-root-path')

// paths
exports.PROJECT_ROOT = PROJECT_ROOT
exports.BUILD_DIRECTORY = resolve(PROJECT_ROOT, './wwwroot')
exports.APP_DIRECTORY = resolve(PROJECT_ROOT, './src-general')
exports.AREA_ONE_DIRECTORY = resolve(PROJECT_ROOT, './src-one')
exports.AREA_TWO_DIRECTORY = resolve(PROJECT_ROOT, './src-two')
