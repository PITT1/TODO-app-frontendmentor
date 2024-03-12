/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		letterspacing: {
			superwidest: '5px'
		},
		extend: {
			colors: {
				'custom-Bright-Blue': 'hsl(220, 98%, 61%)',
				'custom-check-gradient1': 'hsl(192, 100%, 67%)',
				'custom-check-gradient2': 'hsl(280, 87%, 65%)',
				'custom-light-theme-Very-Light-Gray': 'hsl(0, 0%, 98%)',
				'custom-light-theme-Very-Light-Grayish-Blue': 'hsl(236, 33%, 92%)',
				'custom-light-theme-Light-Grayish-Blue': 'hsl(233, 11%, 84%)',
				'custom-light-theme-Dark-Grayish-Blue': 'hsl(236, 9%, 61%)',
				'custom-light-theme-Very-Dark-Grayish-Blue': 'hsl(235, 19%, 35%)',
				'custom-dark-theme-Very-Dark-Desaturated-Blue': 'hsl(235, 24%, 19%)',
				'custom-dark-theme-Very-Dark-Blue': 'hsl(235, 21%, 11%)',
				'custom-dark-theme-Light-Grayish-Blue': 'hsl(234, 39%, 85%)',
				'custom-dark-theme-Light-Grayish-Blue (hover)': 'hsl(236, 33%, 92%)',
				'custom-dark-theme-Dark-Gray-sh-Blue': 'hsl(234, 11%, 52%)',
				'custom-dark-theme-Very-Dark-Grayish-Blue': 'hsl(233, 14%, 35%)',
				'custom-dark-theme-Very-Dark-Grayish-Blue': 'hsl(237, 14%, 26%)'
			},
			fontFamily: {
				'josefin': ['Josefin Sans', 'sans-serif']
			},
			letterspacing: {
				'super-widest': '5px'
			}
		},
	},
	plugins: [],
}
