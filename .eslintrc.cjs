module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.js'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '18.2',
    },
  },
  plugins: ['react-refresh', 'jsx-a11y'],
  rules: {
    'react/react-in-jsx-scope': 'off', // Disable react-in-jsx-scope for React 17+
    'react/jsx-uses-react': 'off', // Disable react/jsx-uses-react for React 17+
    'react/jsx-uses-vars': 'warn',
    'react-refresh/only-export-components': 'warn',
    'jsx-a11y/no-redundant-roles': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'warn',
    'no-console': 'warn',
  },
};
