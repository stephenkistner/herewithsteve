var map_range = require('../scripts/maprange.js')


module.exports = store

function store (state, emitter) {

  emitter.on('DOMContentLoaded', function () {

    var scrollPos = window.scrollY;
    var ticking = false;

    state.headImageRotation = 15;
    state.headImageScale = 1;
    state.headImageOpacity = 1;

    emitter.on(state.events.NAVIGATE, function () {
      state.headImageRotation = 15;
      state.headImageScale = 1;
      state.headImageOpacity = 1;
    })

    window.addEventListener('scroll', function(e){

      scrollPos = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(function() {
          aboutFadeVisibility(scrollPos);
          rotateHeadImage(scrollPos);

          ticking = false;
        });
        ticking = true;
      }

    })

    function aboutFadeVisibility(pos) {
      var oldOpacity = state.aboutFadeOpacity
      if (state.params.path == 'about') {
        state.aboutFadeOpacity = map_range(pos,0,200,1,0);
        if (state.aboutFadeOpacity !== oldOpacity) {
          emitter.emit(state.events.RENDER)
        }
      }
    }

    function rotateHeadImage(pos) {
      var oldRotation = state.headImageRotation
      var oldScale = state.headImageScale
      var oldOpacity = state.headImageOpacity
      if (document.getElementById('headimage')) {
        state.headImageRotation = map_range(pos,0,500,15,25);
        state.headImageScale = map_range(pos,0,500,1,.8);
        state.headImageOpacity = map_range(pos,0,500,1,0);
        if (state.headImageRotation !== oldRotation || state.headImageScale !== oldScale || state.headImageOpacity !== oldOpacity) {
          emitter.emit(state.events.RENDER)
        }
      }

    }

  })
}
