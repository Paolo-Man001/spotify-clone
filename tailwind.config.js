module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        "gray-spotify": {
          700: "#282828",
          800: "#181818",
          900: "#121212",
        },
      },
      lineHeight:{
        'extra-loose':'2.5'
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
};
