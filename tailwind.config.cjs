/** @type {import('tailwindcss').Config} */

const newColors = {
	primary: 'var(--primary)',
	secondary: 'var(--secondary)',
	tertiary: 'var(--tertiary)',
	stroke: 'var(--stroke)',
	lightGray: 'var(--light-gray)',
	darkGray: 'var(--dark-gray)',
	lightBlue: 'var(--light-blue)',
	yellow: 'var(--yellow)',
	green: 'var(--app-green)',
	success: 'var(--success)',
	error: 'var(--error)',
	warning: 'var(--warning)',
	balablu: 'var(--balablu)',
	overlay: 'var(--overlay)'
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
		colors: newColors,
	},
  },
  plugins: [],
}