import js from "@eslint/js";
import { FlatCompat } from '@eslint/eslintrc';
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

const compat = new FlatCompat();

export default [
  js.configs.recommended,
  ...compat.extends('plugin:react/recommended'),
  { ignores: ["node-modules", "dist", "build"] },
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  {
    // Prettier integration
    files: ['**/*.{ts,tsx,js,jsx,json,css,scss,md}'],
    plugins: [],
    rules: {
      // wyłącza konfliktujące reguły ESLinta
      'prettier/prettier': 'off',
    },
  },
];
