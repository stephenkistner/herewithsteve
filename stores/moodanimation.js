module.exports = store

function store (state, emitter) {

  emitter.on('DOMContentLoaded', function () {

    var ticking = false;

    if (state.currentPageData.arenaPayload && state.currentPageData.arenaPayload.blocks) {
      iniPosition()
      updatePosition()
      emitter.emit(state.events.RENDER)
    }

    emitter.on('mood:animate', function() {
        iniPosition()
        updatePosition()
        emitter.emit(state.events.RENDER)

    })



    function iniPosition() {
      var blocks = state.currentPageData.arenaPayload.blocks
      var spreadVal = blocks.length*.3
      blocks.map(function(block){
        block.rotationVal = Math.floor(Math.random()*40)-20;
        block.posX = Math.floor(Math.random()*(window.innerWidth+300))-300;
        block.posY = Math.floor(Math.random()*(window.innerHeight+200))-200;
        block.posDelta = Math.floor(Math.random()*3)+1;
        block.rotDelta = Math.floor(Math.random()*1.1);
      })
    }

    function reflowPosition(block) {
      block.rotationVal = Math.floor(Math.random()*40)-20;
      block.posX = Math.floor(Math.random()*window.innerWidth);
      block.posY = Math.floor(Math.random()*window.innerHeight)+window.innerHeight;
      block.posDelta = Math.floor(Math.random()*2)+1;
    }

    function updatePosition() {
      if (state.currentPageData.arenaPayload && state.currentPageData.arenaPayload.blocks) {
        if (!ticking) {
          window.requestAnimationFrame(function() {
            if (state.currentPageData.arenaPayload && state.currentPageData.arenaPayload.blocks) {
              state.currentPageData.arenaPayload.blocks.map(function(block, idx){
                if (idx % 2 == 0) {
                  block.rotationVal += block.rotDelta;
                  block.posY -= block.posDelta;
                  if (block.posY < -1000) {
                    reflowPosition(block)
                  }
                }
              })
            }


            emitter.emit(state.events.RENDER)
            ticking = false;
            updatePosition()
          });
          ticking = true;
        }
      }

    }



  })
}
