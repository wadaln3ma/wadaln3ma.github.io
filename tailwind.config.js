module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "crimson",
      },
      fontFamitly: {
        'ubuntu' : ['Ubuntu', 'sans-serif'],
        'poppins' : ['Poppins', 'sans-serif'],
      },
      keyframes: {
        fill: {
          '0%' :{width: 0, opacity: 1},
          '20%' :{opacity: .1},
          '40% ': {opacity: .4},
          '60%': {opacity: .8},
          '80%': {opacity: .4},
          '100%': {opacity: 1},
        },
        fadeInRight: {
          '0%' : {left: -400, opacity: 0},
          '100%' : {left: 0, opacity: 1},
        },
      },
      animation: {
        'fill-bar' : 'fill 3s',
        'fade-in-right' : 'fadeInRight 1.5s',
      },
    },
  },
  plugins: [],
}
