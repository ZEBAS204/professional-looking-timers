module.exports = {
  content: ["./*.html", "./src/**/*.css", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Inter, sans-serif", { fontFeatureSettings: '"salt"' }],
      },
      boxShadow: {
        ring: "inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
      },
    },
  },
};
