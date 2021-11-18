module.exports = {
  // https://tailwindcss.com/docs/optimizing-for-production#purge-css-options
  // --- No need setup for variants but purge is REQUIRED ---
  // # automatically purge css, default purge all(empty css) if purge setting is not set
  // mode: 'jit',
  // --- No need setup for variants but purge is REQUIRED ---

  // --- Works for all env including JIT mode ---
  // # Actually, this is a lot like JIT mode, because dev / prod use the same class file size
  // # But still need to setup variants, etc.
  // purge: {
  //   enabled: true,
  //   content: [
  //     "./app/**/*.html.erb",
  //     "./app/helpers/**/*.rb",
  //     "./app/javascript/**/*.js"
  //   ],
  // },
  // --- Works for all env including JIT mode ---

  // --- Only works for production(NODE_ENV) or works for JIT mode ---
  purge: [
    "./app/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js"
  ],
  // --- Only works for production or works for JIT mode ---

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
