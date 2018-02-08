const html = require('choo/html')
const raw = require('choo/html/raw')

module.exports = function (state, emit) {

  return html`
    <div class="view--about sidemargins scrolling">
      <div class="about__gradient-overlay" style="opacity:${state.aboutFadeOpacity}"></div>
      <div class="about__top">
        <p class="type1"><b>Steve</b> creates digital infrastructure and spaces for participation. He operates between the disciplines of design, development and strategy to create liquid, holistic experiences. <span>${state.aboutConcept}</span></p>
        <p class="type1">${state.aboutImprovement}</p>
        <p class="type1">${raw(state.aboutFunfact)}</p>
      </div>
      <div class="about__2col">
        <div class="about__2col__left">
          <ul>
            <li><a href="mailto:chat@with.sk?subject=Hey Steve!">chat@with.sk</a></li>
            <li><a href="https://twitter.com/stephenkistner">Twitter</a></li>
            <li><a href="https://www.are.na/steve-k/channels">Are.na</a></li>
            <li>Resume by request</li>
          </ul>
        </div>
        <div class="about__2col__right">
          <h3>Currently</h3>
          <ul>
            <li>Product design at <b><a href="https://qz.com/">Quartz</a></b>, working on <i>new</i> news media experiences, like <a href="/objects">AR objects</a> for the Quartz app and a rad little site for the <a href="/bot-studio">Quartz Bot Studio</a>.</li>
            <li>Design strategy & front-end development for the <b><a href="https://debtcollective.org/">Debt Collective</a></b> (more to come)</li>
            <li><b>Reading: </b> <i>Seeing is Forgetting the Name of the Thing One Sees</i></li>
          </ul>

          <h3>Previously</h3>
          <ul>
            <li>Graphic Design BFA at <b>MICA</b>.</li>
            <li>Motion design at <b>Carbone Smolan Agency</b>, designing brand identities and experiences in the fourth dimension.</li>
          </ul>

          <h3>Possibly?</h3>
          <p><b>Steve</b> is open to collaborations, freelance projects, coffee meetings and just about anything. Feel free to <a href="mailto:chat@with.sk?subject=Hey Steve!">get in touch</a>.</p>
          <p>✌️ Thanks for visiting</p>
        </div>
      </div>
    </div>
  `
}
