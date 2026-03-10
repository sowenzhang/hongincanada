/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
				'serif': ['Playfair Display', 'Georgia', 'serif'],
			},
			animation: {
				'fade-in': 'fadeIn 1s ease-out forwards',
				'fade-in-up': 'fadeInUp 1s ease-out forwards',
				'fade-in-delay': 'fadeIn 1s ease-out 0.3s forwards',
				'fade-in-delay-2': 'fadeIn 1s ease-out 0.6s forwards',
				'fade-in-delay-3': 'fadeIn 1s ease-out 0.9s forwards',
				'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'slide-up-delay': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
				'pulse-slow': 'pulse 3s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'gradient-shift': 'gradientShift 8s ease infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(60px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				gradientShift: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
			},
		}
	},
	plugins: [],
}
