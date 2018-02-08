var vars = require('../vars.js')

module.exports = `

  .view--mood {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: white;
  }

  .mood-content {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
  }

  .gradient-overlay {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 50;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,ffffff+100&0+68,1+94 */
background: -moz-linear-gradient(bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 68%, rgba(255,255,255,1) 94%, rgba(255,255,255,1) 100%);
background: -webkit-linear-gradient(bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 68%,rgba(255,255,255,1) 94%,rgba(255,255,255,1) 100%);
background: linear-gradient(to top, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 68%,rgba(255,255,255,1) 94%,rgba(255,255,255,1) 100%);
  }

  .mood-content .mood-text {
    position: relative;
    z-index: 2;
    /*color: #fff;
    mix-blend-mode: difference;*/
    /*text-shadow: 0px 0px 5px #fff, 0px 0px 10px #fff, 0px 0px 15px #fff, 0px 0px 10px #fff, 0px 0px 15px #fff, 0px 0px 20px #fff, 0 0 30px white, 0 0 40px white, 0px 0px 50px white, 0 0 60px white, 0 0 70px white, 0px 0px 80px white;*/

    margin-bottom: 0;

    z-index: 60;
  }

  /*.mood-content .mood-text .bg-shadow {
    box-shadow: .2em .2em 0 #2b2b2b;
  }*/

  .mood-content .mood-text .solid-bg {
    background-color: white;
    padding: 0 .2em;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    position: relative;
  }

  .mood-content .mood-text .inline-cta-margin {
    position: relative;
  }


  .mood-content .mood-text .inline-cta {
    text-shadow: none;
    padding: .4em .35em .3em .35em;
    background: white;
    letter-spacing: initial;
  }

  #mood-blocks {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 1;
  }

  #mood-blocks .block-container {
    position: absolute;
    transform-origin: center;
  }

  #mood-blocks img {
    display: block;
    max-width: 60vw;
    max-height: 50vh;
    transform-origin: center;
  }

  @media (min-width: ${vars.breakpoints.d600}) {
  }

  @media (min-width: ${vars.breakpoints.d1000}) {
    #mood-blocks img {
      max-width: 30vw;
    }
  }
`
