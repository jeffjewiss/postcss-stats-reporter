# postcss-stats-reporter

[![Travis Build Status][travis-img]][travis-url]
[![npm version][npm-img]][npm-url]

Print your stats from `cssstats` as a plugin (no additional build code required).

Installation
------------

```
npm install postcss-stats-reporter
```


Usage
-----

Just drop this plugin in after the `cssstats` postcss plugin:

```javascript
postcss([
  cssstats(),
  statsReporter()
])
```

Example Output
--------------

<img width=250 src="./example.png">

[travis-img]: https://travis-ci.org/jeffjewiss/postcss-stats-reporter.svg?branch=master
[travis-url]: https://travis-ci.org/jeffjewiss/postcss-stats-reporter
[npm-img]: https://badge.fury.io/js/postcss-stats-reporter.svg
[npm-url]: http://badge.fury.io/js/postcss-stats-reporter
