/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      sm: {"max": "375px"}
    },
    extend: {
      colors: {
        lightGray: "hsl(217, 12%, 63%)",
        mediumGrey: "hsl(216, 12%, 54%)",
        darkBlue: "hsl(213, 19%, 18%)",
        veryDarkBlue: "hsl(216, 12%, 8%)",
        superDarkBlue: "hsl(228, 20%, 7%)"
      },
      width: {
        "88": "22rem"
      }
    },
  },
  plugins: [],
}

