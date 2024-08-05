const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/*
 * This is a custom ESLint configuration for use a library
 * that utilizes React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    '@vercel/style-guide/eslint/browser',
    '@vercel/style-guide/eslint/typescript',
    '@vercel/style-guide/eslint/react'
  ].map(require.resolve),
  parserOptions: {
    project
  },
  globals: {
    JSX: true
  },
  settings: {
    'import/resolver': {
      typescript: {
        project
      },
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.js', '**/*.css'],
  rules: {
    'import/no-default-export': 'off',
    'unicorn/filename-case': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    'react/function-component-definition': 'off',
    '@typescript-eslint/naming-convention': 'warn',
    'no-nested-ternary': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn'
  },
  overrides: [
    {
      files: ['*.config.js'],
      env: {
        node: true
      }
    }
  ]
}
