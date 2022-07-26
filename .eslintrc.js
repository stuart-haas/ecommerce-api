module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'indent': ['warn', 2],
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'object-curly-spacing': ['error', 'always'],
    'semi': ['error', 'always'],
    '@typescript-eslint/no-empty-interface': 'off',
  }
};