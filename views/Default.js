const html = require('choo/html')
const raw = require('choo/html/raw')

module.exports = function (state, emit) {
  var text = state.currentPageData.text

  var textAlign = state.currentPageData.align
  var fontSize = 'type1';
  if (state.currentPageData.fontSize) {
    fontSize = state.currentPageData.fontSize
  }

  function subtext() {
    if (state.currentPageData.subtext) {
      return html`
        <p class="type2 sidemargins">${raw(state.currentPageData.subtext)}</p>
      `
    } else return
  }

  return html`
    <div class="view--default" style="text-align: ${textAlign};">
      <p class="${fontSize} sidemargins">${raw(text)}</p>
      ${subtext()}
    </div>
  `
}
