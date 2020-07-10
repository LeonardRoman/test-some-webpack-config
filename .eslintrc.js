module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'google'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: 'off',
    'linebreak-style': 'off',
    'object-curly-spacing': 'off',
    'comma-dangle': 'off',
    'arrow-parens': 'off',
    'require-jsdoc': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    indent: [
      2,
      2,
      {
        SwitchCase: 2,
      },
    ],
    'operator-linebreak': ['error', 'before'],
  },
}
