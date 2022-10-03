/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    backgroundPosition: {
      hero: "0 100%",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "5rem",
        sm: "5rem",
        lg: "5rem",
        xl: "5rem",
        "2xl": "5rem",
      },
    },
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/seedlings_bg_large.jpg')",
        "footer-pattern":
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/aloe_leaves_bg.jpg')",
        "heading-pattern":
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/aloe_leaves_bg.jpg')",
      },
    },
  },
  plugins: [],
};
