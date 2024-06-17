import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  {
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
      'plugin:import/recommended',
      'eslint-config-prettier',
      'prettier'
    ],
  },
  pluginJs.configs.recommended,
  {
    files: ["**/*.jsx"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true }
      } } },
  pluginReactConfig,
];
