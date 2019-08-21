module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:vue/strongly-recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["vue"],
  rules: {
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "no-else-return": ["error"],
    "no-multi-spaces": ["error"],

    // Possible Errors
    "require-atomic-updates": "off",

    // Variables
    "no-unused-vars": ["error", { "argsIgnorePattern": "h|event"}],
    "no-delete-var": ["error"],
    "no-multi-spaces": "off",

    // Vue
    "vue/max-attributes-per-line": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/name-property-casing": ["error", "kebab-case"],
    "vue/html-closing-bracket-spacing": "off"
  }
};
