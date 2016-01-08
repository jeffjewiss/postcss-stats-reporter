var postcss = require('postcss')
var reporter = require('./lib/reporter')

module.exports = postcss.plugin('postcss-stats-reporter', reporter)
