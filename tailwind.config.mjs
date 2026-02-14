/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                valentine: {
                    50: '#fff1f2',
                    100: '#ffe4e6',
                    200: '#fecdd3',
                    300: '#fda4af',
                    400: '#fb7185',
                    500: '#f43f5e',
                    600: '#e11d48',
                    700: '#be123c',
                    800: '#9f1239',
                    900: '#881337',
                    950: '#4c0519',
                },
                gold: {
                    300: '#fcd34d',
                    400: '#fbbf24',
                    500: '#f59e0b',
                    600: '#d97706',
                },
            },
            fontFamily: {
                display: ['"Playfair Display"', 'serif'],
                body: ['Inter', 'sans-serif'],
            },
            backdropBlur: {
                xs: '2px',
            },
            animation: {
                'heart-spin': 'heartSpin 3s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow-pulse': 'glowPulse 2s ease-in-out infinite',
            },
            keyframes: {
                heartSpin: {
                    '0%, 100%': { transform: 'rotateY(0deg)' },
                    '50%': { transform: 'rotateY(180deg)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                glowPulse: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(244, 63, 94, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(244, 63, 94, 0.6)' },
                },
            },
        },
    },
    plugins: [],
};
