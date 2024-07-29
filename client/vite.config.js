import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        'core-js/modules/web.dom-collections.iterator.js',
        'core-js/internals/well-known-symbol',
        'core-js/internals/whitespaces',
        'core-js/internals/v8-prototype-define-bug',
        'core-js/internals/weak-map-basic-detection',
        // add any other paths that need to be marked as external
      ],
    },
  },
  plugins: [react()],
})
