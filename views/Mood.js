const html = require('choo/html')
const raw = require('choo/html/raw')

const Loader = require('../components/Loader.js')

module.exports = function (state, emit) {
  var pageContent = state.currentPageData
  var arenaPayload = state.currentPageData.arenaPayload
  return html`
    <div class="view--mood" style=${"height: "+state.fullPageHeight+"px;"}>
      <div class="gradient-overlay"></div>
      ${displayContent(pageContent, arenaPayload, emit)}
    </div>
  `

  function displayContent(pageContent, arenaPayload, emit) {
    //console.log(arenaPayload)
    if (arenaPayload && arenaPayload.contentReceived) {
      return renderArenaContent(pageContent,arenaPayload, emit);
    }
    else {
      return
    }
  }
  function renderArenaContent(pageContent, arenaPayload) {
    //console.log(pageContent)
    //console.log(state.arenaBlocks)
    var leadText = pageContent.text
    var blocks = arenaPayload.blocks.map(function (block){
        return html`<div id=${block.id} class="block-container" style="left:${block.posX}px; top:${block.posY}px; transform:rotate(${block.rotationVal}deg)">
                      <img src=${block.image.display.url} class="img-animate img-animate-in" />
                    </div>`
    })
    return html`
      <div class="mood-content">
      <div id="mood-blocks">
        ${blocks}
      </div>
        <p class="sidemargins mood-text scale-text"><span class="bg-shadow"><span class="solid-bg"><span class="inline-cta-margin">${raw(leadText)} <i>${arenaPayload.title}.</i></span></span></span><span class="inline-cta type2" ><img src="/assets/img/arena-logo.png" class="cta-logo"/><a href=${arenaPayload.chanURL}>more on Are.na!</a></span></p>
      </div>
    `

  }
}
