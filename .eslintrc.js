module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'next',
    'next/core-web-vitals',
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': 'warn',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/no-unknown-property': [
      'error',
      { ignore: ['stroke-width', 'stroke-linecap', 'stroke-linejoin'] },
    ],
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
