/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        dark: 'rgb(20 30 35)',
        dark2: 'rgb(31 37 43)'
      },
      fontFamily: {
        kanit: ['var(--font-kanit)']
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#c3dfe0',
            fontSize: '16px',
            lineHeight: '1.5',
            p : {
              textAlign: 'justify',
              color: '#c3dfe0',
              fontSize: '16px',
              lineHeight: '1.8', 
            },
            a: {
              color: '#c3dfe0',
              lineHeight: '1'
            },
            h1: {
              color: '#ffffff',
              fontSize: '24px',
              lineHeight: '1'
            },
            h2: {
              color: '#ffffff',
              fontSize: '20px',
              lineHeight: '1'
            },
            h3: {
              color: '#ffffff',
              fontSize: '18px',
              lineHeight: '1'
            },
          }
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
