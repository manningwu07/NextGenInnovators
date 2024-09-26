/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      screens: {
        // Override the default 'sm' breakpoint to 480px
        sm: "480px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
