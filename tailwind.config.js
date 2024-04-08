/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '480px',  // Small screens, such as mobile phones (portrait)
        'md': '768px',  // Medium screens, such as tablets (portrait)
        'lg': '1024px', // Large screens, such as tablets (landscape)
        'xl': '1280px', // Extra large screens, such as laptops and desktops
        '2xl': '1440px', // Larger desktops and beyond
      },  
      height: {
        '100': '28rem',
        '104': '32rem',
        '108': '36rem',
        '112': '40rem',
      },
    },
  },
  plugins: [],
};
