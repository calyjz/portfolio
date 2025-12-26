const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			lato: ["Lato", "sans-serif"],
			playfair: ["Playfair Display", "serif"],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
