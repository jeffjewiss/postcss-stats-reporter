# postcss-stats-reporter [![Build Status](https://travis-ci.org/jeffjewiss/postcss-stats-reporter.svg?branch=master)](https://travis-ci.org/jeffjewiss/postcss-stats-reporter)

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
