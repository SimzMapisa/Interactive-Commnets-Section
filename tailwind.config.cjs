/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				moderate_blue: 'hsl(238, 40%, 52%)',
				soft_red: 'hsl(358, 79%, 66%)',
				light_grayish_blue: 'hsl(239, 57%, 85%)',
				pale_red: 'hsl(357, 100%, 86%)',

				// Neutral Colors
				dark_blue: 'hsl(212, 24%, 26%)',
				grayish_blue: 'hsl(211, 10%, 45%)',
				light_gray: 'hsl(223, 19%, 93%)',
				very_light_gray: 'hsl(228, 33%, 97%)',
				white: 'hsl(0, 0%, 100%)',
			},
			fontFamily: {
				rubik: ['Rubik Variable, Rubik ,sans-serif'],
			},
			fontWeight: {
				normal: 400,
				medium: 500,
				bold: 700,
			},
			fontSize: {
				base: '1rem',
			},
		},
	},
	plugins: [],
};
