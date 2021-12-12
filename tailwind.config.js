module.exports = {
  purge: {
    enabled: false,
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx,scss}",
      "./projects/**/*.{vue,js,ts,jsx,tsx,scss}",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
