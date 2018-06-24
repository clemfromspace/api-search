module.exports = {
  content: ['src/App.js'],
  css: ['src/tailwind.css', 'src/App.css'],
  whitelistPatterns: [/ais-.*/],
  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[A-z0-9-:\/]+/g) || []
        }
      },
      extensions: ['js']
    }
  ]
}
