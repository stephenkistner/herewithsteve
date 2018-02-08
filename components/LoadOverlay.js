const html = require('choo/html')

module.exports = function (state, emit) {
  //display a loading indicator for latent API calls, etc...

  var overlayClass = state.loadOverlayClass

  var loaderText = state.loaderText

    return html`
      <div id="load-overlay" class=${overlayClass}>
        <p>${loaderText}</p>
      </div>
    `


}
