var vars = require('../vars.js')


module.exports = `
.nav {
  width: 100vw;
  position: fixed;
  bottom: 0;
  display: flex;
  z-index: 9999;
}
#stevebutton {
  text-decoration: none;
  position: relative;
  padding: 5px 39px;
  display: block;
  z-index: 9999;
  text-align: center;
  margin: 30px auto;
  background-color: white;
  border: 1px solid ${vars.colors.black};
  transition: all .2s ease-in;
  transform-origin: center;
  box-shadow: 0 0 0 ${vars.colors.black};
  outline: none;
  border-radius:0;
  will-change: transform, box-shadow;
}
#stevebutton * {
  pointer-events: none;
}

#stevebutton:hover {
  font-style: normal;
}

@media (min-width: ${vars.breakpoints.d600}) {
  /*.nav {
    bottom: auto;
    top: 0;
  }*/
  #stevebutton {
    padding: 9px 71px;
  }
}
`
