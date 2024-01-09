import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkslategray: "#333533",
        goldenrod: "#f5cb5c",
        black: "#000",
        white: "#fff",
        gray: "#242423",
        fontgray: "#999999",
        borderGray: "#868686",
        questionMarkGray: "#464646",
        correctGreen: "#299641",
        wrongRed: " #962929;"
      },
      spacing: {},
      fontFamily: {
        metropolis: "Metropolis",
      },
    },
  },
  plugins: [],
}
export default config
