const html = require('choo/html')

module.exports = function (state, emit) {

  var buttonStyles = state.buttonStyles

  return html`
    <nav class="nav">
      <button id="stevebutton" style=${buttonStyles} onclick=${handleClick} onmouseover=${handleMouseOver} onmouseout=${handleMouseOut} ><b class="type1">${state.ButtonText}</b></button>
    </nav>
  `

  function handleClick () {
    //emit('nav:onclick', navlink)
    //emit('nav:animClicked')
    emit('nav:clicked')
    //if (!state.transitioning) {
    //  emitter.emit('FLOW:increment')
    //}
  }
  function handleMouseOver() {
    emit('nav:mouseOver')
  }
  function handleMouseOut() {
    emit('nav:mouseOut')
  }
}
