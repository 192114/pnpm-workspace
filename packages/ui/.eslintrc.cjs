module.exports = {
  ...require('@infras/config/eslintconfig/eslint-react-ts.cjs'),

  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.eslint.json'],
      },
      globals: {
        React: true,
        ReactDOM: true,
        mountNode: true,
      },
      rules: {},
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {},
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {},
    },
  ],
}