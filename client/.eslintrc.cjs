module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:storybook/recommended',
		// 'plugin:@conarti/feature-sliced/recommended',
		// '@feature-sliced',
		// '@feature-sliced/eslint-config/rules/public-api/lite',
		// '@feature-sliced/eslint-config/rules/import-order',
		'@feature-sliced/eslint-config/rules/layers-slices'
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', '@feature-sliced/eslint-plugin-messages'],
	settings: {
		'import/resolver': {
			typescript: {
				project: 'tsconfig.json',
				alwaysTryTypes: true
			}
		}
	},
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true }
		],
		'react/display-name': 'off',
		'no-unused-vars': 'warn',
		'@typescript-eslint/no-unused-vars': 'warn'
	},
	processor: '@feature-sliced/messages/fs'
}
