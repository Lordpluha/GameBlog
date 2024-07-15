/**
 * Config for FSD support
 * This eslint config cannot used by along. Use it with some main configs
 */
module.exports = {
  extends: [
    '@feature-sliced/eslint-config/rules/layers-slices',
    '@feature-sliced/eslint-config/rules/public-api/lite'
  ],
  plugins: [
    '@feature-sliced/eslint-plugin-messages',
    '@conarti/feature-sliced'
  ],
  rules: {
    // FSD
    // 'import/order': 'off'
    'import/no-internal-modules': ['error'],
    'react/react-in-jsx-scope': 'off'
  },
  overrides: [
    // Index.ts Public API Rules
    {
      files: ['./src/**/index.ts'],
      rules: {
        'import/no-relative-parent-imports': 'error',
        'import/no-internal-modules': 'off'
      }
    },
    {
      files: ['*.schema.ts'],
      rules: {
        'no-unused-vars': 'off'
      }
    }
  ],
  reportUnusedDisableDirectives: true,
  // @feature-sliced/eslint-plugin-messages
  processor: '@feature-sliced/messages/fs'
}
