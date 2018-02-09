module.exports = store

// import used scripts
var shuffleArray = require('../scripts/arrayshuffle.js')


//import other sets of pages
var contentDefaults = require('../content/defaults.js')
var contentProjects = require('../content/projects.js')
var contentMoods = require('../content/moods.js')
var contentQuizzes = require('../content/quizzes.js')


function store (state, emitter) {
  //sets the default landing page for the site
  var homePage = {
    template: 'Default',
    text: '👋 Hey, I’m <b>Steve!</b> Thanks for being <b><i>here</i></b> with me! Go ahead and smash that <b>Steve</b> button!'
  }

  // Standalone pages that only have one permutation
  var defaultPages = {
    work: {
      template: 'Work'
    },
    museum: {
      template: 'Museum'
    },
    results: {
      template: 'Results'
    }
  }

  //pages accessible via /:path but not included in the Steve! button flow
  var hiddenPages = {
    about: {
      template: 'About'
    },
    "to-work": {
      text: 'Too busy to experience <b>Steve</b>? That’s a-ok. Click below to check out the <b><i>WORK</i></b>.',
      subtext: '✨  <a href="/work">click here</a>  ✨',
      template: 'Default'
    },
    intro1: {
      template: 'Default',
      text: 'I’m a <i>design generalist</i> creating <b>products for participation</b> (like this site).'
    },
    intro2: {
      template: 'Default',
      text: 'In other words, I design & develop experiences that invite people to become more than just passive users.'
    },
    intro3: {
      template: 'Default',
      text: 'Now let’s get to know each other... Show that <b>Steve</b> button some love!'
    },
    end: {
      text: "🎉👏🎉👏🎉",
      subtext: 'Damn. You clicked through everything <b>Steve’s</b> got for you right now. Keep smashing that <b>Steve</b> button to see what you missed or <a href="mailto:chat@with.sk?subject=Hey Steve!">chat@with.sk</a> if you wanna to talk more. <br><br><small>psssst <a href="/results">click here</a> to see the results of all the quizzes and total <b>Steve!</b> smashes!</small>',
      align: 'center',
      template: 'Default'
    }
  }

  //OBJECT containing just the pages used in the Steve! button flow
  var pageBlocksVisible = Object.assign({}, defaultPages, contentDefaults, contentMoods, contentQuizzes)

  //console.log(pageBlocksVisible)

  //OBJECT containing ALL EXISTING PAGES via /:path, including hidden ones
  var pageBlocks = Object.assign({}, pageBlocksVisible, contentProjects, hiddenPages)

  //ARRAY of all of the keys/"names" of pages to be included in Steve! flow
  // shuffled by default for new experience every time
  var flowList = shuffleArray(Object.keys(pageBlocksVisible))
                                //update this to call a shuffle function && then call it in /navlink when all pages seen
        //console.log(flowList)
  var projectList = Object.keys(contentProjects)

  var projSelector = -1

//initialize COUNTER used to increment the FLOW
  var flowSelector = 0

  state.currentPageData = homePage



  var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (!mutation.addedNodes) return

    for (var i = 0; i < mutation.addedNodes.length; i++) {
      // do things to your newly added nodes here
      var node = mutation.addedNodes[i]
      //console.log(node)
    }
  })
})




var loaderTexts = [
  "🤘 Yeah!!!",
  "👏 Another one!",
  "🔥 You’re on fire!",
  "😏 You ready for this?",
  "🔜 You’re gonna love this one...",
  "🙌 Woot woot!",
  "😎 Steve thinks you’re pretty cool",
  "🤴 Dilly dilly!",
  "👍 Nice one!",
  "❤️ Spread the love!"
]

var loaderTextSelector = -1

state.loaderText = loaderTexts[loaderTextSelector]




state.transitioning = false

