# Front-end
## Stack:
 * React:
 	 * react-router-dom
	 * lucide-react
	 * ant-design
	 * ant-design/icons
	 * Axios
	 * swiper
 * TypeScript
 * Vite
 * Styles:
	 * TailwindCSS
	 * SCSS
	 * styles in modules
 * TS + TSDoc
 * Redux + RTK
 * Prettier + ESLint
 * Storybook

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```