/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'watch':'50px',
        'mobile' : '620px',
        'tablet' : '768px',
        'laptop':'992px',
        'desktop':'1200px',
        'bigscreen':'1600px',
      }
    },
  },
  plugins: [],
}

