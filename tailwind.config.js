/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			primary: '#335b33',
            secondary: '#d55343',
			gray: {
				light: '#eff3f6',
				dark: '#868190',
			},
			red: '#d55343',
            green: '#00baa3',
            yellow: '#efc94c',
            black: '#000000',
			white: '#ffffff',

		},
		fontFamily: {
            primary: ['Poppins', 'sans-serif'],
			secondary: ['Poppins', 'sans-serif'],
		},
		fontSize: {
			xs: ['0.75rem', '1rem'], // ['12px', '16px']
			sm: ['0.875rem', '1.125rem'], // ['14px', '18px'] (H5)
			base: ['1rem', '1.5rem'], // ['16px', '24px']
			md: ['1.125rem', '1.75rem'], // ['18px', '28px'] (H4)
			lg: ['1.5rem', '2rem'], // ['24px', '32px'] (H3)
			xl: ['1.875rem', '2.25rem'], // ['30px', '36px'] (H2)
			'1xl': ['2.5rem', '3.125rem'], // ['40px', '50px']
			'2xl': ['3.125rem', '3.75rem'], // ['50px', '60px'] (H1)
			'3xl': ['4.375rem', '5rem'], // ['70px', '80px'] (H1)
		},
		fontWeight: {
			extralight: 200,
			light: 300,
			normal: 400,
			medium: 500,
			bold: 700,
		},
		screens: {
			xs: '30rem', // 480px
			md: '48rem', // 768px
			'lg-max': { max: '63.938rem' }, // 1023px
			lg: '64rem', // 1024px
			'xl-max': { max: '79.938rem' }, // 1279px
			xl: '80rem', // 1280px
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem', // 16px
				xl: '2.5rem', // 40px
			},
			screens: {
				DEFAULT: '100%',
				xl: '80rem', // 1280px
			},
		},
		extend: {
			boxShadow: {
				lg: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
				xl: '0 0 20px 0 rgba(0, 0, 0, 0.1)',
				focus: 'inset 0 -2px 0 0 #009ee0',
			},
			minWidth: {
				body: '20rem',
			},
			maxWidth: {
				38: '9.5rem',
				62: '15.5rem',
				100: '25rem',
				content: '49.5rem',
				'8xl': '100rem',
				'9xl': '160rem',
			},
			minHeight: {
				9: '2.25rem',
				14: '3.5rem',
				70: '17.5rem',
				88: '22rem',
				90: '22.5rem',
				150: '37.5rem',
				212: '53rem',
			},
			spacing: {
				30: '7.5rem',
				46: '11.5rem',
				53: '13.25rem',
			},
			zIndex: {
				45: '45',
				60: '60',
			},
		},
	},
	plugins: [
        require('@tailwindcss/typography'),
    ],
}










