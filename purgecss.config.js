module.exports = {
  content: ['src/App.js'],
  css: ['src/tailwind.css'],
  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[A-z0-9-:\/]+/g) || []
        }
      },
      extensions: ['html', 'js']
    }
  ]
}
