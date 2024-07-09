const sharedConfig = require('./.prettierrc.js');

module.exports = {
	...sharedConfig,
	plugins: ['prettier-plugin-tailwindcss'],
	// tailwindConfig: "@gameblog/tailwind-config",
	tailwindFunctions: ["clsx"],
	tailwindPreserveWhitespace: true,
}
