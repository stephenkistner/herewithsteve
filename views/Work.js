const html = require('choo/html')
const raw = require('choo/html/raw')

module.exports = function (state, emit) {

  return html`
    <div class="view--work scrolling">
      <h1 class="scale-text sidemargins">${raw('STEVE HAS BEEN<br><i>HARD AT WORK</i>')}</h1>

<section>
      <a href="/objects"><div class="img__phones--2up lastbump hidefirst" style="margin-bottom: 2em;">
        <img src="/assets/img/objects-phone-messages.jpg" />
          <img src="/assets/img/objects-phone-berlinwall.jpg" />
      </div></a>

      <div class="work-desc">
      <p class="type1 sidemargins"><b>Objects,</b> an informative AR experience for the Quartz app </p>
        <p class="work-links sidemargins">
          <span class="linky"><a href="/objects">${raw('read about it&nbsp;→')}</a></span>
          <span class="linky"> <a href="https://itunes.apple.com/us/app/quartz/id1076683233?mt=8">${raw('download for iOS&nbsp;↗')}</a></span>
        </p>
      </div>
  </section>

  <section>
      <div class="sidemargins">
      <a href="/paradise"><img src="/assets/img/paradise-main.jpg" /></a>
      </div>

      <div class="work-desc">
      <p class="type1 sidemargins"><b><i>Paradise OS,</i></b> a dysfunctional desktop interface that tells a story through experience</p>
        <p class="work-links sidemargins">
          <span class="linky"><a href="/paradise">${raw('images here&nbsp;→')}</a></span>
          <span class="linky"> <a href="http://palm.computer/">${raw('palm.computer&nbsp;↗')}</a></span>
        </p>
      </div>
  </section>

  <section>
      <div class="sidemargins">
      <a href="/bot-studio"><img src="/assets/img/bot-studio-main.jpg" /></a>
      </div>

      <div class="work-desc">
      <p class="type1 sidemargins">A rad little website for the <b>Quartz Bot Studio</b></p>
        <p class="work-links sidemargins">
          <span class="linky"><a href="/bot-studio">${raw('images here&nbsp;→')}</a></span>
          <span class="linky"> <a href="https://bots.qz.com/">${raw('bots.qz.com&nbsp;↗')}</a></span>
        </p>
      </div>
  </section>

  <section>
      <p style="text-align: center;" class="type1 sidemargins">Still haven’t had enough?<br>Check out the <b><i>Museum of Dead Works</i></b></p>
      <p style="text-align: center;">✨  <a href="/museum">click here</a>  ✨</p>
  </section>

    </div>
  `
}
