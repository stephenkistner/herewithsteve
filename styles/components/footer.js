var vars = require('../vars.js')

module.exports = `

.footer {
  width: 100%;
  position: fixed;
  z-index: 555;
  top: 19px;
}

.footer .sidemargins {
  display: flex;
  justify-content: space-between;
}
.footer .copyright, .footer .mobilehide {
  display: none;
}
.footer .about a {
  text-decoration: none;
}


@media (min-width: ${vars.breakpoints.d600}) {
  /*.footer {
    bottom: 30px;
    top: auto;
  }*/
  .footer .mobilehide {
    display: inline;
  }
  /*.scrolling ~ .footer {
    position: relative;
    margin-bottom: 30px;
    bottom: auto;
    top: auto;
  }*/

}

@media (min-width: ${vars.breakpoints.d1000}) {
  /*.footer .copyright {
    display: block;
  }*/
}

`


/*

.footer {
  width: 100%;
  position: absolute;
  bottom: 19px;
  z-index: 9999;
}
.footer .sidemargins {
  display: flex;
  justify-content: space-between;
}
.footer .copyright {
  display: none;
}
.footer .about a {
  text-decoration: none;
}

@media (min-width: ${vars.breakpoints.d600}) {
  .footer {
    bottom: 30px;
  }
}

@media (min-width: ${vars.breakpoints.d1000}) {
  .footer .copyright {
    display: block;
  }
}

*/
