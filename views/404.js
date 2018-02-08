const html = require('choo/html')
const raw = require('choo/html/raw')

module.exports = function (state) {
  var query = state.currentPageData.text
  return html`
    <div class="view--default">
      <p class="type1 sidemargins"><b>Steve</b> doesn’t have anything to say about <b>“${query}.”</b></p>
    </div>
  `
}
