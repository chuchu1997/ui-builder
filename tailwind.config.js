const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(breadcrumbs|button|card|chip|divider|image|input|link|modal|navbar|popover|toggle|ripple|spinner).js"
  ],
  theme: {
    extend: {
      colors:{
        primary: '#3490dc',  // Set your primary color here
        accent: '#ff6347',   // Set your accent color here (example: tomato red)
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
   
  },
  plugins: [nextui()],
}
