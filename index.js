const postcss = require('postcss')
const reporter = require('./lib/reporter')

module.exports = postcss.plugin('postcss-stats-reporter', reporter)
