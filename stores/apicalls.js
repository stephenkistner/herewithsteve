module.exports = store

const Arena = require('are.na')

const arena = new Arena();

function store (state, emitter) {

  emitter.on('DOMContentLoaded', function () {
    if (state.currentPageData.api == 'arena') {
      emitter.emit('apicall:arena', state.currentPageData.chan)
    }
  })

  emitter.on('apicall:arena', function (data) {
    state.currentPageData.arenaPayload = {}
    emitter.emit(state.events.RENDER)
    console.log("CHAN",data)
    arena.channel(data).get()
      .then(channel => {

          state.currentPageData.arenaPayload.blocks = channel.contents.filter(function(item, idx){
            return item.class == 'Image' && item.image && idx < 12;
          });

          state.currentPageData.arenaPayload.blockIds = state.currentPageData.arenaPayload.blocks.map(function(block){
            return block.id
          })

          console.log(state.currentPageData.arenaPayload.blockIds)

          state.currentPageData.arenaPayload.title = channel.title
          state.currentPageData.arenaPayload.chanURL = "https://www.are.na/steve-k/"+channel.slug;
          state.currentPageData.arenaPayload.contentReceived = true;
          //emitter.emit(state.events.RENDER)
          emitter.emit('apicall:received')
          emitter.emit('mood:animate')
      })
      .catch(err => console.log(err));
  })



}
