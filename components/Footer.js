const html = require('choo/html')
const raw = require('choo/html/raw')

module.exports = function (state) {
  var copyContent = state.footerCopyrightSelected
  var mailContent = state.footerMailCTASelected
  return html`
    <footer class="footer">
      <div class="sidemargins">
        <span class="type3 about"><b><a href="/about">Steve?</a></b></span>
        <span class="type3 copyright">©MMXVIII Steve, <span class="baffle">${copyContent}</span></span>
        <span class="type3"><span class="mobilehide">${mailContent}</span><a href="mailto:chat@with.sk?subject=Hey Steve!">chat@with.sk</a></span>
      </div>
    </footer>
  `
}
