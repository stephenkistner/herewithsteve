var fromString  = require('from2-string')
var hyperstream = require('hyperstream')
module.exports = function() {

  var headContent = fromString('<title>Steve Makes Products for Participation!!! 👋</title><link rel="icon" type="image/png" href="/assets/icon.png" /><meta property="og:title" content="Steve Makes Products for Participation!!! 👋"><meta property="og:description" content="Stephen Kistner is a designer & developer building digital experiences, spaces and infrastructures for participation. Click on over and smash that Steve button!"><meta property="og:image" content="https://here.with.sk/assets/img/share.png"><meta property="og:url" content="https://here.with.sk/"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@stephenkistner"><meta name="twitter:creator" content="@stephenkistner"><meta name="twitter:title" content="Steve Makes Products for Participation!!! 👋"><meta name="twitter:description" content="Stephen Kistner is a designer & developer building digital experiences, spaces and infrastructures for participation. Click on over and smash that Steve button!"><meta name="twitter:image" content="https://here.with.sk/assets/img/share.png"><!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=UA-92592186-23"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "UA-92592186-23");</script>')

  return hyperstream({
    head: {
      _prependHtml: headContent
    }
  })

}
