module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // Desactiva o ajusta la regla si continúa causando problemas
    'prefer-regex-literals': 'off',
  },
};
