/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,html}"],
  theme: {
    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'sidebar-mobile': "url('../images/bg-sidebar-mobile.svg')",
        'sidebar-desktop': "url('../images/bg-sidebar-desktop.svg')"
      }
    },
  },
  plugins: [],
}

