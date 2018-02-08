module.exports = store

function store (state, emitter) {
  var concepts = [
    "He’s committed to making ethically sound design decisions.",
    "He’s toying with the concept of anti-products.",
    "He’s thinking about tools for the soul.",
    "He talks a lot about designing for participation.",
    "He’s fully engaged in the present with one foot in the future.",
    "He’s thinking about interface as art."
  ]
  state.aboutConcept = concepts[0]

  var improvements = [
    "He’s trying to ask more questions.",
    "He’s trying to be a better listener.",
    "He’s trying to be more outgoing.",
    "He’s trying to consume less infotainment."
  ]
  state.aboutImprovement = improvements[0]

  var funfacts = [
    "He’s the proud dad of the world’s sweetest kitty.",
    "He’s probably listening to 80s tunes.",
    "He’s probably drinking a tall can of Arizona",
    "He hopes you’re having a good day.",
    "He doesn’t use Facebook.",
    'He posts weird stuff on <a href="https://www.are.na/steve-k/channels">Are.na</a>.',
    'He’s hyper-present on <a href="https://twitter.com/stephenkistner">Twitter</a>.',
    'He always makes a wish at 11:11.'
  ]
  state.aboutFunfact = funfacts[0]

  //state.footerMailCTASelected = mailTexts[0]

  emitter.on('DOMContentLoaded', function () {
    updateAbout()

    emitter.on(state.events.NAVIGATE, function () {
      updateAbout()
    })


    function updateAbout() {
      if (state.params.path == 'about') {
        console.log('ABOUT ACTIVE')
        switchConcept()
        switchImprovement()
        switchFunfact()
        emitter.emit(state.events.RENDER)
      }
    }

    function switchConcept() {
      var selectedIdx = Math.floor(Math.random()*concepts.length)
      state.aboutConcept = concepts[selectedIdx]
    }
    function switchImprovement() {
      var selectedIdx = Math.floor(Math.random()*improvements.length)
      state.aboutImprovement = improvements[selectedIdx]
    }
    function switchFunfact() {
      var selectedIdx = Math.floor(Math.random()*funfacts.length)
      state.aboutFunfact = funfacts[selectedIdx]
    }

  })
}
