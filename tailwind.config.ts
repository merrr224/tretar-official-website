import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      rose: colors.rose,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      violet: colors.violet,
      indigo: colors.indigo,
      blue: colors.blue,
      sky: colors.sky, // As of Tailwind CSS v2.2, `lightBlue` has been renamed to `sky`  
      cyan: colors.cyan,
      teal: colors.teal,
      emerald: colors.emerald,
      green: colors.green,
      lime: colors.lime,
      yellow: colors.yellow,
      amber: colors.amber,
      orange: colors.orange,
      red: colors.red,
      slate: colors.slate,
      zinc: colors.zinc,
      gray: colors.gray,
      neutral: colors.blueGray,
      stone: colors.stone,
    },
    screens: {
      'xs': '430px',
      ...defaultTheme.screens,
    },
    variants: {},
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

        'hero-bg': "url('/bg-img/service_bg_05.png')",
      },
      // Animation
      // FreeBSD-licensed CSS animation by Animista 
      animation: {
        "tilt-in-bottom-1": "tilt-in-bottom-1 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "fade-in-bottom": "fade-in-bottom 1.8s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "kenburns-bottom": "kenburns-bottom 10s ease 0.5s  reverse both",
      },
      keyframes: {
        "tilt-in-bottom-1": {
          "0%": {
            transform: "rotateY(30deg) translateY(300px) skewY(-30deg)",
            opacity: "0"
          },
          "100%": {
            transform: "rotateY(0deg) translateY(0) skewY(0deg)",
            opacity: "1"
          }
        },

        "fade-in-bottom": {
          "0%": {
              transform: "translateY(50px)",
              opacity: "0"
          },
          to: {
              transform: "translateY(0)",
              opacity: "1"
          }
        },

        "kenburns-bottom": {
          "0%": {
              transform: "scale(1) translateY(0)",
              "transform-origin": "50% 84%"
          },
          to: {
              transform: "scale(1.25) translateY(15px)",
              "transform-origin": "bottom"
          }
        }
      }
    },
  },
  plugins: [],
}
export default config
