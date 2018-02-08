var html = require('choo/html')

var Nav = require('../components/Nav.js')
var Footer = require('../components/Footer.js')

var LoadOverlay = require('../components/LoadOverlay.js')

var Default = require('./Default.js')
var Unknown = require('./404.js')
var About = require('./About.js')
var Project = require('./Project.js')
var Mood = require('./Mood.js')
var Quiz = require('./Quiz.js')
var Work = require('./Work.js')
var Museum = require('./Museum.js');

var onload = require('on-load')

module.exports = view

function view (state, emit) {

  const main = html`
    <body class="type2">
    ${LoadOverlay(state)}
      ${Nav(state, emit)}
      ${setPage(state, emit)}
      ${Footer(state)}
    </body>
  `

  const uniqueIdentifier = 1
  onload(main, function load () {
    console.log('load')
  }, function unload () {
    console.log('unload')
  }, uniqueIdentifier)

  return main

  function setPage(state,emit) {
    var template = state.currentPageData.template
    switch (template) {
      case 'Default':
        return Default(state, emit);
        break;
      case 'About':
        return About(state,emit);
        break;
      case 'Project':
        return Project(state,emit);
        break;
      case 'Work':
        return Work(state,emit);
        break;
      case 'Museum':
        return Museum(state,emit);
        break;
      case 'Mood':
        return Mood(state,emit);
        break;
      case 'Quiz':
        return Quiz(state,emit);
        break;
      default:
        return Unknown(state,emit);
    }
  }


}
