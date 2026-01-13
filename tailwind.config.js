export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1E213F",

        red: "#F87070",
        cyan: "#70F3F8",
        purple: "#D881F8",

        white: "#FFFFFF",
        gray: "#EFF1FA",
        navy: "#161932",
        dark: "#2E325A",
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
        roboto: ["Roboto Slab", "serif"],
        mono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
}

