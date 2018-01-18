const symbols = require('log-symbols')
const filesize = require('filesize')

module.exports = function () {
  return function (css, result) {
    result.messages.filter(function (message) {
      return message.stats
    })
      .map(function (message) {
        return message.stats
      }).forEach(function (fileStats) {
        let filePath = result.opts.from
        let splitPath = filePath.split('//')

        if (splitPath.length > 1) filePath = splitPath[1]

        console.log()
        console.log(`${symbols.info} CSS stats for: ${filePath}`)
        console.log(`• Size: ${filesize(fileStats.size)}`)
        console.log(`• Gzipped: ${filesize(fileStats.gzipSize)}`)
        console.log(`• Rules: ${fileStats.rules.total}`)
        console.log(`• Selectors: ${fileStats.selectors.total}`)
        console.log(`• Declarations: ${fileStats.declarations.total}`)
        console.log(`• Media Queries: ${fileStats.mediaQueries.total} (${fileStats.mediaQueries.unique} unique)`)
      })
  }
}
