module.exports = store

function store (state, emitter) {
  var footerCopyrights = [
    "all plums iceboxed",
    "the government made me put this here",
    "all rights potato",
    "all your rights are reserved to us",
    "lol",
    "rights not entirely unreserved?",
    "it me!",
    "who loooves Roman numerals"
  ]

  var mailTexts = [
    "Let’s talk: ",
    "Mail me maybe? ",
    'No nudes please... '
  ]

  state.footerMailCTASelected = mailTexts[0]

  emitter.on('DOMContentLoaded', function () {
    updateFooter()

    emitter.on(state.events.NAVIGATE, function () {
      updateFooter()
    })

    function switchCopyright() {
      var selectedIdx = Math.floor(Math.random()*footerCopyrights.length)
      state.footerCopyrightSelected = footerCopyrights[selectedIdx]

    }
    function switchMailCTA() {
      var selectedIdx = Math.floor(Math.random()*mailTexts.length)
      state.footerMailCTASelected = mailTexts[selectedIdx]
    }

    function updateFooter() {
      switchCopyright()
      //switchMailCTA()
      emitter.emit(state.events.RENDER)
    }

  })
}
