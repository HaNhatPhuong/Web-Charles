/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    
      
        // keyframes: {
        //   slideDown: {
        //     '0%': { height: '0' },
        //     '100%': { height: '100%' },
        //   },
        // },
        // animation: {
        //   slideDown: 'slideDown 3s ease-out forwards',
        // },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        slideUp: 'slideUp 1.5s forwards',
      }
     
      
    },
    animation: {
      marquee: 'marquee 15s linear infinite',
      marquee2: 'marquee2 15s linear infinite',
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      marquee2: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0%)' },
      },
    },
  },
  plugins: [],
}

