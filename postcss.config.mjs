// Next.js expects PostCSS plugins to be declared as strings, not imported functions.
// See: https://nextjs.org/docs/messages/postcss-shape
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
