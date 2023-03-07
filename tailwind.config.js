/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  important: true,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    screens: {
      xxs: '320px',
			lxs: '360px',
			xs: '480px',
			xsm: '530px',
			sm: '640px',
			md: '768px',
			xmd: '880px',
			lg: '1024px',
			main: '1170px',
			sxl: '1200px',
			xl: '1280px',
			mxl: '1400px',
			'2xl': '1536px',
    },
    extend: {
      colors: {
        'shark': {
        '50': '#f4f5f7',
        '100': '#e2e6eb',
        '200': '#c8cfd9',
        '300': '#a1acbf',
        '400': '#73829d',
        '500': '#586682',
        '600': '#4b556f',
        '700': '#42495c',
        '800': '#3b3f4f',
        '900': '#21232b',
    },

      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ],
}
