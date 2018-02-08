var vars = require('../vars.js')

module.exports = `
  .view--project {
    position: relative;
  }
  .project__bg {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .project__bg img {
    max-height: 100vh;
    max-width: 130vw;
    transform-origin: center;
  }

  .project__bg img.image-bump {
    margin-top: -20vh;
  }

  .project__header, .project__body {
    position: relative;
    width: 100%;
  }

  .project__header {
    height: 100vh;
    display: flex;
    align-items: flex-end;
    flex-flow: column;
    z-index: 2;
  }
  .project__header__content {
    background-color: ${vars.colors.white};
    display: flex;
    flex-flow: column;
  }

  .project__header__gradient {
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,ffffff+100&0+75,1+100 */
    background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 65%, rgba(255,255,255,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 65%,rgba(255,255,255,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 65%,rgba(255,255,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */
    width: 100%;
    flex-grow: 1;
  }


  .project__header__content .type1 {
    margin-top: .1em;
    margin-bottom: .3em;
  }

  .project__header__cta {
    font-size: ${vars.fs.f3.m};
    margin-top: .7em;
    margin-bottom: 7em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .project__body {
    height: 100%;
    background-color: ${vars.colors.white};
    z-index: 3;
    padding-top: ${vars.blockspacing.m};
    overflow-x: hidden;
    padding-bottom: ${vars.blockspacing.d}
  }

  .project__body h2, .project__body h3, .project__body p, .project__body .img-inline {
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
  }

  .project__body .img-inline {
    display: block;
    width: 100%;
  }
  .project__body .img-lead {
    margin-top: ${vars.blockspacing.m};
  }
  .project__body .img-only-d {
    display: none;
  }

  .project__body .marginoverride {
    width: 100vw;
    margin-left: -${vars.sidemargins.m};
  }

  .project__body .type1 {
    max-width: 100%;
  }

  .project__body img + h2 {

  }

  .img-shadow {
    filter: drop-shadow(0 4px 10px rgba(0,0,0,.1));
  }

  .project__body section {
    margin-bottom: ${vars.blockspacing.m};
  }



  .img__phones--2up {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: ${vars.blockspacing.m};
  }

  .img__phones--2up > * {
    max-height: 80vh;
  }

  .img__phones--2up.hidefirst > *:first-child {
    display: none;
  }

  .img__phones--2up.showall {
    flex-flow: column;
    align-items: center;
  }
  .img__phones--2up.showall > * {

  }

  .img__phones--2up.viewswitcher {
    margin-top: 0;
    margin-bottom: 0;
  }



  .sidescroller {
    display: flex;
    justify-content: flex-start;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    margin-top: 2em;
    margin-bottom: 3em;
  }
  .sidescroller > * {
    max-height: 50vh;
    margin-left: 10px;
    margin-right: 10px;
  }
  .sidescroller > *:first-child {
    margin-left: ${vars.sidemargins.m};
  }
  .sidescroller > *:last-child {
    box-sizing: content-box;
    border-right: ${vars.sidemargins.m} solid transparent;
  }
  .sidescroller::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  .sidescroller.tinymessages {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .sidescroller.tinymessages >* {
      max-height: 140px;
  }

  .proj__4up {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
  }

  .proj__4up > * {
    max-width: 100%;
    margin: 10px 0;
  }


  @media (max-width: 600px) {
    .viewswitcher {
      position: relative;
    }
    .img__phones--2up.viewswitcher > * {
      max-height: none;
    }
    .viewswitcher img {
      max-height: 80vh;
    }
    .viewswitcher .viewswitcher__view {
      background-color: ${vars.colors.white};
      width: 100%;
      height: 100%;
    }
    .viewswitcher .viewswitcher__view:first-of-type {
      z-index: 2;
      animation: fadeInOut 8s infinite;
    }
    .viewswitcher .viewswitcher__view:last-of-type {
      position: absolute;
      top: 0;
      left: 0;
    }
    @keyframes fadeInOut {
      0%   { opacity:1; }
      37.5% { opacity: 1; }
      50%  { opacity:0; }
      87.5% { opacity:0; }
      100% { opacity:1; }
    }
  }



  @media (min-width: ${vars.breakpoints.d600}) {
    .project__bg {
      align-items: flex-start;
    }
    .project__bg img {
      max-width: 100vw;
    }



    .project__body section {
      margin-bottom: ${vars.blockspacing.d};
    }

    .project__bg img.image-bump {
      margin-top: 0;
    }

    .project__body {
      padding-top: ${vars.blockspacing.d};
    }

    .project__body .img-lead {
      margin-top: ${vars.blockspacing.d};
    }
    .project__body .img-only-d {
      display: block;
    }
    .project__body .img-only-m {
      display: none;
    }

    .project__body .marginoverride {
      margin-left: -${vars.sidemargins.d};
    }

    .img__phones--2up {
      margin-bottom: ${vars.blockspacing.d};
    }
    .img__phones--2up > * {
      width: 30vw;
      max-height: none;
    }
    .img__phones--2up.wide-images > * {
      width: 40vw;
    }
    .img__phones--2up.showall {
      align-items: flex-end;
      flex-flow: row;
    }

    .img__phones--2up > *:first-child {
      margin-right: 15vw;
    }
     .img__phones--2up.showall > *:fist-child {
       margin-right: 15vw;
     }
    .img__phones--2up.hidefirst > *:first-child {
      display: block;
    }
    .img__phones--2up.lastbump > *:last-of-type {
      margin-bottom: 12vw;
    }
    .img__phones--2up.firstbump > *:first-of-type {
      margin-bottom: 12vw;
    }

    .sidemargins .viewswitcher {
      width: 100vw;
      margin-left: -${vars.sidemargins.d};
    }

    .sidescroller {
      justify-content: center;
      overflow-x: hidden;
    }

    .project__header__content {
      flex-flow: column;
    }
    .project__header__content .type1 {
      margin-bottom: 1em;
    }
    .project__header__cta {
      margin-bottom: 25px;
    }

  }

  @media (min-width: 850px) {
    .project__header__cta {
      font-size: ${vars.fs.f2.d};
    }
  }

  @media (min-width: ${vars.breakpoints.d1000}) {
    .project__bg {
      align-items: center;
    }
    .project__bg img {
      max-height: 90vh;
      max-width: 70vw;
    }
    .proj__4up > * {
      max-width: calc(50% - 10px);
    }
  }

  @media (min-width: 1200px) {

    .img__phones--2up > * {
      width: 22vw;
    }

  }
`
