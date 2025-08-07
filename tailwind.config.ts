/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  safelist: [
    // Dynamic positioning classes found in GradientBlob component
    "top-0", "right-0", "translate-x-1/4", "-translate-y-1/4",
    "top-0", "left-0", "-translate-x-1/4", "-translate-y-1/4", 
    "bottom-0", "right-0", "translate-x-1/4", "translate-y-1/4",
    "bottom-0", "left-0", "-translate-x-1/4", "translate-y-1/4",
    // Common utility classes that might be purged
    "w-[500px]", "h-[500px]",
    // Ensure all color variants are preserved
    {
      pattern: /(bg|text|border|from|to|via)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900)/
    },
    {
      pattern: /(hover:)?(bg|text|border)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900)/
    }
  ]
};
