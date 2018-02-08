module.exports = store

function store(state, emitter) {



  state.ButtonText = "Steve!"

  state.clickCount = 0

  //var buttonColors = ['#A7FFE4','#CDFFA7', '#FFFAA7', '#FFD0A7', '#FFA7A7']
  //var buttonColors = ['#74F1D2', '#FC3462']
  var buttonColors = ['#FCFFA5', '#A5FFB1', '#FFA5ED', '#DBA5FF', '#7DFCFF']
    var buttonColors2 = ['#FFA5ED', '#FCFFA5', '#A5FFB1', '#7DFCFF', '#FCFFA5']
  var selectedColor = buttonColors[0]
  var selectedColor2 = buttonColors2[0]


  emitter.on('DOMContentLoaded', function() {

    if (state.buttonIdle) {

    }



    var buttonDefaultStyles = "box-shadow: 0 0 0 black; transform: scale(1) rotate(0)"

    var SteveButton = document.getElementById('stevebutton')

    emitter.on('nav:mouseOver', function() {
      state.buttonStyles = hoverStyles('#2b2b2b')
      emitter.emit(state.events.RENDER)
      state.buttonHovered = true;
    })

    emitter.on('nav:mouseOut', function(){
      state.buttonHovered = false;
      state.buttonStyles = buttonDefaultStyles
      emitter.emit(state.events.RENDER)
    })

    emitter.on('nav:clicked', function(){


      state.clickCount += 1;
      console.log(state.clickCount)
      clickedStyles()
      if (!state.transitioning) {
        emitter.emit('firebase:steveclick')
        emitter.emit('FLOW:increment')
      }

    })

    function hoverStyles(buttonColor, buttonColor2) {
      var rotAmt = Math.floor(Math.random()*6)-3
      var shadowPresets = ['10px 10px 0 ', '-10px -10px 0 ', '-10px 10px 0 ', '10px -10px 0 ']
      var shadowPresets2 = ['-5px -5px 0 ', '5px 5px 0 ', '5px -5px 0 ', '-5px 5px 0 ']
      var selector = Math.floor(Math.random()*shadowPresets.length)
      var addSecondShadow = ' ';
      if (buttonColor2) {
        var shadowSelect2 = shadowPresets2[selector]
        addSecondShadow = ', '+shadowSelect2+buttonColor2;
      }
      //selectedColor = buttonColors[Math.floor(Math.random()*buttonColors.length)]
      var shadowSelect = shadowPresets[selector]
      var styles = "transform: scale(1.05) rotate("+rotAmt+"deg); transition: all .15s ease-out; box-shadow:"+shadowSelect+buttonColor+addSecondShadow+";"
      return styles;
    }

    function clickedStyles() {
      state.buttonStyles = "transform: scale(.9); box-shadow: 0 0 0 #2b2b2b; transition: all .15s ease-out;"
      if (state.transitioning) {
        state.ButtonText = 'Wait!'
      }
      emitter.emit(state.events.RENDER)
      var readyToGo = new Promise(function(resolve, reject){
        var fromWait = false
        if (state.transitioning) {
          emitter.on('PAGE:done', function(){
            fromWait = true
            resolve(fromWait)
          })
        }
        else { resolve(fromWait) }
      })
      readyToGo.then(function(fromWait) {
        var delayAmt = 150;
        if (fromWait) {
          delayAmt = 0;
        }
        setTimeout(function(){
          if (state.buttonHovered) {
            var colorSelector = Math.floor(Math.random()*buttonColors.length)
            selectedColor = buttonColors[colorSelector]
            selectedColor2 = buttonColors2[colorSelector]
            state.buttonStyles = hoverStyles(selectedColor, selectedColor2)
          }
          else {
            state.buttonStyles = buttonDefaultStyles
          }
          state.ButtonText = "Steve!"
          emitter.emit(state.events.RENDER)
        }, delayAmt)
      })

    }



  })


}
