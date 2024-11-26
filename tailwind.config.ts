import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        Golos: ['Golos', 'sans-serif']
      },
      colors: {
        neutral: {
          10: '#FFFCF9',
          20: '#E4E7EC',
          40: '#746E69',
          60: '#2B231C',
          80: '#180F08'
        },
        green: {
          10: '#DEFBF9',
          20: '#9FE8E3',
          40: '#44D7CD',
          60: '#2CB0A7',
          80: '#126D67'
        },
        'light-blue': '#D7E5F8',
        'dark-blue': '#78A6E3',
        'light-pink': '#E1C7F3',
        'dark-pink': '#B07DE0',
        'light-gray': '#867F77',
        yellow: '#F9EDD8'
      },
      fontSize: {
        // Desktop
        'desktop-h1': ['88px', '90px'],
        'desktop-h2': ['56px', '72px'],
        'desktop-h3': ['48px', '48px'],
        'desktop-h5': ['16px', '24px'],
        'desktop-title-m': ['24px', '30px'],
        'desktop-title-s': ['20px', '24px'],
        'desktop-subtitle': ['20px', '20px'],
        'desktop-label': ['18px', '24px'],
        'desktop-body-m': ['18px', '28px'],
        'desktop-body-s': ['16px', '20px'],
        'desktop-description': ['14px', '18px'],

        // Mobile
        'mobile-h1': ['56px', '54px'],
        'mobile-h2': ['32px', '40px'],
        'mobile-h3': ['32px', '32px'],
        'mobile-h4': ['18px', '22px'],
        'mobile-title-m': ['24px', '24px'],
        'mobile-title-s': ['16px', '28px'],
        'mobile-title-xs': ['14px', '16px'],
        'mobile-subtitle': ['16px', '20px'],
        'mobile-label': ['14px', '16px'],
        'mobile-body-m': ['16px', '28px'],
        'mobile-description': ['15px', '20px']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'header-pattern': 'url("/assets/images/hero.png")',
        'header-gradient': 'linear-gradient(90deg, #180F08 0%, #5D544D 100%);',
        'about-info-background': 'url("/assets/images/about-us-graphic1.png")',
        'about-info-phone': 'url("/assets/images/about-phone.png")',
        rings: 'url("/assets/images/rings.png")',
        'cross-section-blur': 'url("/assets/images/cross-section-blur.png")'
      }
    }
  },
  plugins: []
}

export default config
