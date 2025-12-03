// Use string-based plugin reference to satisfy Next.js PostCSS shape in Next 15
// and avoid importing the plugin as a function.
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
