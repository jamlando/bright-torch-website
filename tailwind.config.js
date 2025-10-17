/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'slate-blue': '#2E4057',
        'malibu-blue': '#5BC0EB',
        'knoxville-orange': '#FF8200',
        'light-gray': '#F5F5F5',
        'charcoal': '#333333',
      },
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
