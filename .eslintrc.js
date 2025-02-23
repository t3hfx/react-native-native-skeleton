module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint', 'react', 'react-native'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'curly': ['error', 'multi-or-nest', 'consistent'],
    'react-native/no-unused-styles': 2,
    'prettier/prettier': 'error',
    'max-len': [
      'error',
      {
        code: 100,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTemplateLiterals: true,
      },
    ],
    // https://stackoverflow.com/questions/63961803/eslint-says-all-enums-in-typescript-app-are-already-declared-in-the-upper-scope
    'spaced-comment': ['error'],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
