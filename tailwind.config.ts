import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        normal: 'normal',
      },
    },
    colors: {
      background: "#fff",
      white: "#fff",
      black: '#000',
      dawn: '#1b1b1b',
      primary: '#84A198',
      secondary: '#707070',
      'offwhite': '#EFF5F6',
      'lightgrey': '#B9B9B9',
      'medgrey': '#A09F9F',
      'offgrey': '#DFDDDD'
    },
    fontFamily: {
      primary: ['var(--font-roboto)'],
      secondary: ['var(--font-roboto-mono)'], 
    },
    screens: {
      'xl': '1400px',
      "lg": '930px',
      "md": '768px',
      "sm": '482px'
    }
  },
  plugins: [],
};
export default config;
