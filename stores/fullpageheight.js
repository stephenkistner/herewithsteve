module.exports = store

var stopResize = false

function store (state, emitter) {
  state.fullPageHeight = '100vh';
  emitter.on('DOMContentLoaded', function () {
    state.fullPageHeight = window.innerHeight;
    emitter.emit(state.events.RENDER)

    emitter.on(state.events.NAVIGATE, function(){
      state.fullPageHeight = window.innerHeight;
    })

  })

}
