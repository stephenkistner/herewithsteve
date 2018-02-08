
module.exports = store

function store (state, emitter) {

  emitter.on('DOMContentLoaded', function () {

    emitter.on('quiz:submitResponse', function(data) {


      var quizData = state.currentPageData
      var response = quizData.responses[data.response]
      var pushDelay = data.delay
      if (response.timing) {
        pushDelay = response.timing;
      }

      var toDatabase = quizData.database
      var toSubTree = data.response

      if (toDatabase) {
        emitter.emit('firebase:quizclick', {quiz: toDatabase, response: toSubTree})
      }

      if (response.url) {
        emitter.emit('pushState', response.url)
      }
      else if (response.text) {
        state.currentPageData.quizAnswered = true;
        state.currentPageData.quizResult = response.text;
        emitter.emit(state.events.RENDER)
        if (!state.pushed && !state.statePopped) {
          var t = setTimeout(function(){
            state.pushed = true;
            emitter.emit('quiz:finished')

            //document.getElementById('quiz').classList.add('quiz-hide')
          }, pushDelay)
        }
      }
    })

    emitter.on('quiz:finished', function() {
      emitter.emit('FLOW:increment')
    })

    emitter.on('rick:rolled', function() {
      var t= setTimeout(function(){
        emitter.emit('quiz:finished')
      }, 4500)
    })

    emitter.on('rick:postRoll', function() {
      if (!state.pushed && !state.statePopped) {
        var t = setTimeout(function(){
          state.pushed = true
          //console.log("DILLY DILLY")
          emitter.emit('quiz:finished')
          //state.currentPageData.stopItRick = false
        }, 1000)
      }
    })

  })
}
