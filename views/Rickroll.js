const html = require('choo/html')
const raw = require('choo/html/raw')

module.exports = function (state, emit) {

  //function stopRolling() {
  //  var t= setTimeout(function(){
  //    state.currentPageData.stopItRick = true;
  //    emit(state.events.RENDER)
  //  }, 3500)
  //}

  function showContent() {
    if (state.currentPageData.stopItRick) {
      return html`
        <p class="type1 sidemargins">Lol just kidding!</p>
      `
    }
    else {
      state.transitioning = true
      emit('rick:rolled')
      return html`
        <div class="hide-rick">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>
      `
    }
  }

  return html `
  <div class="view--default">
    ${showContent()}
  </div>
  `


}
