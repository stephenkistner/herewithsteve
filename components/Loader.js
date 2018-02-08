const html = require('choo/html')

module.exports = function (state, emit) {
  //display a loading indicator for latent API calls, etc...

  return html`
    <p class="loader-message">Loading content...</p>
  `
}
