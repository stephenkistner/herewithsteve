var vars = require('./vars.js')


module.exports = `
@font-face {
  font-family: 'Sneak';
  src: url('/assets/Sneak-Regular.eot'); /* IE9 Compat Modes */
  src: url('/assets/Sneak-Regular.eot#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/Sneak-Regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/Sneak-Regular.woff') format('woff'); /* Pretty Modern Browsers */
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Sneak';
  src: url('/assets/Sneak-Regular-Italic.eot'); /* IE9 Compat Modes */
  src: url('/assets/Sneak-Regular-Italic.eot#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/Sneak-Regular-Italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/Sneak-Regular-Italic.woff') format('woff'); /* Pretty Modern Browsers */
  font-weight: normal;
  font-style: italic;
}
@font-face {
  font-family: 'Sneak';
  src: url('/assets/Sneak-Bold.eot'); /* IE9 Compat Modes */
  src: url('/assets/Sneak-Bold.eot#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/Sneak-Bold.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/Sneak-Bold.woff') format('woff'); /* Pretty Modern Browsers */
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: 'Sneak';
  src: url('/assets/Sneak-Bold-Italic.eot'); /* IE9 Compat Modes */
  src: url('/assets/Sneak-Bold-Italic.eot#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/Sneak-Bold-Italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/Sneak-Bold-Italic.woff') format('woff'); /* Pretty Modern Browsers */
  font-weight: bold;
  font-style: italic;
}

html {
  font-size: 10px;
  font-family: 'Sneak', Arial, sans-serif;
  color: ${vars.colors.black};
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

body {
  width: 100%;
  height: 100%;
  background-color: ${vars.colors.white};
}

::selection {
  background: rgba(43,43,43,.996);
  color: #FFA5ED;
}

body::-webkit-scrollbar {
    width: 10px;
}

body::-webkit-scrollbar-track {
    -webkit-box-shadow: none;
    background-color: white;
    border-left: 1px solid $2b2b2b;
}

body::-webkit-scrollbar-thumb {
  background-color: #2b2b2b;
}

body {
  overflow-x: hidden;
}

#load-overlay {
  will-change: transform;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,ffffff+100&0+0,1+20 */
background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 20%,rgba(255,255,255,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 20%,rgba(255,255,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 130vh;
z-index: 9998;
transform: translateY(102vh);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
border-radius: 10vw;
}

#load-overlay p {
  width: 100%;
  margin-top: 10vh;
}

.load-overlay-in {
  animation: loaderIn .3s ease-out 1 normal forwards;
}

.load-overlay-out {
  animation: loaderOut .3s ease-in 1 normal forwards;
}

@keyframes loaderIn {
  0% { transform: translateY(102vh); }
  100% { transform: translateY(-20vh); }
}
@keyframes loaderOut {
  0% { transform: translateY(-20vh); }
  100% { transform: translateY(102vh); }
}

.loader-loading {
  opacity: 0;
  animation: loadingMsg .2s ease 3s 1 normal forwards;
}
@keyframes loadingMsg {
  0% { opacity: 0; }
  100% { opacity: 1; }
}


.type1 {
  font-size: ${vars.fs.f1.m};
  letter-spacing: -.03em;
}
.type2 {
  font-size: ${vars.fs.f2.m};
}
.type3 {
  font-size: ${vars.fs.f3.m};
}
.sidemargins {
  margin-left: ${vars.sidemargins.m};
  margin-right: ${vars.sidemargins.m};
}

p, li, .img-inline {
  margin-bottom: 1.5em;
  line-height: 1.5;
}

p.type1 {
  line-height: 1.3;
  margin-bottom: 1em;
}

.type1 a {
  text-decoration: none;
  box-shadow: inset 0 0px 0 white, inset 0 -.05em 0 black;
}

.scale-text {
  font-size: 7.5vh;
  letter-spacing: -.05em;
  line-height: 1;
}

h2 {
  font-size: ${vars.fs.f1.m};
  margin-bottom: .4em;
  margin-top: 2em;
}

h3 {
  font-size: ${vars.fs.f2.d};
  margin-bottom: .5em;
}

a {
  color: inherit;
}
a:hover {
  font-style: italic;
}

ul {
  list-style: none;
}

ul li:before {
  content: '→';
  padding-right: 1em;
}

figure {
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;
  position: relative;
  margin-bottom: 2em;
}

figure img {
  max-width: 100%;
}

figcaption {
  font-size: ${vars.fs.f3.m};
  color: ${vars.colors.graytext};
  margin-left: ${vars.sidemargins.m};
  margin-right: ${vars.sidemargins.m};
  margin-top: .5em;
  max-width: 750px;
  position: relative;
}

figcaption:before {
  content: '↖';
  padding-right: .37em;
  margin-left: -1em;
}

.view--default {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.view--default .type1 {
  max-width: 1200px;
}


.inline-cta {
  margin-left: 1em;
  vertical-align: middle;
  display: inline-block;
}

.inline-cta-margin {
  margin-right: .5em;
}
.inline-cta-margin + .inline-cta {
  margin-left: 0;
}
.cta-logo {
  height: 1.2em;
  vertical-align: middle;
  margin-right: .3em;
}

.img-animate {
  transform-origin: center;
}

.img-animate-in {
  opacity: 0;
  transform: scale(.95) translateY(50px);
  animation: imgComeIn .5s ease .5s 1 normal forwards;
}

@keyframes imgComeIn {
  0% { opacity: 0; transform: scale(.95) translateY(50px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}

.img-intext {
  height: 1.2em;
  margin: 0 .1em;
  vertical-align:middle;
}

@media (min-width: ${vars.breakpoints.d600}) {
  .type1 {
    font-size: ${vars.fs.f1.d};
  }
  .type2 {
    font-size: ${vars.fs.f2.d};
  }
  .type3 {
    font-size: ${vars.fs.f3.d};
  }
  .sidemargins {
    margin-left: ${vars.sidemargins.d};
    margin-right: ${vars.sidemargins.d};
  }
  .big-bottom-margin {
    margin-bottom: 130px;
  }

  .scale-text {
    font-size: 8vw;
  }

  h2 {
    font-size: ${vars.fs.f1.d};
    margin-bottom: .3em;
  }

  h3 {
    font-size: ${vars.fs.f1.m};
  }

  ul li:before {
    padding-right: 1.27em;
    margin-left: -2em;
  }

  figcaption {
    font-size: ${vars.fs.f3.d};
    margin-left: auto;
    margin-right: auto;
  }

  .hide-rick {
    animation: imgComeIn 0 ease 3.5s 1 normal forwards;
  }
  @keyframes byeRick {
    0% { opacity: 1; }
    100% { opacity: 0; }

  }


}

@media (min-width: ${vars.breakpoints.d1000}) {
  .load-overlay-in {
    animation: loaderIn .22s ease-out 1 normal forwards;
  }

  .load-overlay-out {
    animation: loaderOut .22s ease-in 1 normal forwards;
  }
}

`
