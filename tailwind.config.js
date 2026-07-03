/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./app.js"
  ],
  theme: {
    extend: {
      colors: {
        "secondary": "#735c00",
        "surface-container-highest": "#e3e3de",
        "on-error-container": "#93000a",
        "tertiary": "#00342f",
        "primary-fixed-dim": "#95d3ba",
        "on-surface-variant": "#404944",
        "surface-tint": "#2b6954",
        "tertiary-container": "#004d46",
        "inverse-surface": "#30312e",
        "on-primary-container": "#80bea6",
        "tertiary-fixed-dim": "#6bd8cb",
        "secondary-fixed": "#ffe088",
        "surface-container-high": "#e9e8e3",
        "tertiary-fixed": "#89f5e7",
        "outline": "#707974",
        "on-tertiary-fixed-variant": "#005049",
        "primary-fixed": "#b0f0d6",
        "on-tertiary-fixed": "#00201d",
        "on-surface": "#1b1c19",
        "on-secondary-fixed": "#241a00",
        "surface-container": "#efeee9",
        "on-secondary": "#ffffff",
        "secondary-container": "#fed65b",
        "on-tertiary": "#ffffff",
        "outline-variant": "#bfc9c3",
        "on-secondary-container": "#745c00",
        "surface-dim": "#dbdad5",
        "on-tertiary-container": "#53c2b5",
        "inverse-primary": "#95d3ba",
        "on-primary-fixed": "#002117",
        "on-primary-fixed-variant": "#0b513d",
        "on-error": "#ffffff",
        "secondary-fixed-dim": "#e9c349",
        "background": "#faf9f4",
        "error": "#ba1a1a",
        "surface-variant": "#e3e3de",
        "error-container": "#ffdad6",
        "on-secondary-fixed-variant": "#574500",
        "surface-container-low": "#f5f4ef",
        "surface": "#faf9f4",
        "on-primary": "#ffffff",
        "surface-bright": "#faf9f4",
        "inverse-on-surface": "#f2f1ec",
        "primary": "#003527",
        "primary-container": "#064e3b",
        "surface-container-lowest": "#ffffff",
        "on-background": "#1b1c19",
        "surface-dark": "#0e1110",
        "surface-container-dark": "#1c201e"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "margin-desktop": "64px",
        "container-max": "1280px",
        "unit": "8px",
        "margin-mobile": "16px",
        "gutter": "24px"
      },
      fontFamily: {
        "display-lg": ["Playfair Display"],
        "body-md": ["Manrope"],
        "headline-md": ["Playfair Display"],
        "headline-lg-mobile": ["Playfair Display"],
        "body-lg": ["Manrope"],
        "label-md": ["Manrope"],
        "label-sm": ["Manrope"],
        "headline-lg": ["Playfair Display"]
      },
      fontSize: {
        "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "600" }],
        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
        "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600" }],
        "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.03em", "fontWeight": "500" }],
        "headline-lg": ["32px", { "lineHeight": "40px", "fontWeight": "600" }]
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ],
}