var homeEntry = false


  // EVENTS
  emitter.on('DOMContentLoaded', function() {
    //get the current /:path variable
    var path = state.params.path

    var loadOverlay = document.getElementById('load-overlay')

    updateRoute()

    if (!state.params.path) {
      homeEntry = true;
    }


      // called each time user moves FORWARD IN THE FLOW
      emitter.on('FLOW:increment', function() {

        switch (true) {
          //resets the flow when all pages served
          case (flowSelector >= flowList.length):
            emitter.emit(state.events.PUSHSTATE, '/end')
            flowSelector = 0;
            flowList = shuffleArray(flowList)
            break;
          case (homeEntry && state.clickCount == 1):
            emitter.emit(state.events.PUSHSTATE, '/intro1')
            break;
          case (homeEntry && state.clickCount == 2):
            emitter.emit(state.events.PUSHSTATE, '/intro2')
            break;
          case (homeEntry && state.clickCount == 3):
            emitter.emit(state.events.PUSHSTATE, '/intro3')
            break;
          case (homeEntry && state.clickCount == 5):
            emitter.emit(state.events.PUSHSTATE, flowList[flowSelector])
            flowSelector+=1;
            break;
          case (homeEntry && state.clickCount == 6):
            emitter.emit(state.events.PUSHSTATE, '/to-work')
            break;
          case (!homeEntry && state.clickCount == 3):
            emitter.emit(state.events.PUSHSTATE, '/to-work')
            break;
          case (state.clickCount == 11):
            emitter.emit(state.events.PUSHSTATE, '/about')
            break;
          case (state.clickCount % 5 == 0):
            var selected = projectCounter()
            emitter.emit(state.events.PUSHSTATE, projectList[selected])
            break;
          //default incrementation
          default:
            emitter.emit(state.events.PUSHSTATE, flowList[flowSelector])
            flowSelector+=1;
            break;
        }

      })//end FLOW:increment


      function projectCounter() {

        projSelector+=1
        if (projSelector >= projectList.length) {
          projSelector = 0
        }
        return projSelector
      }


    // called every time someone navigates to a new page
    emitter.on(state.events.NAVIGATE, function() {
      //console.log("PUSHED:", state.pushed, "ANSWERED", state.currentPageData.quizAnswered, "ROLLED", state.currentPageData.stopItRick)
      state.transitioning = true;
      transitionOut()
    })//end NAVIGATE

    emitter.on(state.events.POPSTATE, function(){
      state.statePopped = true

      //console.log("POP PUSHED:", state.pushed, "POP ANSWERED", state.currentPageData.quizAnswered, "POP ROLLED",state.currentPageData.stopItRick)
    })


    function transitionOut() {
      loaderTextSelector+=1;
      if (loaderTextSelector >= loaderTexts.length) {
        loaderTexts = shuffleArray(loaderTexts)
        loaderTextSelector = 0
      }
      state.loaderText = loaderTexts[loaderTextSelector]

      state.loadOverlayClass = 'load-overlay-in'
      emitter.emit(state.events.RENDER)

      var doneAnimating = new Promise(
        function (resolve, reject) {
          loadOverlay.addEventListener("animationend", function(){
            resolve('over transition finished')
          }, false);
        })

        doneAnimating.then(function(fulfilled){
          updateRoute()
          awaitLoad()
          loadOverlay.removeEventListener('animationend', function(){})
        })

    }



    function awaitLoad() {
      window.scrollTo(0, 0)
      var delayReveal = new Promise(
          function (resolve, reject) {
              setTimeout(function(){ resolve('PROMMY') }, 500);
          });

        var apiCall = new Promise(
            function (resolve, reject) {

              switch (state.currentPageData.api) {
                case 'arena':
                  emitter.emit('apicall:arena', state.currentPageData.chan)
                  break;
                default:
                  resolve();
              }

              emitter.on('apicall:received', function() {
                //emitter.emit(state.events.RENDER)
                resolve();
              })

            });

        Promise.all([apiCall, delayReveal]).then(function(){
          transitionIn()
        })
      /*observer.observe(document.body, {
          childList: true
        , subtree: true
        , attributes: true
        , characterData: true
      })*/
    }

    function transitionIn() {
        state.loadOverlayClass = 'load-overlay-out'
        emitter.emit(state.events.RENDER)

        var doneAnimating = new Promise(
          function (resolve, reject) {
            setTimeout(function(){
              resolve('over transition finished')
            }, 270)
            loadOverlay.addEventListener("animationend", function(){

            }, false);
          })
        state.pushed = false;
        state.currentPageData.quizAnswered = false
        state.currentPageData.stopItRick = false
        state.statePopped = false
        doneAnimating.then(function(){
          state.transitioning = false
          emitter.emit('PAGE:done')
          emitter.emit(state.events.RENDER)
          loadOverlay.removeEventListener('animationend', function(){})
        })
    }

//

    // GETS the current /:PATH and then sets new STATE.currentPageData
    // also where api calls will be returned
    // also shows preloader and hides after promise returned
    function updateRoute() {
      path = state.params.path

      if (path) {
              if (pageBlocks[path]) {
                state.currentPageData = pageBlocks[path]
                //console.log(state.currentPageData)
                //console.log('we got path!', path)
              }
              else {
                state.currentPageData = {
                  template: 'Unknown',
                  text: path
                }
                //console.log('NO PAGE BY THAT NAME')
              }
      }
      else {
        state.currentPageData = homePage
        //console.log('issa home')
      }

      emitter.emit(state.events.RENDER)

    }//end updateRoute


  })//end DOMContentLoaded

}
