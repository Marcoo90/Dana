/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                romantic: {
                    pink: {
                        light: '#FCE7F3',
                        DEFAULT: '#F9A8D4',
                        dark: '#F472B6',
                    },
                    mint: {
                        light: '#ECFDF5',
                        DEFAULT: '#D1FAE5',
                        dark: '#10B981',
                    },
                    cream: '#FFFBEB',
                    gold: '#D97706',
                },
            },
            fontFamily: {
                romance: ['"Dancing Script"', 'cursive'],
                modern: ['"Inter"', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'typewriter': 'typewriter 2s steps(40) 1s 1 normal both',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
        },
    },
    plugins: [],
}
