const html = require('choo/html')
const raw = require('choo/html/raw')

module.exports = function(state) {

  return html`

  <div class="project__body">

  <img style="margin: 0 auto 2em auto; display: block;" src="/assets/img/construction.gif" />

  <p class="sidemargins" style="text-align: center; margin-bottom: 150px;">Full write-up coming soon. For now here's some eye candy</p>

  <div class="img__phones--2up firstbump showall">
    <img src="/assets/img/botstudio-mobile-home.jpg" />
    <img src="/assets/img/botstudio-mobile-article.jpg" />
  </div>

  <div class="sidemargins">
  <img style="width: 100%;" src="/assets/img/bot-studio-article.gif" />
  </div>

  <h2 style="text-align:center;">⚠️ Process shotzzz ⚠️</h2>

  <div class="sidemargins proj__4up">
  <img src="/assets/img/bot-studio-process1.gif" />
  <img src="/assets/img/bot-studio-process2.gif" />
  <img src="/assets/img/bot-studio-process3.gif" />
  <img src="/assets/img/bot-studio-process4.gif" />
  </div>

  </div>

  `

}
