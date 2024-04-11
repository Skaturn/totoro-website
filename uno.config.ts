import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
  ],
  shortcuts: {
    contrasted: 'text-shadow text-shadow-color-black text-shadow-xl text-shadow-color-opacity-20'
  },
  theme: {
    fontFamily: {
      spumoni: 'Spumoni Regular',
      harrington: 'Harrington',
    },
  }
})