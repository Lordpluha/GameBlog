module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		// 'plugin:@conarti/feature-sliced/recommended',
		'@feature-sliced/eslint-config/rules/layers-slices',
		'@feature-sliced/eslint-config/rules/public-api/lite',
		'plugin:storybook/recommended'
	],
	ignorePatterns: ['dist', '.eslintrc.cjs', 'eslint'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: [
		'react',
		'react-refresh',
		'react-hooks',
		'@typescript-eslint',
		'@feature-sliced/eslint-plugin-messages',
		'@conarti/feature-sliced'
	],
	settings: {
		'import/resolver': {
			typescript: {
				project: 'tsconfig.json',
				alwaysTryTypes: true
			}
		},
		react: {
			version: 'detect'
		}
	},
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true }
		],
		'react/display-name': 'off',
		'no-unused-vars': 'warn',
		'@typescript-eslint/no-unused-vars': 'warn',

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
		}
	],
	reportUnusedDisableDirectives: true,
	processor: '@feature-sliced/messages/fs'
}
