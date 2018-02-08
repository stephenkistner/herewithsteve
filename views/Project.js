const html = require('choo/html')
const raw = require('choo/html/raw')

var Objects = require('./projects/Objects.js')
var Paradise = require('./projects/Paradise.js')
var Bots = require('./projects/Bots.js')

module.exports = function (state, emit) {
  var page = state.currentPageData
  var description = page.desc
  var imgURL = page.image
  var scrollCTA = page.scrollCTA
  var linkOutText = page.linkOutText
  var linkOutURL = page.linkOutURL
  var imgClasses = ''
  if (page.imageBump) {
    imgClasses += ' image-bump'
  }
  return html`

  <div class="view--project scrolling">
    <div class="project__bg">
      <div style="transform: rotate(${state.headImageRotation}deg) scale(${state.headImageScale}); opacity:${state.headImageOpacity}">
      <img id="headimage" class=${imgClasses}  src=${imgURL} />
      </div>
    </div>
    <div class="project__header" style="height:${state.fullPageHeight}px;">
      <div class="project__header__gradient">
      </div>
      <div class="project__header__content">
      <p class="type1 sidemargins">${raw(description)} </p>
        <p class="project__header__cta sidemargins">
          <span class="">${scrollCTA}</span>
          <span class=""> <a href=${linkOutURL}>${linkOutText} ↗</a></span>
        </p>
      </div>
    </div>


      ${getPageContent(page)}

    </div>
  `

  function getPageContent(page) {
    switch(page.content) {
      case 'Objects':
        return Objects();
        break;
      case 'Paradise':
        return Paradise();
      case 'Bots':
        return Bots();
      default:
        break;
    }
  }
}


/*<div class="view--project scrolling">
  <div class="project__bg">
    <div style="transform: rotate(${state.headImageRotation}deg) scale(${state.headImageScale}); opacity:${state.headImageOpacity}">
    <img id="headimage" class=${imgClasses}  src=${imgURL} />
    </div>
  </div>
  <div class="project__header" style="height:${state.fullPageHeight}px;">
    <div class="project__header__content">
    <p class="type1 sidemargins">${raw(description)} </p>
      <p class="project__header__cta sidemargins">
        <span class="">${scrollCTA}</span>
        <span class=""> <a href=${linkOutURL}>${linkOutText} ↗</a></span>
      </p>
    </div>
  </div>*/
