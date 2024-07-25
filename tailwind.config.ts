import type { Config } from "tailwindcss";
import type { PluginCreator } from "tailwindcss/types/config";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

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
    // '.text-gradient-border::before': {
    //   'content': 'attr(data-text)',
    //   'position': 'absolute',
    //   'left': '0',
    //   'top': '0',
    //   'z-index': '-1',
    //   'color': 'white',
    //   'text-shadow': `
    //     0.125px 0.125px 0 white,
    //     0.25px 0.25px 0 white,
    //     -0.125px 0.125px 0 white,
    //     -0.25px 0.25px 0 white,
    //     0.125px -0.125px 0 white,
    //     0.25px -0.25px 0 white,
    //     -0.125px -0.125px 0 white,
    //     -0.25px -0.25px 0 white
    //   `,
    //   'clip-path': 'polygon(0 0, 100% 0, 100% 15%, 0 15%)', // Cover only top 25%
    // },
    // '.text-gradient-border::after': {
    //   'content': 'attr(data-text)',
    //   'position': 'absolute',
    //   'left': '0',
    //   'top': '0',
    //   'z-index': '-1',
    //   'color': 'white',
    //   'text-shadow': `
    //     0.125px 0 0 white,
    //     0.25px 0 0 white,
    //     -0.125px 0 0 white,
    //     -0.25px 0 0 white
    //   `,
    //   'clip-path': 'polygon(0 15%, 100% 15%, 100% 100%, 0% 100%)', // Side borders start from 25%
    // },
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
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                backgroundPositionSpin:
                    "background-position-spin 3000ms infinite alternate",
                ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
            },
            keyframes: {
                "background-position-spin": {
                    "0%": { backgroundPosition: "top center" },
                    "100%": { backgroundPosition: "bottom center" },
                },
                ripple: {
                    "0%, 100%": {
                        transform: "translate(-50%, -50%) scale(1)",
                    },
                    "50%": {
                        transform: "translate(-50%, -50%) scale(0.9)",
                    },
                },
            },
        },
    },
    plugins: [

    addVariablesForColors,
    textGradientBorderPlugin,
  ],
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


