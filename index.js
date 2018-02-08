var css = require('sheetify')
var choo = require('choo')


//var pages = require('./stores/pages')
//var FLOWCONTROLLER = require('./stores/FLOWCONTROLLER')

var ROUTING = require('./stores/ROUTING')

var fullpageheight = require('./stores/fullpageheight')
var navScroll = require('./stores/navScroll')
var scrollevents = require('./stores/scrollevents')

var quizEvents = require('./stores/quizevents')


var dynamicfooter = require('./stores/dynamicfooter')
var dynamicabout = require('./stores/dynamicabout')

var apicalls =  require('./stores/apicalls')

//testing arena
var moodanimation = require('./stores/moodanimation')

var animateButton = require('./stores/animatebutton')

var firebaseController = require('./stores/firebaseController')


css('ress/dist/ress.min.css')
require('./styles')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  // Enable once you want service workers support. At the moment you'll
  // need to insert the file names yourself & bump the dep version by hand.
  // app.use(require('choo-service-worker')())
}

app.use(ROUTING)
app.use(fullpageheight)
app.use(navScroll)
app.use(apicalls)
app.use(moodanimation)
app.use(scrollevents)
app.use(dynamicfooter)
app.use(dynamicabout)
app.use(quizEvents)
app.use(animateButton)
app.use(firebaseController)


app.route('/', require('./views/main'))
app.route('/:path', require('./views/main'))
//app.route('/*', require('./views/404'))




if (!module.parent) app.mount('body')
else module.exports = app
