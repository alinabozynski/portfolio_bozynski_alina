module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  overrides: [],
  plugins: ["react", "prettier"],
  ignorePatterns: ["build", ".env"],
  rules: {
    quotes: [2, "double"],
    "comma-dangle": ["error", "only-multiline"],
    semi: [2, "always"],
    assertionStyle: "off",
  },
  extends: ["plugin:react/recommended", "prettier"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
  parser: "@babel/eslint-parser",
};
