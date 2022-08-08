const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html',
      }
    },
    server: {
      port: 8080,
      hot: true
    }
  }
})