/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': '#FCB530',
      'primary-light': "#FCF1D6",
      'secondary': '#173442',
      'dark': '#1a1a1a',
      'white': '#fff', 
      'muted': '#7a7a7a',
      'bg-light': "#FAFAFA",
      'border-color': '#c3c4c3',
      'nav-color': "#7b7b7b",
      'transparent': 'transparent' 
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
