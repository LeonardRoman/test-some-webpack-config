module.exports = (api) => {
  // api.cache.forever()
  api.cache.never()
  return {
    presets: [
      ['@vue/babel-preset-app',
        {
          debug: false,
          spec: true,
          loose: false,
          modules: false
        }
      ]
    ],
  }
}
