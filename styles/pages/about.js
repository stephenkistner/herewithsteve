var vars = require('../vars.js')

module.exports = `
  .view--about, .view--results {
    padding-top: 100px;
    padding-bottom: ${vars.blockspacing.d};
  }

  .about__gradient-overlay {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: red;
    pointer-events: none;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+1,ffffff+100&0+43,1+90 */
background: -moz-linear-gradient(top, rgba(255,255,255,0) 1%, rgba(255,255,255,0) 50%, rgba(255,255,255,1) 94%, rgba(255,255,255,1) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, rgba(255,255,255,0) 1%,rgba(255,255,255,0) 50%,rgba(255,255,255,1) 94%,rgba(255,255,255,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, rgba(255,255,255,0) 1%,rgba(255,255,255,0) 50%,rgba(255,255,255,1) 94%,rgba(255,255,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */
  }

  .about__top {
    margin-bottom: ${vars.blockspacing.m};
  }

  .view--about h3 {
    margin-top: 2.6em;
  }

  .about__2col {
    display: flex;
    flex-direction: column-reverse;
  }

  .about__2col__left ul li {
    margin-bottom: 0;
  }
  .about__2col__left ul li:last-of-type {
    margin-top: 1em;
  }

  .about__2col__left ul li:before {
    content: '';
    margin: 0;
    padding: 0;
  }

  .about__2col__right h3:first-of-type {
    margin-top: 0;
  }

  @media (min-width: ${vars.breakpoints.d600}) {
    .about__top {
      margin-bottom: ${vars.blockspacing.d};
    }
    .about__2col__left ul li {
      margin-bottom: 1em;
    }
    .about__2col__left ul li:last-of-type {
      margin-top: 3em;
    }
  }

  @media (min-width: ${vars.breakpoints.d1000}) {
    .view--about {
      padding-top: 150px;
    }

    .about__2col {
      flex-direction: row;
    }
    .about__2col__left {

    }
    .about__2col__right {
      max-width: 600px;
      margin-left: auto;
      margin-right: 0;
    }
  }
  @media (min-width: 1200px) {
    .about__2col__right {
      margin-right: auto;
    }
  }
`
