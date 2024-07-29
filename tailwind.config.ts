import type { Config } from "tailwindcss";
import type { PluginCreator } from "tailwindcss/types/config";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const textGradientBorderPlugin: PluginCreator = function ({ addUtilities }) {
  addUtilities({
    '.text-gradient-border': {
      'position': 'relative',
      'background-image': 'linear-gradient(0deg, rgba(0, 0, 0, 0.82) 18.4%, rgba(146, 128, 255, 0.73) 53.4%, #BC4FFF 72.4%)',
      '-webkit-background-clip': 'text',
      'background-clip': 'text',
      'color': 'transparent',
      'display': 'inline-block',
    },
  });
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 15s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [textGradientBorderPlugin],
};

export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
