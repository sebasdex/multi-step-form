/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,html}"],
  theme: {
    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'sidebar-mobile': "url('./images/bg-sidebar-mobile.svg')",
        'sidebar-desktop': "url('./images/bg-sidebar-desktop.svg')",
        'active': '<svg class="w-4 h-4 m-auto text-white fill-current" viewBox="0 0 24 24"><path d="M9 16.17l-4.17-4.17L3 13l6 6 12-12-1.41-1.42L9 16.17z" /></svg>'
      }
    },
  },
  plugins: [],
}

