var getConfig = require('hjs-webpack')

console.log("Running Webpack in Mode>> ", process.env.NODE_ENV)
console.log("BABEL_ENV is >> ",process.env.BABEL_ENV)


module.exports = getConfig({
  // entry point for the app
  in: 'src/app.js',

  // Name or full path of output directory
  // commonly named `www` or `public`. This
  // is where your fully static site should
  // end up for simple deployment.
  out: 'public',

  // This will destroy and re-create your
  // `out` folder before building so you always
  // get a fresh folder. Usually you want this
  // but since it's destructive we make it
  // false by default
  clearBeforeBuild: '!(img|static|manifest.json)',
  html: function(context) {
      return {
          'index.html': context.defaultTemplate({head: '<link rel="manifest" href="manifest.json"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css">'})
      }
  }
})