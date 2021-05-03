module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
  ],
  ignorePatterns: [
    '.eslintrc.js'
  ],
  extends: [
    "airbnb-typescript",
    "prettier",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
};
