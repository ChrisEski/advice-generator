/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      lg: '1440px',
    },
    colors: {
      'light-blue': '#CEE3E9',
      accent: '#52FFA8',
      dark: '#1F2632',
      light: '#323A49',
      'grayish-blue': '#4E5D73',
    },
    fontFamily: {
      body: 'Manrope, sans-serif',
    },
    fontSize: {
      base: '28px',
      lg: '32px',
    },
  },
  plugins: [],
};
