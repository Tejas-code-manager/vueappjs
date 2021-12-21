module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
  daisyui: {
    themes: [
      'emerald', // first one will be the default theme
      'dark',
      'forest',
      'synthwave'
    ],
  }
}