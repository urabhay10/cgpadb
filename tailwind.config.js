// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,html,jsx,ts,tsx}", "./src/**/*.jsx", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#E5E7EB',
          200: '#D1D5DB',
          300: '#9CA3AF',
          400: '#6B7280',
          500: '#4B5563',
          600: '#374151',
          700: '#1F2937',
          800: '#111827',
          900: '#000000'
        }
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["black", "dark", "dracula"]
  }
};