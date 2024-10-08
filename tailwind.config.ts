import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'text': {
          50: 'rgb(var(--text-50))',
          100: 'rgb(var(--text-100))',
          200: 'rgb(var(--text-200))',
          300: 'rgb(var(--text-300))',
          400: 'rgb(var(--text-400))',
          500: 'rgb(var(--text-500))',
          600: 'rgb(var(--text-600))',
          700: 'rgb(var(--text-700))',
          800: 'rgb(var(--text-800))',
          900: 'rgb(var(--text-900))',
          950: 'rgb(var(--text-950))',
        },
        'background': {
          50: 'rgb(var(--background-50))',
          100: 'rgb(var(--background-100))',
          200: 'rgb(var(--background-200))',
          300: 'rgb(var(--background-300))',
          400: 'rgb(var(--background-400))',
          500: 'rgb(var(--background-500))',
          600: 'rgb(var(--background-600))',
          700: 'rgb(var(--background-700))',
          800: 'rgb(var(--background-800))',
          900: 'rgb(var(--background-900))',
          950: 'rgb(var(--background-950))',
        },
        'primary': {
          50: 'rgb(var(--primary-50))',
          100: 'rgb(var(--primary-100))',
          200: 'rgb(var(--primary-200))',
          300: 'rgb(var(--primary-300))',
          400: 'rgb(var(--primary-400))',
          500: 'rgb(var(--primary-500))',
          600: 'rgb(var(--primary-600))',
          700: 'rgb(var(--primary-700))',
          800: 'rgb(var(--primary-800))',
          900: 'rgb(var(--primary-900))',
          950: 'rgb(var(--primary-950))',
        },
        'secondary': {
          50: 'rgb(var(--secondary-50))',
          100: 'rgb(var(--secondary-100))',
          200: 'rgb(var(--secondary-200))',
          300: 'rgb(var(--secondary-300))',
          400: 'rgb(var(--secondary-400))',
          500: 'rgb(var(--secondary-500))',
          600: 'rgb(var(--secondary-600))',
          700: 'rgb(var(--secondary-700))',
          800: 'rgb(var(--secondary-800))',
          900: 'rgb(var(--secondary-900))',
          950: 'rgb(var(--secondary-950))',
        },
        'accent': {
          50: 'rgb(var(--accent-50))',
          100: 'rgb(var(--accent-100))',
          200: 'rgb(var(--accent-200))',
          300: 'rgb(var(--accent-300))',
          400: 'rgb(var(--accent-400))',
          500: 'rgb(var(--accent-500))',
          600: 'rgb(var(--accent-600))',
          700: 'rgb(var(--accent-700))',
          800: 'rgb(var(--accent-800))',
          900: 'rgb(var(--accent-900))',
          950: 'rgb(var(--accent-950))',
        },
       },
       fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontFamily: {
        heading: 'Inter',
        body: 'Inter',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
  },
  plugins: [],
};
export default config;
