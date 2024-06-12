/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'node_modules/flowbite-react/lib/esm/**/*.js',
	],
	theme: {
		extend: {
			colors: {
				inRed: '#B5362E',
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
